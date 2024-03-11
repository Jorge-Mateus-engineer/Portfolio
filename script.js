const container = document.querySelector(".img_container");
const jwtDesktop = document.querySelector(".jwt-desktop");
const jwtLaptop = document.querySelector(".jwt-laptop");

const codeUnderline = document.getElementById("code_underline");
const databaseCheckmark = document.getElementById("checkmark");
const databaseDenied = document.getElementById("deniedDB");
const serverTop = document.getElementById("server_one");
const serverMiddle = document.getElementById("server_two");
const serverBottom = document.getElementById("server_three");

const desktop = document.querySelector(".desktop");
const desktopSend = document.getElementById("Send_Button");
const desktopConfirmation = document.getElementById("Confirmation_Box");

const laptop = document.querySelector(".laptop");
const laptopDownload = document.getElementById("Download_Button");
const laptopConfirmation = document.getElementById("Confirmation_Laptop");

const phoneOne = document.querySelector(".phone-one");
const phoneSignUp = document.getElementById("sign_up");
const phoneError = document.getElementById("server_error");

let desktopAnimating = false;
let laptopAnimating = false;
let phoneOneAnimating = false;

const animateRequest = function (
  jwtIcon,
  initialXPercent,
  initialYPercent,
  deny
) {
  setTimeout(() => {
    if (!deny) {
      databaseCheckmark.style.opacity = 1;
    } else {
      databaseDenied.style.opacity = 1;
    }
  }, 1200);

  jwtIcon.animate(
    [
      {
        top: `${initialYPercent}%`,
        left: `${initialXPercent}%`,
        opacity: 1,
      },
      {
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        opacity: 0,
      },
    ],
    { duration: 1200, fill: "forwards" }
  );

  codeUnderline.animate(
    [
      {
        opacity: 0,
      },
      { opacity: 1 },
    ],
    { duration: 500, iterations: 4, delay: 1200 }
  );

  serverTop.animate(
    {
      fill: ["#8CFF00", "#f4ffe6", "#8CFF00"],
      easing: "ease-in-out",
    },
    { duration: 900, delay: 1200 }
  );

  serverMiddle.animate(
    {
      fill: ["#8CFF00", "#f4ffe6", "#8CFF00"],
      easing: "ease-in-out",
    },
    { duration: 900, delay: 1500 }
  );

  serverBottom.animate(
    {
      fill: ["#8CFF00", "#f4ffe6", "#8CFF00"],
      easing: "ease-in-out",
    },
    { duration: 900, delay: 1800 }
  );

  jwtIcon.animate(
    [
      {
        top: "50%",
        left: "50%",
        transform: `translate(-50%, -50%)`,
        opacity: 1,
      },
      {
        top: `${initialYPercent}%`,
        left: `${initialXPercent}%`,
        opacity: 0,
      },
    ],
    { duration: 1200, fill: "forwards", delay: 3700 }
  );
};

/*Animaciones pc escritorio */

desktop.addEventListener("mouseenter", () => {
  /* desktopAnimating: Para prevenir multiples animaciones si ya se esta ejuecutando una */
  if (!desktopAnimating) {
    desktopSend.style.opacity = 1;
  }
  desktopConfirmation.style.opacity = 0;
});

desktop.addEventListener("mouseleave", () => {
  desktopSend.style.opacity = 0;
  desktopConfirmation.style.opacity = 0;
});

desktop.addEventListener("click", () => {
  desktopAnimating = true;
  desktopSend.style.opacity = 0;
  setTimeout(() => {
    desktopConfirmation.style.opacity = 1;
    databaseCheckmark.style.opacity = 0;
    desktopAnimating = false;
  }, 4500);

  animateRequest(jwtDesktop, "9.5", "12", false);
});

/*Animaciones laptop */

laptop.addEventListener("mouseenter", () => {
  if (!laptopAnimating) {
    laptopDownload.style.opacity = 1;
  }
  laptopConfirmation.style.opacity = 0;
});

laptop.addEventListener("mouseleave", () => {
  laptopDownload.style.opacity = 0;
  laptopConfirmation.style.opacity = 0;
});

laptop.addEventListener("click", () => {
  laptopAnimating = true;
  laptopDownload.style.opacity = 0;

  setTimeout(() => {
    laptopConfirmation.style.opacity = 1;
    databaseDenied.style.opacity = 0;
    laptopAnimating = false;
  }, 4500);

  animateRequest(jwtLaptop, "80", "76", true);
});

/*Animaciones primer celular */

phoneOne.addEventListener("mouseenter", () => {
  if (!phoneOneAnimating) {
    phoneSignUp.style.opacity = 1;
  }
  phoneError.style.opacity = 0;
});

phoneOne.addEventListener("mouseleave", () => {
  phoneSignUp.style.opacity = 0;

  phoneError.style.opacity = 0;
});

phoneOne.addEventListener("click", () => {
  phoneOneAnimating = true;
  phoneSignUp.style.opacity = 0;

  setTimeout(() => {
    phoneError.style.opacity = 1;
    databaseDenied.style.opacity = 0;
    phoneOneAnimating = false;
  }, 4500);

  animateRequest(jwtLaptop, "12", "72", true);
});
