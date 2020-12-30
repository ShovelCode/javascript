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
  foreach(e : ar){
  if(filter){
  sum += e;
  }
  }
  }
  
var total = adder([1,2,3,4,5]);
console.log(total);
</script>
</html>
