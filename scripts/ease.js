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
  const aboutLink = document.querySelector(".navLink");
  const introDestination = document.querySelector(".intro");
  const aboutDestination =
    document.querySelector(".aboutMe");

  logoLink.addEventListener("click", (event) => {
    event.preventDefault(); // prevent the default link behavior
    scrollToDestination(introDestination);
  });

  aboutLink.addEventListener("click", (event) => {
    event.preventDefault(); // prevent the default link behavior
    scrollToDestination(aboutDestination);
  });
});
