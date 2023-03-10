const btn = document.querySelector("#menu-toggle");
const menu = document.querySelector("#menu");
let body = document.querySelector("body");
const close = document.querySelector("#close");
console.log(
  Number(
    window
      .getComputedStyle(document.body)
      .getPropertyValue("font-size")
      .match(/\d+/)[0]
  )
);
console.log("width", screen.width, " height", screen.height);

// let date = new Date();

btn.addEventListener("click", () => {
  if (menu.style.top === "0px") {
    menu.style.top = "-100%";
    body.style.overflow = "auto";
  } else {
    menu.style.top = "0px";
    body.style.overflow = "hidden";
  }
});

// function menuf()

close.addEventListener("click", () => {
  if (menu.style.top === "0px") {
    menu.style.top = "-100%";
    body.style.overflow = "auto";
  } else {
    menu.style.top = "0px";
    body.style.overflow = "hidden";
  }
});
