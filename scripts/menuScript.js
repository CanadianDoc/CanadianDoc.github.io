document.addEventListener("DOMContentLoaded", function () {
	const menuIcon = document.querySelector(".menuIcon");
	const navMenu = document.querySelector(".navMenu");

	menuIcon.addEventListener("click", () => {
		menuIcon.classList.toggle("active");
		navMenu.classList.toggle("active");
	});

	document.querySelectorAll(".navLink").forEach((n) =>
		n.addEventListener("click", () => {
			menuIcon.classList.remove("active");
			navMenu.classList.remove("active");
		})
	);
});
