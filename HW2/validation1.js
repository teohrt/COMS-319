function handleClick() {
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var gender = document.getElementById("gender");
    var state = document.getElementById("state");

    var fnameImg = document.getElementById("fnameImg");
    var lnameImg = document.getElementById("lnameImg");
    var genderImg = document.getElementById("genderImg");
    var stateImg = document.getElementById("stateImg");

    var fnameBool = false;
    var lnameBool = false;
    var genderBool = false;
    var stateBool = false;

    // Check if names are alphanumeric
    fnameBool = alphaNumCheck(fname.value) ? fnameImg.src = "correct.png" : fnameImg.src = "wrong.png";
    lnameBool = alphaNumCheck(lname.value) ? lnameImg.src = "correct.png" : lnameImg.src = "wrong.png";

    // Check drop down values
    if (gender.value != "") {
        genderImg.src = "correct.png"
        genderBool = true;
    }
    else {
        genderImg.src = "wrong.png"
        genderBool = false;
    }
    if (state.value != "") {
        stateImg.src = "correct.png"
        stateBool = true;
    }
    else {
        stateImg.src = "wrong.png"
        stateBool = false;
    }

    if (fnameBool && lnameBool && genderBool && stateBool) {
        window.location.replace("./validation2.html")
    }
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}