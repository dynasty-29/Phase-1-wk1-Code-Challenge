// Write a program whose major task is to calculate an individual’s 
// Net Salary by getting the inputs of basic salary and benefits. 
// Calculate the payee (i.e. Tax), NHIF Deductions, NSSF Deductions, gross salary, and net salary.

//first i will create prompt for the user to key in their basic salary and also benefits if any
let basic = prompt("Enter basic salary:");
let benefits = prompt("Enter benefits:");

//ensure the basic and benefits are numbers instead of string
basic = Number(basic);
benefits = Number(benefits);

//Normally salaried persons are given a personal relief of 2400 monthly
const relief = 2400;

//now my function to calculate netsalary
function calculateNetSalary() {
    //first we want a condition that doesn.t allow a negative value entered for basic or benefits
    if ( basic< 0 || benefits < 0) {
        console.log("This is Invalid input. Please enter positive numbers for basic salary and benefits.");
        return;
    }

    // Calculate gross salary
    const gross = basic + benefits;

    // now lets calculate payee with reference to various tax bands in kenya
    //payeefuncction
    function payeeFun(income) {

        //various tax bands as per KRA
        const taxBands = [
            { limit: 24000, rate: 0.1 }, // 10% on first 24,000
            { limit: 8333, rate: 0.25 }, // 25% on next 8,333
            { limit: 467667, rate: 0.30 }, // 30% on next 467,667
            { limit: 300000, rate: 0.325 }, // 32.5% on next 300,000
            { limit: Infinity, rate: 0.35 }, // 35% on anything above 800,000
        ];

        //i will use let to declare income that remains after tax 
        let remainingIncome = income;

        //and also a varible that will store tax
        let totalTax = 0;
        //a for loop that go through each taxband to get the remaining income after tax 
        //and also start populating our tax variable
        for (const band of taxBands) {
            //ensure that is what remains is zero we stop the for loop
            if (remainingIncome <= 0) break;

            //from income keyed in we get the taxableincome 
            //add tax to tax variable
            //substract the tax from taxable income to get remaining income after tax
            const taxableIncome = Math.min(remainingIncome, band.limit);
            totalTax += taxableIncome * band.rate;
            remainingIncome -= taxableIncome;
        }

        // Apply personal tax relief 
        totalTax -= relief;

        // Ensure tax isn't negative
        return Math.max(0, totalTax);
    }

    //we now store the payee in a variable after invoking our payeefunction on our gross salary
    const payee = payeeFun(gross);

    // Now will do NHIF calculation 
    function calculateNHIF(income) {
        //these are different rates applied to different salary scales
        //i lifted from NHIF website
        if (income <= 5999) return 150;
        if (income <= 7999) return 300;
        if (income <= 11999) return 400;
        if (income <= 14999) return 500;
        if (income <= 19999) return 600;
        if (income <= 24999) return 750;
        if (income <= 29999) return 850;
        if (income <= 34999) return 900;
        if (income <= 39999) return 950;
        if (income <= 44999) return 1000;
        if (income <= 49999) return 1100;
        if (income <= 59999) return 1200;
        if (income <= 69999) return 1300;
        if (income <= 79999) return 1400;
        if (income <= 89999) return 1500;
        if (income <= 99999) return 1600;
        return 1700; // For incomes above 100,000
    }

    //Invoke the function to calculate nhif onto our gross salary and storeit in a varible
    const nhif = calculateNHIF(gross);

    // Let's also do SHA deduction (2.75% of gross salary)
    const sha = gross * 0.0275;

    // NSSF contribution 
    const nssf = 400;

    // Now lets calculate net salary
    const net = gross - (payee + nhif + sha + nssf);

    // I want to show the user each deduction as we go
    console.log(`Your Gross Salarycis: Ksh. ${gross}`);
    console.log(`After calculation your PAYE is: Ksh. ${payee}`);
    console.log(`After calculation your NHIF is: Ksh. ${nhif}`);
    console.log(`After calculation your SHA is: Ksh. ${sha}`);
    console.log(`After calculation your NSSF is: Ksh. ${nssf}`);
    console.log(`And now your Net Salary is : Ksh. ${net}`);
}

calculateNetSalary();
