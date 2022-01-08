import React, {Fragment} from 'react';
import Select, { components, createFilter} from "react-select";

const customStyles = {
    input: (provided) => ({
        ...provided,
        width: `100%`,
        minHeight: 50
    }),
    control: (provided) => ({
        ...provided,
        border: "2px solid #000000",
        width: `100%`,
        minHeight: 50,
        borderRadius: 0
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        background: 'transparent'
    }),
    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: '10px',
        marginLeft: 0,        
    }),
    menu: (provided) => ({
        ...provided,
        margin: 0,
        borderRadius: 0  
    }),
    multiValue: (provided) => ({
        ...provided,
        backgroundColor: '#a8c6d5'
    }),
    dropdownIndicator: (provided) => ({
        ...provided,
        color: '#000000'
    })
};

const NumberField = ({label, placeholder, input, name, id='', min, max}) => {   

    
    return (<input {...input}
                    id={id}
                    type="number"
                    min={min}
                    max={max}
                    styles={customStyles}
                    value={input.value}
                    placeholder={''}
                    />
    );
};

export default NumberField;
