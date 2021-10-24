//how to create an object
//how to print the value of an object
// how to create constructor
// adding function inside a conatructor



// var student1={
//     name:"Nishat",
//     age:11,
//     school:"Kamrunnessa",
//     language:["bangla","English"]

// }
// var student2={
//     name:"Tasnim",
//     age:16,
//     school:"Kamrunnessa",
//     language:["hibru","English"]

// }
// var student3={
//     name:"mim",
//     age:83,
//     school:"viqarunnesa",
//     language:["bangla","zermany"]

// }

// console.log(student1.age);

function Student(name,age,school,lang) {
    this.name = name;
    this.age = age;
    this.school = school;
    this.lang=lang;

    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.school);
        document.write(this.lang);

    }
}

var student1 = new Student("mim",83,"viqarunnesa",["bangla","zermany"]);
var student2 = new Student("nishat",77,"kwdhwiduh",["bangla","zermany"]);
var student3 = new Student("kalla",33,"viqarunnesa",["bangla","zermany"]);
var student4 = new Student("dhola",22,"viqarunnesa",["bangla","zermany"]);
var student5 = new Student("indur",33,"viqarunnesa",["bangla","zermany"]);
var student6 = new Student("bilai",11,"viqarunnesa",["bangla","zermany"]);
var student7 = new Student("puppy",16,"viqarunnesa",["bangla","zermany"]);

student1.display();
document.write("<br>");

student2.display();

// Math Object In javascript

var num1= parseInt(prompt("enter 1st number: "));
var num2= parseInt(prompt("enter 2nd number: "));

var result = Math.max(num1,num2);
var result1 = Math.sort();

console.log(result);




