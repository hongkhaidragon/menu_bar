console.log("MENU.JS LOADED");

// timestamp theo phút (đủ để phá cache, không spam request)
const now = new Date();
const v =
  now.getFullYear().toString() +
  (now.getMonth() + 1) +
  now.getDate() +
  now.getHours() +
  Math.floor(now.getMinutes() / 5); // 👈 đổi mỗi 5 phút

const MENU_URL =
  "https://hongkhaidragon.github.io/menu_bar/menu.html?v=" + v;

fetch(MENU_URL, { cache: "no-store" })
  .then(res => {
    console.log("MENU FETCH:", res.status, MENU_URL);
    return res.text();
  })
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);
    console.log("MENU INSERTED");
  })
  .catch(err => {
    console.error("MENU ERROR:", err);
  });
