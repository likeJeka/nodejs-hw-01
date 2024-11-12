console.log("Starting generateContacts.js script...");
console.log("After start log, before imports.");

import readContacts from '../utils/readContacts.js';
import writeContacts from '../utils/writeContacts.js';
import createFakeContact from '../utils/createFakeContact.js';

async function generateContacts(count) {
  console.log("generateContacts function called with count:", count);

  const contacts = await readContacts();
  console.log("Contacts from readContacts:", contacts);

  const newContacts = Array.from({ length: count }, createFakeContact);
  console.log("Generated new contacts:", newContacts);

  contacts.push(...newContacts);

  await writeContacts(contacts);
  console.log("Contacts successfully written to db.json:", contacts);
}

generateContacts(5);
