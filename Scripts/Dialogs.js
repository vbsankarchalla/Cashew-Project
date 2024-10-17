


 // Get references to the dialog and buttons
 const dialog = document.getElementById('AccouontDialog');
 const openDialogBtn1 = document.getElementById('AccountDialogoption1');
 const closeDialogBtn = document.getElementById('closeDialogBtn');

   // Open the dialog when the "Open Dialog" button is clicked
   openDialogBtn1.addEventListener('click', () => {
     dialog.showModal(); // Opens the dialog as a modal
   });

   // Close the dialog when the "Close" button is clicked
   closeDialogBtn.addEventListener('click', () => {
     dialog.close(); // Closes the dialog
   });
   // When the user clicks anywhere outside of the modal, close it
   // window.onclick = function(event) {
   //   if (event.target == dialog) {
   //     dialog.style.display = "none";
   //   }
   // }

     // Get references to the dialog and buttons
 const openDialogBtn2 = document.getElementById('AccountDialogoption2');

   // Open the dialog when the "Open Dialog" button is clicked
   openDialogBtn2.addEventListener('click', () => {
     dialog.showModal(); // Opens the dialog as a modal
   });

   // Close the dialog when the "Close" button is clicked
   closeDialogBtn.addEventListener('click', () => {
     dialog.close(); // Closes the dialog
   });

   const AddAccountDialog = document.getElementById('AddAccountDialog');
   const openAddAccDailog = document.getElementById('AddAccountDialogid');
   const closeAddAccDialogBtn = document.getElementById('close');

   openAddAccDailog.addEventListener('click',() => {
     AddAccountDialog.showModal();
   });
   closeAddAccDialogBtn.addEventListener('click',() =>{
     AddAccountDialog.close();
   });

   

   const editAccountDialog = document.getElementById("EditAccountDialog");
   const openEditAccDialogBtn = document.getElementById("editAccountBtn");
   const closeEditAccDialogBtn = document.getElementById('closeDialogBtn');

   openEditAccDialogBtn.addEventListener('click',()=>{
     editAccountDialog.showModal();
   });
   closeEditAccDialogBtn.addEventListener('click',()=>{
     editAccountDialog.close();
   })