import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import { fetchData, exercisesOptions, youtubeOptions } from "../../utils/FetchData"
import Detail from './Detail'
import Videos from './Videos'
import SimilarExercises from './SimilarExercises'


const ExerciseDetail = () => {
    const { id } = useParams()
    const [exerciseDetail, setExerciseDetail] = useState({})
    const [videos, setVideos] = useState({})
    const [targetMuscleExercises, setTrgetMuscleExercises] = useState([])
    const [equipmentExercises, setEquipmentExercises] = useState([])

    useEffect(() => {
        const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com'

            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exercisesOptions)  // a single object 
            const VideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`, youtubeOptions)   // an array of videos
            const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`, exercisesOptions)
            const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailData.equipment}`, exercisesOptions)

            setExerciseDetail(exerciseDetailData)
            setVideos(VideosData.contents)
            setTrgetMuscleExercises(targetMuscleExercisesData)
            setEquipmentExercises(equipmentExercisesData)
        }
        fetchExercisesData()
    }, [id])





    return (
        <div className='flex flex-col items-center gap-[3rem] mb-[4rem] ' id="exercises" >
            <Detail exerciseDetail={exerciseDetail} videos={videos} id={id} />
            <Videos videos={videos} name={exerciseDetail.name} />
            <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
        </div>
    )
}

export default ExerciseDetail
