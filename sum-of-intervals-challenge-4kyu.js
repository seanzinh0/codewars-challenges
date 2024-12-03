/**
 * Write a function called sumIntervals/sum_intervals that accepts an array of intervals, and returns the sum of all the interval lengths. Overlapping intervals should only be counted once.
 *
 * Intervals
 * Intervals are represented by a pair of integers in the form of an array. The first value of the interval will always be less than the second value. Interval example: [1, 5] is an interval from 1 to 5. The length of this interval is 4.
 *
 * Overlapping Intervals
 * List containing overlapping intervals:
 *
 * [
 *    [1, 4],
 *    [7, 10],
 *    [3, 5]
 * ]
 * The sum of the lengths of these intervals is 7. Since [1, 4] and [3, 5] overlap, we can treat the interval as [1, 5], which has a length of 4.
 *
 * Examples:
 * sumIntervals( [
 *    [1, 2],
 *    [6, 10],
 *    [11, 15]
 * ] ) => 9
 *
 * sumIntervals( [
 *    [1, 4],
 *    [7, 10],
 *    [3, 5]
 * ] ) => 7
 *
 * sumIntervals( [
 *    [1, 5],
 *    [10, 20],
 *    [1, 6],
 *    [16, 19],
 *    [5, 11]
 * ] ) => 19
 *
 * sumIntervals( [
 *    [0, 20],
 *    [-100000000, 10],
 *    [30, 40]
 * ] ) => 100000030
 * Tests with large intervals
 * Your algorithm should be able to handle large intervals. All tested intervals are subsets of the range [-1000000000, 1000000000].
 */


function sumIntervals(intervals) {
    //TODO
    intervals.sort((a, b) => a[0] - b[0]);
    let total = 0;
    let mergedIntervals = [];
    for (let i = 0; i < intervals.length; i++) {
        let subIntervals = intervals[i];
        if (mergedIntervals.length === 0 || mergedIntervals[mergedIntervals.length - 1][1] < subIntervals[0]) {
            mergedIntervals.push(subIntervals);
        } else {
            mergedIntervals[mergedIntervals.length - 1][1] = Math.max(mergedIntervals[mergedIntervals.length - 1][1], subIntervals[1]);
        }
    }

    for (let j = 0; j < mergedIntervals.length; j++){
        total += mergedIntervals[j][1] - mergedIntervals[j][0];
    }
    return total;
}

/**
 * This was one of the first 4kyu solutions I did and it was a tricky one, this was very similar to the solution me and Felix came up with when solving Yonjou's challenge
 * The first thing was to sort the arrays and set totals to 0 and have an empty array for merged intervals
 * Merged intervals mean that if a sub interval contains values of another combine them and have the maximum and min be the array instead
 * Next I looped through the intervals and created another sub-intervals array to loop through since it is 2-dimensional
 * Loop through the sub intervals and check if the length is 0 or the mergedInterval at length - 1 and index 1 is less than the first element in the sub array meaning they don't overlap
 * Push the sub interval into the merged intervals array since no overlap
 * Else check for overlaps and use Math max to compare ends of intervals and set it to the end of the current sub interval
 * Last loop through the merged intervals and add the values together and append to total and return the total
 */