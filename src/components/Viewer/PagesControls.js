import React, {useState}from 'react';
import { debounce } from 'throttle-debounce';


const PagesControls = ({currentPage, PageNumber, onChange}) => {
    const [page, setPage] = useState(currentPage);

    const handleChange = (e) => {
        e.persist();        
        setPage(e.target.value);
    }

    return (<>
        <form className="book-reader__pages-controls" onSubmit={(e) => {e.preventDefault(); onChange(page - 1)}}>
            <label htmlFor="current-page-control">Cтраница:</label>
            <input 
                type="number"
                min={0}
                max={PageNumber}
                name="current-page-control" 
                id="current-page-control" 
                value={page}
                onChange={(e) => {handleChange(e)}}
            />
            <span>из {PageNumber}</span>
        </form>
    </>)
}

export default PagesControls;