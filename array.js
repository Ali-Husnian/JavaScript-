
let arr = new Array(); //Array declaration first method
arr = ["red", "green","yellwo","blue","grey"];
// document.write(arr[1]);

let array = [];  //Array declaration second method
array = ["Honda","Hondi","Toyota","BMW","OOOO","kiya"];
//  document.write(array);

document.write("<ol>");
 for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
    document.write("<li>" + element + "</li>");
 }
 document.write("</ol>");