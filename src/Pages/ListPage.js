import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../redux/ListSlice';
import SearchInput from '../Components/SearchInput';

function ListPage() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.list);

  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filter = list.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <div>
      {loading && <h1 className="fallback">Loading...</h1>}
      {error && <h1 className="fallback">{error}</h1>}
      {list && (
        <div className="list_item">
          <SearchInput search={search} handleChange={handleChange} />
          <div className="list_item_grid">
            {filter.map((item) => (
              <Link className="link_listes_card" to={`/${item.id}`} key={item.id}>
                <label className="list_card" key={item.id} htmlFor={item.id}>
                  <img src={item.icon} alt={item.id} />
                  <div className="list_name">
                    <h2>{item.rank}</h2>
                    <h2>{item.name}</h2>
                  </div>
                  <h3 className="list_price">
                    <b> Price:</b>
                    {' '}
                    {item.price.toFixed(5)}
                    {' '}
                    $
                  </h3>
                  <h3 className="list_symbol">
                    <b> Symbol:</b>
                    {' '}
                    {item.symbol}
                  </h3>
                  <button id={item.id} type="button" className="list_button">
                    View
                  </button>
                </label>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListPage;
