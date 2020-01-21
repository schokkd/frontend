var button = document.querySelector("button");
var confirmationText = document.querySelector("#formtext");
var form = document.querySelector("form");

console.log("sup");

function bevestiging() {
    confirmationText.classList.remove("hidden");
    form.classList.add("hidden");
                      }
button.addEventListener("click", bevestiging);