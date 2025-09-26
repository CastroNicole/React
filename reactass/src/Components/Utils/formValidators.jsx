// Name validation - must have at least 1 letter (not just whitespace)
export const validateName = (value) => {
  if (!value || value.trim().length === 0) {
    return "Please enter a name";
  }
  // Check if there's at least one letter (not just spaces, numbers, or special chars)
  if (!/[a-zA-Z]/.test(value.trim())) {
    return "Please enter a name";
  }
  return true;
};

// Contact number validation - must be strictly numbers
export const validateContactNumber = (value) => {
  if (!value || value.trim().length === 0) {
    return "Please enter a contact number";
  }
  // Check if it contains only digits (and optional spaces/dashes)
  if (!/^[\d\s\-\(\)]+$/.test(value.trim())) {
    return "Please enter a contact number";
  }
  // Remove all non-digits and check if it has at least 10 digits
  const digitsOnly = value.replace(/\D/g, '');
  if (digitsOnly.length < 10) {
    return "Please enter a contact number";
  }
  return true;
};

// Email validation - must be a valid email format
export const validateEmail = (value) => {
  if (!value || value.trim().length === 0) {
    return "Please enter an email address";
  }
  // Email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(value.trim())) {
    return "Please enter an email address";
  }
  return true;
};
