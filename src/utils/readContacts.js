import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export async function readContacts() {
  try {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const parsedData = JSON.parse(data || '[]');
    console.log('Данные успешно прочитаны:');
    console.log(JSON.stringify(parsedData, null, 2));
    return parsedData;
  } catch (error) {
    console.log('Ошибка чтения данных:', error);
    return [];
  }
}
