import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Video = ({ item }) => {

    return (
        <motion.div whileHover={{ scale: [1, 1.05] }} className=' hover:bg-light-gray bg-gray flex flex-col gap-[12px] w-[18rem] p-[12px] rounded-[8px] '         >
            <Link
                to={`https://www.youtube.com/watch?v=${item.video.videoId}`}
                target="_blank"
                className='flex flex-col gap-[12px] '
            >
                <img src={item.video.thumbnails[0].url} alt={item.video.title} />
                <div className='flex flex-col px-[4px] py-[8px] ' >
                    <h5 className='text-white '   > {item.video.title} </h5>
                    <h6 className='text-white '  > {item.video.channelName} </h6>
                </div>
            </Link>
        </motion.div>
    )
}

export default Video