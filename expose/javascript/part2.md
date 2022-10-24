1. Output is 3. We used var to declare the variable i so that means it has a function scope and
   thus can be accessed throughout the whole function. Because there are 3 elements in the prices array, the for loop will terminate when i is 3.

2. Output is 150. We used var to declare the variable discountedPrice so it has a function scope.
   The last iteration in which discountedPrice is changed is when dealing with the 3rd element in the prices array. 300 * 0.5 = 150 so discount Price stores this value which then gets outputted.
   
3. Output is 150. Again, we used var to declare the variable finalPrice so it has function scope. The
   last iteration in which finalPrice is changed is when dealing with the 3rd element in the prices array. Math.round(discountedPrice * 100) / 100 = 150.

4. Output is [50, 100, 150]. The function returns an array of final pricess. For each iteration in the
   for loop, the final price which was calculated after the discount is taken into account, is pushed into the discounted array which is then returned after the conclusion of the for loop.

5. Error occurs. We used let to declare the variable i in the for loop so it only has block scope. This
   means that i can only be accessed inside the for loop and not outside which was what we tried to do.

6. Error occurs. We used let to declare the variable discountedPrice in the for loop so it only has
   block scope. This means that discountedPrice can only be accessed inside the for loop and not outside which was what we tried to do.

7. Output is 150. We used let to declare the variable finalPrice at the start of the function, so the
   scope for this variable is the entire function. The last iteration in which finalPrice is changed is when dealing with the 3rd element in the prices array. Math.round(discountedPrice * 100) / 100 = 150.

8. Output is [50, 100, 150]. The function returns an array of discounted pricess. The discounted array
   is declared using let at the start of the function so the entire function is its scope. For each iteration in the for loop, the discounted price which was calculated after the discount is taken into account, is pushed into the discounted array which is then returned after the conclusion of the for loop. No errors occured because we did not access any variables out of scope.

9.  Error occurs. We used let to declare the variable i in the for loop so it only has block scope. This
    means that i can only be accessed inside the for loop and not outside which was what we tried to do.

10. Output is 3. At the start of the function, we used const to declare the variable length and store
    the length of the prices array in it. This means that its scope is the entire function. We did not attempt to change the value of the length variable so no errors occurred.

11. Output is [50, 100, 150]. The function returns an array of discounted pricess. The discounted array
    is declared using const at the start of the function so the entire function is its scope. For each iteration in the for loop, the discounted price which was calculated after the discount is taken into account, is pushed into the discounted array. New elements are allowed to be pushed into the const array because it does not reassign the discounted variable. The discounted array is then returned after the conclusion of the for loop. No errors occured because we did not access any variables out of scope and we did not reassign the variable.