import React, { useState } from 'react'

const ChangeBackgroundRandomColor = () => {
    const [changeBgColor, setChangeBgColor] = useState("#FFFFFF");

    const handleClick = () => {
        const getRandomBgColor = getRandomColor();
        setChangeBgColor(getRandomBgColor);
    }

    // this is the logic to genrate hex deciamal color 
    const getRandomColor = () => {
        const letters = "0123456789ABCDEF"
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div onClick={handleClick} style={{ backgroundColor: changeBgColor }} className='w-full h-screen cursor-pointer'>
            <div className='text-4xl mx-auto flex justify-center items-center h-screen'>
                Click me to change background color 🌈
            </div>
        </div>
    )
}

export default ChangeBackgroundRandomColor
