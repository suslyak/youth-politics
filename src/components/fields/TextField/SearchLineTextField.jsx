import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { changeQuery } from '../../../store/action';

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

const TextField = ({touched, label, placeholder, input, name, id=''}) => {

    const {query} = useSelector((state) => state.SEARCH);
    const dispatch = useDispatch();

    const onChange = (evt) => {
        dispatch(changeQuery(evt.target.value));
    }
    return (<input {...input}
                    id={id}
                    type="text"
                    styles={customStyles}
                    value={!!input.value ? input.value : query}
                    placeholder={''}
                    onChange = {(evt) => {
                        input.onChange(evt);
                        onChange(evt)}}
                    />
    );
};

export default TextField;
