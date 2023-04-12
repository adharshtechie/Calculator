function dispay(n){
    result.value+=n
}
function Allclear(){
    result.value=""
}
function evalExprsn(){
    result.value=eval(result.value)
}
function erase(){
    result.value=result.value.slice(0,-1)
}
// function erase


//eval is used for the arithmetic operation which is an in build feature in the JS
//slice is used for the removal of the last value of a string,the input for the slice is the starting value to the ending value. 