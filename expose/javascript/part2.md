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

12. A. student.name
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]

13. A. 32   Number 2 will be converted into a string and appended to 3
    B. 1    String 3 is converted to a number, 3 - 2 = 1
    C. 3    null is converted to number 0, 3 + 0 = 3
    D. 3null    null is converted to a string and appended to string 3
    E. 4    true is converted to number 1, 1 + 3 = 4
    F. 0    false and null are both converted to number 0, 0 + 0 = 0
    G. 3undefined   undefined is converted to a string and appended to string 3
    H. NaN  undefined being converted to a number gives us NaN

14. A. True. String 2 is converted to a number which is > 1
    B. False. Both are strings. First letters of the strings are compared first. The '1' in '12' is less than the '2' in '2', so '2' > '12'
    C. True. String is converted to number 2 which is equal to 2
    D. False. Operands are of different type so are not equal
    E. False. True is converted to number 1, and 1 != 2
    F. True. Boolean(2) gives us true and since both are boolean trues, true === Boolean(2)

15. The === is a strict equality. If the two operands are of different
    types, then it will always return false. This is not the case with the equality operator ==. If the two operands are different, == will convert one of them so that both are of the same type before doing a comparison.

17. The function returns the array [2, 4, 6]. We passed in the original
    array [1, 2, 3] and the doSomething function as arguments for the modifyArray function. In the for loop which iterates length of the array time, we push the return value from the doSomething function into the new array. The doSomething function basically takes in a number and multiplies it by 2. It does this for each of the element in the original array so the new array's elements are double that of the original's.

19. 1
    4
    3
    2