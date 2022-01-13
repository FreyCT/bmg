import React from 'react';
// import { Slideshow } from '.';
import { headshot } from '../images';
 
function Home (){
    return (
        <div>
            <img src={headshot} className='ben'/>
            <article className='bio'>
            <h2>A little bit about Ben</h2>
                <p>Benjamin Garner is a Vancouver-based visual artist and graduate of Emily Carr University of Art and Design.
                    His practice, though not limited to, consists primarily of painting and silkscreen print. 
                    Influenced by meta-physical ideologies and esoteric belief systems, his work explores the nuances 
                    of Eastern philosophy, religion and the occult as they try convey the unknown mysteries of the
                    universe in relation to the human condition and its spirit.
                </p>
            </article>
        </div>
    )
}
 
export default Home;