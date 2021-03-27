import React, { useContext } from "react"
import { ResponsiveContext } from 'grommet';

import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

const Header = ({ background, color, siteTitle, children }, data) => {
	const size = useContext(ResponsiveContext);

	return (
		<>
			{size !== 'small' ? (
				<DesktopHeader background={background} color={color} siteTitle={siteTitle} data={data}>
					{children}
				</DesktopHeader>
			) : 
				<MobileHeader background={background} color={color} siteTitle={siteTitle} data={data}>
					{children}
				</MobileHeader>
			}
		</>
	);
}

export default Header
