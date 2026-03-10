

function openWhatsaap() {
    let phoneNumber = "9779804889685";
    let message = "Hey ! I want to talk to you.";

    let url = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    window.open(url, "_blank");
}


let menuBtn = document.querySelector("#sidebar");
let sidebarClose = document.querySelector("#cross");
let sidebarOpen = document.querySelector(".sidebar");


let closeBtn = document.querySelector
menuBtn.addEventListener("click", () => {

    sidebarOpen.style.display = "none";
    if (sidebarOpen.style.display == "none") {
        sidebarOpen.style.display = "block";
        menuBtn.style.display = "none";
        sidebarClose.style.display = "block";

    }

})



sidebarClose.addEventListener("click", () => {
    sidebarOpen.style.display = "block";
    if (sidebarOpen.style.display == "block") {
        sidebarOpen.style.display = "none";
        menuBtn.style.display = "block";
        sidebarClose.style.display = "none";

    }
})


