window.addEventListener("DOMContentLoaded", (event) => {
     
    /**
      * Switch between light and dark mode
      */

     var theme_switcher = document.getElementById("toggle");
 
     if (sessionStorage.getItem("theme") == "dark") {
         theme_switcher.checked = true;
     } else {
         theme_switcher.checked = false;
     }
 
     // Check to see if Media-Queries are supported
     if (window.matchMedia) {
         // If user hasn't choose his own theme
         if (!(sessionStorage.getItem("toogle_changed"))) {
 
             // If actuel theme is black, then apply black theme
             if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
                 document.documentElement.setAttribute("theme", "dark");
                 theme_switcher.checked = true;
             }
 
             // Watch for changes in OS dark or light mode and apply it in real time
             window.matchMedia("(prefers-color-scheme: dark)").addEventListener('change', e => {
                 document.documentElement.setAttribute("theme", e.matches ? "dark" : "light");
                 theme_switcher.checked = e.matches ? true : false;
             });
 
             // If dark mode is activated manually
             if (sessionStorage.getItem("theme") == "dark") {
                 document.documentElement.setAttribute("theme", "dark");
                 theme_switcher.checked = true;
             }
         } else {
             document.documentElement.setAttribute("theme", sessionStorage.getItem("theme"));
         }
     }
 
     // Button switcher     
     var switch_to_theme = "";
     // When our button gets clicked
     theme_switcher.onclick = function () {
         // Get the current selected theme, on the first run
         // it should be `light`
         var current_theme = document.documentElement.getAttribute("theme");
 
         if (current_theme == "dark") {
             // We apply light theme
             // If we dont re-apply on each input, there are problems when changing theme...

 
             switch_to_theme = "light";
 
             sessionStorage.setItem("theme", "light");
 
         } else {

 
             switch_to_theme = "dark";
 
             sessionStorage.setItem("theme", "dark");
         }
         sessionStorage.setItem("toogle_changed", true);
 
         // Set our currenet theme to the new one
         document.documentElement.setAttribute("theme", switch_to_theme);
     }
});