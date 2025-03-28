function CadastroUsuario(){
    let nome = document.getElementById("NomeUsuario");
    let email = document.getElementById("EmailUsuario");
    let senha = document.getElementById("senha");

    let cadastro = {
        nome: nome,
        email: email,
        senha: senha
      };
      
      // Importar a biblioteca crypto-js
const CryptoJS = require('crypto-js');


// Criptografar a senha
let senhaCriptografada = CryptoJS.AES.encrypt(cadastro.senha, 'chaveSecreta').toString();

// Substituir a senha original pela senha criptografada
cadastro.senha = senhaCriptografada;

// Converter o objeto para uma string JSON e armazenar no LocalStorage
localStorage.setItem('cadastro', JSON.stringify(cadastro));

// Recuperar os dados do LocalStorage e converter de volta para um objeto JSON
let cadastroRecuperado = JSON.parse(localStorage.getItem('cadastro'));

// Descriptografar a senha
let senhaDescriptografada = CryptoJS.AES.decrypt(cadastroRecuperado.senha, 'chaveSecreta').toString(CryptoJS.enc.Utf8);

// Substituir a senha criptografada pela senha descriptografada
cadastroRecuperado.senha = senhaDescriptografada;

console.log(cadastroRecuperado);

      
}