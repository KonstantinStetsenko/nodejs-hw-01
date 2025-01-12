import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    let readArr = await readContacts();
    const addOne = createFakeContact();
    readArr.push(addOne);
    await writeContacts(readArr);
    console.log(`Контакт успешно создан`, addOne);
    console.log(`Количество контактов:`, readArr.length);
  } catch (error) {
    console.log(error);
  }
};

addOneContact();
