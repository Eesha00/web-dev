console.log("hello from node")
var name = "umer";
//var name = "umer2"; can do
let age = 99;
//let age = 100; cant do
age =100; //can do 
const salary = 100;
console.log(age);

//////////
let x = 5;
let y = 15;
let point = {
    x: 10,
    y:25
};
console.log(point);
point.x = 11;   //can access prop of obj and change it 
console.log(point);

////////////////

let user = {name: "umer", email:"umer@.com"};
let anotherUser = user;
user.name = "umer2";
console.log(anotherUser);

/////
 let students = ["usman", "ali","noman"];
 students [5] = "zeeshan";
 console.log(students);

 /////
 let students = ["usman", "ali","noman"];
 let searchedStudents = students.find(findAli);
 console.log(searchedStudents);

 function findAli(std){
    if (std == "ali") return true;
    else return false;
 }

 ////////// arrow functions

function test(){
    return "ali";
}
console.log(test());

/////
let test = () => {
    return "ali";
};

console.log(test()); 