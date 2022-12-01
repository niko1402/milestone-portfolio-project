const navbar = document.getElementById("nav-top");
// Find out how far the navbar is from the top of the screen
const navPos = navbar.getBoundingClientRect().top;
// Get the section links from the navbar
const navbarLinks = document.querySelectorAll("li a");
console.log(navbarLinks);

// Add an event listener to detect scrolling, and then store the scroll position in a variable
window.addEventListener("scroll", e => {
  const scrollPos = window.scrollY;
  // If the scroll position is greater than the navbar position, add the sticky class.
  if (scrollPos > navPos) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky');
  };
  
  // Loop through links in navbar
  navbarLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    // Check if the section is currently onscreen. Add 150 to switch sections when the screen is almost showing 100% of that section
    // If so, add active class
    if (scrollPos + 150 > section.offsetTop && scrollPos + 150 < section.offsetTop + section.offsetHeight ) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
});

// Hamburger Menu
