document.addEventListener("DOMContentLoaded", function () {
	const darkMode = document.querySelector("#darkMode");
	const body = document.querySelector("body");
	const darkModeText =
		document.querySelector("#darkModeText");

	darkMode.addEventListener("click", function () {
		body.classList.toggle("darkMode");
		if (body.classList.contains("darkMode")) {
			darkMode
				.querySelector("i")
				.classList.replace("fa-regular", "fa-solid");
			darkModeText.textContent = "DarkMode";
		} else {
			darkMode
				.querySelector("i")
				.classList.replace("fa-solid", "fa-regular");
			darkModeText.textContent = "LightMode";
		}
	});
});
