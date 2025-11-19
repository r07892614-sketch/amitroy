let time = 60;

// Redirect Link
const redirectURL = "https://t.me/+RDVKduEn_qpmMjdl";

document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector(".join-btn");

    btn.addEventListener("click", () => {
        window.location.href = redirectURL;
    });

    countdown();
});

function countdown() {
    const timer = document.getElementById("timer");
    timer.textContent = time;

    if (time > 0) {
        time--;
        setTimeout(countdown, 1000);
    }
}
