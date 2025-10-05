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
    console.log(`connecting to the database... "${dataName}` );
}

async function desconnectFromDatabase(dataName) {
    // Simulate a database disconnection
    console.log(`disconnecting from the database... "${dataName}` );
}

export { connectToDatabase, desconnectFromDatabase, dataBaseType };