import chalk from "chalk";
import logSymbols from "log-symbols";

const dataBaseType = {
    userType: 'admin',
    typeData: 'SQL',
    MYSQL: 'MySQL',
    MONGODB: 'MongoDB',
    POSTGRESQL: 'PostgreSQL',
    SQLSERVER: 'SQLServer',
    SQLITE: 'SQLite'
}

async function connectToDatabase(dataName) {
    // Simulate a database connection
    console.log(chalk.green(`Connecting to the database... "${dataName}` ));
}

async function desconnectFromDatabase(dataName) {
    // Simulate a database disconnection
    console.log(logSymbols.error + ' '+ chalk.red(`Disconnecting from the database... "${dataName}` ));
}

export { connectToDatabase, desconnectFromDatabase, dataBaseType };