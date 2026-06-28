function student(score) {

    switch (true) {
        case (score >= 90 && score <= 100):
            return "Grade A";
            

            case (score >= 60 && score < 90):
            return "Grade B";
            

        default :
        return "fail";
        
    }
    
}
const mark = student(71);
console.log(mark);
