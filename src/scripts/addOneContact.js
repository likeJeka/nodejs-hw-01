console.log('Starting addOneContact.js script...');

import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

async function addOneContact() {
  try {
    const contacts = await readContacts();
    console.log('Existing contacts:', contacts);

    const newContact = createFakeContact();
    console.log('New contact to add:', newContact);

    contacts.push(newContact);

    await writeContacts(contacts);
    console.log('New contact successfully added to db.json:', newContact);
  } catch (error) {
    console.error('Error adding one contact:', error);
  }
}

addOneContact();
