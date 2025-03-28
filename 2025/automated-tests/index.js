// f { describe, it } from "mocha";



console.log("Hello this is my Node.js script running.")

function pow(x,n){
    let result = 1;

    for (let i = 0; i < n; i++) {
      result *= x;
    }
  
    return result;
}

// describe("pow", function(){
//     function makeTest(x) {
//         let expected = x * x * x;
//         it(`${x} in the power 3 is ${expected}`, function() {
//           assert.equal(pow(x, 3), expected);
//         });
//       }
    
//       for (let x = 1; x <= 5; x++) {
//         makeTest(x);
//       }
// })
