

function openWhatsaap(){
    let phoneNumber = "9779804889685";
    let message = "Hey ! I want to talk to you.";

    let url = "https://wa.me/"+ phoneNumber+ "?text=" + encodeURIComponent(message);
    window.open(url,"_blank");
}

