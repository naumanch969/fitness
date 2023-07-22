import { Loader, Video, HorizontalScrollbar } from "../../components"

const Videos = ({ videos, name }) => {


    return (
        <div className="flex flex-col gap-[1rem] items-center " id='exercices' >

            <div className='flex justify-start items-center w-full ' >
                <h2 className='font-bold lg:text-[40px] md:text-[38px] sm-text-[36px] text-[28px] w-full'  >Youtube Videos</h2>
            </div>
            {
                videos.length
                    ?
                    <HorizontalScrollbar data={videos} Component={Video} />
                    :
                    <Loader />
            }
        </div>
    )
}

export default Videos