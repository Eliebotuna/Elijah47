import competencesJson from "../../data/competences.json" assert { type: "json" };

const competences = competencesJson;

console.log(competences.length);

const competencesDiv = document.querySelector(".data-competences");

for (let i = 0; i < competences.length; i++) {
	const div = document.createElement("div");
	div.classList.add("box");
	div.innerHTML = `
    <div> <img src="${competences[i].icon}" /> </div>
	<h3> ${competences[i].title} </h3>
	<p> ${competences[i].desc} </p>
    `;
	competencesDiv.appendChild(div);
}

const menuBtn = document.querySelector("#menu-mobile");

document.querySelectorAll(".menu a").forEach((a) => {
	a.addEventListener("click", function (event) {
		menu.classList.remove("is-visible");
		overlay.classList.remove("is-visible");
	});
});

const menu = document.querySelector("#menu");
const overlay = document.querySelector(".overlay");

menuBtn.addEventListener("click", function (event) {
	menu.classList.toggle("is-visible");
	overlay.classList.toggle("is-visible");
});

/*
Affichier la barre de progression au stroll

*/

const scrollProgress = document.getElementById("scroll-progress");
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
	const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
	scrollProgress.style.width = `${(scrollTop / height) * 100}%`;
});

/*
Animation d'éléments apparaissant au scroll
*/

const observer = new IntersectionObserver((entries) => {
	for (const entry of entries) {
		// console.log(entry.target, entry.isVisible, entry.isIntersecting);
		if (entry.isIntersecting) {
			entry.target.classList.add("is-animated");
			entry.target.animate(
				[
					{ transform: "scale(0.97)", opacity: 0.5 },
					{ transform: "scale(1)", opacity: 1 }
				],
				{
					duration: 500,
					iterations: 1,
					fill: "both"
				}
			);
			// observer.unobserve(entry.target); // pour observer une seule fois
		}
	}
});

document.querySelectorAll(".animated-on-scroll").forEach((el) => {
	observer.observe(el);
});
