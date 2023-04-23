const fsExtra = require('fs-extra');
const xlsx = require("xlsx");
const puppeteer = require("puppeteer");
const scrape = require("./scrape");
const writedata = require("./writedata");

const manageFiles = async(req,res)=>{
    if (!req.files ) {
        res.status(404).json({Message:"Pls give all inputs"})
    }else{
        let info ={
            file : req.files.foo,
        };
        
        await info.file.mv(__dirname+"./uploads/FILE.xlsx",(err)=>{
            if(err){
                console.log(err);
            }
            else{
                
                const workbook = xlsx.readFile(__dirname+"/../uploads/FILE.xlsx", {cellDates: true, dateNF:"dd/mm/yy"});
                const worksheet =workbook.Sheets[workbook.SheetNames[0]];
                var sheet_name_list = workbook.SheetNames;

                let count = [];
                
                for (var sheetIndex = 0; sheetIndex < sheet_name_list.length; sheetIndex++) {
                    var worksheet_count = workbook.Sheets[sheet_name_list[sheetIndex]];
                    var range = xlsx.utils.decode_range(worksheet_count['!ref']);
                    var num_rows = range.e.r - range.s.r + 1;
                    count.push({
                        data_count: num_rows
                    });
                };
              
                let excel_dataarr = [] ;
                let regno,data;
                let flag = 1;

                ( async () => {
                const recur = async () => {
                    for (let i = 2; i <= count[0].data_count; i++) {
                        
                        let regno_xl = worksheet[`A${i}`].v;
                        regno = regno_xl.toString()                        
                        if(regno_xl != undefined && regno.length== 9){
                            
                            
                           
                                data = await scrape(regno);
                                let dataarr = await writedata.marks_data(data,regno);
                                if(flag){
                                    excel_dataarr.push(["Reg No", data[11],data[17],data[23],data[29],data[35],data[41],data[47],]);
                                    flag =0;
                                }
                                excel_dataarr.push(dataarr);
                                console.log(`${i-1} is DONE..`); 
                               
                            // else{
                            //     let null_dataarr=await writedata("noData",info.class,regno,dob)
                            //     continue;
                            // }
                        }      
                        else{
                            let blank_res = writedata.errdata(regno)
                            excel_dataarr.push(blank_res);
                        }         
                    }
                }
                await recur()
                
              
                var excelOutput = xlsx.utils.aoa_to_sheet(excel_dataarr)
               
                let OutputExcel = xlsx.utils.book_new()
                xlsx.utils.book_append_sheet(OutputExcel, excelOutput);
                xlsx.writeFile(OutputExcel,"Finaloutput.xlsx")
                console.log("DONE....");
                res.redirect("/Download")
                
                })();  
            
                // fsExtra.emptyDir(__dirname+"/../uploads/",(err)=>{
                //     if(err){
                //         console.log(err);
                //     }
                //     else{
                //         console.log("File deleted");
                //     }
                // });
            }
        });      
    }
}


module.exports = manageFiles;