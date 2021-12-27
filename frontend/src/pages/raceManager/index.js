import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import instance from "../../utils/axios";
import PopupModal from "./components/PopupModal";
import BoatDataGrid from "./components/BoatDataGrid";
import { useParams } from "react-router";

const RaceManager = () => {
	const [eventId, setEventId] = useState("");
	const [startTimeInput, setStartTimeInput] = useState("");
	const [selectedYachtClass, setSelectedYactClass] = useState("");
	const [yachtClasses, setYachtClasses] = useState([]);
	const [raceBoats, setRaceBoats] = useState([]);
	const [race, setRace] = useState([]);
	const [isOpen, setisOpen] = useState(false);

	const params = useParams();

	const getData = async () => {
		try {
			const classes = (await instance.get("/boat/class")).data;
			setYachtClasses(classes.classes);
			const raceRes = (await instance.get(`/race/${params.id}`)).data;
			console.log(raceRes);
			setRace(raceRes);
			setRaceBoats(raceRes.race[0].raceboats);
			setStartTimeInput(raceRes.race[0].starttime);
			setEventId(raceRes.race[0].eventId);
			setSelectedYactClass(raceRes.race[0].classid);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	const handleChangeStartTime = (event) => {
		setStartTimeInput(event.target.value);
	};

	const handleChangeSelectedYachtClass = (event) => {
		setSelectedYactClass(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const errors = [];

		if (selectedYachtClass === "" || startTimeInput === "") {
			errors.push(
				"The form is not valid, please ensure all values are present"
			);
		}

		if (errors.length > 0) {
			alert(errors);
			return;
		}

		try {
			instance
				.put(`http://localhost:3001/race/${parseInt(params.id)}`, {
					eventId: eventId,
					classId: selectedYachtClass,
					startTime: startTimeInput,
				})
				.then(
					(response) => {
						alert("Race successfully updated");
						console.log(response);
					},
					(error) => {
						console.log(error);
					}
				);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className="events-manage-container">
			<form
				onSubmit={handleSubmit}
				style={{
					display: "flex",
					flexFlow: "column",
					justifyContent: "center",
					width: "70%",
				}}
			>
				<div className="events-manage-input-container">
					<div className="events-manage-text">Manage Race</div>
					<div>
						<p>Start Time</p>
						<input
							onChange={handleChangeStartTime}
							value={startTimeInput}
						></input>
					</div>
					<div>
						<FormControl sx={{ m: 1, minWidth: 200 }}>
							<InputLabel id="demo-simple-select-autowidth-label">
								Race Class
							</InputLabel>
							<Select
								labelId="demo-simple-select-autowidth-label"
								id="demo-simple-select-autowidth"
								value={selectedYachtClass}
								onChange={handleChangeSelectedYachtClass}
								label="Yacht CLass"
							>
								<MenuItem value="">
									<em>None</em>
								</MenuItem>
								{yachtClasses.map((e, index) => {
									return <MenuItem value={index + 1}>{e.name}</MenuItem>;
								})}
							</Select>
						</FormControl>
					</div>
				</div>
				<PopupModal
					open={isOpen}
					onClose={() => {
						getData();
						setisOpen(false);
					}}
					raceId={params.id}
				></PopupModal>
				<Button
					onClick={() => {
						setisOpen(true);
					}}
					variant="contained"
					style={{
						marginTop: "50px",
						marginRight: "100px",
						marginLeft: "100px",
						marginBottom: "25px",
					}}
				>
					Add Boat
				</Button>
				<div className="race-display-container">
					{raceBoats.length > 0 ? (
						<BoatDataGrid raceBoats={raceBoats} getData={getData} />
					) : (
						<div style={{ justifySelf: "center" }}>No boats in this race</div>
					)}
				</div>
				<Button
					type="submit"
					variant="contained"
					style={{
						marginTop: "50px",
						marginRight: "100px",
						marginLeft: "100px",
						marginBottom: "25px",
					}}
				>
					Update Race
				</Button>
			</form>
		</div>
	);
};

export default RaceManager;