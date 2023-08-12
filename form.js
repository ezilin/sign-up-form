const password = document.getElementById([id="password"]);
const confirm = document.getElementById([id="confirm"]);

confirm.addEventListener("input", () => {
    console.log(confirm.value + " " + password.value);
    if (confirm.value != password.value)
        confirm.setCustomValidity("Passwords do not match.");
    else
        confirm.setCustomValidity("");
});