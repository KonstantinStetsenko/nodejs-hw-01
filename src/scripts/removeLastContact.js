import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  let arr;

  try {
    const data = await readContacts();
    arr = data;

    if (arr.length > 0) {
      const removedContact = arr.pop();
      console.log(`
Удаление последнего элемента массива:

${JSON.stringify(removedContact, null, 2)}

Осталось элементов в массиве: ${arr.length}
      `);
    } else {
      console.log(`Все элементы удалены. В массиве ${arr.length} элементов.`);
    }
    await writeContacts(arr);
  } catch (error) {
    console.log(error);
  }
};

removeLastContact();
