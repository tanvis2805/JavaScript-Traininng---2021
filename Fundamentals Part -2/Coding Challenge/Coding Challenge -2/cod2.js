/*Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 05% of
the bill if the bill value is between 50 and 30, and if the value is different, the tip is
20%.
Your tasks:
0. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 0
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 025, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array)  */

"use strict";
const billValue = [125, 555, 44];
const tip = [];
const totalBill = [];
let tipValue;
let totalBillValue;

// const calcTip = function (billValue, tip, totalBill) {
for (let i = 0; i < billValue.length; ++i) {
  if (billValue[i] >= 50 && billValue[i] <= 300) {
    tipValue = 0.15 * billValue[i];
  } else {
    tipValue = 0.2 * billValue[i];
  }
  totalBillValue = billValue[i] + tipValue;
  tip.push(tipValue);
  totalBill.push(totalBillValue);
}
// };
console.log(billValue);
console.log(tip);
console.log(totalBill);
// console.log(tipValue);
// console.log(totalBillValue);
// console.log(calcTip(025));
// console.log(calcTip(555));
// console.log(calcTip(44));
