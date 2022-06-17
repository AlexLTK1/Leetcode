/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    // create a set, delete if num is in the set, add otherwise.
    // then the only digit left is the single num.
    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            set.delete(num);
        } else {
            set.add(num);
        }
    } return Array.from(set)[0];
};