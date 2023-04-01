import React from 'react'
import './Form.css'
// npm install react-icons
const Form = () => {
    return (
        <div className='form-container'>

            <form action="" method='post'>
                <label>Nev</label>
                <input type="text" />

                <label>Email cime</label>
                <input type="email" />

                <label>Targy</label>
                <input type="text" />

                <label>Uzneet</label>
                <textarea rows="6" placeholder='irj uzt'></textarea>
                <button type='submit' className='btn'>Kuldes</button>
            </form>

        </div>
    )
}

export default Form