const img = document.querySelector("img");
const container = document.querySelector(".container");
const input = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const genBtn = document.getElementById("generate");

let search = "cat";

input.value = search;

async function fetchImage(search) {
	// console.log(search);

	// promise based code
	// fetch(
	// 	`https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${search}`,
	// 	{ mode: "cors" }
	// )
	// 	.then(function (response) {
	// 		return response.json();
	// 	})
	// 	.then(function (response) {
	// 		img.src = response.data.images.original.url;
	// 	})
	// 	.catch((e) => {
	// 		img.textContent = e;
	// 		console.log(e);
	// 	});

	// async await code
	const response = await fetch(
		`https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${search}`,
		{ mode: "cors" }
	);
	const imgData = await response.json();
	img.src = imgData.data.images.original.url;
}
fetchImage(search);

function regenerate(e) {
	e.preventDefault();
	fetchImage(search);
}

genBtn.addEventListener("click", regenerate);

function searchNewGif(e) {
	e.preventDefault();
	if (input.value !== "") {
		search = input.value;
		fetchImage(search);
	}
}

searchBtn.addEventListener("click", searchNewGif);
