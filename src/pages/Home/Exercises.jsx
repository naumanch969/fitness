import React, { useEffect, useState } from 'react'
import { Pagination } from "@mui/material"
import ExerciseCard from "../../components/ExerciseCard"
import { fetchData, exercisesOptions } from "../../utils/FetchData"
import { useStateContext } from '../../contexts/ContextProvider'
import { Element } from 'react-scroll'

const Exercises = () => {
    const { searchQuery, noSearchMatched, bodyPart, setNoSearchMatched, setSearchQuery, setBodyPart, exercises, setExercises } = useStateContext()

    const [currentPage, setCurrentPage] = useState(1)
    const exercisesPerPage = 24;

    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

    const paginate = (e, value) => {
        setCurrentPage(value)
    }


    const fetchExercisesData = async () => {
        let exercisesData = []
        if (bodyPart === "all") {
            exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exercisesOptions)
        }
        else {
            exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exercisesOptions)
        }
        setExercises(exercisesData)
    }

    useEffect(() => {

        fetchExercisesData()

    }, [bodyPart])




    return (

        <Element name="exercises" className='flex flex-col justify-center items-center gap-[3rem] lg:py-[4rem] md:py-[3rem] py-[2rem] sm:px-[2rem] px-[1rem] mt-[20px] '   >

            <h2 className='font-bold lg:text-[40px] md:text-[38px] sm-text-[36px] text-[32px] text-center w-[80%] capitalize'>Showing Resulsts for <span className='text-light-red ' > {searchQuery || bodyPart} </span></h2>

            <div className='flex items-center mt-[1rem] '>
                {
                    exercises.length > 9 && (
                        <Pagination
                            color="standard"
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            shape="rounded"
                            onChange={paginate}
                            defaultPage={1}
                            page={currentPage}
                            size="small"
                        />
                    )
                }
            </div>

            <div className='flex flex-wrap justify-center gap-[1rem] '  >
                {
                    noSearchMatched
                        ?
                        <div className='flex flex-col justify-center items-center w-full ' >
                            <p className='' >No result found for query <span className='text-light-red ' >{searchQuery}</span></p>
                            <button onClick={() => { setBodyPart('all'); fetchExercisesData(); setNoSearchMatched(false); setSearchQuery('') }} className='text-light-red ' >Go Back</button>
                        </div>
                        :
                        <>
                            {
                                currentExercises.map((item, index) => (
                                    <ExerciseCard key={index} item={item} />
                                ))
                            }
                        </>
                }
            </div>


            <div className='flex items-center mt-[1rem] '>
                {
                    exercises.length > 9 && (
                        <Pagination
                            color="standard"
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            shape="rounded"
                            onChange={paginate}
                            defaultPage={1}
                            page={currentPage}
                            size="small"
                        />
                    )
                }
            </div>


        </Element>
    )
}

export default Exercises
