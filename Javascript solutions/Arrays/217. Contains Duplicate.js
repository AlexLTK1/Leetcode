/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (hash[nums[i]] === undefined) {
            hash[nums[i]] = true; 
        } else {
            return true;
        }
    } return false;
};

// Time Complexity: O(n) because we go through the whole array once and
// Space Complexity: O(n) because in worst case secenario we have to store the whole array once