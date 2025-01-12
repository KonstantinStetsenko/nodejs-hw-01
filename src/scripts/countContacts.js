import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    let count = await readContacts();
    console.log('Всего контактов:', count.length);
  } catch (error) {
    console.log(error);
  }
};

countContacts();
