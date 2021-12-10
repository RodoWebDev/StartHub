import React from 'react';
import header_bg_img from 'assets/images/header-bg.png';
import './styles.scss';

const HeaderWithBackground = () => {

  return(
	<header id="#home" className="header wide">
		<div className="image-container">
			<img src={header_bg_img} className="background-image" alt="Landing_Image"/>
		</div>
		<div className="title">
			<h1>Starting Company</h1>
			<br />
			<h1>is easy</h1>
		</div>
    </header>
  )
}

export default HeaderWithBackground;