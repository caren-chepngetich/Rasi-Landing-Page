//Given an array of strings, use a function to reverse all the elements in the string in ascending order and the specific elements in descending order


function reverseElements(arr){
          const sortArray = arr.sort();
          const reversedArray = sortArray.reverse();
          console.log(reversedArray);

          const reverseName = reversedArray.map(name =>[...name].reverse().join(''));
          return reverseName;
}

console.log(reverseElements(["Caren","Betty","Bett","Maggy"]));



// Using JS functions and an array of numbers, return positive if an element within the array is positive, negative if an element is negative, else zero
function Num(numberarr){
    numberarr.forEach(y=>{
        if(y>0){
            console.log(( y + "positive"));
        }
        else {
            console.log((y + "negative"))
        }
         if (y==0){
            console.log(( y + "zero"))
        }
    });
}
 Num([7,-8,9,-1,0]);
// Given an array of objects, where each object represents an employee with an id, name, and salary property, write a function that returns a new array of employee objects sorted by their salary in ascending order.
function Employees(employeedetails){
    return employeedetails.sort((a,b) =>a.salary-b.salary);n
}
Employees(employeedetails=[
    {Id:1,name:"Caren",salary:10000},
    {Id:2,name:"Betty",salary:12000},
    {Id:3,name:"Susan",salary:15000}
]);

const employeesalary= Employees(employeedetails);
console.log(employeesalary)
//Write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.

function calculate() {
number.forEach((num) => {
    console.log(num*2);
})
};

const number = ([1,2,3,4,5,6]);
//Write a function that takes in an array of numbers and consoles the first four items multiplied by 8 and the last two added by 5. Console the array with the new values
function itemsarr(items){
    let item1=items.slice(0,4)
    let item2=items.slice(-2)
    item1.forEach(i=>{
        console.log((i*8))
    })
    item2.forEach(y=>{
        console.log((y +5))
    })
}

itemsarr([6,8,9,11,12,13])






