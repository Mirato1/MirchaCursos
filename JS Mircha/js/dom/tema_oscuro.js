const d = document,
    ls = localStorage;
export default function darkTheme(btnDark, btnIcon) {
    
    const $btnDark = d.querySelector(btnDark),
    $btnIcon = d.querySelector(btnIcon);    

  const darkMode = () => {
    d.body.classList.add("is-dark-mode");
    $btnIcon.classList.remove("fa-moon");
    $btnIcon.classList.add("fa-sun");
    ls.setItem("theme", "dark");
  };

  const lightMode = () => {
    d.body.classList.remove("is-dark-mode");
    $btnIcon.classList.remove("fa-sun");
    $btnIcon.classList.add("fa-moon");
    ls.setItem("theme", "light");
  };

  $btnDark.addEventListener("click", (e) => {
    if ($btnIcon.classList.contains("fa-moon")) {
      darkMode();
    } else {
      lightMode();
    }
  });

  d.addEventListener("DOMContentLoaded", () => {
    if (ls.getItem("theme") === null)
      ls.setItem("theme", "light");

    if (ls.getItem("theme" === "light")) lightMode();

    if (ls.getItem("theme") === "dark") darkMode();
  });
}




// const $themeBtn = d.querySelector(btn),
// // Data atribute 
// $selectors = d.querySelectorAll("[data-dark]");

// console.log($selectors);

// let moon = "🌙",
// sun = "☀️";

// d.addEventListener("click", (e)=>{ 
// if(e.target.matches(btn)){
//     console.log($themeBtn.textContent);
//     if($themeBtn.textContent === moon){
//         $selectors.forEach((el) => el.classList.add(classDark));
//         $themeBtn.textContent = sun;
//     }
// }
// else{
//     $selectors.forEach((el) => el.classList.remove(classDark));
//     $themeBtn.textContent = moon;
// }
// })