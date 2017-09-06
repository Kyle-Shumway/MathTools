// x = -b +- sqrt(b^2-4ac) / 2a
// expected input = ax^2 + bx + c
var prompt = require("prompt");
var math = require("mathjs");

var ansArray = [];

function solve(){

  prompt.get(["leadCoef" , "secondNum" , "thirdNum"] , function(err , results){
  if(err){
    return console.log(err);
  }
  var a = results.leadCoef;
  var b = results.secondNum;
  var c = results.thirdNum;



  var negB = b - (b*2);

  addQuad(negB , a , b , c);
  subQuad(negB , a , b , c)
  if(ansArray.length = 2){
    console.log(ansArray);
  }
  })
}

function addQuad(negB, a , b , c){
  var bsqr = Math.pow(b , 2);
  var fourAC = 4*a*c;
  var insideSqr = bsqr - fourAC;
  var numSqrt;
  var numerator;

  if (insideSqr <= 0) {
  insideSqr = insideSqr + (insideSqr * -2)
  numSqrt = Math.round(Math.sqrt(insideSqr)) + "i"
  numerator = negB + " + " + numSqrt;
} else {
  numSqrt = Math.sqrt(insideSqr);
  numerator = negB + numSqrt;
}
  var numerator = negB + " + " + numSqrt;
  var denominator = 2*a

  var addQuad = numerator + "/" + denominator;
  ansArray.push(addQuad);
  }

function subQuad(negB , a , b , c){
  var bsqr = Math.pow(b , 2);
  var fourAC = 4*a*c;
  var insideSqr = bsqr - fourAC;

  var numSqrt;
  var numerator;
  if (insideSqr <= 0) {
  insideSqr = insideSqr + (insideSqr * -2)
  numSqrt = Math.round(Math.sqrt(insideSqr)) + "i"
  numerator = negB + " - " + numSqrt;
  } else {
  numSqrt = Math.sqrt(insideSqr);
  numeartor = negB - numSqrt;
  }
  var denominator = 2*a;
  var addQuad = numerator + "/" + denominator;
  ansArray.push(addQuad);
}

solve();
