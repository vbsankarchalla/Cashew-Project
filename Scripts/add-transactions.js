 // Get the modal, button, and close elements
 const transactions_modal = document.getElementById("new-transactions-Modal");
 const openButton = document.querySelector(".add-transactions-button");
 const closeButton = document.querySelector(".close");

 // When the user clicks the button, open the modal
   openButton.onclick = function() {
    transactions_modal.style.display = "flex";
 }

 // When the user clicks on <span> (x), close the modal
 closeButton.onclick = function() {
  transactions_modal.style.display = "none";
 }

 // When the user clicks anywhere outside of the modal, close it
 window.onclick = function(event) {
   if (event.target == transactions_modal) {
    transactions_modal.style.display = "none";
   }
 }
 

  // Get references to the dialog and buttons
  const dialog = document.getElementById('AccouontDialog');
  const openDialogBtn = document.getElementById('AccountDialogoption1');
  const closeDialogBtn = document.getElementById('closeDialogBtn');

    // Open the dialog when the "Open Dialog" button is clicked
    openDialogBtn.addEventListener('click', () => {
      dialog.showModal(); // Opens the dialog as a modal
    });

    // Close the dialog when the "Close" button is clicked
    closeDialogBtn.addEventListener('click', () => {
      dialog.close(); // Closes the dialog
    });