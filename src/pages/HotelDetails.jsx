import { useParams } from "react-router-dom";
import Data from '../data';
import { AiOutlineHeart, AiOutlineReload } from 'react-icons/ai';
import { RiDragMove2Fill } from 'react-icons/ri';
import { BiBath, BiBed, BiBuildingHouse } from 'react-icons/bi';

const HotelDetails = () => {
    const { id } = useParams();
    const item = Data.filter((value) => value.id === id)
    return <>
        <section className="details_container">
            {
                item.map((singleItem) => (
                    <div className="singleItem_card" key={singleItem.name}>
                        <div className="left">
                            <img src={singleItem.img} alt={singleItem.name} />
                        </div>

                        <div className="right">
                            <h1>{singleItem.name}</h1>
                            <div className="price">
                                <h3>Price</h3>
                                <span>{singleItem.price}</span>
                            </div>
                            <div className="text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex architecto, quas voluptatibus quibusdam nostrum accusantium veniam, similique ea quisquam ab eos quae reprehenderit. Animi at saepe exercitationem omnis impedit incidunt?</p>
                            </div>

                            <div className="room_details">
                                <span>
                                    <BiBuildingHouse className='des_icon' />
                                    <p>3 Room</p>
                                </span>
                                <span>
                                    <BiBed className='des_icon' />
                                    <p>4 Bed</p>
                                </span>
                                <span>
                                    <BiBath className='des_icon' />
                                    <p>1 Bath</p>
                                </span>
                                <span>
                                    <RiDragMove2Fill className='des_icon' />
                                    <p>732 Sft</p>
                                </span>
                            </div>
                            <button>Rent Now</button>
                        </div>
                    </div>
                ))
            }
        </section>
    </>
};

export default HotelDetails;