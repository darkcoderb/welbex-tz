import React from "react";

const ArrowIcon = () => {
	return (
		<svg style={{transform: "rotate(270deg)"}} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#000000">
			<path d="M0 0h24v24H0V0z" fill="none"/>
			<path
				d="M21.65 11.65l-2.79-2.79c-.32-.32-.86-.1-.86.35V11H4c-.55 0-1 .45-1 1s.45 1 1 1h14v1.79c0 .45.54.67.85.35l2.79-2.79c.2-.19.2-.51.01-.7z"/>
		</svg>
	)
}

export default ArrowIcon;