import { Stack, Typography } from "@mui/material"
import Icon from "../assets/icons/gym.png"
import { useStateContext } from '../contexts/ContextProvider'
import { motion } from 'framer-motion'
import { scroller } from 'react-scroll'

const BodyPart = ({ item }) => {
    const { setBodyPart, setSearchQuery } = useStateContext()

    const hanldeClick = () => {

        setBodyPart(item);
        setSearchQuery(item)

        scroller.scrollTo('exercises', {
            duration: 800,
            delay: 0,
            smooth: 'easeInOutCubic',
        });

    }

    return (
        <motion.div whileHover={{ scale: [1, 1.05] }}
            onClick={hanldeClick}
            className='cursor-pointer flex flex-col justify-evenly items-center gap-[12px] sm:w-[18rem] w-[14rem] sm:h-[12rem] h-[10rem] p-[12px] rounded-[8px] bg-white '
        >
            <img src={Icon} alt="dumble" className="w-[2.5rem] h-[2.5rem] " />
            <h4 className="text-[24px] font-bold text-gray capitalize ">{item}</h4>
        </motion.div>
    )
}

export default BodyPart
