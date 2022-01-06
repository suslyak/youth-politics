import React, {useState} from 'react';
import {useHistory} from "react-router-dom";
import AdvancedSearch from './components/AdvancedSearch/AdvancedSearch';
const SearchLine = () => {
  const [form, setForm]  = useState({query: ''});

  const history = useHistory();

  const onChange = (e) => {
    e.persist();
    setForm((prevForm) => ({
      ...prevForm,
      query: e.target.value
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = `/search.html?entity=Book&filter=[{"name,title,title_ru,authors,year":{"$match":"${form.query}"}}]`;
  }
  
  return (<>
      <form action="" className="main__search-form" onSubmit={(e) => onSubmit(e)}>
        <div className="main__search-form-fields">
          <input
            id="query"
            name="query"
            type="text"
            placeholder=""
            onChange={(e) => onChange(e)}
            value={form.query}
            />
          <label className="visually-hidden" htmlFor="query">Поиск</label>
          <button type="submit">Найти</button>
        </div>
      </form>
      <AdvancedSearch/>
    </>
  );
};

export default SearchLine;
