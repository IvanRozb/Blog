import classes from './hero.module.css';
import Image from 'next/image';

export function Hero() {
	return (
		<section className={classes.hero}>
			<div className={classes.image}>
				<Image
					src={'/images/site/author.jpg'}
					alt={'The author photo'}
					width={700}
					height={940}
				/>
			</div>
			<h1>Hi, I'm Ivan</h1>
			<p>
				I blog about my programming journey: mistakes, agony, tragedy,
				insights and more splendid stuff what a pioneering programmer
				faces
			</p>
		</section>
	);
}
