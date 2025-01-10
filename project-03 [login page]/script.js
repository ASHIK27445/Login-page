let currentIndex = 0; // Initialize the current slide index

// Function to show a specific slide
function showSlide(index) {
  const slides = document.querySelectorAll('.slideImage');
  const dots = document.querySelectorAll('.dots li');

  // Hide all slides
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });

  // Remove active class and reset dots to circular
  dots.forEach((dot) => {
    dot.classList.remove('active');
    dot.style.borderRadius = '50%'; // Circular
  });

  // Display the current slide and update the dot
  slides[index].style.display = 'block';
  dots[index].classList.add('active');
  dots[index].style.borderRadius = '5px'; // Make the active dot rectangular
}

// Add click event listeners to dots
// document.querySelectorAll('.dots li').forEach((dot, index) => {
//   dot.addEventListener('click', () => {
//     currentIndex = index; // Update the current index
//     showSlide(currentIndex); // Show the selected slide
//   });
// });


// Add hover (mouseover) event listeners to dots
document.querySelectorAll('.dots li').forEach((dot, index) => {
    dot.addEventListener('mouseover', () => {
      currentIndex = index; // Update the current index
      showSlide(currentIndex); // Show the corresponding slide
    });
  });

  function autoSlideshow() {
    const slides = document.querySelectorAll('.slideImage');
    currentIndex = (currentIndex + 1) % slides.length; // Increment slideIndex and loop back to 0
    showSlide(currentIndex);
  }
  autoSlideshow(currentIndex)

// Initially display the first slide
showSlide(currentIndex);

setInterval(autoSlideshow, 2000);