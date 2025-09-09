import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const data = await readContacts();
  const newContacts = createFakeContact();
  data.push(newContacts);
  await writeContacts(data);
};

addOneContact();
