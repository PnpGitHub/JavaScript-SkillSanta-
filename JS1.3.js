function cToF(celsius) 
{
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let message = cTemp+' is ' + cToFahr + ' .';
    console.log(message);
}

function fToC(fahrenheit) 
{
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let message = fTemp+' is ' + fToCel + '.';
    console.log(message);
} 
cToF(60);
fToC(45);