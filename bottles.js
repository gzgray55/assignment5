/*script for p id="demo11" */
	alert("bottles works!");

	var txt="";
	var i=99;
	function myBottles(){	
		while (i>0){
		txt += i +" bottles of beer on the wall..."+i+" bottles of beer. Take one down and pass it around... <br>";
		i--;
	}
	document.getElementById("demo11").innerHTML = txt;
	//return(txt)
}
console.log(myBottles());

/*script for p id="demo12" */
var text="";
var a = 99;
function myBeer(){
	do{
		text+="<br>The number of beers left is "+a;
		a--;
	}
	while (a>0)
	//return(text);
	document.getElementById("demo12").innerHTML = text;
}
console.log(myBeer());
