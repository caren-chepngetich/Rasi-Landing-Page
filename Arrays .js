
function sortElements(array){
    array = ["Carrot","Pineapple","Banana"]
array.sort();
const elements = arr.filter(str.startsWith(A))
elementsSorted.reverse()
console.log(array);
console.log(elementsSorted);
}

function myArray(array){
    array = [1,2,3,4,5,6]
    if(array.some(el => el > 0)){
        return"positive";
    }
    else if (array.some(el => el <0)){
        return "negative";
    }
    else{
        return 0;
    }
}

function employeeSalary(employees){
    const employees = [
    {Id:23456722,name:"Caren",salary:10000}
    {Id1:3567377,name:"Daisy",salary:15000}
    {Id2:3567888,name:"Betty",salary:23000}
    ]
    return employees.sort((a,b) => a.salary - b.salary)
}