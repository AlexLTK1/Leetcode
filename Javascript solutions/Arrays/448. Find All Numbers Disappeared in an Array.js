/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
    let unseen = [];
    for (let i = 1; i < nums.length + 1; i++) {
        if (!nums.includes(i)) {
            unseen.push(i);
        }
    } return unseen;
    
};

findDisappearedNumbers([1,2,2,3]);