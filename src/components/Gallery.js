import React, { useState } from 'react'
import Menu from './menu'

import '../components/gallery.css'


export default function () {
    const [items, setItems] = useState(Menu);
    const [searchitem,setSearchItem]=useState('');
    

    const AllItem=(menulist)=>{
        const updateMenuItems=Menu.filter((elem)=>{
            return elem.type === menulist;
        })
        setItems(updateMenuItems);
    }
    

    const filterItem=(menulist)=>{
        const updateMenuItems=Menu.filter((elem)=>{
            return elem.category === menulist;
        })
        setItems(updateMenuItems);
    }

    const inputEvent=(event)=>{
        const data= event.target.value;
        setSearchItem(data);
    }

    const searchName=(name)=>{
        if(name.trim()!=0){
        const updateMenuItems=Menu.filter((elem)=>{

             
            if(elem.name == name){
                return elem.name 
            }else if(elem.keyword == name){
                return elem.keyword
            }
        })
        setItems(updateMenuItems);
    }
    }



    return (
        <>
            <h1 className='mt-5 text-center main-heading'>Books Store </h1>
            <div className='searchbar'>
                <input type="text" placeholder='Search...' value={searchitem} onChange={inputEvent} />
                <button onClick={()=> searchName(searchitem)}>Submit</button>
               
            </div>
            
            <div className='menu-tab d-flex justify-content-evenly'>
                <button className='btn btn-warning' onClick={()=> AllItem('book')}>All</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Maths')}>Maths</button>
                <button className='btn btn-warning' onClick={()=> filterItem('Science')}>Science</button>
                <button className='btn btn-warning' onClick={()=> filterItem('comics')}>Comics</button>
            </div>

            {/* Item Section */}
            <div className='menu-items constainer-fluid mt-5'>
                <div className='row'>
                    <div className='col-11 mx-auto'>
                        <div className='row my-5'>
                            {
                                items.map((elem) => {
                                    const { id, name, image, category, description,type,keyword } = elem;

                                    return (
                                        
                                        <div className='item1 col-12 col-md-6 col-lg-6 col-xl-4 my-5'>
                                            <div className='row Item-inside'>
                                                {/* images setting */}
                                                <div className='col-12 col-md-12 col-lg-4 img-div'>
                                                    <img src={image} alt={name} className='img-fluid' />
                                                </div>

                                                {/*menu items description*/}

                                                <div className='col-12 col-md-12 col-lg-8'>
                                                    <div className='main-title pt-4 pb-3'>
                                                        <h3>{name}</h3>
                                                        <p>{description}</p>
                                                    </div>
                                                </div>


                                            </div>
                                        </div>

                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
