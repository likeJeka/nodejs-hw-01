console.log('Starting removeAllContacts.js script...');

import writeContacts from '../utils/writeContacts.js';

async function removeAllContacts() {
  try {
    await writeContacts([]);
    console.log('All contacts have been removed from db.json.');
  } catch (error) {
    console.error('Error removing all contacts:', error);
  }
}

removeAllContacts();
