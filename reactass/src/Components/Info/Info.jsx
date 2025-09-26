import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import { phoneNumberSplit } from "../Utils/phoneNumberUtils.jsx";
import { getContactById } from "../Utils/contactService.jsx";

function Info() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [contact, setContact] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    const fetchContact = async () => {
      const result = await getContactById(id);
      if (result.success && result.data && Object.keys(result.data).length > 0) {
        setContact(result.data);
      } else {
        setNotFound(true);
      }
    };
    fetchContact();
  }, [id]);
  if (notFound) return <NotFound />;
  if (!contact) return null;

  return (
    <>
      <div className="container mt-5">
        <div className="d-flex align-items-center">
          <button aria-label="Back to Home" style={{ background: "none", border: "none", fontSize: "20px" }} onClick={() => navigate("/home")} >
            <ArrowBackIcon />
          </button>
          <h3 className="page-title mb-0 ms-1">Contact Information</h3>
        </div>

        <Card className="container mt-4" style={{ borderRadius: "10px" }}>
          {/* Contact Details */}
          <div className="d-flex flex-row justify-content-between align-items-center m-4">
            <div>
              <div className="text-muted">Full Name</div>
              <h4>{contact.name}</h4>
            </div>
            <div>
              <div className="text-muted">Email Address</div>
              <h4>{contact.email}</h4>
            </div>
            <div>
              <div className="text-muted">Contact Number</div>
              <h4>{phoneNumberSplit(contact.contactNumber)}</h4>
            </div>
          </div>

          {/* Transaction History */}
          <div className="px-4 pb-4">
            <div className="bg-light p-3 rounded" style={{ fontWeight: 600 }}>Transaction History</div>
            <table className="table table-borderless mt-2">
              <thead>
                <tr className="text-muted">
                  <th scope="col">Date</th>
                  <th scope="col">Merchant</th>
                  <th scope="col" className="text-end">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>9/23/2023</td>
                  <td>Bench</td>
                  <td className="text-end">PHP 2,000.00</td>
                </tr>
                <tr>
                  <td>9/16/2023</td>
                  <td>Penshoppe</td>
                  <td className="text-end">PHP 5,000.00</td>
                </tr>
                <tr>
                  <td>9/12/2023</td>
                  <td>Mang Tomas Barbequehan</td>
                  <td className="text-end">PHP 1,000.00</td>
                </tr>
                <tr>
                  <td>8/26/2023</td>
                  <td>Penshoppe</td>
                  <td className="text-end">PHP 3,000.00</td>
                </tr>
                <tr>
                  <td>8/16/2023</td>
                  <td>Oxygen</td>
                  <td className="text-end">PHP 1,000.00</td>
                </tr>
                <tr className="fw-bold border-top">
                  <td></td>
                  <td className="text-end">TOTAL</td>
                  <td className="text-end">PHP 12,000.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

      </div>
    </>
  );
}

export default Info;