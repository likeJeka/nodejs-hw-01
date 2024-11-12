console.log('Starting removeLastContact.js script...');

import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';

async function removeLastContact() {
  try {
    const contacts = await readContacts();
    if (contacts.length > 0) {
      contacts.pop();

      await writeContacts(contacts);
      console.log('Last contact has been removed from db.json.');
    } else {
      console.log('No contacts to remove.');
    }
  } catch (error) {
    console.error('Error removing last contact:', error);
  }
}

removeLastContact();
