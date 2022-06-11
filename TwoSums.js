//hash table method

const twoSum = function(nums, target) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]
        if (hash[difference]) {
            return [nums.indexOf(difference), i]
        } else {
            hash[nums[i]] = true
        }
    }
    return [];
};