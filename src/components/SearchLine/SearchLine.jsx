import React, {useState, useEffect} from 'react';
import {useHistory} from "react-router-dom";
import {useSelector} from 'react-redux';
import {Form, Field} from 'react-final-form';
import AdvancedSearchFields from '../AdvancedSearch/AdvancedSearchFields.jsx';
import AdvancedSearchFormField from '../fields/AdvancedSearchFormField/AdvancedSearchFormField';
import TextField from '../fields/TextField/TextField.jsx';
import NumberField from '../fields/NumberField/NumberField';
import moment from 'moment';


const SearchLine = ({advancedSearch = true}) => {
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
  
  const {locale} = useSelector((state) => state.LOCALE);

  const optionsDict = {
    categories,
    countries,
    organizations,
    subjects,
    subSubjects,
    langs,
    types}

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
        'category': values.category_query ? `{"$in":[${values.category_query.map(x => x.value).join(',')}]}` : null,
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

      return window.location.href = `${!!locale.LOCALE ? `/${locale.LOCALE}` : ``}/search?entity=Book&filter=[${filters.filter(x => !!x).join(',')}]`
    }
    return window.location.href = `${!!locale.LOCALE ? `/${locale.LOCALE}` : ``}/search?entity=Book&filter=[{"name,title,title_ru,authors,year":{"$match":"${values.query}"}}]`
  }

  return (
      <Form
          onSubmit={values=> onSubmit(values)}
          render={({handleSubmit, pristine, form, submitting, values}) => (
    <form action="" className="main__search-form" onSubmit={handleSubmit}>
        <div className="main__search-form-fields">
            {advancedSearch && <button
                className="main__advanced-button" 
                type="button" 
                aria-label={`${advanced ? 'Закрыть' : 'Открыть'} расширенный поиск`}
                onClick={() => {setAdvanced(!advanced)}}>
                    <span style={advanced ? {top:-3} : {}}>{advanced ? '-' : '+'}</span>
                    {advanced 
                      ? !!locale.SIMPLE_SEARCH ? locale.SIMPLE_SEARCH : `Простой поиск`
                      : !!locale.ADVANCED_SEARCH ? locale.ADVANCED_SEARCH : `Расширенныйпоиск`}
            </button>}
            {!advanced && <><Field
                    component={TextField}
                    key={'query'}
                    name={'query'}
                    id={'query'}
                    isRequired={true}
                    /><label className="visually-hidden" htmlFor="query">{!!locale.SEARCH ? `${locale.SEARCH}` : `Поиск`}</label></>}
            {advanced && <>
              <div className="main__advanced-search">
                <AdvancedSearchFields optionsDict={optionsDict} values={values} labelsUpon={false}/>
              </div>
              </>}
            <button type="submit">{!!locale.SEARCH ? `${locale.SEARCH}` : `Найти`}</button>
        </div>
    </form>)}/>
  );
};

export default SearchLine;
