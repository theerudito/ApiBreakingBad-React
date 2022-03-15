import React, { Fragment } from "react";

export const GetDatas = ({ quote }) => {
	return (
		<Fragment>
			<p>
				{quote.text}
				<br />
				<span>- {quote.autor} </span>
			</p>
		</Fragment>
	);
};
