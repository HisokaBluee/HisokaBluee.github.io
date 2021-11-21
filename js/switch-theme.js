
function switchTheme() {
        sheet = document.getElementById("dark-theme");
        if (sheet.disabled) {
                document.cookie = "style=dark";
                sheet.disabled=false;
        }
        else {
                document.cookie = "style=light";
                sheet.disabled=true;
        }
}
