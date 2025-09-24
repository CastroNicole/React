import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';
import AddUpdate from "../../Modals/AddUpdate/AddUpdate";

const contacts = [
  { name: "Jay Contreras", number: "0917-123-4567", email: "kamikazegod@gmail.com" },
  { name: "Jason Astete", number: "0917-123-4567", email: "jason_the_menace@gmail.com" },
  { name: "Mikki Jill", number: "0917-123-4567", email: "keyboardista@gmail.com" },
  { name: "Jose Luis Linao", number: "0917-123-4567", email: "kamikazeeprince@gmail.com" },
  { name: "Allan Burdeos", number: "0917-123-4567", email: "allan_burdeos@gmail.com" },
  { name: "Mark Estacio", number: "0917-123-4567", email: "mark_estacio@gmail.com" },
  { name: "Juanelli . Lubiano", number: "0917-123-4567", email: "kamikazeeprincess@gmail.com" },
  { name: "Led Tuyay", number: "0917-123-4567", email: "led_zt@gmail.com" },
  { name: "Sep Rono", number: "0917-123-4567", email: "sep_of_typecast@gmail.com" },
];

function ContactTable() {
  const [openModal, setOpenModal] = useState(false);
  
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  
  const handleSubmit = (data) => {
    // handle the submitted data here (e.g., add to contacts)
    setOpenModal(false);
  };
  return (
    <>
      <div style={{ marginRight: "15px" }}>
        <Table bordered style={{ borderColor: "#837f89" }}>
          <thead>
            <tr>
              <th
                scope="col"
                style={{
                  backgroundColor: "#460073",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Name
              </th>
              <th
                scope="col"
                style={{
                  backgroundColor: "#460073",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Contact Number
              </th>
              <th
                scope="col"
                style={{
                  backgroundColor: "#460073",
                  color: "white",
                  fontWeight: "500",
                }}
              >
                Email Address
              </th>
              <th
                scope="col"
                style={{
                  backgroundColor: "#460073",
                  color: "white",
                  fontWeight: "500",
                  width: "90px",
                  textAlign: "center",
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact, idx) => (
              <tr key={idx}>
                <td style={{ textDecoration: "underline" }}>{contact.name}</td>
                <td>{contact.number}</td>
                <td>{contact.email}</td>
                <td style={{ textAlign: "center" }}>
                  <button
                    aria-label="Edit Contact"
                    style={{
                      background: "none",
                      border: "none",
                      padding: "0 6px",
                      fontSize: "18px",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                    onClick={handleOpen}
                  >
                    <ModeEditOutlinedIcon fontSize="small" />
                  </button>
                  <button
                    aria-label="Delete Contact"
                    style={{
                      background: "none",
                      border: "none",
                      padding: "0 6px",
                      fontSize: "18px",
                      verticalAlign: "middle",
                      cursor: "pointer",
                    }}
                  >
                    <DeleteOutlinedIcon fontSize="small" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <AddUpdate
        isOpen={openModal}
        onClose={handleClose}
        onSubmit={handleSubmit}
        editContact={null}
      />
    </>
  );
}

export default ContactTable;