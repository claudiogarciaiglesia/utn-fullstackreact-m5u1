import React from 'react';

export const CrazyButton = () => {

    const handleMouseOver = (e) => {
        let topRandom = Math.random();
        let leftRandom = Math.random();
        let top = topRandom * (window.innerHeight - e.currentTarget.offsetHeight - 200);
        let left = leftRandom * (window.innerWidth - e.currentTarget.offsetWidth - 200);
        console.log(`${topRandom} * (${window.innerHeight} - ${e.currentTarget.offsetHeight})`);
        console.log(`${leftRandom} * (${window.innerWidth} - ${e.currentTarget.offsetWidth})`);
        console.log(window.visualViewport.width + "x" + window.visualViewport.height);
        console.log(window.innerWidth + "x" + window.innerHeight);
        e.target.style.top = `${top}px`;
        e.target.style.left = `${left}px`;
        console.log(e.target);
    }

    return (
        <div>
            <button
                style={{ position: "relative" }}
                onMouseOver={handleMouseOver}
            >
                Siguiente...
            </button>
        </div>
    )
}
