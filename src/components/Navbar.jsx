import { useState } from 'react'
import { Link } from "react-router-dom"
import logo from "../assets/images/Logo.png"

const Navbar = () => {
    const [selected, setSelected] = useState(false)
    return (
        <div className='flex items-center justify-start gap-[1rem] md:px-[2rem] p-[1rem] '  >
            <Link to="/" >
                <img className='md:w-[4rem] w-[3rem] mx-[1rem] ' src={logo} alt="logo" />
            </Link>
            <div className='flex justify-start items-center gap-[2rem] '    >
                <Link to="/" className={`text-gray md:text-[22px] text-[18px] ${selected && 'border-b-[2px] border-light-red  '}  `}>Home</Link>
                {/* <Link to="/" className={`text-gray text-[18px] ${selected && 'border-b-[2px] border-light-red  '}  `}>Exercises</Link> */}
            </div>
        </div>
    )
}

export default Navbar
