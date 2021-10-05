import React, { useState } from "react";

function FormComponent(){
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [giveConsent, setGiveConsent] = useState("");
    const handleSubmit = (event) => {
        alert(`The name you entered was: ${firstName}`); // route to a different page if this is ok. 
        // so probably this needs to do a try catch and if error then allert else route to a different page ? 
        event.preventDefault(); // here prevents reloading of page after the allert was rendered. 
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                First name: 
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
            </label>
            <label>
                Last name:
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </label>
            <label>
                I agree with having my personal data, above, processed by this app.
                <input type="checkbox" value={giveConsent} onClick={(e) => setGiveConsent(e.target.checked)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    );
}

export default FormComponent;