import React, { useContext } from 'react';
import { LoginContext } from 'contexts/LoginContextContainer';

const HeaderWithBackground = () => {
	const { datas } = useContext(LoginContext);
	const heroData = datas?.filter(data => data.type === "Home")[0]?.sections?.filter(section => section.type === 'Hero')[0];
	const { title, imgUrl } = heroData;
	return (
		<header id="#home" className="header wide">
			<div className="image-container">
				<img src={imgUrl} className="background-image" alt="Landing_Image"/>
			</div>
			<div className="title">
				<h1>{title[0]}</h1>
				<br />
				<h1>{title[1]}</h1>
			</div>
		</header>
	)
}

export default HeaderWithBackground;