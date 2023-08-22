document.addEventListener("DOMContentLoaded", function () {
  const darkMode = document.querySelector("#darkMode");
  const body = document.querySelector("body");

  darkMode.addEventListener("click", function () {
    body.classList.toggle("darkMode");

    if (body.classList.contains("darkMode")) {
      darkMode.querySelector("i").classList.replace("fa-moon", "fa-sun");
      darkMode.setAttribute("data", "Dark Mode");
    } else {
      darkMode.querySelector("i").classList.replace("fa-sun", "fa-moon");
      darkMode.setAttribute("data", "Light Mode");
    }
  });
});
