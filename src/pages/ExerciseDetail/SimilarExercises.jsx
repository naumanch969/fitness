import { Box, Stack, Typography } from "@mui/material"
import { HorizontalScrollbar, Loader, ExerciseCard } from "../../components"


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
    return (
        <div className="flex flex-col gap-[3rem] items-center " >

            <div className='flex flex-col gap-[1rem] ' >
                <div className='flex justify-start md:text-start items-center w-full ' >
                    <h2 className='font-bold lg:text-[40px] md:text-[38px] sm-text-[36px] text-[28px] w-full'  >Similar Exercises</h2>
                </div>
                <div className="flex "   >
                    {
                        targetMuscleExercises.length
                            ?
                            <HorizontalScrollbar data={targetMuscleExercises} Component={ExerciseCard} />
                            :
                            <Loader />
                    }
                </div>
            </div>

            <div className='flex flex-col gap-[1rem] ' >
                <div className='flex justify-start md:text-start items-center w-full ' >
                    <h2 className='font-bold lg:text-[40px] md:text-[38px] sm-text-[36px] text-[28px] w-full '  >Simillar Equipments</h2>
                </div>
                <div className="flex ">
                    {
                        equipmentExercises.length
                            ?
                            <HorizontalScrollbar data={equipmentExercises} Component={ExerciseCard} />
                            :
                            <Loader />
                    }

                </div>
            </div>

        </div>
    )
}

export default SimilarExercises;