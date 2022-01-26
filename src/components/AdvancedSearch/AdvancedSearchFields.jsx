import React from 'react';
import {Field} from 'react-final-form';
import {useSelector} from 'react-redux';
import AdvancedSearchFormField from '../fields/AdvancedSearchFormField/AdvancedSearchFormField';
import TextField from '../fields/TextField/TextField.jsx';
import NumberField from '../fields/NumberField/NumberField';
import moment from 'moment';

const AdvancedSearchFields = ({optionsDict, values, labelsUpon=true}) => {
  const {locale} = useSelector((state) => state.LOCALE);

  return (<>
          <div className="main__search-form-fields">
            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="author_query">{!!locale.AUTHOR_FIELD_LABEL ? `${locale.AUTHOR_FIELD_LABEL}` : `Авторы:`}</label>
              <Field
                component={TextField}
                key={'author_query'}
                name={'author_query'}
                id={'author_query'}
                />
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="title_query">{!!locale.TITLE_FIELD_LABEL ? `${locale.TITLE_FIELD_LABEL}` : `Заглавие:`}</label>
              <Field
                component={TextField}
                key={'title_query'}
                name={'title_query'}
                id={'title_query'}
                />
            </div>
            
            <div className={`main__advanced-search-fields-row ${labelsUpon ? `main__advanced-search-fields-row--short-labels` : ``}`}>
              <div className="main__advanced-search-fields main__advanced-search-fields--short">
                <label htmlFor="year_gte_query">{!!locale.YEAR_FROM ? `${locale.YEAR_FROM}` : `Год от:`}</label>
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
                <label htmlFor="year_lte_query">{!!locale.YEAR_TILL ? `${locale.YEAR_TILL}` : `Год до:`}</label>
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
              <label htmlFor="country_query">{!!locale.COUNTRY_FIELD_LABEL ? `${locale.COUNTRY_FIELD_LABEL}` : `Страна:`}</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'country_query'}
                    key={'country_query'}
                    name={'country_query'}
                    component={AdvancedSearchFormField}
                    label={'Страна:'}
                    options={optionsDict.countries.map(x => ({label: x[locale.LOCALE], value: x.id}))}
                  />
              </div>
            </div>
            
            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="organization_query">{!!locale.ORGANIZATION_FIELD_LABEL ? `${locale.ORGANIZATION_FIELD_LABEL}` : `Организация:`}</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'organization_query'}
                    key={'organization_query'}
                    name={'organization_query'}
                    component={AdvancedSearchFormField}
                    label={'Организация:'}
                    options={optionsDict.organizations.map(x => ({label: x[locale.LOCALE], value: x.id}))}
                  />
              </div>
            </div>
          </div>

          <div className="main__search-form-fields">
            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="lang_query">{!!locale.LANG_FIELD_LABEL ? `${locale.LANG_FIELD_LABEL}` : `Язык:`}</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'lang_query'}
                    key={'lang_query'}
                    name={'lang_query'}
                    component={AdvancedSearchFormField}
                    label={'Язык:'}
                    options={optionsDict.langs.map(x => ({label: x[locale.LOCALE], value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="category_query">{!!locale.CATEGORY_FIELD_LABEL ? `${locale.CATEGORY_FIELD_LABEL}` : `Рубрикатор:`}</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'category_query'}
                    key={'category_query'}
                    name={'category_query'}
                    component={AdvancedSearchFormField}
                    label={'Рубрикатор:'}
                    options={optionsDict.categories.map(x => ({label: x[locale.LOCALE], value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="type_query">{!!locale.DOCTYPE_FIELD_LABEL ? <span dangerouslySetInnerHTML={{__html: locale.DOCTYPE_FIELD_LABEL}}></span> : `Тип документа:`}</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'type_query'}
                    key={'type_query'}
                    name={'type_query'}
                    component={AdvancedSearchFormField}
                    label={'Тип документа:'}
                    options={optionsDict.types.map(x => ({label: x[locale.LOCALE], value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="subject_query">{!!locale.SUBJECT_FIELD_LABEL ? `${locale.SUBJECT_FIELD_LABEL}` : `Тематика:`}</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'subject_query'}
                    key={'subject_query'}
                    name={'subject_query'}
                    component={AdvancedSearchFormField}
                    label={'Тематика:'}
                    options={optionsDict.subjects.map(x => ({label: x[locale.LOCALE], value: x.id}))}
                  />
              </div>
            </div>

            <div className={`main__advanced-search-fields ${labelsUpon ? `main__advanced-search-fields--column` : ``}`}>
              <label htmlFor="subSubject_query">{!!locale.SUB_SUBJECT_FIELD_LABEL ? <span dangerouslySetInnerHTML={{__html: locale.SUB_SUBJECT_FIELD_LABEL}}></span> : <>Тематика<br/>(подуровни):</>}</label>
              <div className="main__advanced-search-select-field">
                <Field
                    id={'subSubject_query'}
                    key={'subSubject_query'}
                    name={'subSubject_query'}
                    component={AdvancedSearchFormField}
                    label={'Тематика (подуровни):'}
                    options={optionsDict.subSubjects.map(x => ({label: x[locale.LOCALE], value: x.id}))}
                  />
              </div>
            </div>
          </div>
        </>
  );
};

export default AdvancedSearchFields;
