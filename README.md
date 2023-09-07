Masks - Animated Poem
Description
Masks is an animated poem created by Rashida. This project utilizes custom fonts and does not rely on any frameworks. It incorporates an Intersection Observer that calls objects by the new section scroll.

Installation
To run the Masks project locally, please follow these steps:

Clone the repository to your local machine:
Copy
git clone https://github.com/RStrozier/masks-animated-poem.git
Navigate to the project directory:
Copy
cd masks-animated-poem
Open the index.html file in your preferred web browser.
Usage
Once you have the project running in your web browser, you can interact with the animated poem as follows:

Scroll: As you scroll through the webpage, the Intersection Observer triggers the animation of different objects based on the new sections that come into view.
Customization
If you would like to customize the animated poem, you can follow these guidelines:

Fonts
The project uses custom fonts to enhance the visual appeal of the poem. To change the fonts, follow these steps:

Locate the font files in the project directory.

Replace the font files with your desired fonts. Make sure to keep the same file names and formats.

Open the CSS file (styles.css) located in the project directory.

Locate the font declarations and update the font names accordingly:

css
Copy
@font-face {
  font-family: 'CustomFontName';
  src: url('path/to/custom-font.woff2') format('woff2'),
       url('path/to/custom-font.woff') format('woff');
  /* Add additional font formats if necessary */
}

/* Update font usage in styles */
body {
  font-family: 'CustomFontName', sans-serif;
}
Animation Behavior
If you wish to modify the animation behavior triggered by the Intersection Observer, you can make changes to the JavaScript code. Follow these steps:

Open the script.js file located in the project directory.

Locate the Intersection Observer setup:

javascript
Copy
const observer = new IntersectionObserver((entries) => {
  // Perform actions based on intersections
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Trigger animation for the specific section
      // Add your custom animation logic here
    }
  });
});

// Specify the sections to observe
const sections = document.querySelectorAll('section');

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
Customize the animation logic within the if (entry.isIntersecting) block. You can add your own animations or modify existing ones to suit your needs.

Save the changes and refresh the webpage to see the updated animation behavior.

Credits
Your Name ↗ - Creator and developer of the Masks animated poem.
License
This project is licensed under the MIT License. Feel free to modify and use it according to your needs.

Enjoy the animated poem experience!
