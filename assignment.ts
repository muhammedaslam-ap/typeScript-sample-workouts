
function a(char:string):string{
    console.log(char)
    return char
}

a('hello world')

//////////////

function a(num1:number,num2:number):number{
    let sum:number = num1*num2
    return sum
}

console.log(a(3,5))

////////////////

function a( P:number ,R:number,n:number):number{
    let SI:number = (P*R*n)/100
    return SI
}


console.log(a(30,25,10))

//////////////////////////

let mark: number = 100

if (mark >= 50) {
    console.log("Passed");  
} else {
    console.log("Failed");  
}
///////////

const totalMark : number = 49

if(totalMark>90){
    console.log('grade A+')
}else if(totalMark>80){
    console.log('grade B+')
}else if(totalMark>70){
    console.log('grade C+')
}else if(totalMark>60){
    console.log('grade D+')
}else if(totalMark>=50){
    console.log('just pass')
}else if(totalMark<50){
    console.log('failed')
}

/////////////////////
let dayNumber:number = 10

switch(dayNumber){
    case 1:
        console.log('sunday')
        break;
    case 2:
        console.log('monday')
        break;
    case 3:
        console.log('tuesday')
        break
    case 4:
        console.log('wednesday')
        break;
    case 5:
        console.log('Thursday')
        break;
    case 6:
        console.log('friday')
        break;
    case 7:
        console.log('Saturday')
        break;
    default:
        console.log('not valid day in week')

}

/////////////////////
function a(num:number){
    for(let i:number=1;i<=10;i++){
        console.log(`${num} * ${i} = ${num*i}`)
    }
}
a(5)

//////////////////////////

function a(num:number):number{
let sum:number= 0
    for(let i:number=0;i<num;i++){ 
        if(i%2==1){
          sum+=i
        }
    }  
    return sum
}
console.log(a(10))
///////////////////////////////

let num:number = 5

for (let i = 1; i <= num; i++) {
    let pattern:string = "";
    for (let j = 1; j <= i; j++) {
        pattern += j ;
    }
    console.log(pattern);
}
////////////////////////////////

let size: number = parseInt(prompt("Enter the size of arrays:")!);  

let array1: number[] = prompt("Enter the values of Array 1:")!.split(',').map(Number);
let array2: number[] = prompt("Enter the values of Array 2:")!.split(',').map(Number);

[array1, array2] = [array2, array1];

console.log("Arrays after swapping:");
console.log("Array1:", array1.join(", "));
console.log("Array2:", array2.join(", "));


let arr:number[]=[1,2,3,4,5,6,7,8,9,10]

let count:number =arr.filter(curr=>curr%2==0).length

console.log(count)


/////////////////////////////
 
function a(arr:number[]):number[]{
    let arr2:number[] = arr.sort((a,b)=>b-a)
    return arr2
}

console.log(a([1,2,3,4,5,6,7,8,9,10]))

/////////////////////////////////////////

function isPalindrome(str: string): boolean {
    let str2: string = str.split('').reverse().join('');
    if (str === str2) {
        console.log(`${str} is a palindrome`);
        return true;
    } else {
        console.log(`${str} is not a palindrome`);
        return false;
    }
}
console.log(isPalindrome('malayalam'));

////////////////////////////////////////////////

function addMatrices(matrix1: number[][], matrix2: number[][]): number[][] {
    let result: number[][] = [];
    for (let i = 0; i < matrix1.length; i++) {
        let row: number[] = [];
        for (let j = 0; j < matrix1[i].length; j++) {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        result.push(row);
    }
    return result;
}

let matrix1: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

let matrix2: number[][] = [
    [10, 20, 30],
    [40, 50, 60],
    [70, 80, 90]
];

let sumMatrix = addMatrices(matrix1, matrix2);
console.log("Sum of 2 arrays is:");
sumMatrix.forEach(row => console.log(row.join(" ")));


////////////////////////////////////

function createArray():number[]{
    return [1,2,3,4,5]
}

function display(arr: number[]):void{
    console.log(arr)
}

function main():void{
    let arr:number[]=createArray()
    display(arr)
}
main()
//////////////////////

function isPrime(num: number): boolean {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
///////////////////////////////
function main(num:number): void {
   
    if (isPrime(num)) {
        console.log("Entered number is a Prime number");
    } else {
        console.log("Entered number is not a Prime number");
    }
}

main(9);
///////////////////////

class Calculator {
    addition(a: number, b: number): number {
        return a + b;
    }

    subtraction(a: number, b: number): number {
        return a - b;
    }

    multiplication(a: number, b: number): number {
        return a * b;
    }

    division(a: number, b: number): number {
        if (b === 0) {
            console.log("Division by zero is not allowed.");
            return NaN;
        }
        return a / b;
    }
}

function main(): void {
    let calculator = new Calculator();
    let choice = 2; 
    let num1 = 10; 
    let num2 = 5; 
    
    switch (choice) {
        case 1:
            console.log("Result:", calculator.addition(num1, num2));
            break;
        case 2:
            console.log("Result:", calculator.subtraction(num1, num2));
            break;
        case 3:
            console.log("Result:", calculator.multiplication(num1, num2));
            break;
        case 4:
            console.log("Result:", calculator.division(num1, num2));
            break;
        default:
            console.log("Invalid choice.");
    }
}

main();
///////////////////////////


function calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
    return (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
}

function main(): void {
    let writtenTest = 55; 
    let labExams = 73; 
    let assignments = 87; 
    
    let grade = calculateGrade(writtenTest, labExams, assignments);
    console.log("Grade of the student is", grade);
}

main();

//////////////////////////////////

function calculateTax(income: number): number {
    if (income <= 250000) {
        return 0;
    } else if (income <= 500000) {
        return (income - 250000) * 0.05;
    } else if (income <= 1000000) {
        return (250000 * 0.05) + (income - 500000) * 0.20;
    } else {
        return (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30;
    }
}

function main(): void {
    let annualIncome = 500000; 
    let taxAmount = calculateTax(annualIncome);
    console.log("Income tax amount =", taxAmount.toFixed(2));
}

main();
///////////////////////////////////////////

function printPattern(rows: number): void {
    let num = 1;
    for (let i = 1; i <= rows; i++) {
        let pattern = '';
        for (let j = 1; j <= i; j++) {
            pattern += num+' ';
            num++;
        }
        console.log(pattern.trim());
    }
}


function main(): void {
    let rows = 4; 
    printPattern(rows);
}

main();
/////////////////////////////////////

function multiplyAdjacentValues(arr: number[]): number[] {
    let result: number[] = [];
    for (let i = 0; i < arr.length - 1; i++) {
        result.push(arr[i] * arr[i + 1]);
    }
    return result;
}

function main(): void {
    let arr: number[] = [1, 2, 3, 4, 5]; 
    let resultArray = multiplyAdjacentValues(arr);
    console.log("Output:", resultArray.join("\t"));
}

main();
////////////////////////////////////

function getArray(size: number): number[][] {
    let array: number[][] = [];
    let value = 1; 
    for (let i = 0; i < size; i++) {
        let row: number[] = [];
        for (let j = 0; j < size; j++) {
            row.push(value++);
        }
        array.push(row);
    }
    return array;
}

function addArray(arr1: number[][], arr2: number[][]): number[][] {
    let size = arr1.length;
    let result: number[][] = [];
    for (let i = 0; i < size; i++) {
        let row: number[] = [];
        for (let j = 0; j < size; j++) {
            row.push(arr1[i][j] + arr2[i][j]);
        }
        result.push(row);
    }
    return result;
}

function displayArray(arr: number[][]): void {
    for (let row of arr) {
        console.log(row.join("\t"));
    }
}

function main(): void {
    let size = 2; 
    let array1 = getArray(size);
    let array2 = getArray(size);
    let sumArray = addArray(array1, array2);
    
    console.log("Sum of array 1 and array 2:");
    displayArray(sumArray);
}

main();

///////////////////////////////////
class Array2D {
    private array: number[][];
    private size: number;

    constructor(size: number) {
        this.size = size;
        this.array = this.getArray();
    }

    private getArray(): number[][] {
        let array: number[][] = [];
        let value = 1;
        for (let i = 0; i < this.size; i++) {
            let row: number[] = [];
            for (let j = 0; j < this.size; j++) {
                row.push(value++);
            }
            array.push(row);
        }
        return array;
    }

    public displayArray(): void {
        console.log("Array elements are:");
        for (let row of this.array) {
            console.log(row.join("\t"));
        }
    }
}

function main(): void {
    let size = 3; 
    let array2D = new Array2D(size);
    array2D.displayArray();
}

main();

///////////////////////////////////
class Area {
    circle(radius: number): number {
        return 3.14 * radius * radius;
    }

    square(side: number): number {
        return side * side;
    }

    rectangle(length: number, width: number): number {
        return length * width;
    }

    triangle(base: number, height: number): number {
        return 0.5 * base * height;
    }
}

class MyClass extends Area {
    main(): void {
        let choice = 2; 
        let result: number;

        switch (choice) {
            case 1:
                let radius = 3;
                result = this.circle(radius);
                console.log(`Area of the circle is: ${result}`);
                break;
            case 2:
                let side = 2; 
                result = this.square(side);
                console.log(`Area of the square is: ${result}`);
                break;
            case 3:
                let length = 4, width = 5; 
                result = this.rectangle(length, width);
                console.log(`Area of the rectangle is: ${result}`);
                break;
            case 4:
                let base = 3, height = 6; 
                result = this.triangle(base, height);
                console.log(`Area of the triangle is: ${result}`);
                break;
            default:
                console.log("Invalid choice!");
        }
    }
}

const obj = new MyClass();
obj.main();
///////////////////////////////////

var library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];

library.forEach(book => {
    if (book.readingStatus) {
        console.log(`Already read '${book.title}' by ${book.author}.`);
    } else {
        console.log(`You still need to read '${book.title}' by ${book.author}.`);
    }
});
 
///////////////////////////////////
let my_string: any = "1234"; 

try {
    let reversedString: string = my_string.split('').reverse().join('');
    console.log(`Reversed string is : ${reversedString}`);
} catch (err: any) {
    console.log(`Error : ${err.message}`);
} finally {
    console.log(`Type of my_string is : ${typeof my_string}`);
}
///////////////////////////////////

let my_height: any = 40; 

try {
    if (isNaN(my_height)) {
        throw new Error("notANumberError");
    } else if (my_height > 50) {
        throw new Error("hugeHeightError");
    } else if (my_height < 1) {
        throw new Error("tinyHeightError");
    } else {
        console.log(my_height);
    }
} catch (err: any) {
    console.log(err.message);
}
///////////////////////////////////

class Car {
    constructor(
         public name: string,
         public mileage: number,
         public max_speed: number
        ) {}
}

const myCar = new Car("Toyota", 15, 180);
console.log(myCar);

///////////////////////////////////
function myFilter(myArray: number[], callback: (num: number) => boolean): number {
    let sum = myArray.reduce((acc, num) => acc + num, 0);
    return sum;
}

const callback = (num: number) => num % 2 === 0;

const myArray = [1, 2, 3, 4, 5];
console.log(myFilter(myArray, callback));

