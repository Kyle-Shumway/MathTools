// Author: Kyle Shumway
// Date: Wednesday, August 30th, 2017
// Reason: Make tools to make math easier

var prompt = require("prompt");

function init(){
  console.log("start?");
  prompt.get(["yn: "] , function(err , results){
    if(err || results.yn == "n"){
      console.log("something went wrong");
      return;
    } else {
      getFactors()
    }
  })
}


function getFactors(){
  var fin = false;
  // get user input
  prompt.get(["factoredNumber" , "Monomial"] , function(err , results){
    // handle error
    if(err){
      console.log(err);
    } else {
      // if no error do operations
      // store input
      var factor = parseInt(results.factoredNumber);
      var monomial = parseInt(results.Monomial);

      // factoring operations
        var half = Math.floor(factor / 2), // Ensures a whole factorber <= factor.
            factArray = [1] // 1 will be a part of every solution.
            ,i, j;

        // Determine our increment value for the loop and starting point.
        factor % 2 === 0 ? (i = 2, j = 1) : (i = 3, j = 2);

        for (i; i <= half; i += j) {
            factor % i === 0 ? factArray.push(i) : false;

        }

        factArray.push(factor); // Always include the original factorber.

        // log the factors
        console.log("These are the factors we have: " + factArray);
        // end the operation of factoring

        // find the numbers that add to the monomial
        var numArray = [];
        for(var m = 0; m < factArray.length; m++){
          var temp,
              tempM,
              tempS;

          for(var s = 0; s< factArray.length; s++){

            var tempM = factArray[m];
            var tempS = factArray[s];

            var temp = factArray[m] + factArray[s]

            if (temp == monomial ){
              fin = true
              console.log("( x + " + tempM + " )( x + " + tempS + " )" );
            }
          }
      }
      console.log("another?");
      prompt.get(["yn"] , function(err, results){
        if(err){
          return console.log(err);
        } else {
          var yn = results.yn;
          if(yn = "y"){
            getFactors();
          } else {
            return;
          }
        }
      })
    }
  })
}

getFactors();
