//Input
//var stringVals = readLine("Enter string values:");

var arr = ["Raj", "Abe", "Ashish"];
createBoxes.apply(this, arr);

function createBoxes(){
    for (var i=0; i<arr.length; i++){ 
        console.log(arr[i]); 
    } 
}