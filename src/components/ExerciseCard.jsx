import React from 'react'
import { Link } from "react-router-dom"
import { Stack, Button, Typography } from "@mui/material"
import { motion } from 'framer-motion'

const ExerciseCard = ({ item }) => {


    return (
        <motion.div whileHover={{ scale: [1, 1.05] }} className=' hover:bg-light-gray bg-gray flex flex-col gap-[12px] w-[18rem] sm:max-w-auto max-w-[90%] p-[12px] rounded-[8px] '         >
            <Link to={`/exercise/${item.id}`} className='flex flex-col gap-[12px]' >
                <div className='w-full relative ' >

                    <img src={item.gifUrl} alt={item.name} className='h-[200px] w-full rounded-[8px] ' /> {/* loading="lazy" */}
                </div>
                <p className='capitalilze text-[24px] text-start font-medium capitalize text-white ' >{item.name}</p>
                <div className='absolue top-[4px] left-[4px] flex gap-[4px] '  >
                    <button className='text-white bg-[#ffa9a9] text-[14px] capitalize rounded-[20px] px-[8px] py-[4px] '>{item.bodyPart}</button>
                    <button className='text-white bg-[#ccc757] text-[14px] capitalize rounded-[20px] px-[8px] py-[4px] '>{item.target}</button>
                </div>
            </Link>
        </motion.div>
    )
}

export default ExerciseCard

