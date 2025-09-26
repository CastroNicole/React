import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
import Delete from "../../Modals/Delete/Delete";
import { useNavigate } from "react-router-dom";
import { phoneNumberSplit } from "../../Utils/phoneNumberUtils.jsx";
import { updateContact, deleteContact } from "../../Utils/contactService.jsx";

function ContactTable({ contacts, setContacts, onEdit, onDelete }) {
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
          onEdit(data);
        }
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
                <td>
                  <button 
                    aria-label={`View details for ${contact.name}`}
                    style={{ background: "none", border: "none", textDecoration: "underline", cursor: "pointer", textAlign: "left" }} 
                    onClick={() => navigate(`/info/${contact.id}`)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        navigate(`/info/${contact.id}`);
                      }}}>
                    {contact.name}
                  </button>
                </td>
                <td>{phoneNumberSplit(contact.contactNumber)}</td>
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