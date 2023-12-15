import React from "react";


//create your first component
const Jumbotron = () => {

    return (
        <div className="text-center">
            <div className="jumbotron">
                <h1 className="display-4">Hello, world!</h1>
                <p className="lead">
Today, I explored React, putting my skills into practice by maneuvering through different components. I successfully employed states and transferred one component into another as a prop. Additionally, I seamlessly incorporated Bootstrap into my project, merging HTML and JavaScript for a well-rounded development journey.</p>
                <hr className="my-4" />
                <p></p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </p>
            </div>
        </div>
    );
};

export default Jumbotron;
