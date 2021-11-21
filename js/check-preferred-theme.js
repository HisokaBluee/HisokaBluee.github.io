if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.getElementById("dark-theme").disabled=false;
}
if (Cookies.get("style") == "light") {
    document.getElementById("dark-theme").disabled=true;
    console.log("OUI");
}