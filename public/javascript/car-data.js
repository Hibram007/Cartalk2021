const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open("GET", "https://car-data.p.rapidapi.com/cars/types");
xhr.setRequestHeader("x-rapidapi-host", "car-data.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "f11be51242msh61b23021d1395ebp1de438jsn33ad5f25234c");

xhr.send(data);