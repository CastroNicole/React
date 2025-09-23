import React from "react";
import Table from "react-bootstrap/Table";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function ContactTable() {
  return (
    <>
      <div style={{ marginRight: "15px" }}>
        <Table>
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
                }}
              >
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>orayt</td>
              <td>0923917323</td>
              <td>wew@gmail.com</td>
              <td>
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
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default ContactTable;
