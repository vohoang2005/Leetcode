//Vanilla Solution
var fizzBuzz = function(n) {
    let result = [];
    
    for(let i = 1; i <= n; i++) {
      if(i % 3 === 0 && i % 5 === 0) {
        result.push("FizzBuzz")
      }else if(i % 3 === 0) {
        result.push("Fizz") 
        }else if(i % 5 === 0) {
          result.push("Buzz")
        }else{
          result.push(i.toString())
        }
      }
  return result;
  };

//More condensed Solution
var fizzBuzz = function(n) {
    const arr=[]
    for(i=1; i<=n; i++){
        if(i%15===0) arr.push("FizzBuzz")
        else if(i%3===0) arr.push("Fizz")
        else if(i%5===0) arr.push("Buzz")
        else arr.push(i.toString())
    }
    return arr
};