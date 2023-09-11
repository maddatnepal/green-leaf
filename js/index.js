let current = 0;
let typingInProgress = false; // Flag to track typing animation progress
const fadeDuration = 300; // Duration of the fade-in/fade-out animation in milliseconds (adjust as needed)

function changeImage(direction) {
  if (typingInProgress) {
    // If typing animation is in progress, return early
    return;
  }
  const array = [
    {
      src: "https://ocmcm.karnali.gov.np/sites/ocmcm/files/2_0.jpg",
      title:
        "कान्जिरोवा हिमालको काखमा अवस्थित, समुद्री सतहभन्दा करिब ३९०० मिटरको उचाइमा ",
    },
    {
      src: "https://ocmcm.karnali.gov.np/sites/ocmcm/files/Jajarkot%20Darbaar_2.jpg",
      title:
        "जाजरकोट जिल्लाको सदरमुकाममा अवस्थित ऐतिहासिक महत्व र कलात्मकता बोकेको यो",
    },
    {
      src: "https://ocmcm.karnali.gov.np/sites/ocmcm/files/Bulbule%20Lake_0.jpg",
      title:
        "बुलबुले ताल कर्णाली प्रदेशको राजधानी सुर्खेतको सदरमुकाम बिरेन्द्रनगर मा अवस्थित छ । ",
    },
  ];
  const imageTag = document.getElementById("slider-image");
  const titleTag = document.getElementById("slider-title");

  // Add a class for the fade-out animation
  imageTag.classList.add("fade-out");

  setTimeout(() => {
    if (direction == "left") {
      if (current === 0) {
        current = array.length - 1;
        imageTag.src = array[array.length - 1]?.src;
        titleTag.innerHTML = "";
        startTyping(array[array.length - 1]?.title, 0);
      } else {
        imageTag.src = array[current - 1]?.src;
        titleTag.innerHTML = "";
        startTyping(array[current - 1]?.title, 0);
        current -= 1;
      }
    } else {
      if (array.length - 1 == current) {
        current = 0;
        imageTag.src = array[0]?.src;
        titleTag.innerHTML = "";
        startTyping(array[0]?.title, 0);
      } else {
        imageTag.src = array[current + 1]?.src;
        titleTag.innerHTML = "";
        startTyping(array[current + 1]?.title, 0);
        current += 1;
      }
    }

    // Remove the class for the fade-out animation
    imageTag.classList.remove("fade-out");
  }, fadeDuration);
}

function startTyping(text, index) {
  const titleTag = document.getElementById("slider-title");
  typingInProgress = true; // Set the flag to true when typing starts
  if (index < text.length) {
    titleTag.innerHTML += text.charAt(index);
    setTimeout(function () {
      startTyping(text, index + 1);
    }, 5); // Adjust typing speed (milliseconds per character)
  } else {
    typingInProgress = false; // Set the flag to false when typing finishes
  }
}

// Initial slide-in animation
changeImage("left");



 // Get all the <li> elements
 const listItems = document.querySelectorAll(".title-div ul li");

 // Add a click event listener to each <li>
 listItems.forEach((li) => {
   li.addEventListener("click", function () {
     // Reset background color for all <li> elements
     listItems.forEach((item) => {
       item.style.backgroundColor = "transparent";
     });

     // Set the background color of the clicked <li> to red
     this.style.backgroundColor = "var(--red)";
   });
 });

// drawer style

const drawerToggle = document.getElementById('drawer-toggle');
const drawer = document.getElementById('drawer');

// Function to handle toggling the body's overflow
function toggleBodyOverflow() {
  if (drawerToggle.checked) {
    document.body.style.overflow = 'hidden'; // Disable scrolling on the body
  } else {
    document.body.style.overflow = 'auto'; // Enable scrolling on the body
  }
}

// Add an event listener to the drawerToggle element
drawerToggle.addEventListener('change', toggleBodyOverflow);

// popup image style
  // Function to open the popup
  function openPopup() {
    const popupContainer = document.querySelector('.popup-container');
    popupContainer.style.display = 'flex';
}

// Function to close the popup when clicked outside the image
document.querySelector('.popup-container').addEventListener('click', function(event) {
    if (event.target === this) {
        closePopup();
    }
});

// Function to close the popup
function closePopup() {
    const popupContainer = document.querySelector('.popup-container');
    document.getElementsByTagName('body')[0].style.overflowY='scroll';
    popupContainer.style.display = 'none';
}

// Open the popup when the page loads
window.onload = openPopup;