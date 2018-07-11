alert("Welcome")
function arrSum(arr){
  var sum =0;
  arr.forEach(function(value,index){
    sum+=value;
  });
  return sum;
}
console.log("SUM = "+arrSum([2,3,4,1]));

function checkingEmail(emailString){
  var formatofEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  var match = formatofEmail.test(emailString);
  return match;
}

console.log(checkingEmail("john@smith.com"));
console.log(checkingEmail("johnsmith.info"));

var cart = [
   {
       name: 'Shoes',
       price: 560,
       quantity: 4
   },
   {
       name: 'Regular Tees',
       price: 455.50,
       quantity: 6
   },
   {
       name: 'Socks',
       price: 65.99,
       quantity: 2
   }];
//5a
   function addItem(){
    cart.push(newItem);
    console.log(cart);
   }
var newItem={name:"Watch", price: 64, quantity: 1}
    addItem(newItem);

console.log(cart.sort());
