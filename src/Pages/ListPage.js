import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchList } from '../redux/ListSlice';

function ListPage() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.list);

  useEffect(() => {
    dispatch(fetchList());
  }, [dispatch]);

  return (
    <div className="list_item">
      <div className="list_item_grid">
        {list.slice(0, 9).map((item) => (
          <div className="list_card" key={item.id}>
            <img src={item.icon} alt={item.id} />
            <div className="list_name">
              <h2>{item.rank}</h2>
              <h2>{item.name}</h2>
            </div>
            <h3 className="list_price">
              <b>  Price:</b>
              {' '}
              {item.price.toFixed(1)}
              {' '}
              $
            </h3>
            <h3 className="list_symbol">
              <b>  Symbol:</b>
              {' '}
              {item.symbol}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ListPage;
