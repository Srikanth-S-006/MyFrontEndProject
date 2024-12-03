const primaryForm = document.getElementById("primaryForm");
const secondaryOption = document.getElementById("secondaryOption");
const secondaryForm = document.getElementById("secondaryForm");
const footerArea = document.getElementById("footerArea");
const logInBarWithPara = document.getElementById("logInBarWithPara");
const google_mail_Btn = document.getElementById("google_mail_Btn");
const cancelBtn = document.getElementById("cancelBtn");
const fixedPosition = document.getElementById("fixedPosition");
// Accounts options
const personalId = document.getElementById("personal");
const agentId = document.getElementById("agent");
const personalLabel = document.getElementById("personalLabel");
const agentLabel = document.getElementById("agentLabel");
const bizAccountSection = document.getElementById("bizAccountSection");
const sliderBackground = document.getElementById("sliderBackground");

function switchAccountToBiz() {
  agentLabel.style.backgroundImage = "linear-gradient(93deg, #f0772c, #f95776)";
  agentLabel.style.color = "#ffffff";
  personalLabel.style.backgroundImage = "none";
  personalLabel.style.color = "#1f1f1fb7";
  primaryForm.classList.add("hide");
  logInBarWithPara.classList.add("hide");
  google_mail_Btn.classList.add("hide");
  footerArea.classList.add("hide");
  bizAccountSection.classList.remove("hide");
  secondaryForm.classList.add("hide");
  sliderBackground.classList.add("hide");
  cancelBtn.style.display = "none";
}
agentId.addEventListener("click", switchAccountToBiz);
function switchAccountToPersonal() {
  personalLabel.style.color = "#ffffff";
  personalLabel.style.backgroundImage =
    "linear-gradient(93deg, #53b2fe, #065af3)";
  agentLabel.style.backgroundImage = "none";
  agentLabel.style.color = "#1f1f1fb7";
  bizAccountSection.classList.add("hide");
  primaryForm.classList.remove("hide");
  logInBarWithPara.classList.remove("hide");
  footerArea.classList.remove("hide");
  sliderBackground.classList.remove("hide");
  cancelBtn.style.display = "flex";
  footerArea.style.marginTop = "155px";
  secondaryOption.addEventListener("click", function (options) {
    options = "click";
    if (options === "click") {
      footerArea.style.marginTop = "270px";
    }
  });
}
personalId.addEventListener("click", switchAccountToPersonal);

const giveAlternateOption = () => {
  primaryForm.classList.add("hide");
  secondaryForm.classList.remove("hide");
  footerArea.style.marginTop = "205px";
};
secondaryOption.addEventListener("click", giveAlternateOption);

function removeLogInContainer() {
  fixedPosition.classList.add("hide");
}
function checkAndShowLoginPopup() {
  if (!sessionStorage.getItem("loginPopupShown")) {
    fixedPosition.classList.remove("hide");
    sessionStorage.setItem("loginPopupShown", "true");
  }
}
cancelBtn.addEventListener("click", removeLogInContainer);
const loginButton = document
  .getElementById("loginButton")
  .addEventListener("click", function () {
    fixedPosition.classList.remove("hide");
  });
checkAndShowLoginPopup();