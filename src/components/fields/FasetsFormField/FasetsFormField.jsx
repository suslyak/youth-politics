import React, {Fragment} from 'react';
import Select, { components, createFilter} from "react-select";

const customStyles = {
    input: (provided) => ({
        ...provided,
        width: `100%`,
        minHeight: 40
    }),
    control: (provided) => ({
        ...provided,
        border: "1px solid #000000",
        width: `100%`,
        minHeight: 40,
        borderRadius: 0
    }),
    indicatorSeparator: (provided) => ({
        ...provided,
        background: 'transparent'
    }),
    valueContainer: (provided) => ({
        ...provided,
        paddingLeft: '14px',
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

const FasetsFormField = ({label, placeholder, input, name, options}) => {

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

    const getOptions = () => {
        return options.map((item, index) => ({label: item, value: index}))
    }

    return (<div className="fasets-form__field">
        <label className={"fasets-form__label"}>
            {label}
        </label>
        <Select {...input}
                    isMulti
                    styles={customStyles}
                    value={input.value}
                    blurInputOnSelect={true}
                    width='100%'
                    placeholder={'Выберите'}
                    options={getOptions()}
                    removeSelected={false}
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{Menu, Option, MenuList, DropdownIndicator: null}}
                    />
            
            </div>
    );
};

export default FasetsFormField;