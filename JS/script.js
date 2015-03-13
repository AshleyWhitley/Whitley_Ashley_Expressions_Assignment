/*
Ashley Whitley
Class SDI 1503 Section 01
Expressions Assignment
March 11, 2015
 */

//Practicing Assignment Operators
//variables: Example #1 Arithmetic operation

var width = 4;
var height = 5;
var area = width * height;
console.log(area);

//Answer worked on console (200)

var a = 12;
a *= 10;
console.log(a)

//Practice - Answer worked on console (120)

//1st prompt for actual Assignment

var width = prompt ("To calculate the area of a rectangle please enter width variable."); //string
var height = prompt ("Please enter the height.");
var area = width * height;
console.log(area)

//Showing the user the answer.

var width = prompt ("To calculate the area of a rectangle please enter width variable."); //string
var height = prompt ("Please enter the height.");
var area = width * height; //multiplication

var result = "The area of the rectangle is" + " " + area + "sq. feet";
alert(result);

//The alert worked properly giving the answer directly to the user. Any number works.
// 1st Test through prompt: 100 * 342 = 34200 sq. ft.
// 2nd Test: 23 * 67 = 1541 sq. ft.
// 3rd Test:69 * 128 =m 8832 sq. ft.

//Division Prompt shown to user.

var number1 = prompt ("To divide variables together enter any number."); //string
var number2 = prompt ("Enter second variable to divide by."); //string
var division = number1 / number2; //division

var result = "The answer is" + " " + number1 / number2;
alert(result);

//worked with any numbers. Divided correctly. 100 / 10 = 10

//Expressions with Arrays

//To console:

var videoGames = [130, 78, 23, 14]; //array
var total = videoGames[0] + videoGames[1] + videoGames[2] + videoGames[3];
console.log(total);

//To user:

var videoGames = [130, 78, 23, 14];
var total = videoGames[0] + videoGames[1] + videoGames[2] + videoGames[3];
var Tagline = prompt ("I have" + " " + total + " " + "video games.");


 //string
