function generateNumber() {
    var min = parseInt(document.getElementById("minInput").value);
    var max = parseInt(document.getElementById("maxInput").value);

    if (min >= max) {
        alert("Minimum must be smaller than maximum!");
        document.getElementById("result").innerHTML = "";
        return;
    } else if (isNaN(min) || isNaN(max)) {
        alert("You need to enter valid mininum and maximum number!");
        document.getElementById("result").innerHTML = "";
        return;
    }

    var random_num = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById("result").innerHTML = random_num;
}