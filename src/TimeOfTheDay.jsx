import React from "react";
import useTime from "./hooks/useTime";
import "./styles/App.css";
import "./styles/TimeOfTheDay.css";

const TimeOfTheDay = () => {
	const { time } = useTime();

	const getTimeOfDayClassAndText = (hour, season) => {
		const timeOfDay = [
			{
				name: "night",
				start: 0,
				end: season === "summer" ? 6 : 5,
				text: "Noc"
			},
			{
				name: "morning",
				start: season === "summer" ? 6 : 5,
				end: 12,
				text: "Ranek"
			},
			{ name: "afternoon", start: 12, end: 16, text: "Popołudnie" },
			{
				name: "evening",
				start: 16,
				end: season === "summer" ? 22 : 21,
				text: "Wieczór"
			}
		];

		return (
			timeOfDay.find(({ start, end }) => hour >= start && hour < end) ||
			timeOfDay[0]
		);
	};

	const getSeason = (month) => (month > 2 && month < 10 ? "summer" : "winter");
	const season = getSeason(time.getMonth());
	const { name: timeOfDayName, text: timeOfDayText } = getTimeOfDayClassAndText(
		time.getHours(),
		season
	);

	return (
		<div className={`${timeOfDayName} season`}>
			<div className="timeText">{timeOfDayText}</div>
			<div className="clock">{time.toLocaleTimeString("en-GB")}</div>
		</div>
	);
};

export default TimeOfTheDay;
