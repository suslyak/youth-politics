import React, {useState} from 'react';

const ResourceCard = ({data}) => {

  return (
    <li className="resource-card">
        <img
            className="resource-card_resource-picture"
            src={data.picture || `img/zaglushka_02.jpg`}
            alt="обложка ресурса"
        />
        <article className="resource-card__info">
            <header className="resource-card__header">
            <a href="/search.html#">
                <h2>{data.title ? `${data.title[0].toUpperCase()}${data.title.toLowerCase().slice(1)}` : ``}</h2>
            </a>
            </header>
            <section className="resource-card__meta">
            <table>
                <tbody>
                {!!data.meta.autors &&
                <tr>
                    <td>Авторы:</td>
                    <td>{data.meta.autors.join(', ')}</td>
                </tr>}
                {!!data.meta.organization &&
                <tr>
                    <td>Организация:</td>
                    <td>{data.meta.organization}</td>
                </tr>}
                {!!data.meta.collection &&
                <tr>
                    <td>Коллекция:</td>
                    <td>{data.meta.collection}</td>
                </tr>}
                {!!data.meta.theme &&
                <tr>
                    <td>Тематика:</td>
                    <td>{data.meta.theme}</td>
                </tr>}
                {!!data.meta.type &&
                <tr>
                    <td>Тип:</td>
                    <td>{data.meta.type}</td>
                </tr>}
                </tbody>
            </table>
            <footer>{`${data.filetype || ``}, ${data.filesize ?  `${Math.round(data.filesize / 1024)} Кб` : ``}`}</footer>
            </section>
        </article>
        </li>)
};

export default ResourceCard;
