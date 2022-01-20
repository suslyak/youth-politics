import React, {Fragment} from 'react';
import Select, { components, createFilter} from "react-select";
import {useSelector} from 'react-redux';

const customStyles = {
    input: (provided) => ({
        ...provided,
        width: `100%`,
    }),
    control: (provided) => ({
        ...provided,
        width: `100%`,
        minHeight: 20,
        borderRadius: 0,
    }),
    container: (provided) => ({
        ...provided,
        border: "2px solid #000000",
        minHeight: 20,
        borderRadius: 0,
        width: `100%`
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        background: 'transparent'
    }),
    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: '10px',
        marginLeft: 0    
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

const AdvancedSearchFormField = ({label, placeholder, input, name, options = [], id=''}) => {   
    const {locale} = useSelector((state) => state.LOCALE);

    const Menu = (props) => {
        return (
          <Fragment>
            <components.Menu {...props}>
              <div className="" style={{borderRadius: 0}}>
                {props.children}
              </div>
            </components.Menu>
          </Fragment>
        );
      };
    
      const Option = (props) => {    
          return (
              <Fragment>
                  <components.Option {...props}>
                          <div className="">
                              {props.children}
                          </div>
                      </components.Option>
              </Fragment>
          );
      };
    
      const MenuList = props => {
          return (
            <components.MenuList {...props}>      
              { props.children }
            </components.MenuList>
          );
        };

    return (
        <Select {...input}
                    inputId={id}
                    isMulti
                    styles={customStyles}
                    value={input.value}
                    blurInputOnSelect={true}
                    width='100%'
                    placeholder={!!locale.SELECT_PLACEHOLDER ? `${locale.SELECT_PLACEHOLDER}` : `Выберите`}
                    options={options}
                    removeSelected={false}
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{Menu, Option, MenuList, DropdownIndicator: null}}
                    />
    );
};

export default AdvancedSearchFormField;
