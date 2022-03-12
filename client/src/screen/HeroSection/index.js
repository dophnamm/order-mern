import React from 'react';
import './Hero.scss';
import heros from './herodata';
import ItemHero from './ItemHero';

function Hero() {
	return (
		<div id='hero'>
			<div className='container'>
				<div className='hero__container'>
					<div className='row-row'>
						{heros.map((hero) => {
							return <ItemHero {...hero} key={hero.id} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Hero;
