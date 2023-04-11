/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    
    let record = [];
    
    for(let i = 0; i < operations.length; i++) {
        if(!isNaN(parseInt(operations[i]))) {
            record.push(parseInt(operations[i]));
        } else if (operations[i] === '+') {
            let sum = record[record.length - 1] + record[record.length - 2];
            record.push(sum);
        } else if (operations[i] === 'D') {
            record.push(parseInt(record[record.length - 1]) * 2);
        } else {
            record.pop();
        }
        console.log(record)
    }
    
    return record.reduce((total, current) => total + current, 0);
};