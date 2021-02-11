<html>
<script>
function isEven(n){
  return n % 2 == 0;
  }
  
function isOdd(n){
  return n % 2 == 1;
  }
  
function adder(ar, filter){
  var sum;
  for (var i = 0; i < ar.length; i++){
  if(filter(ar[i]))
    sum += ar[i];
  }
  return sum;
  }
  
var total = adder([1,2,3,4,5], isEven);
console.log(total);
</script>
</html>
