import React from "react";
import Card from "react-bootstrap/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ContactCard() {
  return (
    <>
      <div className="row g-3 me-2 mb-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <Card className="h-100" style={{ borderRadius: "10px" }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title>Card Title</Card.Title>
                  <div>
                    <button
                      aria-label="Edit Contact"
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "5px",
                      }}
                    >
                      <EditIcon />
                    </button>
                    <button
                      aria-label="Delete Contact"
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "5px",
                      }}
                    >
                      <DeleteIcon />
                    </button>
                  </div>
                </div>

                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
}

export default ContactCard;
