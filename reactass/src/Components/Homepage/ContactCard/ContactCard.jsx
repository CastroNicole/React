import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
import Delete from "../../Modals/Delete/Delete";
import { useNavigate } from "react-router-dom";
import { phoneNumberSplit } from "../../Utils/phoneNumberUtils.jsx";
import { updateContact, deleteContact } from "../../Utils/contactService.jsx";

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
    const result = await deleteContact(selectedContact.id);
    if (result.success) {
      setContacts(contacts.filter(c => c.id !== selectedContact.id));
      setOpenDelete(false);
      setSelectedContact(null);
      if (onDelete) {
        onDelete(selectedContact.id);
      }
    }
  };

    // Update contact logic
  const handleSubmit = async (data) => {
    if (selectedContact) {
      // Update existing contact
      const result = await updateContact(selectedContact.id, data);
      if (result.success) {
        setContacts(
          contacts.map((c) => (c.id === selectedContact.id ? result.data : c))
        );
        setOpenModal(false);
        setSelectedContact(null);
        if (onEdit) {
          await onEdit(data);
        }
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
                  <button 
                    aria-label={`View details for ${contact.name}`}
                    style={{ background: "none", border: "none", textDecoration: "underline", cursor: "pointer", padding: 0, fontSize: "1.25rem", fontWeight: "500", color: "inherit", textAlign: "left" }} 
                    onClick={() => navigate(`/info/${contact.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/info/${contact.id}`);
                      }}}>
                    {contact.name}
                  </button>
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