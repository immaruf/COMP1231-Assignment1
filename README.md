# COMP1231-Assignment_1

# Table of Contents

1. [Function 1](#Student-Information)
2. [Function 2](#Calculate-Change)
1. [Function 3](#Miles-to-Kilometers)
2. [Function 4](#Find-Min-and-Max)
1. [Function 5](#Count-Occurrences)
2. [Function 6](#Convert-Number-Grade-to-Letter-Grade)
1. [Function 7](#Reverse-the-Order-of-the-Array)
2. [Function 8](#School-Days-Remaining)
1. [Function 9](#Count-Vowels)
2. [Function 10](#Alphabetical-Order)
## Student Information
`function _one()`

Create a JavaScript function that meets the following requirements:
* Creates the following variables that assign your unique profile information:
    - ***your_name***
    - ***number_of_courses***(this semester)
    - ***program***
    - ***part_time_ job***(true/false)
* Create a Boolean variable, set to **true** or **false**, based on whether you have a part time job. Store the string **“have"** or **“don’t have”** into another variable, based on the Boolean.
* Display your student information to the cosole *(console.log())* as illustrated below:  
> "My name is ***???***. I’m in the ***???*** program. I’m currently taking ***???*** courses." I ***???*** have a part time job.
> 
> Where ***“???”*** should be replaced with your variable data
 
```Calling _one()```

```My name is Bruce Wayne. I'm in the T127 program. I'm currently taking 3 courses. I do not have a time job.```

## Calculate Change
`function _two(cents)`

Create a JavaScript function that meets the following requirements:
* Is passed an integer parameter, representing a number of Canadian cents.
* The function uses the parameter to determine the smallest number of Canadian quarters, dimes, nickels and pennies that are equal to the given (parameter) amount.
* Displays the calculated information as illustrated below:

```Calling _two(80)```

```80 cents in minimal change is: 3 quarters, 0 dimes, 1 nickels and 0 pennies.```

## Miles to Kilometers
`function _three(miles, kilometers)`

Create a JavaScript function that meets the following requirements:
* Receives two distances, one distance in miles and the other, a distance in kilometers value.
* Converts the miles to the equivalent kilometer value
* Converts the kilometer value to the equivalent miles
* Displays the calculated information as illustrated below:

```Calling _three(15,9)```

```15 miles = 24.14 Kilometers, 9 kilometers = 5.59 miles.```

## Find Min and Max
`function _four( array )`

Create a JavaScript function that meets the following requirements:
* Receives an integer array as a parameter
* The function transverses the array to determine the minimum and maximum values in the array.
* Displays the calculated information as illustrated below:

```Calling _four([-8,-1,-87,-14,-81,-74,-20,-86,-61,-10]);```

```The minimum valu in the array is: -87, the maximum value is -1```

## Count Occurrences
`function _five(string, char)`

Create a JavaScript function that meets the following requirements:
* Accepts two input parameters, a string and a character letter.
* The function determines the number of occurrences of the character in the string.
* Displays the result to the console as illustrated below.

```Calling _five(“map”, “p”);```

```The word map has 1 occurrences of the character p```

## Convert Number Grade to Letter Grade
`function _six( grade )`

Create a JavaScript function that meets the following requirements:
* Is passed a numeric grade, calculating and displaying the corresponding letter grade based on: 100 - 90 = ‘A+’, 89 - 85 = ‘A’, 84 - 80 = ‘A’, 79 -76 = ‘B+’, 75 – 73 = ‘B’, 72 – 70 = ‘B-’, 69 – 66 = ‘C+’, 65 – 63 = ‘C’, 62 – 60 = ‘C-’, 59 – 56 = ‘D+’, 55 – 53 = ‘D’, 52 – 50 = ‘D-’, < 50 = ‘F’
* Displays the result to the console as illustrated below:

```Calling _six(93)```

```Congratulations, you passed the course. Your final grade is grade = 'A+'```

```Calling _six(39)```

```Unfortunately, you did not meet the minimum requirement to pass the course. your final grade is: grade = 'F'```

## Reverse the Order of the Array
`function _seven(array)`

Create a JavaScript function that meets the following requirements:
* Receives character array
* The function reverses the order of the of the character array.
* Displays the results to the console as illustrated below:

`Calling _seven([j, p, g, F, c, x, A, c, q, I]);`

`Original order array = [j, p, g, F, c, x, A, c, q, I]`

`Reversed order array = [I, q, c, A, x, c, F, g, p, j]`

## School Days Remaining

## Count Vowels

## Alphabetical Order
