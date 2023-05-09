const bars = document.querySelectorAll(".bar");

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Add the 'animate' class to start the animation
			entry.target.classList.add("animate");
			// Get the percentage from the data-percentage attribute
			const percentage = entry.target.dataset.percentage;
			// Set the '--percentage' CSS variable to update the width of the progress bar
			entry.target.style.setProperty(
				"--percentage",
				`${percentage}%`
			);
		}
	});
});

bars.forEach((bar) => observer.observe(bar));

const sbarElements = document.querySelectorAll(".sbar");
