import React from 'react';
import {Field} from 'react-final-form';
import AdvancedSearchFormField from '../fields/AdvancedSearchFormField/AdvancedSearchFormField';
import TextField from '../fields/TextField/TextField.jsx';
import NumberField from '../fields/NumberField/NumberField';
import moment from 'moment';

const AdvancedSearchFields = ({optionsDict, values, labelsUpon=true}) => {

  return (<>
            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="author_query">Автор:</label>
              <Field
                component={TextField}
                key={'author_query'}
                name={'author_query'}
                id={'author_query'}
                />
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="title_query">Заглавие:</label>
              <Field
                component={TextField}
                key={'title_query'}
                name={'title_query'}
                id={'title_query'}
                />
            </div>
            
            <div className={`main__advanced-search-fields-row ${labelsUpon ? `main__advanced-search-fields-row--short-labels` : ``}`}>
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

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="country_query">Страна:</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'country_query'}
                    key={'country_query'}
                    name={'country_query'}
                    component={AdvancedSearchFormField}
                    label={'Страна:'}
                    options={optionsDict.countries.map(x => ({label: x.ru, value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="organization_query">Организация:</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'organization_query'}
                    key={'organization_query'}
                    name={'organization_query'}
                    component={AdvancedSearchFormField}
                    label={'Организация:'}
                    options={optionsDict.organizations.map(x => ({label: x.ru, value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="lang_query">Язык:</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'lang_query'}
                    key={'lang_query'}
                    name={'lang_query'}
                    component={AdvancedSearchFormField}
                    label={'Язык:'}
                    options={optionsDict.langs.map(x => ({label: x.ru, value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="category_query">Рубрикатор:</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'category_query'}
                    key={'category_query'}
                    name={'category_query'}
                    component={AdvancedSearchFormField}
                    label={'Рубрикатор:'}
                    options={optionsDict.categories.map(x => ({label: x.ru, value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="type_query"><>Тип<br/>документа:</></label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'type_query'}
                    key={'type_query'}
                    name={'type_query'}
                    component={AdvancedSearchFormField}
                    label={'Тип документа:'}
                    options={optionsDict.types.map(x => ({label: x.ru, value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="subject_query">Тематика:</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'subject_query'}
                    key={'subject_query'}
                    name={'subject_query'}
                    component={AdvancedSearchFormField}
                    label={'Тематика:'}
                    options={optionsDict.subjects.map(x => ({label: x.ru, value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="subSubject_query">Тематика<br/>(подуровни):</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'subSubject_query'}
                    key={'subSubject_query'}
                    name={'subSubject_query'}
                    component={AdvancedSearchFormField}
                    label={'Тематика (подуровни):'}
                    options={optionsDict.subSubjects.map(x => ({label: x.ru, value: x.id}))}
                  />
              </div>
            </div>
          </>
  );
};

export default AdvancedSearchFields;
