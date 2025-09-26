export function phoneNumberSplit(phone) {
  if (!phone) return '';
  
  // Remove any non-digit characters first
  const cleanPhone = phone.replace(/\D/g, '');
  
  // Check if it's a valid 11-digit number (like 09212321245)
  const match = cleanPhone.match(/^(\d{4})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  
  // Return original phone if it doesn't match expected patterns
  return phone;
}
export const formatPhoneNumber = phoneNumberSplit;
