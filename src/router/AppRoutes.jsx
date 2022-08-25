import React from "react";
import { Routes, Route} from "react-router-dom";
import Login from '../containers/login'
function AppRoutes() {
    return (
      <div>
        <Routes>
          <Route path="/" element={<Login/>} /> 
        </Routes>
      </div>
    );
  }

export default AppRoutes;