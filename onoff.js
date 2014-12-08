alert("onoff works!");
function changeImage(){
	var image=document.getElementById("myImage");
	if (image.src.match("bulbon")) {
		image.src="bulboff.png";
	} else {
		image.src="bulbon.png"
	}
}
function changeColor(){
	var x=document.getElementById("demo");
	if (x.style.color.match("red")){
		x.style.color="black";
	} else
		x.style.fontSize="25.px";
		x.style.color="red";
		x.style.fontFamily="arial";
}
function myInput(){
	var y, text;
	y=document.getElementById("numb").value;
		if (isNaN(y) || y < 1 || y > 10){
			text="input not valid"
		} else{
			text="input OK"
		}
		document.getElementById("demo2").innerHTML = text;
	}
