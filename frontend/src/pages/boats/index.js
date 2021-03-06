import React, { useEffect, useState } from "react";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button, Paper, TextField, Typography } from "@mui/material";
import instance from "../../utils/axios";

const RegisterBoat = () => {
  const [nameInput, setNameInput] = useState("");
  const [sailNo, setSailNo] = useState("");
  const [yachtClubs, setYachtClubs] = useState([]);
  const [yachtClasses, setYachtClasses] = useState([]);
  const [selectedYachtClub, setSelectedYachtClub] = useState("");
  const [selectedClass, setSelectedClass] = useState("");

  const getData = async () => {
    const clubs = (await instance.get("/club")).data;
    setYachtClubs(clubs);

    const classes = (await instance.get("/boat/class")).data;
    setYachtClasses(classes);
  };

  useEffect(() => {
    getData();
  }, []);

  const handleChangeName = (e) => {
    setNameInput(e.target.value);
  };

  const handleChangeSailNo = (e) => {
    setSailNo(e.target.value);
  };

  const handleChangeSelectedYC = (event) => {
    setSelectedYachtClub(event.target.value);
  };

  const handleChangeSelectedClass = (event) => {
    setSelectedClass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = [];

    if (
      selectedClass === "" ||
      selectedYachtClub === "" ||
      nameInput === "" ||
      sailNo === ""
    ) {
      errors.push(
        "The form is not valid, please ensure all values are present"
      );
    }

    if (errors.length > 0) {
      alert(errors);
      return;
    }

    axios
      .post("http://localhost:3001/boat", {
        classId: selectedClass,
        clubId: selectedYachtClub,
        sailNo: sailNo,
        name: nameInput,
      })
      .then(
        (response) => {},
        (error) => {
          console.log(error);
        }
      );
  };

  return (
    <div className="register-boat-container">
      <form onSubmit={handleSubmit}>
        <div className="boat-title-text">
          <Typography variant="h3">Register Boat</Typography>
        </div>
        <div className="boat-input-container">
          <Paper
            style={{
              width: "100%",
              padding: "20px",
              display: "flex",
              flexFlow: "column",
              alignItems: "center",
            }}
          >
            <TextField
              id="filled-basic"
              variant="standard"
              label="name"
              onChange={handleChangeName}
              value={nameInput}
              style={{ width: "100%", padding: "10px" }}
            />
            <TextField
              id="filled-basic"
              variant="standard"
              label="Sail NO"
              onChange={handleChangeSailNo}
              value={sailNo}
              style={{ width: "100%", padding: "10px" }}
            />
          </Paper>

          <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Yacht Club
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectedYachtClub}
                onChange={handleChangeSelectedYC}
                label="Yacht Club"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {yachtClubs.map((e, index) => {
                  return <MenuItem value={index + 1}>{e.name}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </div>
          <div>
            <FormControl sx={{ m: 1, minWidth: 200 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Yacht Class
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={selectedClass}
                onChange={handleChangeSelectedClass}
                label="Class"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {yachtClasses.length > 0 ? (
                  <div>
                    {yachtClasses.map((e, index) => {
                      return <MenuItem value={index + 1}>{e.name}</MenuItem>;
                    })}
                  </div>
                ) : (
                  <div />
                )}
              </Select>
            </FormControl>
          </div>

          <Button type="submit" variant="contained">
            Register Boat
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterBoat;
