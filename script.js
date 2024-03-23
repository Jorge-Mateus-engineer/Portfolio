const container = document.querySelector(".img_container");
const jwtDesktop = document.querySelector(".jwt-desktop");
const jwtLaptop = document.querySelector(".jwt-laptop");
const jwtPhoneOne = document.querySelector(".jwt-phone-one");
const jwtPhoneTwo = document.querySelector(".jwt-phone-two");

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

const phoneTwo = document.querySelector(".phone-two");
const phonePlayBtn = document.getElementById("play_button");
const phoneNotFound = document.getElementById("not_found");

let desktopAnimating = false;
let laptopAnimating = false;
let phoneOneAnimating = false;
let phoneTwoAnimating = false;

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

const animationSetUp = function (
  parent,
  initialIcon,
  finalIcon,
  jwt,
  animationControlVar,
  succesControlVar,
  initialX,
  initialY
) {
  /*Mostrar el icono inicial y ocultar el icono final al entrar el mouse en el elemento */
  parent.addEventListener("mouseenter", () => {
    if (!animationControlVar) {
      initialIcon.style.opacity = 1;
    }
    finalIcon.style.opacity = 0;
  });

  /*Ocultar todos los iconos visibles al sacar el mouse del elemento */
  parent.addEventListener("mouseleave", () => {
    initialIcon.style.opacity = 0;
    finalIcon.style.opacity = 0;
  });

  parent.addEventListener("click", () => {
    animationControlVar = true;
    initialIcon.style.opacity = 0;
    setTimeout(() => {
      finalIcon.style.opacity = 1;
      databaseCheckmark.style.opacity = 0;
      databaseDenied.style.opacity = 0;
      animationControlVar = false;
    }, 4500);
    animateRequest(jwt, initialX, initialY, succesControlVar);
  });
};

/*Animaciones pc escritorio */

animationSetUp(
  desktop,
  desktopSend,
  desktopConfirmation,
  jwtDesktop,
  desktopAnimating,
  false,
  "9.5",
  "12"
);

/*Animaciones laptop */

animationSetUp(
  laptop,
  laptopDownload,
  laptopConfirmation,
  jwtLaptop,
  laptopAnimating,
  true,
  "80",
  "76"
);

/*Animaciones primer celular */

animationSetUp(
  phoneOne,
  phoneSignUp,
  phoneError,
  jwtPhoneOne,
  phoneOneAnimating,
  true,
  "12",
  "72"
);

/*83, 19*/

animationSetUp(
  phoneTwo,
  phonePlayBtn,
  phoneNotFound,
  jwtPhoneTwo,
  phoneTwoAnimating,
  true,
  "83",
  "19"
);
