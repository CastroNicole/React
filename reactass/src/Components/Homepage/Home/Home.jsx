import GridViewIcon from "@mui/icons-material/GridView";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContactCard from "../ContactCard/ContactCard";
import ContactTable from "../ContactTable/ContactTable";
import "../Home/Home.css";
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
import React, { useState, useEffect } from "react";
import axios from "axios";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [view, setView] = useState("card");
  const [openModal, setOpenModal] = useState(false);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  useEffect(() => {
    axios.get("http://localhost:3001/contacts")
      .then((res) => setContacts(res.data))
      .catch((err) => console.error(err));
  }, []);

  const addContact = async (data) => {
    try {
      const res = await axios.post("http://localhost:3001/contacts", data);
      setContacts([...contacts, res.data]);
      setOpenModal(false);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h5 className="page-title fw-bold">Contact Information</h5>
            <p className="mb-0">
              Your list of contacts appear here. To add a new contact, click on the<br></br>Add New Contact button.
            </p>
          </div>

          <div>
            <button className="btn fw-bold" style={{ backgroundColor: "#9400FF", color: "white", borderRadius: "25px", padding: "10px 30px", marginRight: "15px", }} onClick={handleOpen}>
              Add New Customer
            </button>
          </div>
        </div>

        <div className="d-flex justify-content-end me-3 mb-2">
          <div>
            <button aria-label="Card View" style={{ background: "none", border: "none" }} onClick={() => setView("card")} disabled={view === "card"}>
              <GridViewIcon style={{ fontSize: "20px", color: view === "card" ? "black" : "gray" }}/>
            </button>
          </div>

          <div>
            <button aria-label="Table View" style={{ background: "none", border: "none" }} onClick={() => setView("table")} disabled={view === "table"}>
              <MenuOutlinedIcon style={{ fontSize: "20px", color: view === "table" ? "black" : "gray", }} />
            </button>
          </div>
        </div>

        <div>
          {view === "card" && (<ContactCard contacts={contacts} setContacts={setContacts} />)}
          {view === "table" && (<ContactTable contacts={contacts} setContacts={setContacts} />)}
        </div>
      </div>

      <AddUpdate
        isOpen={openModal}
        onClose={handleClose}
        onSubmit={addContact}
        editContact={null}
      />
    </>
  );
}

export default Home;