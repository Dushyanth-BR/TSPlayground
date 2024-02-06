"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LeetCode = void 0;
class LeetCode {
    helloWorld() {
        console.log("hello world -- new ");
    }
    twoSum(nums, target) {
        let numMap = new Map();
        for (let i = 0; i < nums.length; i++) {
            if (numMap.get(target - nums[i])) {
                return [numMap.get(target - nums[i]) ?? 0, i];
            }
            numMap.set(nums[i], i);
        }
        return [-1, -1];
    }
    ;
    isPalindrome(x) {
        let numArr = x.toString().split('');
        for (let i = 0; i < numArr.length / 2; i++) {
            if (numArr[i] != numArr[numArr.length - 1 - i]) {
                return false;
            }
        }
        return true;
    }
    ;
}
exports.LeetCode = LeetCode;
//# sourceMappingURL=LeetCode.js.map