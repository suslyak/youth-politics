import React, {useState, useEffect} from 'react';
import ResourceCard from '../ResourceCard/ResourceCard';
import FasetsForm from '../FasetsForm/FasetsForm';

const ResultsList = ({searchResult}) => {
    const [form, setForm] = useState({query: ''});
    const [results, setResults] = useState(searchResult);
    
    const onChange = (e) => {
        e.persist();
        setForm((prevForm) => ({
        ...prevForm,
        query: e.target.value
        }));
    }

    const onFiltersSubmit = (values) => {
        const getFilters = (metaObject) => {
            return Object.keys(values).map((item) => values[item].length ? values[item].map(x=>x.label).includes(metaObject[item]) : true).
            reduce((collector, value, index, array) => {
                return collector && value;
              }, true);
        };

        setResults(searchResult.filter((item)=> getFilters(item.meta)));
    }

    const filters = [
        {name: 'collection', labelText: 'Коллекция', title: 'Коллекция'},
        {name: 'theme', labelText: 'Тематика', title: 'Тематика'},
        {name: 'organization', labelText: 'Организация', title: 'Организация'},
        {name: 'autors', labelText: 'Авторы', title: 'Авторы'},
        {name: 'type', labelText: 'Тип', title: 'Тип'}
    ];

  return (
    <>
        <section className="results">
            <ol className="results__list">
                {results.map((item, index) => <ResourceCard key={`resource-${index}`} data={item} />)}
            </ol>
            <FasetsForm data={searchResult.map(x=>x.meta)} filters={filters} onSubmit={onFiltersSubmit}/>
        </section>
        
    </>)
};

export default ResultsList;
