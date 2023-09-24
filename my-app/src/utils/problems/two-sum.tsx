import assert from 'assert';
import { Problem } from '../type/problem';

const starterCodeTwoSum = `function twoSum(nums,target){
    // write your code here
} ;`;
const handlerTwoSum =  (fn:any)=>
{
    try{
       const nums=[
        [2,7,11,15],
        [3,2,4],
        [3,3], ];
        
      const targets =[9,6,6];
      const answer =[
        [0,1],
        [1,2],
        [0,1],
      ];
      for(let i=0; i<nums.length; i++)
      {
       const result  = fn(nums[i],targets[i]);
       assert.deepStrictEqual(result,answer[i]);
      }
      return true;

    } catch(error:any) {
        console.log("twoSum handler function error")
      throw new Error(error);
    }
}
export const twoSum : Problem=
{
    id: 'two-sum',
    title: '1.two-sum',
    problemStatement: ` <p className='text-white text-sm'>
    Given an array of integers <code>nums</code> an an integer <code>target</code>, return <em>indices of the two numbers such that they add up to</em> <code>target</code>.
  </p>
 <p className='mt-3'> You can return thr answer in any order.</p>`,
    examples: [
        {
            id : 1,
            inputText :"nums=[2,7,11,15], target= 9",
            outputText : "[0,1]",
            explanation :"Because nums[1] + nums[2]==6 , we return [0,1].",
        },
        {
            id : 2,
            inputText :"nums=[3,2,4], target= 6",
            outputText : "[1,2]",
            explanation :"Because nums[1] + nums[2]==6 , we return [1,2].",
        },
        {
            id : 3,
            inputText :"nums=[3,3], target= 6",
            outputText : "[0,1]",
            explanation :"Because nums[1] + nums[2]==6 , we return [0,1].",
        },
    ],
    constraints: `<li className='mt-2'>
    <code>2 ≤ nums.length ≤ 10 </code>
</li>

<li className='mt-2'>
    <code>-10 ≤ nums,[i] ≤ 10</code>
</li>

<li className='mt-2'>
    <code>-10 ≤ target ≤ 10</code>
</li>
<li className='mt-2 text-sm'>
    <strong>Only one valid answer exists.</strong>
</li>`,
    handlerFunction: handlerTwoSum ,
    starterCode:  starterCodeTwoSum,
    order: 1,
    starterFunctionName: 'function twoSum(',
}