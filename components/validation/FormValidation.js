const alertType = {
    MISSING_CONSENT: 0,
    INVALID_FORM_DATA: 1
}

function isValidConsentForm(...validationList){
    for(let item of validationList){
        if (!item || item === " ") {
            return false;
        }
    }
    return true;
}

function isInvalidAlert(value){
    switch(value){
        case alertType.MISSING_CONSENT:{
            alert("Please give us your consent in order to proceed further!");
            break;
        }
        case alertType.INVALID_FORM_DATA:{
            alert("You need to provide all the data asked for in this form");
            break;
        }
    }
}

export {isValidConsentForm, isInvalidAlert} 

