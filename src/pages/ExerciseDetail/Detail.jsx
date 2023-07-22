import BodyPartImage from "../../assets/icons/body-part.png"
import { Loader } from '../../components'
import TargetImage from "../../assets/icons/target.png"
import EquipmentImage from "../../assets/icons/equipment.png"


const Detail = ({ exerciseDetail }) => {
    const { target, equipment, bodyPart, gifUrl, name } = exerciseDetail;

    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]

    return (
        <div className="flex md:flex-row flex-col md:justify-evenly justify-center md:px-0 px-[2rem] items-center gap-[3rem] "   >

            {
                gifUrl
                    ?
                    <img src={gifUrl} alt={name} className="sm:w-[46%] " />
                    :
                    <Loader />
            }

            <div className="flex flex-col gap-[1rem] md:justify-start justify-center h-[400px] md:w-[46%] w-full " >

                <h4 className='capitalilze text-[32px] text-start font-bold capitalize text-gray ' >{name}</h4>
                <h6 >Exercises keep you strong. <span className="text-light-red capitalize " >{name}</span> {' '} is one of the best exercise to target your {target}. It will help you improve your mood and energy. </h6>
                <div className='flex flex-col gap-[1rem] mt-[1rem] ' >
                    {
                        extraDetail.map((item, index) => (
                            <div className="flex items-center gap-[1rem] " key={index}  >
                                <button className="rounded-full w-[3rem] h-[3rem] bg-[#fff2db] flex justify-center items-center "  >
                                    <img src={item.icon} alt={bodyPart} className='w-[32px]' />
                                </button>
                                <h5 variant="h5" textTransform="capitalize text-[18px] font-medium " >{item.name}</h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Detail