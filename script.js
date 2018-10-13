let price = 5.99;
let incr = 0;
function countplus(){
    incr++   
document.querySelector(".form").value = `${incr}`;
document.querySelector(".totalamount").innerHTML = `${incr * 5.99}`

   
}
function countminus(){
    if (incr > 0){

    
    incr--   
document.querySelector(".form").value = `${incr}`;
document.querySelector(".totalamount").innerHTML = `${incr * 5.99}`

}
}

// write your JS code here
