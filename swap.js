//inputs for this problem will be just an array of letters in alphabetical order
//using Array.prototype.swap method, I will create a function with two paremeters, which
//represent two random indexes in the array. The temp variable is where the two indexes are assigned
//temporarily, then later when the arr.swap method and function is called I put in two numbers representing
//which indexes will actually swap with each other.
//After this I made a variable called reversed and made it equal to the swapped array with the reverse method on it.
//When I logged it as an array and as a variable it logs a reversed swapped array.
//outputs will be the swapped array, and then the same array but reversed

//Pseudo code:

//array
//array.prototype.swap function with two params, two random indexes a, b
//bind input to this
//make a variable called temp, this temporarily assigns the indexes to whatever I call at the end
//a=b
//b= temporarily
//call array.swap at the end with two numbers for the indexes that will be swapped in the array
//make a reversed variable and assign arr.reverse method


//sandwich:

var arr = ["a", "b", "c", "d", "e", "f", "g"];

Array.prototype.swap = function(a, b) {
    var input = this;

    var temp = input[a];
    input[a] = input[b];
    input[b] = temp;
}

arr.swap(2, 5);
console.log(arr);

var reversed = arr.reverse();
console.log(arr);
console.log(reversed);
