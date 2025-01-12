import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    const data = await readContacts();
    let arrData = data;
    if (arrData.length > 0) {
      arrData.length = 0;
      console.log('Массив очищен!');
    } else {
      console.log('Массив уже пуст!');
    }
    await writeContacts(arrData);
  } catch (error) {
    console.log(error);
  }
};

removeAllContacts();
