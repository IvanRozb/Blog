import { Fragment } from 'react';
import MainNavigation from '@/component/layout/main-navigation';

export default function Layout(props) {
	return (
		<Fragment>
			<MainNavigation />
			{props.children}
		</Fragment>
	);
}
