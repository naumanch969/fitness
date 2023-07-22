import { useState, useEffect } from 'react'
import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { fetchData, exercisesOptions } from "../../utils/FetchData"
import { Link } from 'react-scroll'
import { HorizontalScrollbar } from '../../components'
import { BodyPart } from '../../components'
import { useStateContext } from '../../contexts/ContextProvider'
import { scroller } from 'react-scroll'



const Categories = () => {
    const [bodyParts, setBodyParts] = useState([])   // categories  // back cardio chest lower arms lower legs neck shoulders upper arms upper legs waist
    const { setExercises, searchQuery, setSearchQuery, setNoSearchMatched } = useStateContext()

    // get all the categries/bodyPartsList
    useEffect(() => {
        const fetchExercisesData = async () => {
            const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exercisesOptions)
            setBodyParts(['all', ...bodyPartsData])
        }
        fetchExercisesData();
    }, []);




    const handleSearch = async () => {
        if (searchQuery) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)   // all the exercises
            const searchedExercises = exercisesData.filter(
                (exercise) =>    // an exercise object is like this -- bodyPart: "waist" equipment: "body weight" gifUrl: "http://d205bpvrqc9yn1.cloudfront.net/0001.gif" id: "0001" name: "3/4 sit-up" target: "abs"
                    exercise.name.toLowerCase().includes(searchQuery)
                    || exercise.target.toLowerCase().includes(searchQuery)
                    || exercise.bodyPart.toLowerCase().includes(searchQuery)
                    || exercise.equipment.toLowerCase().includes(searchQuery)
            )
            searchedExercises.length == 0
                ?
                setNoSearchMatched(true)
                :
                setExercises(searchedExercises)   // all the searched  exercises  

            scroller.scrollTo('exercises', {
                duration: 800,
                delay: 0,
                smooth: 'easeInOutCubic',
            });
        }
    }




    return (
        <div className='flex flex-col justify-center items-center gap-[3rem] lg:py-[5rem] md:py-[4rem] py-[3rem] sm:px-[2rem] px-[1rem] mt-[20px] bg-[#e7e7e7] '  >

            <h2 className='font-bold lg:text-[40px] md:text-[38px] sm-text-[36px] text-[32px] text-center w-[80%] '  > Awesome <span className='text-light-red ' > Exercises </span>You Should Know </h2>


            <div className='flex flex-col items-center gap-[2rem] w-full ' >

                {/* search bar */}
                <div className='flex justify-between items-center relative bg-white lg:w-[30rem] md:w-[26rem] sm:w-[22rem] w-[90%] rounded-[12px] p-[2px]  '  >

                    <input
                        type="text"
                        placeholder="Search Exercises"
                        value={searchQuery} onChange={(e) => { setSearchQuery(e.target.value.toLowerCase()) }}
                        className=' font-medium outline-none w-full bg-white md:p-[12px] sm:p-[12px] p-[10px] rounded-[12px] '
                    />
                    <Link
                        to='exercises'
                        className='cursor-pointer bg-light-red text-white h-full absolte top-0 right-0 flex justify-center items-center md:p-[12px] sm:p-[12px] p-[10px] rounded-[12px] '
                        onClick={handleSearch}
                    >Search</Link>
                </div>

                {/* horizontal scroll bar of categories  */}
                <div className='relative w-full p-[20px] ' >
                    <HorizontalScrollbar
                        data={bodyParts}
                        Component={BodyPart}
                    />
                </div>
            </div>


        </div>
    )
}

export default Categories
