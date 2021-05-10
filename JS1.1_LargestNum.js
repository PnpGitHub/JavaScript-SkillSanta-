let num1=parseInt(prompt("Enter 1st Number"));
let num2=parseInt(prompt("Enter 2nd Number"));
let num3=parseInt(prompt("Enter 3rd Number"));

let large;

if(num1>num2 && num1>num3)
{
   document.write("Largest Num is:",num1);
    // large=num1;
}
else if(num2>num1 && num2>num3)
{
    document.write("Largest Num is:",num2);
    //large=num2;
}
else
{
    document.write("Largest Num is:",num3);
    //large=num3;
}

//console.log("Largest Number is:"+large);
