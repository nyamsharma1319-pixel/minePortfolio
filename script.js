

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
        sidebarOpen.style.transition = "1s ease";


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





async function download() {

    const response = await fetch("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOf1O3PWNxq_z7Vzn-rePciR1eu7W1eyl4g&s");

   const blob = await response.blob();
    
    const url = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "file.pdf";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}




