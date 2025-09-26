import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

function NotFound() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Go back to previous page in browser history
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex align-items-center mb-4">
          <button aria-label="Go Back" style={{ background: "none", border: "none", fontSize: "20px", marginRight: "10px" }} onClick={handleGoBack} >
            <ArrowBackIcon />
          </button>
          <h4 className="page-title mb-0">Back</h4>
        </div>
        
        <div className="d-flex justify-content-start">
          <div>
            <ErrorOutlineIcon style={{ fontSize: "70px", marginBottom: "10px" }} />
            <h2 className="fw-bold">Oops! Page Not Found</h2>
            <p>Sorry, the requested page is not found. Please check the URL again.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFound;
