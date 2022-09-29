// for loop
document.write("<ul>");
for (let i= 1; i <= 10; i++) {
    document.write("<li>"+ i +"</li>");
}
document.write("</ul>");

//do wlile
let j = 1;
do {
document.write("Ali <br>");
j++;
} 
while (j <= 10);

// while loop
const arr = ["red","green","yellow","blue","gray"];
let arrLen = arr.length;
console.warn(arrLen);
let index = 0;
document.write("<hr/>");
while (index < arrLen) {
    document.write(arr[index] + "<br>");
    index ++ ;
}

// forEach loop
document.write("<br>")
let car = [
    "Honda",
    "BMW",
    "Suzoki",
    'Hondi',
    "OOOO",
    "Marcdes"
];
car.forEach(myFuntion);

function myFuntion(item , index , array ) {   // 1.item print   2.index print   3.print compleat array
    document.write( index+". "+item +"<br>" + array);
}

// continue statment use in every loop
document.write("<h1> continue statment <h1/>");

for (let i = 0; i <= 10; i++) {

    if( i == 5){
        continue;  // skip 5 
    }
    document.write(i + "<br/>");
    
}