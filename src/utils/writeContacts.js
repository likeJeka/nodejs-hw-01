import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2);
    await fs.writeFile(path.resolve(PATH_DB), data, 'utf8');
  } catch (error) {
    console.error('Error writing contacts:', error);
  }
};
