<script>
//country data in string array format
var countries = ["Australia","France","India","Japan","United States"];
 
//This method calls on button click
function dynamicDropdownList(){
 
    var dropdown = document.createElement("select");
    for(var i=0;i<countries.length;i++){     
        var opt = document.createElement("option"); 
        opt.text = countries[i];
        opt.value = countries[i];
        dropdown.options.add(opt);      
    }
     
    //Load the dynamically created dropdown in container
    var container=document.getElementById("dropdown-container");
    container.appendChild(dropdown);
}
 
</script>
