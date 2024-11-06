function soma() {
	let left = document.getElementById("area_texto_left").value;
	let right = document.getElementById("area_texto_right").value;
	document.getElementById("area_texto_answer").innerHTML = String(Number(left) + Number(right));
}