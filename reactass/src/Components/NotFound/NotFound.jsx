import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  return (
    <>
      <div className="container d-flex justify-content-start mt-5">
        <div>
          <ErrorOutlineIcon
            style={{ fontSize: "70px", marginBottom: "10px" }}
          />
          <h2 className="fw-bold">Oops! Page Not Found</h2>
          <p>Sorry, the requested is not found. Please check the URL again.</p>
        </div>
      </div>
    </>
  );
}

export default NotFound;
