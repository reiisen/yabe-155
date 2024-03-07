function add(a,b) {
    if (a != 0 && b != 0) {
        var result = (parseInt(a)+parseInt(b))
        document.getElementById("result").innerHTML = result
    } else document.getElementById("result").innerHTML = "Error"
}

function subtract(a, b) {
    if (a != 0 && b != 0) {
        var result = (parseInt(a) - parseInt(b))
        document.getElementById("result").innerHTML = result
    } else document.getElementById("result").innerHTML = "Error"
}