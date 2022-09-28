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


