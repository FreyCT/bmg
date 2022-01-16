import React from 'react';
import { headshot } from '../images';
 
function Home (){
    return (
        <div className='row'>
            <div className='col-2'></div>
            <div className='col-8 row'>
                <img src={headshot} className='ben col-5'/>
                <article className='col-7'>
                    <h1>Hello</h1>
                    <h2>A bit about Me</h2>
                    <p> Benjamin Garner is a Vancouver-based visual artist and graduate of Emily Carr University of Art and Design.
                        His practice, though not limited to, consists primarily of painting and silkscreen print. 
                        Influenced by meta-physical ideologies and esoteric belief systems, his work explores the nuances 
                        of Eastern philosophy, religion and the occult as they try convey the unknown mysteries of the
                        universe in relation to the human condition and its spirit.
                    </p>
                </article>
            </div>
            <div className='col-2'></div>
        </div>
    )
}
 
export default Home;