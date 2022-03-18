//Lib is the common name for the directory that is going to have all the SQL things

const { open } = require("sqlite")
const sqlite3 = require("sqlite3")

async function getDBHandler() { //Crear un manejador de la BDD
    try {
        const dbHandler = await open({ //Abrir una base de datos, es el manejador
            filename: "db.sqlite", //Nuestro archivo se llamara db.sqlite
            driver: sqlite3.Database // El driver de sqlite3
        });

        if(!dbHandler) throw new Error(`DB Handler expected,got ${dbHandler}`)
        return dbHandler
    } catch (error) {
        // console.log(`There's and error ${error.message}`);
        console.log(error);
    }

}

async function initializeDB() {
    try {
        const dbHandler = await getDBHandler();
        await dbHandler.exec(`
        CREATE TABLE IF NOT EXISTS todos(
            id INTEGER PRIMARY KEY,
            title TEXT,
            description TEXT,
            is_done INTEGER DEFAULT 0
        )
        `)
        await dbHandler.close();
    } catch (error) {
        // console.log(`There's and error ${error.message}`);
        console.log(error);
    }


}

module.exports = { getDBHandler, initializeDB }