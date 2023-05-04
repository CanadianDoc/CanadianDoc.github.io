function scrollToDestination(destination) {
	const navbar = document.querySelector(".navbar");
	const navbarHeight =
		navbar.getBoundingClientRect().height;
	const destinationTop =
		destination.offsetTop - navbarHeight; // get the top position of the destination section
	const scrollOptions = {
		top: destinationTop, // scroll to the top of the destination section
		behavior: "smooth", // enable smooth scrolling
		duration: 1000,
	};

	window.scrollTo(scrollOptions);
}

document.addEventListener("DOMContentLoaded", function () {
	const logoLink = document.querySelector(".navLogo");
	const introDestination = document.querySelector(".intro");

	const skillLink = document.querySelector("#skills");
	const skillDestination =
		document.querySelector(".skills");

	const projectLink = document.querySelector("#projects");
	const projectDestination =
		document.querySelector(".projects");

	const aboutMeLink = document.querySelector("#aboutMe");
	const aboutMeDestination =
		document.querySelector(".aboutMe");

	const contactMeLink =
		document.querySelector("#contactMe");
	const contactMeDestination =
		document.querySelector(".contactMe");

	logoLink.addEventListener("click", (event) => {
		event.preventDefault(); // prevent the default link behavior
		scrollToDestination(introDestination);
	});

	skillLink.addEventListener("click", (event) => {
		event.preventDefault(); // prevent the default link behavior
		scrollToDestination(skillDestination);
	});

	projectLink.addEventListener("click", (event) => {
		event.preventDefault(); // prevent the default link behavior
		scrollToDestination(projectDestination);
	});

	aboutMeLink.addEventListener("click", (event) => {
		event.preventDefault(); // prevent the default link behavior
		scrollToDestination(aboutMeDestination);
	});

	contactMeLink.addEventListener("click", (event) => {
		event.preventDefault(); // prevent the default link behavior
		scrollToDestination(contactMeDestination);
	});
});
