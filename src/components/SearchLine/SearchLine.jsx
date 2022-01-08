import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useSelector} from 'react-redux';
import {Form, Field} from 'react-final-form';
import AdvancedSearchFormField from '../fields/AdvancedSearchFormField/AdvancedSearchFormField';
import TextField from '../fields/TextField/TextField.jsx';
import NumberField from '../fields/NumberField/NumberField';
import moment from 'moment';

const SearchLine = () => {
  const [advanced, setAdvanced]  = useState(false);
  const [form, setForm]  = useState({query: '', author_query: ''});

  const {
    categories,
    countries,
    organizations,
    subjects,
    subSubjects,
    langs,
    types} = useSelector((state) => state.DICT);


  const history = useHistory();

  const onChange = (e) => {
    e.persist();
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value
    }));
  }

  const onSubmit = (values) => {
    if (advanced) {
      const queries = {
        'authors': values.author_query ? `{"$match":"${values.author_query}"}` : null,
        'title,title_ru': values.title_query ?  `{"$match":"${values.title_query}"}` : null,
        'year': [
          values.year_gte_query ? `{"$gte":"${values.year_gte_query}"}` : null,
          values.year_lte_query ? `{"$lte":"${values.year_lte_query}"}` : null],
        'country': values.country_query ? `{"$in":[${values.country_query.map(x => x.value).join(',')}]}` : null,
        'organization': values.organization_query ? `{"$in":[${values.organization_query.map(x => x.value).join(',')}]}` : null,
        'lang': values.lang_query ? `{"$in":[${values.lang_query.map(x => x.value).join(',')}]}` : null,
        'doctype': values.type_query ? `{"$in":[${values.type_query.map(x => x.value).join(',')}]}` : null,
        'subject_query': values.subject_query ? `{"$in":[${values.subject_query.map(x => x.value).join(',')}]}` : null,
      }
      
      const filters = Object.keys(queries).filter(x => !!queries[x]).map((filterName) => {
        if (Array.isArray(queries[filterName])) {
          return queries[filterName].filter(x => !!x).map(x => `{"${filterName}":${x}}`).join(',')
        }
        return `{"${filterName}":${queries[filterName]}}`});

      return window.location.href = `/search.html?entity=Book&filter=[${filters.filter(x => !!x).join(',')}]`
    }
    return window.location.href = `/search.html?entity=Book&filter=[{"name,title,title_ru,authors,year":{"$match":"${values.query}"}}]`
  }
  
  return (
      <Form
          onSubmit={values=> onSubmit(values)}
          render={({handleSubmit, pristine, form, submitting, values}) => (
    <form action="" className="main__search-form" onSubmit={handleSubmit}>
        <div className="main__search-form-fields">
            <button
                className="main__advanced-button" 
                type="button" 
                aria-label={`${advanced ? 'Закрыть' : 'Открыть'} расширенный поиск`}
                onClick={() => {setAdvanced(!advanced)}}>
                    <span style={advanced ? {top:-3} : {}}>{advanced ? '-' : '+'}</span>
                    {advanced ? <>Простой поиск</> : <>Расширенный<br/>поиск</>}
            </button>
            {!advanced && <><Field
                    component={TextField}
                    key={'query'}
                    name={'query'}
                    id={'query'}
                    /><label className="visually-hidden" htmlFor="query">Поиск</label></>}
            {advanced && <div className="main__advanced-search">
                <div className="main__advanced-search-fields">
                  <label htmlFor="author_query">Автор:</label>
                  <Field
                    component={TextField}
                    key={'author_query'}
                    name={'author_query'}
                    id={'author_query'}
                    />
                </div>
                <div className="main__advanced-search-fields">
                  <label htmlFor="title_query">Заглавие:</label>
                  <Field
                    component={TextField}
                    key={'title_query'}
                    name={'title_query'}
                    id={'title_query'}
                    />
                </div>
                <div className="main__advanced-search-fields-row">
                  <div className="main__advanced-search-fields main__advanced-search-fields--short">
                    <label htmlFor="year_gte_query">Год от:</label>
                    <Field
                      component={NumberField}
                      key={'year_gte_query'}
                      name={'year_gte_query'}
                      id={'year_gte_query'}
                      min={1900}
                      max={moment().year()}
                    />
                  </div>
                  <div className="main__advanced-search-fields main__advanced-search-fields--short">
                    <label htmlFor="year_lte_query">Год до:</label>
                    <Field
                      component={NumberField}
                      key={'year_lte_query'}
                      name={'year_lte_query'}
                      id={'year_lte_query'}
                      min={values.year_gte_query || 1900}
                      max={moment().year()}
                    />
                  </div>
                </div>
                <div className="main__advanced-search-fields">
                  <label htmlFor="country_query">Страна:</label>
                  <div className="main__advanced-search-select-field">
                    <Field
                        id={'country_query'}
                        key={'country_query'}
                        name={'country_query'}
                        component={AdvancedSearchFormField}
                        label={'Страна:'}
                        options={countries.map(x => ({label: x.ru, value: x.id}))}
                      />
                  </div>
                </div>
                <div className="main__advanced-search-fields">
                  <label htmlFor="organization_query">Организация:</label>
                  <div className="main__advanced-search-select-field">
                    <Field
                        id={'organization_query'}
                        key={'organization_query'}
                        name={'organization_query'}
                        component={AdvancedSearchFormField}
                        label={'Организация:'}
                        options={organizations.map(x => ({label: x.ru, value: x.id}))}
                      />
                  </div>
                </div>
                <div className="main__advanced-search-fields">
                  <label htmlFor="lang_query">Язык:</label>
                  <div className="main__advanced-search-select-field">
                    <Field
                        id={'lang_query'}
                        key={'lang_query'}
                        name={'lang_query'}
                        component={AdvancedSearchFormField}
                        label={'Язык:'}
                        options={langs.map(x => ({label: x.ru, value: x.id}))}
                      />
                  </div>
                </div>
                <div className="main__advanced-search-fields">
                  <label htmlFor="type_query"><>Тип<br/>документа:</></label>
                  <div className="main__advanced-search-select-field">
                    <Field
                        id={'type_query'}
                        key={'type_query'}
                        name={'type_query'}
                        component={AdvancedSearchFormField}
                        label={'Тип документа:'}
                        options={types.map(x => ({label: x.ru, value: x.id}))}
                      />
                  </div>
                </div>
                <div className="main__advanced-search-fields">
                  <label htmlFor="subject_query">Тематика:</label>
                  <div className="main__advanced-search-select-field">
                    <Field
                        id={'subject_query'}
                        key={'subject_query'}
                        name={'subject_query'}
                        component={AdvancedSearchFormField}
                        label={'Тематика:'}
                        options={subjects.map(x => ({label: x.ru, value: x.id}))}
                      />
                  </div>
                </div>
                
                </div>}
            <button type="submit">Найти</button>
        </div>
    </form>)}/>
  );
};

export default SearchLine;
