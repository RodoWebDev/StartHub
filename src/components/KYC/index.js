import React, { useState } from "react";
import './styles.scss';

const KYC = () => {
  const [showButton, setShowButton] = useState(true);
  const handleLoad = () => {
    window.GPScreeningWidget && window.GPScreeningWidget.init({
      elementId: "ScreeningWidget",
      token: "88fc1037-b619-4b33-8679-574efaefb627",
      hideQr: true,
      onComplete: () => {
        console.log("completed");
      },
    });

    setShowButton(false);
  };
  return (
    <div className="container">
      <div className="kyc">
        <div id="ScreeningWidget"></div>
        {!showButton ? (
          <></>
        ) : (
          <input className="btn submit" type="button" onClick={handleLoad} value='Start' />
        )}
      </div>
    </div>
  );
};

export default KYC;
