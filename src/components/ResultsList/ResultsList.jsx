import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import ResourceCard from '../ResourceCard/ResourceCard';
import FasetsForm from '../FasetsForm/FasetsForm';
import AdvancedSearchForm from '../AdvancedSearch/AdvancedSearchForm';
import AdvancedSearchFormFields from '../AdvancedSearch/AdvancedSearchFields';

const SEARCH_RESULTS_PER_PAGE = 5;
const SEARCH_RESULTS_PAGES_RANGE = 5;

const ResultsList = () => {
    const {results, isResultsLoaded} = useSelector((state) => state.SEARCH);
    const {locale} = useSelector((state) => state.LOCALE);

    const [page, setPage] = useState({numberPage: 1, direction: 0});

    const PagesCount = Math.ceil(results.length / SEARCH_RESULTS_PER_PAGE);

    const range = {start: (page.numberPage - 1) * SEARCH_RESULTS_PER_PAGE, end: PagesCount > 1 ? page.numberPage * SEARCH_RESULTS_PER_PAGE : results.length}

    useEffect(() => setPage({numberPage: 1, direction: 0}), [results]);

    if (!isResultsLoaded) {
        return (
            <section className="results">
                {!!locale.SEARCHING ? `${locale.SEARCHING}` : `Идёт поиск...`}
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

    const leftSidePage = PagesCount - page.numberPage < SEARCH_RESULTS_PAGES_RANGE ? page.numberPage - (SEARCH_RESULTS_PAGES_RANGE - (PagesCount - page.numberPage)) - 1 : page.numberPage - 1;

    return (<div className="results__container">
                <div className="results__header">
                    <h3>{!!locale.TOTAL_FOUND ? `${locale.TOTAL_FOUND}` : `Найдено`}: {results.length}</h3>
                    {(PagesCount > 1) && <ul className="results__pages">
                        {((page.numberPage > SEARCH_RESULTS_PAGES_RANGE - 1) && (PagesCount > SEARCH_RESULTS_PAGES_RANGE)) &&
                            <li
                                className={`results__page results__page--skip-to-first`}                         
                                key={`pageKey1`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска 1`}
                                    onClick={() => setPage({numberPage: 1, direction: 0})}
                                >
                                    1
                                </button>
                            </li>}
                        {((page.numberPage !== 1) && (SEARCH_RESULTS_PAGES_RANGE < PagesCount) && leftSidePage > 0) && 
                            <li
                                className={`results__page`}                         
                                key={`pageKey${page.numberPage - 1}`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска ${PagesCount}`}
                                    onClick={() => setPage({numberPage: leftSidePage, direction: 1})}
                                >
                                    {leftSidePage}
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
                    <h3>{!!locale.TOTAL_FOUND ? `${locale.TOTAL_FOUND}` : `Найдено`}: {results.length}</h3>
                    {(PagesCount > 1) && <ul className="results__pages">
                        {((page.numberPage > SEARCH_RESULTS_PAGES_RANGE - 1) && (PagesCount > SEARCH_RESULTS_PAGES_RANGE)) &&
                            <li
                                className={`results__page results__page--skip-to-first`}                         
                                key={`pageKey1`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска 1`}
                                    onClick={() => setPage({numberPage: 1, direction: 0})}
                                >
                                    1
                                </button>
                            </li>}
                        {((page.numberPage !== 1) && (SEARCH_RESULTS_PAGES_RANGE < PagesCount) && leftSidePage > 0) && 
                            <li
                                className={`results__page`}                         
                                key={`pageKey${page.numberPage - 1}`}>
                                <button
                                    type="button"
                                    aria-label={`Страница выдачи поиска ${PagesCount}`}
                                    onClick={() => setPage({numberPage: leftSidePage, direction: 1})}
                                >
                                    {leftSidePage}
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
        </div>)
};

export default ResultsList;
