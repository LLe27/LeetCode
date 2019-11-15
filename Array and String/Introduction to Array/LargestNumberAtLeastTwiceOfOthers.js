// In a given integer array nums, there is always exactly one largest element.

// Find whether the largest element in the array is at least twice as much as every other number in the array.

// If it is, return the index of the largest element, otherwise return -1.

// Example 1:
// Input: nums = [3, 6, 1, 0]
// Output: 1
// Explanation: 6 is the largest integer, and for every other number in the array x,
// 6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: -1
// Explanation: 4 isn't at least as big as twice the value of 3, so we return -1.

// Note:
// - nums will have a length in the range [1, 50].
// - Every nums[i] will be an integer in the range [0, 99].

// Hint #1:
// Scan through the array to find the unique largest element `m`, keeping track of it's index `maxIndex`. Scan through the array again. If we find some `x != m` with `m < 2*x`, we should return `-1`. Otherwise, we should return `maxIndex`.

/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let largest = 0;
    let secondLargest = 1;

    // Return value if theres only one
    if (nums.length == 1) return 0;

    // Resolve base values
    if (nums[secondLargest] > nums[largest]) {
        let temp = largest;
        largest = secondLargest;
        secondLargest = temp;
    }

    // Assumptions are length of nums is greater then two and all
    // base cases have not been satisfied.
    for (var i = 2; i < nums.length; i++) {
        if (nums[i] > nums[largest]) {
            let temp = largest;
            largest = i;
            secondLargest = temp;
        } else if (nums[i] > nums[secondLargest]) {
            secondLargest = i;
        }
    }

    return (nums[largest] >= (nums[secondLargest] * 2)) ? largest : -1;
};