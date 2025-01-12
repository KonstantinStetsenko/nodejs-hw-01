import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const writeContacts = async (updatedContacts) => {
  try {
    fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));
    console.log(`Файл ${PATH_DB} успешно записан`);
  } catch (error) {
    console.log(error);
  }
};
