


// var arrayName = new Array(10);
// arrayName[0]="mim";
// arrayName[1]="Zumar";
// arrayName[2]="Rakin";

// console.log(arrayName[0]);




// for(var i = 0; i < 10 ; i++ ){
//     arrayName[i]= Number(prompt("enter array values"));
// }

// for(var i=0;i<10;i++){
//  document.write(arrayName[i]);  
//  document.write("<br>");  
// }


// document.write(arrayName);


// "shift" is just oppositie to "pop". "Shift" remove elements from the beginning whereas the "pop" removes elements from the top.

// "Unshift" is just oppositie of push function.We know "push" inserts element in the top but "unshift" inserts elements from first position.


//  var var1 = [1,2,3,4,5,6,7,8,9,10];
//  var var2 = ["a","b","c","d","e","f","g","h","i","j"];
//  document.write(var1+ "<br>");
//  document.write(var2 + "<br>");
 

//  var2.splice(2,0,"mim");//a,b,mim,c,d,e,f,g,h,i,j
//  document.write(var2 + "<br>");

//  var1.splice(2,0,33);//1,2,33,3,4,5,6,7,8,9,10
//  document.write(var1+ "<br>");
 
//  var1.splice(2,2,33);//1,2,33,5,6,7,8,9,10
//  document.write(var1+ "<br>");

//  var1.splice(1,4,900);//
//  document.write(var1+ "<br>");

//  var1.slice(2);
//  document.write(var1+ "<br>");




//  var2 = var1.splice



// arreyName = arrayName.splice(2,0);
// document.write();
var variable2 = ["Mozahid", "Nishat", "Rezwan", "Nitu"];

document.write(variable2);
var sortedName = variable2.sort();
// variable2.reverse();
document.write("<br>" +sortedName);


var variable3=["20","6","19","-9","87"];
variable3.sort(function(a,b){
    return a-b;
});

document.write("<br> <h3> Sorted Numbers Are: </h3>" + variable3);

// Reverse Sorting
var variable3=["20","6","19","-9","87"];
variable3.sort(function(a,b){
    return b-a;
});

document.write("<br> <h3> Sorted Numbers Are: </h3>" + variable3);


