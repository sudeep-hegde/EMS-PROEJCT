import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import EmployeeService from "../../service/EmployeeService";

import { Fab, InputBase } from "@mui/material";

import AddIcon from "@mui/icons-material/Add";

import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";

import "./ListEmployeeComponent.css";

const ListEmployeeComponent = () => {
  const [employeeArray, setEmployeeArray] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllEmployee();
  });

  const addButton = (
    <div className="add-button-div">
      <Link to={"/add-employee"} href="">
        <abbr title="Add Employee">
          <Fab
            color="primary"
            aria-label="add"
            sx={{
              backgroundColor: "#03DAC5",

              color: "black",

              "&:hover": {
                backgroundColor: "#84ffff    ",
              },
            }}
          >
            <AddIcon />
          </Fab>
        </abbr>
      </Link>
    </div>
  );

  const updateButton = (
    <abbr title="Update employee">
      <Fab size="small" color="secondary" aria-label="add">
        <EditIcon fontSize="small" />
      </Fab>
    </abbr>
  );

  const deleteButton = (
    <abbr title="Delete employee">
      <Fab size="small" color="error" aria-label="add">
        <DeleteIcon fontSize="small" />
      </Fab>
    </abbr>
  );

  function getAllEmployee() {
    EmployeeService.getAllEmployee()

      .then((res) => {
        setEmployeeArray(res.data);

        console.log(res);
      })

      .catch((e) => console.log(e));
  }

  function deleteEmployee(e, id) {
    e.preventDefault();

    EmployeeService.deleteEmployee(id)

      .then(getAllEmployee())

      .catch((e) => console.log(e));
  }

  return (
    <div className="container">
      <form>
        <div className="nav-search-div">
          <InputBase
            onChange={(e) => setSearch(e.target.value)}
            placeholder=" Search..."
            sx={{ color: "black" }}
          />
        </div>
      </form>

      <p className="emp-list">List of Employees</p>

      <div>
        <table>
          <thead>
            <th>Employee ID</th>

            <th>Employee First Name</th>

            <th>Employee Last Name</th>

            <th>Employee Email</th>

            <th>Role</th>
            <th>Phone No</th>

            <th>Actions</th>
          </thead>

          <tbody>
            {employeeArray
              .filter((item) => {
                return search.toLowerCase() === ""
                  ? item
                  : item.firstName.toLowerCase().includes(search);
              })
              .map((employee) => (
                <tr id={employee.id}>
                  <td>{employee.id}</td>

                  <td>{employee.firstName}</td>

                  <td>{employee.lastName}</td>

                  <td>{employee.emailId}</td>

                  <td>{employee.role}</td>

                  <td>{employee.phno}</td>

                  <td>
                    <Link to={`/add-employee/${employee.id}`} href="">
                      {updateButton}
                    </Link>
                    {"  "}
                    <a
                      style={{ marginLeft: "5px" }}
                      onClick={(e) => deleteEmployee(e, employee.id)}
                    >
                      {deleteButton}
                    </a>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {addButton}
    </div>
  );
};

export default ListEmployeeComponent;
