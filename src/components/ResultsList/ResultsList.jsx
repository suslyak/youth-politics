import React, {useState} from 'react';
import ResourceCard from '../ResourceCard/ResourceCard';

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

  return (
    <>
        <section className="results">
            <ol className="results__list">
                {results.map((item, index) => <ResourceCard key={`resource-${index}`} data={item} />)}
            </ol>
        </section>
    </>)
};

export default ResultsList;
