
var photos = ["Image/first.jpg", "image/second.jpg","image/third.JPG"];
var var1 = document.querySelector("img");

var count=0;



function next(){
    count++;
   

    if(count>= photos.length){
        count = 0;
        var1.src = photos[count];
    }

    else{
        var1.src = photos[count];

    }
    
}

function previous(){

    count--;
   

    if(count < 0 ){
        count = photos.length-1;
        var1.src = photos[count];
    }

    else{
        var1.src = photos[count];

    }
  

}