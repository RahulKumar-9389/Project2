import { useState } from 'react';
import Data from '../data';
import { VscLocation } from 'react-icons/vsc';
import { AiOutlineHeart, AiOutlineReload } from 'react-icons/ai';
import { RiDragMove2Fill } from 'react-icons/ri';
import { BiBath, BiBed, BiBuildingHouse } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [items, setItems] = useState(Data);
    const [show, setShow] = useState(6)
    const [toggleState, setToggleState] = useState(-1);

    const navigate = useNavigate();

    const menuItems = [... new Set(Data.map((val) => val.category))];

    const filterItems = (cat, i)=>{
        setToggleState(i);
        const newItems = Data.filter((value)=>value.category === cat);
        setItems(newItems);
    }

    const loadMore = () => {
        setShow(preValue => preValue + 3);
        const btn = document.querySelector(".showmore_btn");
        btn.style.display = "none"
    }

    return <>

        <section className="container">
            <div className="menu">
                <button className={toggleState === -1 ? 'active': ""}  onClick={()=>setItems(Data)}>All</button>
                {
                    menuItems.map((cat, i) => (
                        <button className={toggleState === i ? 'active': ""} onClick={()=>filterItems(cat, i)} key={i}>{cat}</button>
                    ))
                }
            </div>

            <div className="hotels_container">
                {
                    items.slice(0, show).map((item) => (
                        <div key={item.id} className='card'>
                            <div className="img_box">
                                <img src={item.img} alt={item.name} />
                                <div className="img_text">
                                    <button>For Rent</button>
                                    <button><AiOutlineHeart style={{fontSize:'20px'}}/></button>
                                </div>
                            </div>
                            <div className="details">
                                <div className='details_header'>
                                    <VscLocation className="location_icon" />
                                    <p>8558 Pecan St.</p>
                                </div>
                                <div className="title">
                                    {
                                        <h1>{item.name}</h1>
                                    }
                                </div>
                                <div className="des">
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
                                <div className="price">
                                    <h2>{item.price} / <span>month</span></h2>
                                    <button onClick={()=>navigate(`/property/${item.id}`)}>Read More</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className="show_more">
                <button className='showmore_btn' onClick={loadMore}>Show More <AiOutlineReload className="load_icon" /></button>
            </div>
        </section>
    </>
};

export default Home;