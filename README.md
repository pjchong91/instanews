# Project 2: Instanews 
* Author: P. Chong, WDP Student 2018 Q2.

## Description and Objective: 
- Build a web page that utilizes the New York Times API to display stories under a chosen category.  The webpage should be reactive in mobile, tablet, and desktop and have UI that transitions between stories not-shown and stories shown.  
- The project should use minified CSS and JS files.

## Using:
- HTML, CSS, Javascript, Gulp

## Questions Encountered and Learning Acquired:
*Q - What is the purpose of Gulp?
- Gulp can be used to download useful node packages.  Some of the packages we have used have functionalities that allow us to minify certain files from our project (ie. remove white space from our files), do error checking (ESLINT), rename/move files, etc.  We have also enabled browser-sync, which automatically refreshes the browser when certain 'watched' files are altered and saved.

*Q - What is Ajax?
- Ajax is a method made available through jQuery.  The 'GET' method can be used to retrieve information from a parsed JSON file.  The New York Times API produces a JSON file when a parameter(selection) is specified.  Using .done() after .ajax allows data to manipulated and displayed (ie. extracting articles, images, and abstracts).

*Introduction to SASS/SCSS:
- For this project we were introduced to SASS/SCSS which functions as a CSS pre-processor.  SCSS allows for easier and more intuitive writing of CSS code due to the ability of SCSS to nest element descriptions and to create variables for attributes that are used repeatedly.  In addition, SCSS permits the usage of 'partials' which can be imported to the main SCSS file.  This is particularly useful for creating partials containing variables, mixins, and fonts.

*CSS Animations:
- Through CSS, elements on the page can be animated.  Adding animation improves the aesthetic and and feeling of the page by creating smoother transitions and liveliness.  For our project, we animated the transition of the logo such that the logo is resized and moved from the center of the page to the top of the page.  I chose to incoporate css animations from Animista to display the abstracts.

*Using Javascript Methods:
- Some sections made available by the NYT API return numerous results.  The aim for this project was to return 12 stories.  Initially, I had an 'if'-statement to select stories with images and a counter to allow for only 12 stories to be returned.  To improve the project, I rewrote my javascript to utilize the .filter() and .slice() methods.  Using javascript methods rather than anonymous functions increases another developer's understanding of the code's function without requiring in-depth comments.

## Goals for Future Improvement:
- Continue to practice and increase familiarity with SCSS.
- Increasingly modify incorporated libraries to suit the designer's vision for the project.  For this project, I found it difficult to manipulate the Selectric files to maintain static width of the 'select' element.
