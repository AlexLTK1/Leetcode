/**
 * @param {number[]} nums
 * @return {number[]}
 */

// create a new set with the length of nums,
// then we delete every nums from the given array,
// whats left is our final result.

 var findDisappearedNumbers = function(nums) {
    let set = new Set(Array.from({length: nums.length}, (v,i) => i+1));
    for (let i = 0; i < nums.length; i++) {
        set.delete(nums[i]);
    } return Array.from(set.values());
    
    
};