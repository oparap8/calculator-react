import {useState} from 'react'
import { evaluate } from 'mathjs';
import Button from './Button'

const Calculator = () => {
    const signs = ["AC","C","%","/","7","8","9","*","4","5","6","-","1","2","3","+","0",".","="]
    const [display, setDisplay] = useState("0")

    function handleClick (sign){
        if (!['AC', 'C', '='].includes(sign)){
            if (display === '0' && !['%', '/', '*', '+'].includes(sign)){
                setDisplay(sign)
            }else if ((display === '0' || display === "-") && ['%', '/', '*', '+'].includes(sign)){
                return
            }else{
                setDisplay(prevDisplay => prevDisplay += sign)
            }
        }else if (sign === 'AC'){
            setDisplay("0")
        }else if (sign === "C"){
            setDisplay(prevDisplay => prevDisplay.slice(0, prevDisplay.length-1))
        }else if (sign === "="){
            setDisplay(prevDisplay => evaluate(prevDisplay))
        }

        
    }

    return (
        <div className='w-full md:w-3/4 mx-auto rounded-2xl shadow-2xl h-full bg-[#5f6062] p-8'>
            <input type="text" value={display} className='bg-[#cddece] w-full h-32 rounded-t-2xl text-7xl text-right mb-6 px-4'/>
            <div className='flex-grow grid grid-cols-4 gap-4'>
            {signs.map(sign => {
                    if (sign === "=") {
                        return <Button handleClick={handleClick} key={sign} sign={sign} className="bg-[hsl(37,100%,50%)] hover:bg-[hsl(37,100%,60%)] text-white col-span-2" />;
                    }else if (['%', '/', '*', '+', '-', 'AC', 'C'].includes(sign)) {
                        return <Button handleClick={handleClick} key={sign} sign={sign} className="bg-[hsl(37,92%,80%)] hover:bg-[hsl(37,92%,90%)]" />;
                    }else {
                        return <Button handleClick={handleClick} key={sign} sign={sign} className="bg-[hsl(150,8%,95%)] hover:bg-[hsl(150,8%,85%)]" />;
                    }
                })}
            </div>
        </div>
    )
}

export default Calculator