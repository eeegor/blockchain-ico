import React from 'react';

export const IconEtherium = props => {
	const { color = [['#386AFF', '#2652FF'], ['#2B59FF', '#619BFF']], height = 26, width = 26 } = props;

	return (
		<svg width={width} height={height} viewBox="0 0 26 26" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
			<defs>
				<linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-1">
					<stop stopColor={color[0][0]} offset="0%" />
					<stop stopColor={color[0][1]} offset="100%" />
				</linearGradient>
				<linearGradient x1="100%" y1="0%" x2="0%" y2="100%" id="linearGradient-2">
					<stop stopColor={color[1][0]} offset="0%" />
					<stop stopColor={color[1][1]} offset="100%" />
				</linearGradient>
			</defs>
			<g id="icon_etherium" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
				<g id="Group" transform="translate(5.200000, -0.000000)">
					<polygon id="Path-21" fill="url(#linearGradient-1)" opacity="0.5" points="0 12.5885087 7.29627095 17.4020237 14.908923 12.5677507 7.29840534 0" />
					<polygon id="Path-22" fill="url(#linearGradient-2)" points="0 14.2415502 7.47530612 25.2014603 14.9705678 14.2415502 7.47530612 19.1492356" />
				</g>
			</g>
		</svg>
	);
};
