//JavaScript

//Lets functions know if cardModal is open or closed
var cardAlreadyOpen = false;

//Closes popup info for cardModal
function close_cardModal() {
    document.getElementById("cardModal_ID").style.height = "0%";
    document.getElementById("cardModal_ID").style.border = "0px outset black";
    cardAlreadyOpen = false;
}

//Opens and fills popup info for cardModal
function open_cardModal(cardPopupStuffing) {
    if (cardAlreadyOpen != true) {
        let stuffing = cardPopupStuffing.split("/-/");
        document.getElementById("cardModal_Stuff_A").innerHTML = stuffing[0];
        document.getElementById("cardModal_Stuff_B").innerHTML = stuffing[1];
        document.getElementById("cardModal_Stuff_C").innerHTML = stuffing[2];
        document.getElementById("cardModal_Stuff_C").href = stuffing[3];
        document.getElementById("cardModal_ID").style.border = "1px outset black";
        document.getElementById("cardModal_ID").style.height = "40%";
        cardAlreadyOpen = true;
    }
}