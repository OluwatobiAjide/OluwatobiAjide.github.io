import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

async function writeUser(username, zipcode,interest , dbSettings) {
    const db = await open(dbSettings)
    await db.run('CREATE TABLE IF NOT EXISTS user (name text,zipcode text,interest text)');
    await db.run(`INSERT INTO user VALUES ("${username}","${zipcode}","${interest}")`);
    const result = await db.each('SELECT * FROM user', (err) => {
        console.log('writeuser', err);
    });
    console.log('Expected result', result);
    return result;
  }
  
  
export default writeUser;


//   import writeUser from "./libraries/writeuser";

// 