import React from 'react';

export const ArrowLeft = props => {
	const { color = '#2B60FF', height = 10, width = 10 } = props;

	return (
		<svg
			width={width}
			height={height}
			viewBox="0 0 10 10"
			version="1.1"
			xmlns="http://www.w3.org/2000/svg"
			xmlnsXlink="http://www.w3.org/1999/xlink"
		>
			<g
				id="arrow-left"
				stroke="none"
				strokeWidth="1"
				fill="none"
				fillRule="evenodd"
			>
				<polygon
					fill={color}
					fillRule="nonzero"
					points="5.7315513 1.28422588 9.44903182 5.0017064 5.7315513 8.71918692 3.28115987 8.71918692 6.10606916 5.89427763 0.550968178 5.89076591 0.550968178 4.09157656 6.08860947 4.09167548 3.27774707 1.28081308"
				/>
			</g>
		</svg>
	);
};
