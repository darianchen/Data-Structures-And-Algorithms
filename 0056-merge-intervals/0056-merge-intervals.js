/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort(compareFn);
    let mergedIntervals = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++){
        let currentInterval = intervals[i];
        let lastInterval = mergedIntervals[mergedIntervals.length - 1];
        
        if(currentInterval[0] <= lastInterval[1]){
            lastInterval[1] = Math.max(lastInterval[1], currentInterval[1]);
        } else{
            mergedIntervals.push(currentInterval);
        }
    }
    
    return mergedIntervals;
};


function compareFn(a,b) {
    if(a[0] < b[0]) {
        return -1;
    } else if(a[0] > b[0]) {
        return 1;
    } else {
        return 0;
    }
}