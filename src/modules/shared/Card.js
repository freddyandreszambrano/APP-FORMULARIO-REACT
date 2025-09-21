import React from "react";

function Card({title, description}) {
    return (
        <div className="col-md-6 mb-3">
            <div className="p-4 shadow rounded bg-white h-100">
                <h2 className="h5">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;
