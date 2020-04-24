import sqlite3 from 'sqlite3';
import { open } from 'sqlite';


async function getUsers(dbSettings){
    const db = await open(dbSettings);
    const result = await db.all("SELECT * FROM user");
    console.log("Get result", result);
    return result;
  }

  
export default getUsers;