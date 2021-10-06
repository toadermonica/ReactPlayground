import React, { useState } from "react";
import ConsentCheckbox from "./ConsentCheckbox";
import { isValidConsentForm, isInvalidAlert } from "./validation/FormValidation";
import { useRouter } from 'next/router'
import style from '../styles/form.module.scss';

const handleSubmit = (e, name, famName, consent) => {
    const router = useRouter();
    e.preventDefault(); // here prevents reloading of page after the allert was rendered. 
    isValidConsentForm(name, famName, consent) ? router.replace('/about') : isInvalidAlert(1);
}


function FormComponent(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [giveConsent, setGiveConsent] = useState("");
    return(
        <form className={style.defaultForm} onSubmit={(e) => handleSubmit(e, firstName, lastName, giveConsent)}>
            <label className={style.defaultLabel}>First name </label>
            <input style={{ padding: "5px, 0"}} type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <label className={style.defaultLabel}>Last name</label>
            <input style={{ padding: "5px, 0" }} type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <ConsentCheckbox giveConsent={giveConsent} setGiveConsent={setGiveConsent}/>
            <input style={{ width: "fit-content"}} type="submit" value="Submit"/>
        </form>
    );
}

export default FormComponent;

//TODO: Play with spread and rest operators in order to get the hand of them. 