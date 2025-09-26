export function phoneNumberSplit(phone) {
  if (!phone) return '';
  const cleanPhone = phone.replace(/\D/g, '');
  const match = cleanPhone.match(/^(\d{4})(\d{3})(\d{4})$/);
  if (match) {
    return `${match[1]}-${match[2]}-${match[3]}`;
  }
  return phone;
}
export const formatPhoneNumber = phoneNumberSplit;
