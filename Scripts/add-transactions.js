
// document.getElementById("new-transactions-Modal").innerHTML =
// `
// <!---------------   Add Transactions Modale    -------------------->

//     <div class="add-transactions-modal" id="new-transactions-Modal">
//       <!--  Transactions Model  -->
//       <div class="modal-content">
//         <span class="close">&times;</span>
//         <span class="add-transaction-header">Add Transaction</span>
//         <form id="add-transaction-form">
//           <div class="tran-top-section">
//             <div class="tran-type">
//               <div class="transaction-Expense">
//                 <img
//                   class="transaction-indicator"
//                   src="./assets/Icons/dropdown-icon.png"
//                   alt=""
//                 />
//                 <span>Expense</span>
//               </div>
//               <div class="transaction-Income">
//                 <img
//                   class="transaction-indicator"
//                   src="./assets/Icons/up-arrow-icon.webp"
//                   alt=""
//                 />
//                 <span>Income</span>
//               </div>
//               <div class="transaction-Transfer">
//                 <img
//                   class="transaction-indicator"
//                   src="./assets/Icons/facing arrows-icon.webp"
//                   alt=""
//                 />
//                 <span>Transfer</span>
//               </div>
//             </div>
//             <div class="tran-amount-section">
//               <img
//                 class="tran-category-icon"
//                 src="./assets/Icons/category_icons/Bills & Fees-icon.png"
//                 alt=""
//               />
//               <span class="tran-category-amount">₹294862</span>
//             </div>
//           </div>
//           <div class="tran-bottom-section">
//             <div class="time-stamp-section">
//               <div class="time-stamp-leftsection">
//                 <img
//                   class="calender-icon"
//                   src="./assets/Icons/calender-icon.webp"
//                   alt=""
//                 />
//                 <span class="time-stamp-today">Today</span>
//               </div>
//               <div>
//                 <span class="time-stamp-rightsection">Time</span>
//               </div>
//             </div>
//             <div class="tran-banks-section">
//               <div>
//                 <button class="down-option">▾</button>
//                 <button class="option1">HDFC</button>
//                 <button class="option2">SBI</button>
//                 <button class="option3">UCO</button>
//                 <button class="option4">Wallet</button>
//                 <button class="add-option">+</button>
//               </div>
//             </div>
//             <div class="tran-description">
//               <input
//                 type="text"
//                 id="tran-title"
//                 name="tran-title"
//                 placeholder="Title"
//                 required
//               />
//               <input
//                 type="text"
//                 id="tran-notes"
//                 name="tran-notes"
//                 placeholder="Notes"
//               />
//               <a href="http://127.0.0.1:5500/Transactions.html">
//                 <button class="tran-addtransaction">Add Transaction</button>
//               </a>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
// `;

// Get the modal, button, and close elements
const transactions_modal = document.getElementById("new-transactions-dialog");
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

// Handle form submission
const form = document.getElementById('add-transaction-form');
form.addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from refreshing the page
});
let Tran_Title,Tran_Amount;
document.querySelector('.tran-addtransaction').addEventListener('click', () => {
  Tran_Title = document.getElementById("tran-title").value;
  Tran_Amount = document.querySelector('.tran-category-amount').innerHTML;
  console.log(Tran_Amount);
  console.log(Tran_Title);


document.querySelector(".transaction-details").innerHTML +=  `
<div class="one-transaction">
  <div style="display: flex; align-items: center;">
    <img class="transaction-category-icon" src="./assets/Icons/category_icons/entertainment-icon.png" alt="">
    <span class="transaction-title">${Tran_Title}</span>
  </div>
  <div>
    <span class="transaction-amount">
      <img  class="negitive-icon" src="./assets/Icons/dropdown-icon.png" alt="">
      ${Tran_Amount}</span>
  </div>
</div>
`;
});
