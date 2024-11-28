// Write a function that prompts the user to input student marks. 
// The input should be between 0 and 100. 
// The output should correspond the correct grade, as shown below: 


let marks = prompt("Want to know the grade of your student, kindly enter their marks here and i will do the magic:");

//my function to get students grade and it will be taking marks as an argument
function studentGrade(marks) {
    //now the if condition to determine the grade
    //to avoid future error i need to make sure marks are not less than 0 or beyond 100
    if (marks > 100 || marks < 0) {
        console.log("These marks are Invalid, key in number between 0 to 100");
        return;
    }

    //let grade;
    // now i need these in a condition A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.
    // since js run from top to bottom i will list them in chronological order
    if (marks > 79) {
        grade = "A";
    } else if (marks >= 60) {
        grade = "B";
    } else if (marks >= 50) {
        grade = "C";
    } else if (marks >= 40) {
        grade = "D";
    } else {
        grade = "E";
    }
    console.log(`Your student's grade is: ${grade}`);
}

studentGrade(marks);
