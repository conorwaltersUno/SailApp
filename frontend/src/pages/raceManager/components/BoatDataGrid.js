import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import instance from "../../../utils/axios";
import { Link } from "react-router-dom";
const BoatDataGrid = ({ raceBoats, getData }) => {
	const [rows, setRows] = useState([]);

	useEffect(() => {
		const rows = [];
		raceBoats.map((e) => {
			rows.push({
				id: e.id,
				name: e.boats.name,
				startTime: e.starttime,
				finishTime: e.finishtime,
				position: e.position,
			});
		});
		setRows(rows);
	}, []);

	const columns = [
		{ field: "id", headerName: "ID", hide: true },
		{ field: "name", headerName: "Name", flex: 0.1 },
		{ field: "position", headerName: "position", flex: 0 },
		{ field: "startTime", headerName: "StartTime", flex: 0.2 },
		{ field: "finishTime", headerName: "FinishTime", flex: 0.2 },
		{
			field: "modifyBoat",
			headerName: "",
			flex: 0.1,
			renderCell: (cellValues) => {
				return (
					<Link to={""} className="btn btn-primary">
						Manage Boat
					</Link>
				);
			},
		},
		{
			field: "deleteBoat",
			headerName: "",
			flex: 0.2,
			renderCell: (cellValues) => {
				return (
					<div>
						<Button
							variant="contained"
							style={{ color: "primary", backgroundColor: "red" }}
							onClick={async () => {
								await instance
									.delete(`/race/${cellValues.id}`)
									.then()
									.catch((error) => {
										alert(error);
									});
							}}
						>
							Remove Boat
						</Button>
					</div>
				);
			},
		},
	];

	return (
		<div style={{ height: 400, width: "100%" }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={5}
				rowsPerPageOptions={[2]}
			/>
		</div>
	);
};

export default BoatDataGrid;