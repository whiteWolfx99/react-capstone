import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import GoingBack from '../Components/GoingBack';
import { fetchSingle } from '../redux/SingleSlice';

const SinglePage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { single, loading, error } = useSelector((state) => state.single);

  useEffect(() => {
    dispatch(fetchSingle(id));
  }, [dispatch, id]);

  return (
    <div className="single_item">
      {loading && <h1 className="fallback">Loading...</h1>}
      {error && <h1 className="fallback">{error}</h1>}
      {single && (
        <div>
          <GoingBack />
          <div className="single">
            <div className="single_item" key={single.id}>
              <img src={single.icon} alt={single.id} />
              <div className="single_name">
                <h2>{single.rank}</h2>
                <h2>{single.name}</h2>
              </div>
              <h3>
                <span> Name:</span>
                {' '}
                {single.name}
              </h3>
              <h3>
                <span> Symbol:</span>
                {' '}
                {single.symbol}
              </h3>
              <h3>
                <span> Rank:</span>
                {' '}
                {single.rank}
              </h3>
              <h3>
                <span> Price:</span>
                {' '}
                {single.price}
                {' '}
                $
              </h3>
              <h3>
                <span> Price in BTC:</span>
                {' '}
                {single.priceBtc}
              </h3>
              <h3 className="single_market">
                <span> Market Cap:</span>
                {' '}
                {single.marketCap}
                {' '}
                $
              </h3>
              <h3>
                <span> Volume:</span>
                {' '}
                {single.volume}
                {' '}
                $
              </h3>
              <h3>
                <span>Available Supply:</span>
                {' '}
                {single.availableSupply}
              </h3>
              <h3>
                <span>Total Supply:</span>
                {' '}
                {single.totalSupply}
              </h3>
              <h3>
                <span>Price Change in hour:</span>
                {' '}
                {single.priceChange1h}
              </h3>
              <h3>
                <span>Price Change in day:</span>
                {' '}
                {single.priceChange1d}
              </h3>
              <h3>
                <span>Price Change in week:</span>
                {' '}
                {single.priceChange1w}
              </h3>
              <div className="url_link">
                <a href={single.websiteUrl} target="_blank" rel="noreferrer">
                  <button type="button" className="single_button">
                    Website
                  </button>
                </a>
                <a href={single.twitterUrl} target="_blank" rel="noreferrer">
                  <button type="button" className="single_button">
                    Twitter
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SinglePage;
