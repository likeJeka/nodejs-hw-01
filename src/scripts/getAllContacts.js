console.log('Starting getAllContacts.js script...');

import readContacts from '../utils/readContacts.js';

async function getAllContacts() {
  try {
    const contacts = await readContacts();
    console.log('All contacts:', contacts);
  } catch (error) {
    console.error('Error getting all contacts:', error);
  }
}

getAllContacts();
