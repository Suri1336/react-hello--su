import React from "react";


//create your first component
const Card = (props) => {

    return (
        <div className="text-center">
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.paragraph}</p>
                    <a href="#" className="btn btn-primary">{props.btn}</a>
                </div>
            </div>
        </div>
    );
};

export default Card;
