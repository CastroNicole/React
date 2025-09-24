import React from "react";
import Card from "react-bootstrap/Card";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditOutlinedIcon from '@mui/icons-material/ModeEditOutlined';

function ContactCard() {
  return (
    <>
      <div className="row g-3 me-2 mb-3">
        {Array.from({ length: 12 }).map((_, index) => (
          <div className="col-12 col-sm-6 col-lg-4" key={index}>
            <Card className="h-100" style={{ borderRadius: "10px" }}>
              <Card.Body>
                <div className="d-flex justify-content-between align-items-center">
                  <Card.Title style={{ textDecoration: "underline" }}>Card Title</Card.Title>
                  <div>
                    <button
                      aria-label="Edit Contact"
                      style={{
                        background: "none",
                        border: "none",
                        fontSize: "5px",
                      }}
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
                    >
                      <DeleteOutlinedIcon />
                    </button>
                  </div>
                </div>

                <Card.Text className="mb-2 mt-1">
                  wew@gmail.com
                </Card.Text>
                <Card.Text>
                  09123901827
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
