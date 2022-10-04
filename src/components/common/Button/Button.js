
import React from "react";



export const Button = ({
    className = '',
    title,
    type = 'button',
    onClick = () => {},
    value
}) => {

    return (
        <button
            className={`${className} hover:opacity-70 bordred rounded-2xl py-2 px-6 bg-red-600 text-lg text-white font-Montserrat font-bold`}
            onClick={onClick}
            type={type}
            value={value}
        >      
         {title}

        </button>

    )
};
