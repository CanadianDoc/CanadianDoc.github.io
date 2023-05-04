document.addEventListener("DOMContentLoaded", function () {
	const darkMode = document.querySelector("#darkMode");
	const body = document.querySelector("body");

	darkMode.addEventListener("click", function () {
		body.classList.toggle("darkMode");
		if (body.classList.contains("darkMode")) {
			darkMode
				.querySelector("i")
				.classList.replace("fa-regular", "fa-solid");
		} else {
			darkMode
				.querySelector("i")
				.classList.replace("fa-solid", "fa-regular");
		}
	});
});
