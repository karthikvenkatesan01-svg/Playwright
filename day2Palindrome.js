function name(str){
    const reversedstr = str.split("").reverse("").join("");

    if(str === reversedstr){
        console.log("It is Palindrome");
        
        }else {
            console.log("Not a palindrome");
        }
    }
name("POP");
name("Karthik");