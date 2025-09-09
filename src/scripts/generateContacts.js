import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  const data = await readContacts();
  for (let i = 0; i < number; i++) {
    data.push(createFakeContact());
  }
  await writeContacts(data);
};

generateContacts(5);
