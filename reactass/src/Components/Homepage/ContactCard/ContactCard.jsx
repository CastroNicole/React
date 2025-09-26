import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
import Delete from "../../Modals/Delete/Delete";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { phoneNumberSplit } from "../../Utils/phoneNumberUtils.jsx";

  function ContactCard({ contacts, setContacts, onEdit, onDelete }) {
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
      if (onDelete) {
        await onDelete(selectedContact.id); // <-- Call parent's deleteContact for snackbar
      }
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
        if (onEdit) {
          await onEdit(data); // <-- Call parent's editContact for snackbar
        }
      } catch (err) {
        console.error(err);
      }
    } else {
      // Add new contact
      setOpenModal(false);
    }
  };

  return (
    <>
      <div className="row g-3 me-2 mb-3">
        {contacts.map((contact) => (
          <div className="col-12 col-sm-6 col-lg-4" key={contact.id}>
            <Card className="h-100" style={{ borderRadius: "10px" }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title aria-label="Contact Name" style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate(`/info/${contact.id}`)} >
                    {contact.name}
                  </Card.Title>
                  <div>
                    <button aria-label="Edit Contact" style={{ background: "none", border: "none", fontSize: "5px" }} onClick={() => handleEditOpen(contact)}>
                      <ModeEditOutlinedIcon />
                    </button>
                    <button aria-label="Delete Contact" style={{ background: "none", border: "none", fontSize: "5px" }} onClick={() => handleDeleteOpen(contact)} >
                      <DeleteOutlinedIcon />
                    </button>
                  </div>
                </div>
                <Card.Text className="mb-2 mt-1">{contact.email}</Card.Text>
                <Card.Text>{phoneNumberSplit(contact.contactNumber)}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <AddUpdate isOpen={openModal} onClose={handleClose} onSubmit={handleSubmit} editContact={selectedContact} />
      <Delete isOpen={openDelete} onClose={handleDeleteClose} onDelete={handleDelete} contactName={selectedContact ? selectedContact.name : ""} />
    </>
  );
  }

  export default ContactCard;