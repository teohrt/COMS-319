function handleClick() {
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;

    var emailImg = document.getElementById("emailImg");
    var phoneImg = document.getElementById("phoneImg");
    var addressImg = document.getElementById("addressImg");

    // Assign verification images accordingly
    getImage(emailCheck(email), emailImg);
    getImage(checkPhoneNumber(phone), phoneImg);
    getImage(checkAddress(address), addressImg);
}

// "123-456-7890" and "1234567890" are accepted formats
function checkPhoneNumber(phone) {
    // 123-456-7890
    if (phone.length === 12) {
        if (phone[3] === "-" && phone[7] === "-") {
            // split on '-' and check for numeric
            var temp = phone.split('-');
            temp.forEach(element => {
                if (isNaN(element)) {
                    console.log("got here")
                    return false;
                }
            });
            return true;
        }
        return false;
    }
    // 1234567890
    else if (phone.length === 10) {
        if (isNaN(phone)) {
            return false;
        }
        return true;
    }
    return false;
}

// "Ames,IA" is the format
function checkAddress(address) {
    if (address.includes(",")) {
        var temp = address.split(",");
        if (temp.length === 2 && temp[1].length === 2) {
            return true;
        }
    }
    return false;
}

// "teohrt@gmail.com" is the format
function emailCheck(email) {
    atSplit = email.split('@');
    if (atSplit.length == 2 && alphaNumCheck(atSplit[0])) {
        periodSplit = atSplit[1].split('.')
        if (periodSplit.length == 2 && alphaNumCheck(periodSplit[0] + periodSplit[1])) {
            return true;
        }
    }
    valCheck = false;
    return false;
}

function alphaNumCheck(entry) {
    let regex = /^[a-z0-9]+$/i;
    if (entry != null && entry.match(regex)) {
        return true;
    } else {
        return false;
    }
}

function getImage(bool, picObj) {
    picObj.src = bool ? './correct.png' : './wrong.png';
}