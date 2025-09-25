import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
import Delete from "../../Modals/Delete/Delete";

function ContactTable({ contacts }) {
  const [openModal, setOpenModal] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedContact, setSelectedContact] = useState(null);

  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);

  const handleDeleteOpen = (contact) => {
    setSelectedContact(contact);
    setOpenDelete(true);
  };
  const handleDeleteClose = () => setOpenDelete(false);

  const handleDelete = () => {
    setOpenDelete(false);
  };

  const handleSubmit = () => {
    setOpenModal(false);
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
                <td style={{ textDecoration: "underline" }}>{contact.name}</td>
                <td>{contact.contactNumber}</td>
                <td>{contact.email}</td>
                <td style={{ textAlign: "center" }}>
                  <button aria-label="Edit Contact" style={{ background: "none", border: "none", padding: "0 6px", fontSize: "18px", verticalAlign: "middle", cursor: "pointer" }} onClick={handleOpen} >
                    <ModeEditOutlinedIcon />
                  </button>
                  <button aria-label="Delete Contact" style={{ background: "none", border: "none", padding: "0 6px", fontSize: "18px", verticalAlign: "middle", cursor: "pointer" }} onClick={() => handleDeleteOpen(contact)} >
                    <DeleteOutlinedIcon />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <AddUpdate isOpen={openModal} onClose={handleClose} onSubmit={handleSubmit} editContact={null} />
      <Delete isOpen={openDelete} onClose={handleDeleteClose} onDelete={handleDelete} contactName={selectedContact ? selectedContact.name : ""} />
    </>
  );
}

export default ContactTable;