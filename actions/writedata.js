
const marks_data = (data,regno) =>{
     
            let marks= [
                regno,
                data[14],
                data[20],
                data[26],
                data[32],
                data[38],
                data[44],
                data[50],
            ]
            return marks;
}

const errdata = (regno) =>{
    let blank_marks =[
        regno,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]
    return blank_marks;
}
module.exports = {marks_data,errdata};
