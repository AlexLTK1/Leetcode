/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let set = new Set(Array.from({length: nums.length}, (v,i) => i+1));
    for (let i = 0; i < nums.length; i++) {
        set.delete(nums[i]);
    } return Array.from(set.values());
    
};

findDisappearedNumbers([1,2,2,3]);
let nums = [1,2,2,3];
console.log(Array.from({length: nums.length}, k => k+2));