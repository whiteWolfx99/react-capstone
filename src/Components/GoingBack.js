import React from 'react';
import { useNavigate } from 'react-router-dom';
import LeftArrow from '../Assets/LeftArrow.svg';

export default function GoingBack() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="going_back">
      <button type="button" onClick={goBack}>
        <img src={LeftArrow} alt="left arrow" />
        <h3>Go Back</h3>
      </button>
    </div>
  );
}
