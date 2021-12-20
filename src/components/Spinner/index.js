import React from 'react';
import Loader from "react-loader-spinner";
import './styles.scss';

const Spinner = () => {

  return (
    <div className="spinner-container">
      <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={200000}
      />
    </div>
  );
}

export default Spinner;