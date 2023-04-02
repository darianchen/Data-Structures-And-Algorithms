/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    
    intervals.push(newInterval);
    intervals.sort(sortIntervals); // add newInterval and sort intervals
    
    let mergedIntervals = [intervals[0]]; // create mergedIntervals and add first interval
    
    for(let i = 0; i < intervals.length; i++){
        let currInterval = intervals[i];
        let prevInterval = mergedIntervals[mergedIntervals.length - 1];
        
        if(prevInterval[1] >= currInterval[0]) {
            prevInterval[1] = Math.max(prevInterval[1], currInterval[1]); // if intervals touch
            // reassign prev second num if curr second num is greater
        } else {
            mergedIntervals.push(currInterval); // if intervals don't touch, push
        }
    }
    return mergedIntervals;
};

function sortIntervals(a,b) {
    if(a[0] < b[0]) {
        return -1;
    } else if(a[0] > b[0]) {
        return 1;
    } else {
        0
    }
}