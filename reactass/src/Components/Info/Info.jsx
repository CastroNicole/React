import React from "react";
import Card from "react-bootstrap/Card";

function Info() {
  return (
    <>
      <div className="container mt-5">
        <div className="d-flex align-items-center">
          <button>
            <span>wew</span>
          </button>
          <h5 className="page-title mb-0">Contact Information</h5>
        </div>

        <Card>
          <div className="d-flex flex-row justify-content-between align-items-center m-4">
            <div>
              <div>Full Name</div>
              <div>Test Name</div>
            </div>

            <div>
              <div>Email Address</div>
              <div>Test Email</div>
            </div>

            <div>
              <div>Contact Number</div>
              <div>09641646736</div>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}

export default Info;
