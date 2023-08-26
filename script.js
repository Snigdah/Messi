const openDialogButton = document.getElementById("openDialog");
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];
const approveBtn = document.getElementById("approveBtn");
const denyBtn = document.getElementById("denyBtn");

openDialogButton.addEventListener("click", () => {
  modal.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

approveBtn.addEventListener("click", () => {
  // Perform actions when "Approve" is clicked
  modal.style.display = "none";
});

denyBtn.addEventListener("click", () => {
  // Perform actions when "Deny" is clicked
  modal.style.display = "none";
});
