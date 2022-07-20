1 . Difference between “ == “ and “ === “ operators?
-> if the given values are same then ''=='' is true or false
-> if the values and the data type are same then "===" is true or false

Example :
    a = 1;
    b = "1";
    console.log(a == b);
    the values are same Number 1. 

    a = "1";
    b = "1";
    console.log(a === b);
    the values and datatypes are strings "1"


2 . What is the spread operator?
-> it takes the iterables like [arrays, strings, maps]
    and then seperate the each element.
->  the Symbol of spread operator is (...) 3 dots
    it can add an elemet inside the arrays
 
 Example :
    x = [1,2,3,4,5]
    console.log(...x);
        result = 1 2 3 4 5

    y = [10,12,14, ...x]
    console.log(y);

    result = 10 12 14 1 2 3 4 5 

3 .  What are the differences between var, let and const?
-> let,const and var are the global variables   
-> var - is a functional scope variable 
-> let and const are the block scope variable 
    and these are introduced in javascript in 2015 in ES6 version
-> var variable can be redeclared but let not be redeclared    


4 . What is execution context?
->  Everything in javascript happend inside the 
    "execution constant" 
->  it have two components
    (i) . Memory
    (ii). code
    -> it first allocated in the Memory as a variables and function
    -> then it will executive the part of the code from line by line
       bcause its a single threaded 
    -> the execution context is a whole "environment" where the
       function  execution and contains variable scope. 
       
5.  What is meant by first class functions?
->  One of the most dynamic features of JavaScript is that 
    it has first-class functions
->  that functions are treated like any other first-class object 
     they can be stored in variables, passed around, 
     returned from other functions, and even hold their own properties.

    Example :
     function classes() {
        console.log('Go for Class');
      }    
      document.addEventListener('click' classes)