import React, {useState} from 'react';


const App = () => {
  const [form, setForm]  = useState({query: ''});
  const onChange = (e) => {
    e.persist();
    setForm((prevForm) => ({
      ...prevForm,
      query: e.target.value
    }));
  }
  
  return (
    <form action="" className="main__search-form">
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
  );
};

export default App;
