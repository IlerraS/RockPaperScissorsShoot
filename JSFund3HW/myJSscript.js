//this will be used utiziling the
//normal function method
// let num = window.prompt("select a number to multiply")
// let string = window.prompt("Type a string")
// function add7(num)
// {
//     return num * 7;
// }

// function multiply(num)
// {
//     return num * Math.floor(Math.random()*100);
// }

// function capitalize(string)
// {
//     return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }

// function lastLetter(string)
// {
//     let lastIndex = 0;
//     for(let i=0; i < string.length; i++)
//     {
//         if(lastIndex < i)
//         {
//             lastIndex = i;
//         }
//     }
//     return string[lastIndex];
// }

// console.log(add7(num));
// console.log(multiply(num));
// console.log(capitalize(string))
// console.log(lastLetter(string))

//FizzBuzz 
let FizBuzzNum = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

for(let i=0; i <= FizBuzzNum; i++)
{
    if(i % 3 === 0 && i % 5 === 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 5 === 0 )
    {
        console.log("Buzz");
    }
    else if (i % 3 === 0)
    {
        console.log("Fizz");
    }
    else
    {
        console.log(i)
    }
}