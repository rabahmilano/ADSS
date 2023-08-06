var burger = document.getElementById("burger");

var menu = document.getElementById("menu-page");

var exit = document.getElementById("exit");

burger.addEventListener("click", function test() {
  menu.classList.add("open");
  console.log("Open clicked");
});

exit.addEventListener("click", function test() {
  menu.classList.remove("open");
  console.log("Close clicked");
});
