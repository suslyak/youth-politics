import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ResourceCard from '../ResourceCard/ResourceCard';
import FasetsForm from '../FasetsForm/FasetsForm';

const ResultsList = () => {
    const {results, isResultsLoaded} = useSelector((state) => state.SEARCH);
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setSearchResults(results)
    }, [isResultsLoaded])

    const onChange = (e) => {
        e.persist();
        setForm((prevForm) => ({
        ...prevForm,
        query: e.target.value
        }));
    }

    const onFiltersSubmit = (values) => {
        const getFilters = (metaObject) => {
            return Object.keys(values).map((item) => values[item].length ? values[item].map(x=>x.value).includes(metaObject[item]) : true).
            reduce((collector, value, index, array) => {
                return collector && value;
              }, true);
        };

        setSearchResults(results.filter((item) => getFilters(item)));
    }

    const filters = [
        {name: 'category', labelText: 'Рубрика', title: 'Рубрика'},
        {name: 'subject_1', labelText: 'Тематика', title: 'Тематика'},
        {name: 'subject_2', labelText: 'Подуровень тематики', title: 'Подуровень тематики'},
        {name: 'organization', labelText: 'Организация', title: 'Организация'},
        {name: 'authors', labelText: 'Авторы', title: 'Авторы'},
        {name: 'doctype', labelText: 'Тип', title: 'Тип'},
        {name: 'country', labelText: 'Страна', title: 'Страна'},
        {name: 'lang', labelText: 'Язык', title: 'Язык'},
    ];

    if (!isResultsLoaded) {
        return (
            <section className="results">
                Идёт поиск...
            </section>)
    }

    return (
        <>
            <section className="results">
                <ol className="results__list">
                    {searchResults.map((item, index) => <ResourceCard key={`resource-${index}`} data={item} />)}
                </ol>
                <FasetsForm data={searchResults} filters={filters} onSubmit={onFiltersSubmit}/>
            </section>
            
        </>)
};

export default ResultsList;
