var start = document.getElementsByClassName("start")[0];
var startmenu = document.getElementsByClassName("startmenu")[0];

start.addEventListener("click", () => {
 if(startmenu.style.bottom == "50px"){
  startmenu.style.bottom = "-550px"
 }
 else {
  startmenu.style.bottom = "50px"
 }
})

let toggle_btn = document.querySelectorAll('.apps-icon');

for (const toggle_btns of toggle_btn) {
 toggle_btns.addEventListener("click", () => {
  let submenu_toggle = document.querySelectorAll('.app');

  for (let submenu_toggles of submenu_toggle) {

   /* display the content if the value in the data attribute of the button and content are the same */
   if (submenu_toggles.getAttribute('data-number') === toggle_btns.getAttribute('data-number')) {
    submenu_toggles.classList.toggle('change');
    toggle_btns.classList.toggle('change');
   }

   // if it's not equal then hide it.
   else {
    // submenu_toggles.classList.remove('change');
   }

  }
 })
}
 