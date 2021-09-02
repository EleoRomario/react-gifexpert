import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }

    const handleSutmit = (e) =>{
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories( cats => [inputValue, ...cats] );
            setInputValue('');
        }
    }
    
    return (
        <div>
            <form onSubmit={handleSutmit}>
                <input
                    type='text'
                    value = {inputValue}
                    onChange={handleInputChange}
                />

            </form>
        </div>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
