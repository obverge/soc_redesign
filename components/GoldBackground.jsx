import { useEffect, useRef } from "react";

export function GoldBackground() {
    const canvasRef = useRef();
    
    // taken from: https://stackoverflow.com/questions/25582882/javascript-math-random-normal-distribution-gaussian-bell-curve
    function randGauss(min, max, skew) {
        let u = 0, v = 0;
        while(u === 0) u = Math.random() //Converting [0,1) to (0,1)
        while(v === 0) v = Math.random()
        let num = Math.sqrt( -2.0 * Math.log( u ) ) * Math.cos( 2.0 * Math.PI * v )
        
        num = num / 10.0 + 0.5 // Translate to 0 -> 1
        if (num > 1 || num < 0) 
            num = randGauss(min, max, skew) // resample between 0 and 1 if out of range
        
        else{
            num = Math.pow(num, skew) // Skew
            num *= max - min // Stretch to fill range
            num += min // offset to min
        }
        return num
    }
    
    
    let colors = ["#A67816", "#FFFBA5", "#845702", "#EECC6A", "#DFB549"];

    useEffect(() => {
        const canvas = canvasRef.current;
        const contextCanvas = canvas.getContext("2d");

        const draw = () => {        
            const width = canvas.width = window.innerWidth;
            const height = canvas.height = window.innerHeight;
            
            contextCanvas.clearRect(0,0,width,height);

            const particleCount = Math.floor(width*3);
            for (let index = 0; index < particleCount; index++) {
                contextCanvas.beginPath();
                contextCanvas.arc(Math.random()*width, randGauss(-1*height/8, height, 2.5), Math.random()*3, 0, 2 * Math.PI); 
                contextCanvas.fillStyle = colors[Math.round(Math.random()*colors.length)];
                contextCanvas.fill();
            }
        }
       
        draw();
        window.addEventListener("resize", draw);
        return () => window.removeEventListener("resize", draw);
    }, [])

    return (<canvas ref={canvasRef} className="absolute top-0 left-0 z-0 w-500 h-500"/>);

}