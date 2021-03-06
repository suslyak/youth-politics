import React from 'react';

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

const TextField = ({label, placeholder, input, name, id=''}) => {

    return (<input {...input}
                    id={id}
                    type="text"
                    styles={customStyles}
                    value={input.value}
                    placeholder={''}
                    />
    );
};

export default TextField;
