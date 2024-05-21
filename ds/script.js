// THIS CONTENT IS FROM DESIGN SYSTEM... BASE SCRIPT.JS FILE //
// I'm trying to move the carousel scripts to their own file to organize
// import { slider1 } from "/script/splide.js";
// let val = slider1();

/* Segment Button Interaction */
(function (document) {
  var a_segbtn_wrap = document.querySelectorAll(".a-segbtn-wrap a");
  for (var item of a_segbtn_wrap) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      this.parentElement.querySelector("a.active").classList.remove("active");
      this.classList.add("active");
    });
  }
})(document);

/* Dialog */
// THE FOLLOWING IS TO OPEN/CLOSE DIALOGS, TAKEN FROM A 3RD PARTY EXAMPLE
// Get all dialog elements
const dialogs = document.querySelectorAll("dialog");
// Get the corresponding show buttons for each dialog
const showButtons = document.querySelectorAll("dialog + button");

// Loop through each dialog and add event listeners
dialogs.forEach((dialog, index) => {
  // Check if the show button exists
  if (showButtons[index]) {
    // "Show the dialog" button opens the dialog modally
    showButtons[index].addEventListener("click", () => {
      dialog.showModal();
    });
  }
  // Check if the dialog exists
  if (dialog) {
    // "Close" button closes the dialog
    const closeButton = dialog.querySelector(".btn-dialog-close");
    if (closeButton) {
      closeButton.addEventListener("click", () => {
        dialog.close();
      });
    }
    // Close the dialog when clicking outside of it
    dialog.addEventListener("click", (e) => {
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    });
  }
});

/* CUSTOM DROPDOWN */
// THE FOLLOWING IS FOR DROPDOWNS, TAKEN FROM A 3RD PARTY EXAMPLE, NOT WORKING YET
/* When the user clicks on the button, toggle between hiding and showing the dropdown content */
function openDrop() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

/* SPLIDE CAROUSEL splidejs.com */

function slider1() {
  let splides = $(".slider1");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 1,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "slide", // 'loop' or 'slide'
      gap: "2em", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: "slider", // 'slider' or false
      speed: 300, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: true, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
        },
        767: {
          // Mobile Landscape
        },
        479: {
          // Mobile Portrait
        },
      },
    }).mount();
  }
}
slider1();

// SPLIDE: Image Carousel
document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel").mount();
});

// SPLIDE: Main Carousel (Referenced from Thumbnail Bar)
document.addEventListener("DOMContentLoaded", function () {
  var main = new Splide("#main-carousel", {
    type: "fade",
    rewind: true,
    pagination: false,
    arrows: false,
  });

  // SPLIDE: Thumbnail Bar
  var thumbnails = new Splide("#thumbnail-carousel", {
    fixedWidth: 100,
    fixedHeight: 60,
    gap: 10,
    rewind: true,
    pagination: false,
    isNavigation: true,
    breakpoints: {
      600: {
        fixedWidth: 60,
        fixedHeight: 44,
      },
    },
  });

  main.sync(thumbnails);
  main.mount();
  thumbnails.mount();
});

// SPLIDE: Gallery
var splide = new Splide("#gallery-carousel", {
  pagination: false,
});

var thumbnails = document.getElementsByClassName("thumbnail");
var current;

for (var i = 0; i < thumbnails.length; i++) {
  initThumbnail(thumbnails[i], i);
}

function initThumbnail(thumbnail, index) {
  thumbnail.addEventListener("click", function () {
    splide.go(index);
  });
}

splide.on("mounted move", function () {
  var thumbnail = thumbnails[splide.index];

  if (thumbnail) {
    if (current) {
      current.classList.remove("is-active");
    }

    thumbnail.classList.add("is-active");
    current = thumbnail;
  }
});

splide.mount();
