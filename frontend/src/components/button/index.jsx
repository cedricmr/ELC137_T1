import React from "react"

export function Button({
    children, 
    onClick, 
    type='button', 
    className= "", 
    variant='primary'
}){
    return (
        <button
            onClick={onClick} 
            type={type}
            className={className}
        >
            {children}
        </button>
    )
}
