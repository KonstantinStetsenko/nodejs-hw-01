import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const getAllContacts = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const contacts = JSON.parse(data);
  console.log(`Масив контактов ${JSON.stringify(contacts, null, 2)}`);
  console.log(`Количество контактов ${contacts.length}`);
  return data;
};

getAllContacts();
