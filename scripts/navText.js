document.addEventListener("DOMContentLoaded", function () {
	const navLinks = document.querySelectorAll(".navLink");

	navLinks.forEach((link) => {
		const icon = link.querySelectorAll("i");
		const text = link.querySelector(".navText");
		icon.forEach((i) => {
			i.addEventListener("mouseenter", () => {
				text.style.display = "block";
			});
		});

		link.addEventListener("mouseleave", () => {
			text.style.display = "none";
		});
	});
});
