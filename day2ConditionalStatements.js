function launchBrowser(browserName) {
    if(browserName === "Chrome"){
        console.log("It is a Chrome Browser");
    }
    else{
        console.log("It is not a browser");
    }
    function runTests(testType) {
        switch (testType) {
            case "Sanity": 
                console.log("It is Sanity");
                
                break;
        
                case "Regression": 
                console.log("It is Regression");
                
                break;

                 default: 
            console.log("It is Smoke");
            
                break;
        }
    }runTests("");
}
launchBrowser("Chrome");


