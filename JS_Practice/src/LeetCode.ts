export class LeetCode{
    
    public helloWorld(){
        console.log("hello world -- new ");
    }

    public twoSum(nums: number[], target: number): number[] {
    
        let numMap = new Map<number, number>();
    
        for(let i=0; i<nums.length; i++){
            if(numMap.get(target-nums[i])){
                return [numMap.get(target-nums[i]) ?? 0, i];
            }
            numMap.set(nums[i], i);
        }
        return [-1, -1];
    
    };


    public isPalindrome(x: number): boolean {
    
        let numArr = x.toString().split('');

        for(let i=0; i<numArr.length/2; i++){
            if(numArr[i] != numArr[numArr.length-1 -i]){
                return false;
            }
        }
        
        return true;
    };

    
}