import React, { useState, useEffect } from "react";
export const SecondsCounter = () => {
	const [seconds, setSeconds] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			setSeconds(seconds => seconds + 1);
		}, 1000);
		return () => clearInterval(interval);
	}, []);

	let counter = ("" + seconds).split("");

	if (counter.length === 1) {
		return (
			<div>
				<h1>0</h1>
				<h1>0</h1>
				<h1>0</h1>
				<h1>{counter[0]}</h1>
			</div>
		);
	} else if (counter.length === 2) {
		return (
			<div>
				<h1>0</h1>
				<h1>0</h1>
				<h1>{counter[0]}</h1>
				<h1>{counter[1]}</h1>
			</div>
		);
	} else if (counter.length === 3) {
		return (
			<div>
				<h1>0</h1>
				<h1>{counter[0]}</h1>
				<h1>{counter[1]}</h1>
				<h1>{counter[2]}</h1>
			</div>
		);
	} else if (counter.length === 4) {
		return (
			<div>
				<h1>{counter[0]}</h1>
				<h1>{counter[1]}</h1>
				<h1>{counter[2]}</h1>
				<h1>{counter[3]}</h1>
			</div>
		);
	}
};
