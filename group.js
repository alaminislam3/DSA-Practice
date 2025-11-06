/* Scenario Based Activity - Grouping Data 2.7     */
/* Count the latter dynamically */

/*  */
const surveyResponse = [
    'A',
    'C',
    'A',
    'D',
    'E',
    'D',
    'A',
    'C',
    'E',
    'D'
]

const count =  surveyResponse.reduce((table, response)=> {
    if(table[response]){
        table[response] = table[response] + 1
    } else {
        table[response] = 1
    }

    return table
},{})
 console.log(count)


// 
// const count = surveyResponse.reduce((table,response) => {
//     if(table[response]){
//         table[response] = table[response] + 1;
//     } else {
//         table[response] = 1
//     }
//    return table;
// },{})

// console.log(count)