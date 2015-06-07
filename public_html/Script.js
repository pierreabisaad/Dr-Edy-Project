function validateInput(e) {
    var key = e.keyCode;
    if ((key >= 48 && key <= 57) || (key >= 96 && key <= 105) || (key === 8)) {
        return true;
    }
    else {
        return false;
    }
}

function calcul() {
    var amount = document.getElementById("firstTxt").value;
    var rate = document.getElementById("secondTxt").value;
    var months = document.getElementById("thirdTxt").value;
    document.getElementById("forthTxt").value = amount * rate * months / 100;
}