import GridViewIcon from "@mui/icons-material/GridView";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ContactCard from "../ContactCard/ContactCard";
import ContactTable from "../ContactTable/ContactTable";
import "../Home/Home.css";
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
import { useState, useEffect } from "react";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

function Home() {
  const [contacts, setContacts] = useState([]);
  const [view, setView] = useState("card");
  const [openModal, setOpenModal] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

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
      setSnackbar({ open: true, message: "Contact added successfully!", severity: "success" });
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: "Failed to add contact.", severity: "error" });
    }
  };

  const editContact = async (data) => {
    try {
      setSnackbar({ open: true, message: "Contact updated successfully!", severity: "success" });
    } catch (err) {
      setSnackbar({ open: true, message: "Failed to update contact.", severity: "error" });
    }
  };

  const deleteContact = async (id) => {
    try {
      setSnackbar({ open: true, message: "Contact deleted successfully!", severity: "success" });
    } catch (err) {
      setSnackbar({ open: true, message: "Failed to delete contact.", severity: "error" });
    }
  };

  const handleSnackbarClose = () => setSnackbar({ ...snackbar, open: false });

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
            <button aria-label="Add New Customer" className="btn fw-bold" style={{ backgroundColor: "#9400FF", color: "white", borderRadius: "25px", padding: "10px 30px", marginRight: "15px", }} onClick={handleOpen}>
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
          {view === "card" && ( <ContactCard contacts={contacts} setContacts={setContacts} onEdit={editContact} onDelete={deleteContact} /> )}
          {view === "table" && ( <ContactTable contacts={contacts} setContacts={setContacts} onEdit={editContact} onDelete={deleteContact} /> )}
        </div>
      </div>

      <AddUpdate isOpen={openModal} onClose={handleClose} onSubmit={addContact} editContact={null} />
      <Snackbar anchorOrigin={{ vertical: "bottom", horizontal: "right" }} open={snackbar.open} autoHideDuration={3000} onClose={handleSnackbarClose} >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} style={{ width: "100%" }} >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </>
  );
}

export default Home;