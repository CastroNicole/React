import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";
import Delete from "../../Modals/Delete/Delete"; // import the Delete modal

function ContactCard() {
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
    // handle delete logic here (e.g., remove contact from list)
    setOpenDelete(false);
  };

  const handleSubmit = (data) => {
    // handle the submitted data here (e.g., add to contacts)
    setOpenModal(false);
  };

  // Example contact data for demonstration
  const contacts = Array.from({ length: 12 }).map((_, index) => ({
    name: `Contact ${index + 1}`,
    email: `contact${index + 1}@gmail.com`,
    number: `09123${index}1827`
  }));

  return (
    <>
      <div className="row g-3 me-2 mb-3">
        {contacts.map((contact, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <Card className="h-100" style={{ borderRadius: "10px" }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title style={{ textDecoration: "underline" }}>
                    {contact.name}
                  </Card.Title>
                  <div>
                    <button
                      aria-label="Edit Contact"
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "5px",
                      }}
                      onClick={handleOpen}
                    >
                      <ModeEditOutlinedIcon />
                    </button>
                    <button
                      aria-label="Delete Contact"
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "5px",
                      }}
                      onClick={() => handleDeleteOpen(contact)}
                    >
                      <DeleteOutlinedIcon />
                    </button>
                  </div>
                </div>

                <Card.Text className="mb-2 mt-1">
                  {contact.email}
                </Card.Text>
                <Card.Text>
                  {contact.number}
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
      <AddUpdate
        isOpen={openModal}
        onClose={handleClose}
        onSubmit={handleSubmit}
        editContact={null}
      />
      <Delete
        isOpen={openDelete}
        onClose={handleDeleteClose}
        onDelete={handleDelete}
        contactName={selectedContact ? selectedContact.name : ""}
      />
    </>
  );
}

export default ContactCard;