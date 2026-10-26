import React from "react";
import TimeOfTheDay from "./TimeOfTheDay";
import useLocation from "./hooks/useLocation";
import "./styles/App.css";

const App = () => {
	const { locationPosition, locationError } = useLocation();

	// Location is approximate (IP-based); if the lookup fails, still show the clock.
	if (!locationPosition && !locationError) {
		return <div className="loading">LOADING...</div>;
	}

	return <TimeOfTheDay />;
};

export default App;
