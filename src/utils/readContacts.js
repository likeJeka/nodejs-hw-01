import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import path from 'path';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(path.resolve(PATH_DB), 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error);
    return [];
  }
};
