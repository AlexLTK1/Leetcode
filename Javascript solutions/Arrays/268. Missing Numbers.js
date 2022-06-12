/**
 * @param {number[]} nums
 * @return {number}
 */

// create a constant that sums up all the numbers from 0 to n,
// then subtracts all the numbers in the given array.


 var missingNumber = function(nums) {
    let result = 0;

    for ( i=0; i <= nums.length; i++) {
        result += i;
        if (i < nums.length) {
            result -= nums[i];
        }
    }
    return result;
};

// Time Complexity: O(n) because we go through the whole array once
// Space Complexity: O(1) because we just creating a constant variable