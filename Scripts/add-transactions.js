 // Get the modal, button, and close elements
 const modal = document.getElementById("new-transactions-Modal");
 const openButton = document.querySelector(".add-transactions-button");
 const closeButton = document.querySelector(".close");

 // When the user clicks the button, open the modal
   openButton.onclick = function() {
   modal.style.display = "flex";
 }

 // When the user clicks on <span> (x), close the modal
 closeButton.onclick = function() {
   modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == modal) {
     modal.style.display = "none";
   }
 }

 // Handle form submission
 const form = document.getElementById("add-transaction-form");
 form.onsubmit = function(event) {
   event.preventDefault(); // Prevent form from submitting traditionally

   // Get form data
   const name = document.getElementById("tran-title").value;


   // Display data or perform further actions
   alert(`Name: ${name}`);

   // Close the modal after submission
   modal.style.display = "none";
 }
