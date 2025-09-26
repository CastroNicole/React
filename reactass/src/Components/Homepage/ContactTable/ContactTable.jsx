import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
import Delete from "../../Modals/Delete/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ContactTable({ contacts, setContacts }) {
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);
  const navigate = useNavigate();
  // Open modal for adding
    const handleOpen = () => {
      setSelectedContact(null);
      setOpenModal(true);
    };
    // Open modal for editing
    const handleEditOpen = (contact) => {
      setSelectedContact(contact);
      setOpenModal(true);
    };
    const handleClose = () => setOpenModal(false);

  const handleDeleteOpen = (contact) => {
    setSelectedContact(contact);
    setOpenDelete(true);
  };
  const handleDeleteClose = () => setOpenDelete(false);

  const handleDelete = async () => {
      if (!selectedContact) return;
      try {
        await axios.delete(`http://localhost:3001/contacts/${selectedContact.id}`);
        setContacts(contacts.filter(c => c.id !== selectedContact.id));
        setOpenDelete(false);
        setSelectedContact(null);
      } catch (err) {
        console.error(err);
      }
    };
    // Update contact logic
  const handleSubmit = async (data) => {
    if (selectedContact) {
      // Update existing contact
      try {
        const res = await axios.put(`http://localhost:3001/contacts/${selectedContact.id}`, data);
        setContacts(
          contacts.map((c) => (c.id === selectedContact.id ? res.data : c))
        );
        setOpenModal(false);
        setSelectedContact(null);
      } catch (err) {
        console.error(err);
      }
    } else {
      // Add new contact (if you want to keep add functionality here)
      setOpenModal(false);
    }
  };

  return (
    <>
      <div style={{ marginRight: "15px" }}>
        <Table bordered style={{ borderColor: "#837f89" }}>
          <thead>
            <tr>
              <th scope="col" style={{ backgroundColor: "#460073", color: "white", fontWeight: "500" }} >
                Name
              </th>
              <th scope="col" style={{ backgroundColor: "#460073", color: "white", fontWeight: "500" }} >
                Contact Number
              </th>
              <th scope="col" style={{ backgroundColor: "#460073", color: "white", fontWeight: "500" }} >
                Email Address
              </th>
              <th scope="col" style={{ backgroundColor: "#460073", color: "white", fontWeight: "500", width: "90px", textAlign: "center" }} >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, idx) => (
              <tr key={idx}>
                <td style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate(`/info/${contact.id}`)}>{contact.name}</td>
                <td>{contact.contactNumber}</td>
                <td>{contact.email}</td>
                <td style={{ textAlign: "center" }}>
                  <button aria-label="Edit Contact" style={{ background: "none", border: "none", fontSize: "5px" }} onClick={() => handleEditOpen(contact)} >
                    <ModeEditOutlinedIcon />
                  </button>
                  <button aria-label="Delete Contact" style={{ background: "none", border: "none", fontSize: "5px" }} onClick={() => handleDeleteOpen(contact)} >
                    <DeleteOutlinedIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <AddUpdate isOpen={openModal} onClose={handleClose} onSubmit={handleSubmit} editContact={selectedContact} />
      <Delete isOpen={openDelete} onClose={handleDeleteClose} onDelete={handleDelete} contactName={selectedContact ? selectedContact.name : ""} />
    </>
  );
}

export default ContactTable;