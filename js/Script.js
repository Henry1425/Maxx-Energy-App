//JavaScript


//Closes popup info for cardModal
function close_cardModal() {
    document.getElementById("cardModal_ID").style.height = "0%";
}

//Opens and fills popup info for cardModal
function open_cardModal(cardPopupStuffing) {
    
    let stuffing = cardPopupStuffing.split("/-/");
    document.getElementById("cardModal_Stuff_A").innerHTML = stuffing[0];
    document.getElementById("cardModal_Stuff_B").innerHTML = stuffing[1];
    document.getElementById("cardModal_Stuff_C").innerHTML = stuffing[2];

    document.getElementById("cardModal_ID").style.height = "40%";
}