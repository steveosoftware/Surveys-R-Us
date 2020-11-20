const re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// eslint-disable-next-line
export default (emails) => {
  const invalidEmails = emails
  .split(',')
  .map(email => email.trim())
  .filter(email=> re.test(email) === false)

if(invalidEmails.length){
  if(invalidEmails.includes('')){
    return 'Remove the comma or add another email address'
  }
  return `These emails are invalid: ${invalidEmails}`;
  }
  return null;
};