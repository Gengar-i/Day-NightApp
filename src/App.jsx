import React from "react";
import TimeOfTheDay from "./TimeOfTheDay";
import useLocation from "./hooks/useLocation";
import "./styles/App.css";

const App = () => {
	const { locationPosition, locationError } = useLocation();

	if (locationError) {
		return <div className="error">{locationError}</div>;
	}

	if (!locationPosition) {
		return <div className="loading">LOADING...</div>;
	}

	return <TimeOfTheDay />;
};

export default App;
