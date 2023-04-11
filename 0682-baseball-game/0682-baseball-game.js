/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    let record = [];
      
    for(const op of operations) {
        switch(op) {
            case '+':
                record.push(record.at(-1) + record.at(-2));
                break;
            case 'D':
                record.push(record.at(-1) * 2);
                break;
            case 'C':
                record.pop();
                break;
            default:
                record.push(parseInt(op));
        }
    }
    
    return record.reduce((total, current) => total + current, 0);
    
    
//     let record = [];
    
//     for(let i = 0; i < operations.length; i++) {
//         if(!isNaN(parseInt(operations[i]))) {
//             record.push(parseInt(operations[i]));
//         } else if (operations[i] === '+') {
//             let sum = record[record.length - 1] + record[record.length - 2];
//             record.push(sum);
//         } else if (operations[i] === 'D') {
//             record.push(record[record.length - 1] * 2);
//         } else {
//             record.pop();
//         }
//     }
    
//     return record.reduce((total, current) => total + current, 0);
};