import React, {useState} from 'react';
import {useSelector} from 'react-redux';

const ResourceCard = ({data}) => {

const {
    categories,
    countries,
    organizations,
    subjects,
    subSubjects,
    langs,
    types} = useSelector((state) => state.DICT);

const {locale} = useSelector((state) => state.LOCALE);

  return (
    <li className="resource-card">
        <div className="resource-card__thumbnail">
            <a href="/resource.html">
                <img
                    className="resource-card_resource-picture"
                    src={`/thumbs/${data.file.thumb || `zaglushka_02.jpg`}`}
                    alt="обложка ресурса"
                />
            </a>
            <span>{`PDF, ${data.file.size ? `${Math.round(data.file.size / 1024)} Kb` : ``}`}</span>
        </div>
        <article className="resource-card__info">
            <header className="resource-card__header">
            <a href={`/${locale.LOCALE}/resource/${data.id}`}>
                <h2>{data.title ? data.title : ``}</h2>
            </a>
            </header>
            <section className="resource-card__meta">
            <table>
                <tbody>
                {!!data.authors &&
                <tr>
                    <td>{!!locale.AUTHOR_FIELD_LABEL ? `${locale.AUTHOR_FIELD_LABEL}` : `Авторы:`}</td>
                    <td>{data.authors}</td>
                </tr>}
                {!!data.organization &&
                <tr>
                    <td>{!!locale.ORGANIZATION_FIELD_LABEL ? `${locale.ORGANIZATION_FIELD_LABEL}` : `Организация:`}</td>
                    <td>{organizations.filter((x) => x.id === data.organization).map(x => x[locale.LOCALE])}</td>
                </tr>}
                {!!data.category &&
                <tr>
                    <td>{!!locale.CATEGORY_FIELD_LABEL ? `${locale.CATEGORY_FIELD_LABEL}` : `Рубрика:`}</td>
                    <td>{categories.filter((x) => x.id === data.category).map(x => x[locale.LOCALE])}</td>
                </tr>}
                {!!data.subject_1 &&
                <tr>
                    <td>{!!locale.SUBJECT_FIELD_LABEL ? `${locale.SUBJECT_FIELD_LABEL}` : `Тематика:`}</td>
                    <td>{subjects.filter((x) => x.id === data.subject_1).map(x => x[locale.LOCALE])}</td>
                </tr>}
                {!!data.subject_2 &&
                <tr>
                    <td>{!!locale.SUB_SUBJECT_RESOURCE_FIELD ? <span dangerouslySetInnerHTML={{__html: locale.SUB_SUBJECT_RESOURCE_FIELD}}></span> : <>Тематика<br/>(подуровни):</>}</td>
                    <td>{subSubjects.filter((x) => x.id === data.subject_2).map(x => x[locale.LOCALE])}</td>
                </tr>}
                {!!data.year &&
                <tr>
                    <td>{!!locale.YEAR_RESOURSE_FIELD ? `${locale.YEAR_RESOURSE_FIELD}` : `Год:`}</td>
                    <td>{data.year}</td>
                </tr>}
                {!!data.doctype &&
                <tr>
                    <td>{!!locale.DOCTYPE_RESOURCE_FIELD ? <span dangerouslySetInnerHTML={{__html: locale.DOCTYPE_RESOURCE_FIELD}}></span> : `Тип документа:`}</td>
                    <td>{types.filter((x) => x.id === data.doctype).map(x => x[locale.LOCALE])}</td>
                </tr>}
                {!!data.country &&
                <tr>
                    <td>{!!locale.COUNTRY_FIELD_LABEL ? `${locale.COUNTRY_FIELD_LABEL}` : `Страна:`}</td>
                    <td>{countries.filter((x) => x.id === data.country).map(x => x[locale.LOCALE])}</td>
                </tr>}
                {!!data.lang &&
                <tr>
                    <td>{!!locale.LANG_FIELD_LABEL ? `${locale.LANG_FIELD_LABEL}` : `Язык:`}</td>
                    <td>{langs.filter((x) => x.id === data.lang).map(x => x[locale.LOCALE])}</td>
                </tr>}
                </tbody>
            </table>
            </section>
        </article>
    </li>)
};

export default ResourceCard;
