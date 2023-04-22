// let datas =[
//     'University of Madras',
//     'Result of November 2022 Examination. Published on 21-03-2023',
//     'Name : HARIVIGNESH M',
//     'Register Number : 212002868',
//     'DOB : 08/08/2002',
//     'Subject Code',
//     'UE',
//     'IA',
//     'Total',
//     'Result',
//     'Remark',
//     'SE251',
//     '060',
//     '040',
//     '100',
//     'PASS',
//     '',
//     'SE252',
//     '060',
//     '040',
//     '100',
//     'PASS',
//     '',
//     'SE25B',
//     '044',
//     '025',
//     '069',
//     'PASS',
//     '',
//     'SE25C',
//     '059',
//     '025',
//     '084',
//     'PASS',
//     '',
//     'SU25A',
//     '046',
//     '025',
//     '071',
//     'PASS',
//     '',
//     'SZ45A',
//     '059',
//     '025',
//     '084',
//     'PASS',
//     '',
//     'VAE5Q',
//     '059',
//     '025',
//     '084',
//     'PASS',
//     '',
//     'AAA',
//     '-Absent',
//     '**RA',
//     '- REAPPEAR(from 2009-10 Batch)',
//     'DISCLAIMER : The results published through websites are provisional only. We are not responsible for any inadvertent error that may have been crept in the data/result being published on the websites.This is being published on the websites just for immediate information for examinees.The final Marksheets issued by the University of Madras should only be treated authentic and final in this regard.',
//     'REVALUATION',
//     'Candidates admitted from the academic year 2021-2022 for M.A./M.Sc/M.Com/ M.S.W./M.A.[LM]/MBA/M.A.[HRM]/M.Sc.[IT]/ MCA/M.Sc.[CS] courses, from 2018-2019 for M.Sc. (CST), M.A.(Natya) (Five year integrated) course and from 2020-2021 and UG degree courses can apply for revaluation through concerned college from 23.03.2023 to 29-03-2023. Revaluation fee is fixed 
//   Rs. 1000/-per paper as per the University norms.',
//     'RE-TOTALLING',
//     'UG Candidates can apply for re-totalling through online from 23-03-203 to 29-03-2023 (www.unom.ac.in) The computer generated application duly signed by the candidate should be submitted along with a demand draft of Rs.300/- each subject drawn in favour of “The Registrar, University of Madras” on or before 30-03-2023.'
//   ]


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
