import React from 'react';

export const IconLitecoin = props => {
	const { color = ['#2B60FF', '#619BFF'], height = 26, width = 26 } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 26 26"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<defs>
				<linearGradient
					x1="92.1554943%"
					y1="0%"
					x2="0%"
					y2="100%"
					id="linearGradient-1"
				>
					<stop stopColor={color[0]} offset="0%" />
					<stop stopColor={color[1]} offset="100%" />
				</linearGradient>
			</defs>
			<g
				id="icon_litecoin"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<polyline
					id="Shape"
					fill="url(#linearGradient-1)"
					fillRule="nonzero"
					points="11.9544996 18.4282672 13.1164927 14.0528355 15.8675464 13.0477598 16.5518325 10.4763353 16.5284687 10.4125468 13.8204478 11.4018656 15.7715921 4.05500031 10.2380794 4.05500031 7.68643252 13.642829 5.55598504 14.4211133 4.85202999 17.0720833 6.98084744 16.294451 5.47698299 21.9449997 20.2038574 21.9449997 21.14797 18.4282672 11.9544996 18.4282672"
				/>
			</g>
		</svg>
	);
};
