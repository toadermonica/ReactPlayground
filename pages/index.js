import React from "react";
import FormComponent from "../components/FormComponent";
import './../styles/home.module.scss';


// home component -- landing page for users
function Index() {
    return (
        <div style={{ margin: "5px"}}>
            <div className="center-div">
                <h2>Welcome Home!</h2>
                <h4>
                    You are on the main landing page...
                </h4>
                <h4>
                    If you are here, it means that you are authenticated!
                </h4>
                <FormComponent />
            </div>
        </div>
    );
}

export default Index;