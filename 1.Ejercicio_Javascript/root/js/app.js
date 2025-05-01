document.addEventListener("DOMContentLoaded", function () {
  // JavaScript Code (script.js)
  // TODO: Fill in the code below
  // 1. Get the button with ID "revealButton" and assign it to the variable "revealButton"
  const revealButton = document.getElementById("revealButton");
  // 2. Get the div with ID "hiddenContent" and assign it to the variable "hiddenContent"
  const hiddenContent = document.getElementById("hiddenContent");
  // 3. Get the form with ID "sampleForm" and assign it to the variable "sampleForm"
  const sampleForm = document.getElementById("sampleForm");
  // 4. Get the element with ID "formMessage" and assign it to the variable "formMessage"
  const formMessage = document.getElementById("formMessage");

  // 5. Add a click event listener to "revealButton"
  //    - When clicked, set the display style of "hiddenContent" to 'block'
  if (revealButton && hiddenContent) {
    revealButton.addEventListener("click", function () {
      hiddenContent.style.display = "block";
    });
  }
  // 6. Add a submit event listener to "sampleForm"
  if (sampleForm && formMessage) {
    sampleForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const nameInput = document.getElementById("name");
      const ageInput = document.getElementById("age");
      let isValid = true;
      if (nameInput.value.length < 8) {
        alert("please complete your name");
        isValid = false;
      }
      const ageParse = parseInt(ageInput.value);
      if (ageParse < 4 || ageParse > 99 || isNaN(ageParse)) {
        alert("plase enter a correct age");
        isValid = false;
      }

      if (!isValid) {
        alert("invalid input, please check your name and age");
      } else {
        formMessage.style.display = "block";
      }
    });
  }
  //    - Prevent the default form submission behavior
  //    - Get the input elements with IDs "name" and "age" and assign them to the variables "nameInput" and "ageInput"
  //    - Check if the length of the value in "nameInput" is greater than 8 (inclusive)
  //    - Check if the value in "ageInput" is between 4 and 99 (inclusive)
  //    - If true, set the display style of "formMessage" to 'block'
  //    - If false, display an alert with the message "Invalid input. Please check your name and age."
});
