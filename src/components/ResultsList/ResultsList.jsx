import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import ResourceCard from '../ResourceCard/ResourceCard';
import FasetsForm from '../FasetsForm/FasetsForm';
import AdvancedSearchForm from '../AdvancedSearch/AdvancedSearchForm';
import AdvancedSearchFormFields from '../AdvancedSearch/AdvancedSearchFields';

const SEARCH_RESULTS_PER_PAGE = 7;
const SEARCH_RESULTS_PAGES_RANGE = 3;

const ResultsList = () => {
    const {results, isResultsLoaded} = useSelector((state) => state.SEARCH);
    const [page, setPage] = useState({numberPage: 1, direction: 0});
    //const [searchResults, setSearchResults] = useState([]);

    const PagesCount = Math.ceil(results.length / SEARCH_RESULTS_PER_PAGE);

    const range = {start: (page.numberPage - 1) * SEARCH_RESULTS_PER_PAGE, end: PagesCount > 1 ? page.numberPage * SEARCH_RESULTS_PER_PAGE : results.length}

    if (!isResultsLoaded) {
        return (
            <section className="results">
                Идёт поиск...
            </section>)
    }

    const getResultsToShow = () => {
        return results.slice(range.start, range.end);
    }

    const getPages = () => {        
        const pagesRange = new Array(SEARCH_RESULTS_PAGES_RANGE)
            .fill()
            .map((x, index) => (index + page.numberPage - (PagesCount - page.numberPage < SEARCH_RESULTS_PAGES_RANGE ?  (SEARCH_RESULTS_PAGES_RANGE - (PagesCount - page.numberPage)) : 0)));

        return pagesRange;
    }

    return (<div className="results__container">
                <div className="results__header">
                    <h3>Найдено: {results.length}</h3>
                    {(PagesCount > 1) && <ul className="results__pages">
                        {((page.numberPage !== 1) && (SEARCH_RESULTS_PAGES_RANGE < PagesCount)) && 
                            <li
                                className={`results__page`}                         
                                key={`pageKey${page.numberPage - 1}`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска ${PagesCount}`}
                                    onClick={() => setPage({numberPage: PagesCount - page.numberPage < SEARCH_RESULTS_PAGES_RANGE ? page.numberPage - (SEARCH_RESULTS_PAGES_RANGE - (PagesCount - page.numberPage)) - 1 : page.numberPage - 1, direction: 1})}
                                >
                                    {PagesCount - page.numberPage < SEARCH_RESULTS_PAGES_RANGE ? page.numberPage - (SEARCH_RESULTS_PAGES_RANGE - (PagesCount - page.numberPage)) - 1 : page.numberPage - 1}
                                </button>
                            </li>}
                        {getPages().map((x, i) => (((x < PagesCount) && (x > 0)) &&
                            <li
                                className={`results__page ${ page.numberPage === x ? `results__page--selected` : ``}`}                         
                                key={`pageKey${x}`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска ${x}`}
                                    onClick={() => (page.numberPage !== x) && setPage({numberPage: x, direction: 0 + (i === 0)})}
                                >
                                    {x}
                                </button>
                            </li>
                            ))}
                            {<li
                                className={`results__page ${page.numberPage < PagesCount - SEARCH_RESULTS_PAGES_RANGE ? `results__page--skip-to-last` : ``}`}                         
                                key={`pageKey${PagesCount}`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска ${PagesCount}`}
                                    onClick={() => (page.numberPage !== PagesCount) && setPage({numberPage: PagesCount, direction: 1})}
                                >
                                    {PagesCount}
                                </button>
                            </li>}
                    </ul>}
                </div>
                <ol className="results__list">
                    {getResultsToShow().map((item, index) => <ResourceCard key={`resource-${index}`} data={item} />)}
                </ol>
                <div className="results__header">
                    <h3>Найдено: {results.length}</h3>
                    {(PagesCount > 1) && <ul className="results__pages">
                        {((page.numberPage !== 1) && (SEARCH_RESULTS_PAGES_RANGE < PagesCount)) && 
                            <li
                                className={`results__page`}                         
                                key={`bottomPageKey${page.numberPage - 1}`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска ${PagesCount}`}
                                    onClick={() => setPage({numberPage: PagesCount - page.numberPage < SEARCH_RESULTS_PAGES_RANGE ? page.numberPage - (SEARCH_RESULTS_PAGES_RANGE - (PagesCount - page.numberPage)) - 1 : page.numberPage - 1, direction: 1})}
                                >
                                    {PagesCount - page.numberPage < SEARCH_RESULTS_PAGES_RANGE ? page.numberPage - (SEARCH_RESULTS_PAGES_RANGE - (PagesCount - page.numberPage)) - 1 : page.numberPage - 1}
                                </button>
                            </li>}
                        {getPages().map((x, i) => (((x < PagesCount) && (x > 0)) &&
                            <li
                                className={`results__page ${ page.numberPage === x ? `results__page--selected` : ``}`}                         
                                key={`bottomPageKey${x}`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска ${x}`}
                                    onClick={() => (page.numberPage !== x) && setPage({numberPage: x, direction: 0 + (i === 0)})}
                                >
                                    {x}
                                </button>
                            </li>
                            ))}
                            {<li
                                className={`results__page ${page.numberPage < PagesCount - SEARCH_RESULTS_PAGES_RANGE ? `results__page--skip-to-last` : ``}`}                         
                                key={`bottomPageKey${PagesCount}`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска ${PagesCount}`}
                                    onClick={() => (page.numberPage !== PagesCount) && setPage({numberPage: PagesCount, direction: 1})}
                                >
                                    {PagesCount}
                                </button>
                            </li>}
                    </ul>}
                </div>
        </div>)
};

export default ResultsList;
