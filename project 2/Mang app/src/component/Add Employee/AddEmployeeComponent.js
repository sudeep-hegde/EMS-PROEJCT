import React, { useState, useEffect } from "react";

import EmployeeService from '../../service/EmployeeService'
import { Link, useNavigate, useParams } from "react-router-dom";

import "./AddEmployeeComponent.css";

import TextField from "@mui/material/TextField";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const AddEmployeeComponent = () => {
  /** Variables and method to collect and store inputes */

  const [firstName, setFirstName] = useState("");

  const [lastName, setLastName] = useState("");

  const [emailId, setEmail] = useState("");

  const [role, setRole] = useState();

  const [phno, setPhno] = useState();

  const navigate = useNavigate();

  const { id } = useParams();

  const employeeData = { firstName, lastName, emailId, role, phno }; //bundle the input from user

  /**send data to api and navigate when succesful */

  function saveEmployee(e) {
    e.preventDefault();

    if (
      employeeData.firstName !== "" &&
      employeeData.lastName !== "" &&
      employeeData.emailId != "" &&
      employeeData.role != "" &&
      employeeData.phno != ""
    ) {
      /**If id is present in the parameter, it should update else it should save */

      if (id) {
        EmployeeService.updateEmployee(id, employeeData)

          .then(navigate("/employee"))

          .catch((e) => console.log(e));
      } else {
        EmployeeService.saveEmployee(employeeData)

          .then(navigate("/employee"))

          .catch((e) => console.log(e));
      }
    } else {
      alert("Please, fill in all inputes");
    }
  }

  function tile() {
    if (id) {
      return "Update Employee";
    } else {
      return "Add Employee";
    }
  }

  useEffect(() => {
    if (id) {
      EmployeeService.getEmployeeById(id)

        .then((res) => {
          setFirstName(res.data.firstName);

          setLastName(res.data.lastName);

          setEmail(res.data.emailId);

          setRole(res.data.role);

          setPhno(res.data.phno);
        })

        .catch((e) => console.log(e));
    }
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="card col-md-6 offset-md-3" id="card-tile">
              <h3
                className="text-center"
                id="card-tile-title"
                style={{ color: "white", fontStyle: "italic" }}
              >
                {tile()}
              </h3>

              <div className="card-body">
                <form id="form-div">
                  <div style={{ display: "flex", gap: "10px" }}>
                    <div className="form-group mb-2">
                      <TextField
                        margin="normal"
                        name="firstName"
                        label="First Name"
                        // variant="standard"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        sx={{ width: "20vw" }}
                      />
                    </div>

                    <div className="form-group mb-2">
                      <TextField
                        margin="normal"
                        name="Last Name"
                        label="Last Name"
                        // variant="standard"
                        value={lastName}
                        sx={{ width: "20vw" }}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group mb-2">
                    <TextField
                      // style={{margin:"auto"}}
                      margin="normal"
                      name="Email Id"
                      label="Email Id"
                      // variant="standard"
                      value={emailId}
                      sx={{ width: "40.5vw" }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <div style={{ display: "flex", gap: "10px" }}>
                      <TextField
                        margin="normal"
                        // name="role"
                        label="Role"
                        // variant="standard"
                        value={role}
                        sx={{ width: "20vw" }}
                        onChange={(e) => setRole(e.target.value)}
                      />

                      <TextField
                        margin="normal"
                        // name="phno"
                        label="Phone Number"
                        // variant="standard"
                        value={phno}
                        sx={{ width: "20vw" }}
                        onChange={(e) => setPhno(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      onClick={(e) => saveEmployee(e)}
                      className="btn btn-success"
                      id="save-button"
                    >
                      Save
                    </button>{" "}
                    <Link to={"/employee"} className="btn btn-danger" href="">
                      Cancel
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default AddEmployeeComponent;
