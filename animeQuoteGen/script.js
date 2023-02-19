const head = document.querySelector("h1");
const subhead = document.querySelector("h2");
const para = document.querySelector("p");
fetch("https://animechan.vercel.app/api/random")
	.then((response) => response.json())
	.then((quote) => {
		console.log(quote);
		head.textContent = `Anime: ${quote.anime}`;
		subhead.textContent = `Character: ${quote.character}`;
		para.textContent = `Quote: ${quote.quote}`;
	});
function reload() {
	window.location.reload();
}
