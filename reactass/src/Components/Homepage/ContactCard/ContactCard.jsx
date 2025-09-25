  import React, { useState } from "react";
  import Card from "react-bootstrap/Card";
  import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
  import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
  import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
  import Delete from "../../Modals/Delete/Delete";
  import { useNavigate } from "react-router-dom";

  function ContactCard({ contacts }) {
    const [openModal, setOpenModal] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const navigate = useNavigate();

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
        <div className="row g-3 me-2 mb-3">
          {contacts.map((contact) => (
            <div className="col-12 col-sm-6 col-lg-4" key={contact.id}>
              <Card className="h-100" style={{ borderRadius: "10px" }}>
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center">
                    <Card.Title style={{ textDecoration: "underline", cursor: "pointer" }} onClick={() => navigate(`/info/${contact.id}`)}>
                      {contact.name}
                    </Card.Title>
                    <div>
                      <button aria-label="Edit Contact" style={{ background: "none", border: "none", fontSize: "5px" }} onClick={handleOpen} >
                        <ModeEditOutlinedIcon />
                      </button>
                      <button aria-label="Delete Contact" style={{ background: "none", border: "none", fontSize: "5px" }} onClick={() => handleDeleteOpen(contact)} >
                        <DeleteOutlinedIcon />
                      </button>
                    </div>
                  </div>
                  <Card.Text className="mb-2 mt-1">
                    {contact.email}
                  </Card.Text>
                  <Card.Text>
                    {contact.contactNumber}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <AddUpdate isOpen={openModal} onClose={handleClose} onSubmit={handleSubmit} editContact={null} />
        <Delete isOpen={openDelete} onClose={handleDeleteClose} onDelete={handleDelete} contactName={selectedContact ? selectedContact.name : ""} />
      </>
    );
  }

  export default ContactCard;