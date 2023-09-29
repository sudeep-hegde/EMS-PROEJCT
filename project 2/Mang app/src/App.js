// import AddEmployeeComponent from "./component/AddEmployeeComponent";
// import ListEmployeeComponent from "./component/ListEmployeeComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from "./component/sign-in/SignInSide";
import PrivateRoute from "./RouteServices/PrivateRoute";
import LoginRoute from "./RouteServices/LoginRoute";
import Nav from "./sub-components/Nav";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material";
import ListEmployeeComponent from "./component/List Employee/ListEmployeeComponent";
import AddEmployeeComponent from "./component/Add Employee/AddEmployeeComponent";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
    <BrowserRouter>    
    <Nav/>
      <div className="container">
        <Routes>
          <Route path="/login" element={
          <LoginRoute>
            <SignInSide />
          </LoginRoute>
          } />
          <Route path="/" element={
            <PrivateRoute>
              <ListEmployeeComponent />
            </PrivateRoute>
          } />
          <Route path="/employee" element={
            <PrivateRoute>
              <ListEmployeeComponent />
            </PrivateRoute>} 
            />
          <Route path="/add-employee" element={
            <PrivateRoute>
              <AddEmployeeComponent />
            </PrivateRoute>
          } />
          <Route path="/add-employee/:id" element={
          <PrivateRoute>
            <AddEmployeeComponent />
          </PrivateRoute>
          } />
        </Routes>
      </div>
      {/* <FooterComponent /> */}
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;