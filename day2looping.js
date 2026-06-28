const { resolveObjectURL } = require("node:buffer");

function  isOddOrEven(number) {

       // let number = 9;

        if (number % 2 === 0) {
            
            //console.log(number + "This is a even number");
        
            return "Even";
            }else{

                //console.log(number + "this is a odd number");
                return "Odd"
            }
        }

        for (let i = 0; i <= 10; i++) {
         
          console.log(i + isOddOrEven(i));
          
        }
        