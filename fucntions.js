function _one() {
    var your_name = "John Doe";
    var number_of_courses = 69;
    var program = "W201";
    var part_time_job = true;
    if (part_time_job === true) {
        var job_status = "have";
    } else {
        var job_status = "don't have"
    }

    console.log("My name is " + your_name + ". I’m in the " + program + " program. I’m currently taking " + number_of_courses + " courses. I " + job_status + " a part time job.");
}
_one();

function _two(cents) {
    var temp = cents

    if (cents >= 25) {
        var quarters = Math.floor(cents / 25);
        cents = cents % 25;
    } else {
        quarters = 0;
    }
    if (cents >= 10) {
        var dimes = Math.floor(cents / 10);
        cents = cents % 10;
    } else {
        dimes = 0;
    }
    if (cents >= 5) {
        var nickels = Math.floor(cents / 5);
        cents = cents % 5;
    } else {
        nickels = 0;
    }
    if (cents > 0) {
        var pennys = cents / 1;
        cents = 0;
    } else {
        pennys = 0;
    }

    console.log(temp + " cents in minimal change is: " + quarters + " quarters, " + dimes + " dimes, " + nickels + "  nickels, and " + pennys + " pennies.");
}
_two(80);

function _three(miles, kilometers) {
    var mile = miles;
    var kilo = kilometers;

    if (miles > 0) {
        miles = Math.round((mile * 1.609) * 100) / 100
    }
    if (kilometers > 0) {
        kilometers = Math.round((kilo * 0.621) * 100) / 100
    }

    console.log(mile + " miles = " + miles + " kilometers, " + kilo + " kilometers = " + kilometers + " miles.")
}
_three(15, 9);



function _four(array) {
    var maxValue = Math.max(...array);
    var minValue = Math.min(...array);
    console.log("The minimum value in the array is: " + minValue + " , the maximum value is " + maxValue)
}
_four([-8, -1, -87, -14, -81, -74, -20, -86, -61, -10]);



function _five(string, a_char) {
    var occurrence = 0;

    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) == a_char) {
            occurrence++;
        }
    }

    console.log("The word " + string + " has " + occurrence + " occurances of the character " + a_char);
}
_five("map", "p");



function _six(grade) {
    if (grade >= 0 && grade < 50) {
        console.log("Unfortunately, you did not meet the minimum requirement to pass the course. your final grade is: " + grade + " = 'F'");
    }
    if (grade >= 50 && grade <= 52) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'D-'");
    }
    if (grade >= 53 && grade <= 55) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'D'");
    }
    if (grade >= 56 && grade <= 59) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'D+'");
    }
    if (grade >= 60 && grade <= 62) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'C-'");
    }
    if (grade >= 63 && grade <= 65) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'C'");
    }
    if (grade >= 66 && grade <= 69) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'C+'");
    }
    if (grade >= 70 && grade <= 72) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'B-'");
    }
    if (grade >= 73 && grade <= 75) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'B'");
    }
    if (grade >= 76 && grade <= 79) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'B+'");
    }
    if (grade >= 80 && grade <= 84) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'A-'");
    }
    if (grade >= 85 && grade <= 89) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'A'");
    }
    if (grade >= 90 && grade <= 100) {
        console.log("Congratulations, you passed the course. Your final grade is " + grade + " = 'A+'");
    }
}
_six(93);


function _seven(array) {
    console.log("Original order array = [" + array + "] \nReversed order array = [" + array.reverse() + "]");
}
_seven(["j", "p", "g", "F", "c", "x", "A", "c", "q", "I"]);


function _eight() {
    var dt1 = "02/01/2021";
    var dt2 = "04/23/2021";
    var date1 = new Date("2/1/2021");
    var date2 = new Date("04/23/2021");
    var daysLeft = Math.floor((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));

    console.log("Current date = " + dt1 + ", last day of school = " + dt2 + ". The days left until the end of school = " + daysLeft + " days.");
}
_eight()


function _nine(word) {
    var countA;
    var countE;
    var countI;
    var countO;
    var countU;
    var countY;
    countA = countE = countI = countO = countU = countY = 0;

    word = word.toLowerCase();
    for (var i = 0; i < word.length; i++) {
        if (word[i] === "a") { countA++; }
        if (word[i] === "e") { countE++; }
        if (word[i] === "i") { countI++; }
        if (word[i] === "o") { countO++; }
        if (word[i] === "u") { countU++; }
        if (word[i] === "y") { countY++; }
    }

    console.log(
        "Vowel count: A=" + countA + ", E=" + countE + ", I=" + countI + ", O=" + countO + ", U=" + countU + ", Y=" + countY);
}
_nine("flugelhorn");

function _ten(my_string) {
    console.log([...my_string].sort((a, b) => a.localeCompare(b)).join(""));
}
_ten("Sameer")
