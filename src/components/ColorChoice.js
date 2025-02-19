import React, {useState} from 'react';
import PropTypes from 'prop-types';
import './ColorChoice.css'

const ColorChoice = (props) => {
    const onSelectColor = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        props.updateColorChoice({[name]: value})
    }

    return (
        <div className='color-choice-container'>
            <section>
                <p>{props.local}'s color:</p>
                <p onClick={onSelectColor}>
                    <button value='text-red' name='local'> 🔴 </button>
                    <button value='text-orange' name='local'> 🟠 </button>
                    <button value='text-yellow' name='local'> 🟡 </button>
                    <button value='text-green' name='local'> 🟢 </button>
                    <button value='text-blue' name='local'> 🔵 </button>
                    <button value='text-purple' name='local'> 🟣 </button>
                </p>
            </section>
            <section id="heartWidget"> {props.numLikes} ❤️s </section>
            <section>
                <p>{props.remote}'s color:</p>
                <div onClick={onSelectColor}>
                    <button value='text-red' name='remote'> 🔴 </button>
                    <button value='text-orange' name='remote'> 🟠 </button>
                    <button value='text-yellow' name='remote'> 🟡 </button>
                    <button value='text-green' name='remote'> 🟢 </button>
                    <button value='text-blue' name='remote'> 🔵 </button>
                    <button value='text-purple' name='remote'> 🟣 </button>
                </div>
            </section>
        </div>
    )
}

ColorChoice.propTypes = {
    local: PropTypes.string.isRequired,
    remote: PropTypes.string.isRequired,
    updateColorChoice: PropTypes.func.isRequired
}

export default ColorChoice;
