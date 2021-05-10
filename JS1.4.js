function check(x, y) 
  {
  if ((x >= 50 && x <= 100) || (y >= 50 && y <= 100))
  {
    document.write(x,"is between 50 to 100");
  } 
  else 
  {
    document.write(x,"is not between 50 to 100");
  }
}

console.log(check(12, 101));

