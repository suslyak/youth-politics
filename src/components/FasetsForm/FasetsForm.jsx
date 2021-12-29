import React, {useState} from 'react';
import {Form, Field} from 'react-final-form';
import arrayMutators from 'final-form-arrays'
import {FieldArray} from 'react-final-form-arrays'

import FasetsFormField from '../fields/FasetsFormField/FasetsFormField';

const FasetsForm = ({data, filters, onSubmit}) => {

  return (
    <div className="results__faset-filters">
      <Form
          onSubmit={values=> onSubmit(values)}
          render={({handleSubmit, pristine, form, submitting, values}) => (
            <form id="FasetsForm" className="fasets-form" onSubmit={handleSubmit}>
                {filters.map(item => (<Field
                  key={item.name}
                  name={item.name}
                  component={FasetsFormField}
                  label={item.labelText}
                  options={Array.from(new Set(data.map((x)=>x[item.name]).filter(x=>!!x)))}
                  />))}
                <button type="submit">Применить</button>
            </form>)}/>
    </div>);
}

export default FasetsForm;