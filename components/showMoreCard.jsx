import React, { useState } from "react";

const ShowMoreText = (props) => {
	const [isTextShown, setIsTextShown] = useState(false);

	const textToDisplay = isTextShown ? props.text : props.text ? `${props.text.substring(0, 300)}...` : "";

	const toggleTextShown = () => {
		setIsTextShown(!isTextShown);
	};

	return (
		<div>
			<p className="pb-5 px-5 text-justify font-maven text-slate-700">
				{textToDisplay}{" "}
				<button
					className="text-[#832633] font-normal transition hover:text-[#6a2024]"
					onClick={toggleTextShown}
				>
					{isTextShown ? "Show Less" : "Show More"}
				</button>
			</p>
		</div>
	);
};

export default ShowMoreText;
