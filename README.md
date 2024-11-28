# Toy Problem Code Challenge
This is my Week one individual project in SD track

The aim is to test my knowledge on functions in JS 

Requirements for this week code challenges are:

### Challenge 1: Student Grade Generator (Toy Problem)

Write a function that prompts the user to input student marks. The input should be between 0 and 100. The output should correspond the correct grade, as shown below: 

        A > 79, B - 60 to 79, C -  59 to 49, D - 40 to 49, E - less 40.

#### Solution
    * Use my prompt() function  to prompt the user to key in grade.
    * Create my function that helps get the students grade
    * Validated this input from the grade given above
    * used if loop to create a condition that helps go through all conditions to get the grade output from input given
    * print my output as shown below

![alt text](<./img/Screenshot 2024-11-28 200906.png>)

 

### Challenge 2: Speed Detector (Toy Problem)

Write a program that takes the speed of a car as input e.g 80. If the speed is less than 70, it should print “Ok”. Otherwise, for every 5 km/s above the speed limit (70), it should give the driver one demerit point and print the total number of demerit points.

   > For example, if the speed is 80, it should print: “Points: 2”. If the driver gets more than 12 points, the function should print: “License suspended”.

 #### Solution
    * used prompt() function to prompt the user to key in their car speed.
    * Created my speed detector function
    * Validated this input from the speed given above
    * used the condition given which i expressed using for and if loop to go over the condition and calculate
    * print my output as per the conditions given below

    ![alt text](</img/Screenshot 2024-11-28 195502.png>)

### Challenge 3: Net Salary Calculator (Toy Problem)

Write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary. 

#### Solution
    * Used prompt() function to prompt the user to key in their salaries.
    * Created a function to help calculate the expected netsalary
    * Nested it with an if loop to put PAYE Conditions as per KRA quidance
    * Nested it with another if loop that goes through the NSSF calculation as per nhif creteria
    * Nested it with another if loop that goes through the NHIF(SHA) calculation as per SHA creteria 
    * Finally invoked my function to calculate salary to see out put as shown below

    ![alt text](<./img/Screenshot 2024-11-28 210814.png>)

## License
This project is licensed under the [MIT License](LICENSE). You are free to use, modify, and distribute this code with attribution.