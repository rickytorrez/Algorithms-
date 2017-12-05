// Print Max of Array
// Print the largest element in a given array, by iterating through it and comparing values

function printMaxOfArray(arr){
    if(arr.length == 0){
        console.log("Empty array, no max value")
    }
    var max = arr[0];
    for (var i= 1; i <arr.length; i++){
        if (arr[i] > max){
            max = arr[idx];
        }
    }
    console.log("Max value is" + max);
}