function personalRadio(x) {
    if (x.checked) {
        document.getElementById("businessForm").style.visibility = "hidden";
        document.getElementById("personalForm").style.visibility = "visible";
    }
}
function businessRadio(x) {
    if (x.checked) {
        document.getElementById("personalForm").style.visibility = "hidden";
        document.getElementById("businessForm").style.visibility = "visible";
        document.getElementById("businessForm").style.position="absolute";
    }
}