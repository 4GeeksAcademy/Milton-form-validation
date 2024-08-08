let inputs = document.querySelectorAll(".form-control");
let btnSubmit = document.querySelector("#btn-submit");
let alert = document.querySelector(".alert");
let btnCancel = document.querySelector("#btn-cancel");

let controlFrom = (e) => {
  e.preventDefault();
};
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  let valaditons = 0;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].tagName === "SELECT" && inputs[i].value === "Pick a state") {
      inputs[i].style.backgroundColor = "rgb( 255, 173, 173)";
    } else {
      if (inputs[i].value === "") {
        alert.style.display = "block";
        inputs[i].style.backgroundColor = " rgb( 255, 173, 173  )";
      } else {
        valaditons++;
        inputs[i].style.backgroundColor = "white";
      }
    }
  }
  if (valaditons === 9) {
    alert.style.display = "none";
  }
});

btnCancel.addEventListener("click", () => {
  // location.reload();
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].tagName === "SELECT") {
      inputs[i].value = "Pick a state";
      inputs[i].style.backgroundColor = "white";
    } else {
      inputs[i].style.backgroundColor = "white";
      inputs[i].value = "";
      alert.style.display = "none";
    }
  }
});
