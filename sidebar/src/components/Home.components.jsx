import React from 'react';
import { useGlobalContext } from '../context';
import { FaBars } from 'react-icons/fa'; 

const Home = () => {
    const {openSidebar , openModal } = useGlobalContext();
    console.log(useGlobalContext())
    return (
        <main>
            <button onClick={openSidebar} className='sidebar-toggle'>
                <FaBars/>
            </button>
            <button onClick={openModal} className='btn'>
                show model
            </button>
        </main>
    )
}

export default Home;