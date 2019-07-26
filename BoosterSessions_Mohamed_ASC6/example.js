/*

Variable and Function Scope Lesson

Review:

The scope (or where it can be accessed) of a variable depends on where it is used in the code.

There are 2 types of scopes: Global and local scopes. 

Global Scope is if a variable is defined outside of a function. 

Local scopes (note I'm talking about multiple local scopes) depends on if a variable is defined in a function

If a variable named box is defined in a function called name(), it is a local variable and 
that variable only exists in the function name().

However, if a variable named box is defined in a global scope then it can be (not always) accessed in a function called name().

Question: Now, what if we have a variable named box in global scope and a local variable named box in the function name()
and we try to access the variable box? Which variable box will we access?

Answer: If we are in the function name()'s local scope then we would access the local variable box
and then when we leave the function name() we would access the global variable box in the global scope.

Now what if we define a function named nameThree() inside of name() and call it inside of name(). nameThree() has a local variable named box.

Question: What if we called the function name()? Would we access the local variable named box in nameThree()?

Answer: Yes! When we call the function nameThree() we would be able to access the local variable named box in nameThree()'s local scope. 
We would also be able to access the local variable named box in name()'s scope after we have finished executing the code from nameThree().
This means once nameThree()'s code finishes executing we can't have access to nameThree()'s variable named box.
This is true for all local variables. Once the function finishes executing then the variable doesn't exist. [Garbage Collector]
This is why we have a return statement so the computer can keep the value the local variable had stored and store it in a new variable.

Now you know that if I also have a global variable named box in the last example then the computer
wouldn't be able to access this variable until it reached global scope (all functions are done executing).

Question: So what if we only had 1 variable named box and defined it in global scope?
If the functions name() and nameThree() attempt to modify it, can we still access this global variable in their local scopes?

Answer: Yes! Because the computer doesn't know what other variable named box the programmer wants to access.

Question: So what if we had 2 variables named box? 1 is defined in global scope and the other is defined
in the name() function. A variable named box is being accessed in global scope, name() and nameThree().
Is the global variable box being accessed in nameThree() or is the local variable being accessed in nameThree()?

Answer: The local variable named box (local to the name() scope) is being accessed in nameThree(). 
Not the global variable named box. Why: the local variable box is only local to the name() scope. Technically since the
function nameThree() is defined inside of name() then nameThree() is still inside of name()'s scope.
Now by this logic this variable named box in nameThree() is also inside of the global variable named box's scope.
SO why doesn't the global variable box get accessed in nameThree().
My reasoning is that if a variable is trying to be accessed then the computer will try to search for where it's defined.
If no variable named box is defined in nameThree() (the current local scope the computer is running code in)
then it will look to the next available scope (this is name()'s scope.). There is a definition of the local variable named box
here, so the computer assumes you are talking about the local variable named box. 

Note: Again, if there was no definition for a local variable named box in the name() function
then the computer would have to go to global scope to look for a global variable's definition 
and it will assume that the variable named box being accessed in nameThree() is the global variable named box.
Finally, if there was no global variable named box then the computer would throw (essentiallly tell you)
you an error saying that the variable named box inside the function nameThree() doesn't have a
definition because the computer couldn't find it after checking all of the relevant scopes.

Last thing before we switch [To stop potential confusion]:

Take the first example: I define a global variable named box in the global scope. Next inside a
function I define named name() I define a local variable named guy. What if I tried to use the global variable box
inside of the function name()?

Answer: I can access the global variable named box inside of the function name(). The above examples applied
for if I had a global variable and a local variable with the same name (meaning the local variable would have priority
and global variables would be ignored) Global variables can be used all over the code in any scope. 
The same goes for if I defined the function nameThree() in name() I can still use the global variable inside of it.

If I wanted to access the local variable guy inside of nameThree(), I could because the variable named guy is only local to the function
name(), for all functions defined inside of name() I can use the variable named guy in them.
However, the variable named guy is only local to the function name(). I can't use it in global scope
or other functions that are not defined inside of name().

The same goes for if I defined a variable named person inside of nameThree(). I can't use the variable person
in name() or global scope. This variable is only local to this function because there are no other functions defined inside of it.




Other things we talked about:

The = operator is for defining variables or redefining variable as new values.

Ex.)
// variable definition
let hi = 7;
// variable redefinition
hi = 10;

Now another way to redefine a variable is to increment or decrement a variable.
hi = hi -3
// if we console.log(hi) then terminal would print a 7!
the above statement is the same as the statement:
hi = 7

Both statements redefine hi, but in hi = hi - 3 the computer knows
to look at the right side of the equal sign and say take the current value of hi
this was 10 and then subtract 3 from it. This will then evaluate to 7 and computer will just see:
hi = 7

Steps to above paragraph:
1: hi = hi -3
2: hi equals 10 so the above statement is hi = 10 -3
3: The above statement evaluates to hi = 7. 

Note: we usually use hi = hi - 3 instead of putting hi  = 7 because in most cases where a variable
(a storage place in memory) holds different values it will be hard to guess that the value of the variable (what gets stored)
needs to be redefined as 7 (hi = 7). It's too specific and keeps our code from being used in many different situations.
Tools aren't important if they can't be used in general sitations. 


All Short hand for redefining variables [it's slightly faster]
hi += 7 (the same as hi = hi + 7)
hi-=3 (the same as hi = hi -3)
hi *=2 (the same as hi = hi * 2)
hi /=6 (the same as hi = hi / 6)

[Even the shorthand has 1 equal sign. 1 equal sign is always for defining or redefining a variable]

Evaluation in computer science is extremely important because everything we do relys on evaluation.

The return statement is essentially a evaluation statement. The output of a function is the value the function evaluates to.

Ex.)

let integer = Math.floor(6.6);
console.log(integer);
// Math.floor(6.6) returns 6 which means in the eyes of the computer the function Math.floor(6.6)
// is essentially equal to 6. And line 133 essentally reads in the eyes of the computer
//let integer = 6;

//Now console.log(integer) is another function, but because it doesn't return anything (it returns the data type undefined)
then we don't have to set it equal to a variable because the variable would just recieve the value of undefined.
[Meaning console.log(integer) evaluates to undefined. However, printing a statement is different from an evaluation.
You can't categorize printing as a value. The output is printing so how can you store that in memory?
You can store a string (the characters of what you print) in memory, but not the action of printing. Maybe you could
record the date of when you printed or how long the string was you printed, but again these are
values and not the action of printing.]

Last thing:

Math.floor(), console.log(), and name() are all functions even though Math.floor() and console.log()
are different. Why? Well we defined a function name() so we don't have to get it from somewhere else.
In the case of Math.floor(), we didn't make this function. It was already created for us by the Math OBJECT [new word: we will go over it next week]
so we need to tell the computer to go get the function floor from the Math object so that's why the function call
is Math.floor(). Otherwise the computer will assume the programmer wrote a function called floor() (which you probably didn't).

console.log() is the same thing. We have to get the log() function from the console object in order to
call the log() function. That's why console.log() is the function call.

Code I was typing is below!


*/


let box = 10;
console.log(box);

//console.log(Math.floor(1.1))

function name() {
    let box = 1;
    box = box + 1;
    console.log(box);

    function nameThree() {
        //let box = 20;
        box = 3;
        console.log(box);
    }

    nameThree();
}

// function nameAnother() {
//     let box = 1; 
// }

name();





