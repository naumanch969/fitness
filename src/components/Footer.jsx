import { Box, Stack, Typography } from "@mui/material"
import Logo from "../assets/images/Logo-1.png"

const Footer = () => {
    return (
        <div className="bg-[#fff3f4] py-[1.5rem] " >
            <div className="flex flex-col justify-center items-center gap-[8px]  "   >
                <img src={Logo} width="180px" height="50px" alt="logo" />
                <p className=" text-[14px] "  >Copyright &copy; All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer
