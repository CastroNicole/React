import React, { useState } from "react";
import GridViewIcon from "@mui/icons-material/GridView";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContactCard from "../ContactCard/ContactCard";
import ContactTable from "../ContactTable/ContactTable";
import Card from "react-bootstrap/Card";
import "../Home/Home.css";
import Grid from "@mui/material/Grid";

function Home() {
  const [view, setView] = useState("card"); // "card" or "table"

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="page-title fw-bold">Contact Information</h5>
            <p className="mb-0">
              Your list of contact appear here. To add a new contact, click the
              Add New button.
            </p>
          </div>

          <div>
            <button
              className="btn fw-bold"
              style={{
                backgroundColor: "#9400FF",
                color: "white",
                borderRadius: "25px",
                padding: "10px 30px",
                marginRight: "15px",
              }}
            >
              Add New Contact
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-end me-3 mb-2">
          <div>
            <button
              aria-label="Card View"
              style={{ background: "none", border: "none" }}
              onClick={() => setView("card")}
              disabled={view === "card"}
            >
              <GridViewIcon
                style={{
                  fontSize: "20px",
                  color: view === "card" ? "black" : "gray",
                  //cursor: view === "card" ? "not-allowed" : "pointer",
                }}
              />
            </button>
          </div>

          <div>
            <button
              aria-label="Table View"
              style={{ background: "none", border: "none" }}
              onClick={() => setView("table")}
              disabled={view === "table"}
            >
              <MenuOutlinedIcon
                style={{
                  fontSize: "20px",
                  color: view === "table" ? "black" : "gray",
                  //cursor: view === "table" ? "not-allowed" : "pointer",
                }}
              />
            </button>
          </div>
        </div>

        <div>
          {view === "card" && <ContactCard />}
          {view === "table" && <ContactTable />}
        </div>
      </div>
    </>
  );
}

export default Home;
