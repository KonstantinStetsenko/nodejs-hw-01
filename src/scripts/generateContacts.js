import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    let arr = await readContacts();
    for (let i = 0; i < number; i++) {
      arr.push(createFakeContact());
    }
    await writeContacts(arr);
    console.log(`Контакты успешно созданы, добавленно ${arr.length} контактов`);
  } catch (error) {
    console.log(error);
  }
};

generateContacts(5);
