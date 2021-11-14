fetch("https://car-data.p.rapidapi.com/cars/types", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "car-data.p.rapidapi.com",
		"x-rapidapi-key": "f11be51242msh61b23021d1395ebp1de438jsn33ad5f25234c"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});