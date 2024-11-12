console.log('Starting countContacts.js script...');

import readContacts from '../utils/readContacts.js';

async function countContacts() {
  try {
    const contacts = await readContacts();
    const count = contacts.length;
    console.log('Total number of contacts:', count);
  } catch (error) {
    console.error('Error counting contacts:', error);
  }
}

countContacts();
