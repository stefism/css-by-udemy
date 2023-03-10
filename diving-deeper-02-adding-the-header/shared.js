const backdrop = document.querySelector(".backdrop");
const modal = document.querySelector(".modal");
const planButtons = document.querySelectorAll(".plan button");
const modalNoButton = document.getElementsByClassName(
  "modal__action modal__action--negative"
)[0];
const toggleButton = document.querySelector(".toggle-button");
const mobileNav = document.querySelector(".mobile-nav");

console.log("modalNoButton", modalNoButton);
console.log("planButtons", planButtons);

planButtons.forEach((b) => {
  b.addEventListener("click", () => {
    modal.style.display = "block";
    backdrop.style.display = "block";
  });
});

modalNoButton.addEventListener("click", () => {
  modal.style.display = "none";
  backdrop.style.display = "none";
});

toggleButton.addEventListener("click", () => {
  console.log("mobileNav");
  console.dir(mobileNav);
  if (!mobileNav.classList.contains("animate__animated")) {
    mobileNav.classList.add("animate__animated");
  }

  if (mobileNav.style.display == "block") {
    mobileNav.classList.remove("animate__lightSpeedInLeft");
    mobileNav.classList.add("animate__bounceOutLeft");

    setTimeout(() => {
      mobileNav.style.display = "none";
    }, 1000);
  } else if (
    mobileNav.style.display == "none" ||
    mobileNav.style.display == ""
  ) {
    mobileNav.classList.remove("animate__bounceOutLeft");
    mobileNav.classList.add("animate__lightSpeedInLeft");
    mobileNav.style.display = "block";
  }
});
