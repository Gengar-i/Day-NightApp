import React, { useState, useEffect } from "react";

// Approximate location from the user's IP address — no browser permission prompt.
const IP_GEO_URL = "https://get.geojs.io/v1/ip/geo.json";

const useLocation = () => {
	const [location, setLocation] = useState({ position: null, error: "" });

	useEffect(() => {
		const controller = new AbortController();

		fetch(IP_GEO_URL, { signal: controller.signal })
			.then((res) => {
				if (!res.ok) throw new Error(`Location lookup failed (${res.status}).`);
				return res.json();
			})
			.then((data) => {
				setLocation({ position: Number(data.latitude).toFixed(2), error: "" });
			})
			.catch((err) => {
				if (err.name === "AbortError") return;
				setLocation({ position: null, error: err.message });
			});

		return () => controller.abort();
	}, []);

	return { locationPosition: location.position, locationError: location.error };
};

export default useLocation;
