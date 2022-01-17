import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from "react-router-dom";
import AdvancedSearchFields from './AdvancedSearchFields';
import {Form} from 'react-final-form';
import {fetchAuthorTitleResultsList} from '../../store/api-actions';
import {changeIsResultsLoaded} from '../../store/action';

const AdvancedSearchForm = ({children = []}) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {
        categories,
        countries,
        organizations,
        subjects,
        subSubjects,
        langs,
        types} = useSelector((state) => state.DICT);
    
      const optionsDict = {
        categories,
        countries,
        organizations,
        subjects,
        subSubjects,
        langs,
        types}

    const onSubmit = (values) => {
        const queries = {
            'authors': values.author_query ? `{"$match":"${values.author_query}"}` : null,
            'title,title_ru': values.title_query ?  `{"$match":"${values.title_query}"}` : null,
            'year': [
              values.year_gte_query ? `{"$gte":"${values.year_gte_query}"}` : null,
              values.year_lte_query ? `{"$lte":"${values.year_lte_query}"}` : null],
            'country': values.country_query && values.country_query.length ? `{"$in":[${values.country_query.map(x => x.value).join(',')}]}` : null,
            'category': values.category_query && values.category_query.length? `{"$in":[${values.category_query.map(x => x.value).join(',')}]}` : null,
            'organization': values.organization_query && values.organization_query.length ? `{"$in":[${values.organization_query.map(x => x.value).join(',')}]}` : null,
            'lang': values.lang_query && values.lang_query.length ? `{"$in":[${values.lang_query.map(x => x.value).join(',')}]}` : null,
            'doctype': values.type_query && values.type_query.length ? `{"$in":[${values.type_query.map(x => x.value).join(',')}]}` : null,
            'subject_1': values.subject_query && values.subject_query.length ? `{"$in":[${values.subject_query.map(x => x.value).join(',')}]}` : null,
            'subject_2': values.subSubject_query && values.subSubject_query.length ? `{"$in":[${values.subSubject_query.map(x => x.value).join(',')}]}` : null,
          }
          
        const filters = Object.keys(queries).filter(x => !!queries[x]).map((filterName) => {
            if (Array.isArray(queries[filterName])) {
              return queries[filterName].filter(x => !!x).map(x => `{"${filterName}":${x}}`).join(',')
            }
            return `{"${filterName}":${queries[filterName]}}`});

        const queryFilters = filters.filter(x => !!x).join(',');

        if (queryFilters) {
            history.push(`/search.html?entity=Book&filter=[${queryFilters}]`);
            dispatch(changeIsResultsLoaded(false));
            dispatch(fetchAuthorTitleResultsList(`?entity=Book&filter=[${queryFilters}]`));
        }
    }

    return (
        <Form
            onSubmit={values=> onSubmit(values)}
            render={({handleSubmit, pristine, form, submitting, values}) => (
                <form action="" className="main__advanced-search-form" onSubmit={handleSubmit}>
                        <div className="main__advanced-search main__advanced-search--no-border main__advanced-search--no-padding">
                            <AdvancedSearchFields optionsDict={optionsDict} values={values}/>
                            {children}
                        </div>
                        <button type="submit">Найти</button>
                </form>)}/>
  );
};

export default AdvancedSearchForm;
