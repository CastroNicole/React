import axios from "axios";

const API_BASE_URL = "http://localhost:3001/contacts";

// Get all contacts
export const getAllContacts = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return { success: false, error: error.message };
  }
};

// Get single contact by ID
export const getContactById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${id}`);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error fetching contact:", error);
    return { success: false, error: error.message };
  }
};

// Create new contact
export const createContact = async (contactData) => {
  try {
    const response = await axios.post(API_BASE_URL, contactData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error creating contact:", error);
    return { success: false, error: error.message };
  }
};

// Update existing contact
export const updateContact = async (id, contactData) => {
  try {
    const response = await axios.put(`${API_BASE_URL}/${id}`, contactData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error updating contact:", error);
    return { success: false, error: error.message };
  }
};

// Delete contact
export const deleteContact = async (id) => {
  try {
    await axios.delete(`${API_BASE_URL}/${id}`);
    return { success: true };
  } catch (error) {
    console.error("Error deleting contact:", error);
    return { success: false, error: error.message };
  }
};
