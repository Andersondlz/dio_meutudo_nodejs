async function connectToDatabase(user, password) {
    if (user === process.env.USERDATABASE && password === process.env.PASSWORDDATABASE) { 
        console.log('Conectado ao banco de dados com sucesso!');
    } else {
        console.log('Falha na conexão: usuário ou senha incorretos.');    
    }
}

export default connectToDatabase;