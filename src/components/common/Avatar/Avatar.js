import React, { useEffect, useState } from 'react';

export const Avatar = ({
    className = '',
    alt = 'avatar',
    src,
    onClick = () => {},
    size = 42,
}) => {

  
    return (
        <div className={className}>
            <img 
                style={{width: `${size}px`, height: `${size}px`}}
                src={src} 
                className={`rounded-full object-cover`}
                alt={alt}
                onClick={onClick}
                width={size}
                height={size}
            />
        </div>
    )
}
