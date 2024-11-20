import React, { useState, useEffect } from "react";

const useLocation = () => {
	const [location, setLocation] = useState({ position: null, error: "" });

	useEffect(() => {
		const handleGeolocationSuccess = (position) => {
			setLocation({ position: position.coords.latitude.toFixed(2), error: "" });
		};

		const handleGeolocationError = (err) => {
			setLocation({ position: null, error: err.message });
		};

		if ("geolocation" in navigator) {
			window.navigator.geolocation.getCurrentPosition(
				handleGeolocationSuccess,
				handleGeolocationError
			);
		} else {
			setLocation({ position: null, error: "Geolocation is not supported." });
		}
	}, []);

	return { locationPosition: location.position, locationError: location.error };
};

export default useLocation;
