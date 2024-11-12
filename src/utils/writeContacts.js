import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';

async function writeContacts(data) {
  try {
    console.log('Writing contacts:', JSON.stringify(data, null, 2));
    await fs.writeFile(PATH_DB, JSON.stringify(data, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
}

export default writeContacts;
