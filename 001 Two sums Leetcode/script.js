"use strict";
class getIndices{
    constructor(intArray, intTarget) {
        this.nums = intArray;
        this.target = intTarget;
        for (let i = 0; i < this.nums.length; i++) {
        /*  The first of the three expressions executes only once
            In each iteration, the second checks the value of i and 
            compare it with the given condition. If condition  
            satisfies, control goes to the third expression and
            executes it before going inside the code block until
            the second expression does not satisfy.
        */
            for (let j = i + 1; j < this.nums.length; j++) {
                if(this.nums[i] != this.nums[j] && this.nums[i] + this.nums[j] === this.target){
                /*  The logical AND (&&) expression is used here to make sure 
                    that the both conditions in the if block must be true
                */
                    document.write(i + ', ' + j);
                }    
            }
        }
      }
}


const index = new getIndices([1, 7, 5, 2, 3], 4);

