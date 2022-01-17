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

  return (
    <li className="resource-card">
        <div className="resource-card__thumbnail">
            <a href="/resource.html">
                <img
                    className="resource-card_resource-picture"
                    src={`thumbs/${data.file.thumb || `zaglushka_02.jpg`}`}
                    alt="обложка ресурса"
                />
            </a>
            <span>{`PDF, ${data.file.size ? `${Math.round(data.file.size / 1024)} Кб` : ``}`}</span>
        </div>
        <article className="resource-card__info">
            <header className="resource-card__header">
            <a href="/resource.html">
                <h2>{data.title ? `${data.title[0].toUpperCase()}${data.title.toLowerCase().slice(1)}` : ``}</h2>
            </a>
            </header>
            <section className="resource-card__meta">
            <table>
                <tbody>
                {!!data.authors &&
                <tr>
                    <td>Авторы:</td>
                    <td>{data.authors}</td>
                </tr>}
                {!!data.organization &&
                <tr>
                    <td>Организация:</td>
                    <td>{organizations.filter((x) => x.id === data.organization).map(x => x.ru)}</td>
                </tr>}
                {!!data.category &&
                <tr>
                    <td>Рубрика:</td>
                    <td>{categories.filter((x) => x.id === data.category).map(x => x.ru)}</td>
                </tr>}
                {!!data.subject_1 &&
                <tr>
                    <td>Тематика:</td>
                    <td>{subjects.filter((x) => x.id === data.subject_1).map(x => x.ru)}</td>
                </tr>}
                {!!data.subject_2 &&
                <tr>
                    <td>Подуровень тематики:</td>
                    <td>{subSubjects.filter((x) => x.id === data.subject_2).map(x => x.ru)}</td>
                </tr>}
                {!!data.doctype &&
                <tr>
                    <td>Тип:</td>
                    <td>{types.filter((x) => x.id === data.doctype).map(x => x.ru)}</td>
                </tr>}
                {!!data.doctype &&
                <tr>
                    <td>Страна:</td>
                    <td>{countries.filter((x) => x.id === data.country).map(x => x.ru)}</td>
                </tr>}
                {!!data.lang &&
                <tr>
                    <td>Язык:</td>
                    <td>{langs.filter((x) => x.id === data.lang).map(x => x.ru)}</td>
                </tr>}
                </tbody>
            </table>
            </section>
        </article>
        </li>)
};

export default ResourceCard;
