# **About this password generator**

This is a JavaScript script ( am I allowed to say *script* after the word **JavaScript** ? ) that generates 5 quite strong passwords. The user can chose the password he like at most.

Each password is 18 characters long
Each password is composed out of a mix of upper and lower case letters, numbers and symbols.

This features (length, characters/symbols used) are pretty much hard coded in the program, this is because basically shorter password  aren't safe nowadays. But I'll change the programm adding the possibility for the user to remove/better tune some of this features.

**Obviously you can modify every generated password !**
<br>
<br>
<br>

## **How to use it**

You can run the JavaScript file as it is and it will print an array of 5 password in the browser console.
Or you can comment the console.log() in the function show, uncomment the line above, uncomment the very first line of the scrip and use the html file as div in a HTML document and... push the button!<br>
<br>
<br>
<br>

## **How is it made**

Nothing really complicated here, this program is just based on picking **pseudo-random**\* character from a given interval in the ASCII code.

\*This happens via the Math.random() method which returns a pseudo-random  floating point number in the range 0 to \< 1 .<br>
Read the whole article on <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random">MDN</a> , no seriously read it.<br>

Well, that's all, happy hacking!
