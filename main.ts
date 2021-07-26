import { question } from "readline-sync";
export {};

class User {
  user: string;
  password: string;
  firstName: string;
  secondName: string;
  age: number;
  id: number;

  company: string;
  projects: string[];
}

class Company {
  user: string;
  password: string;
  employees: User[];
  projects: string[];
  creationDate: string | Date;
  id: number;
}
var database = { users: [new User()], companies: [new Company()] };

function main() {
  while (true) {
    login();
  }
}

function login() {
  /*Pede login do usuário, verifica se login se encontra na base de dados, caso não encontrar,
  ,usuario digita "new user" e passa para função de registro*/
  console.log(
    "Bem vindo! Digite seu usuario e senha. Caso nao tenha um, digite: new user.\nCaso seja uma empresa,\nDigite new company.\n"
  );
  let userlogin: string = question("Digite seu usuario ");
  if (userlogin == "new user") {
    let currentRegister = registerUser();
    while (currentRegister != true) {
      currentRegister = registerUser();
    }
  }
  if (userlogin == "new company") {
    let currentRegisterC = registerCompany();
    while (currentRegisterC != true) {
      currentRegisterC = registerCompany();
    }
  }
}
function registerUser() {
  const nUser = new User();
  nUser.id = database.users.length;

  nUser.user = question("Digite seu novo usuario: ");
  nUser.password = question("Digite sua nova senha: ");
  nUser.firstName = question("Digite seu nome: ");
  nUser.secondName = question("Digite seu segundo nome: ");
  nUser.age = parseInt(question("Digite sua idade: "));
  nUser.company = question("Digite a empresa em que trabalha: ");

  for (var userx of database.users) {
    //Verificação de user
    if (nUser.user == userx.user) {
      console.log(
        "Usuario já encontrado na base de dados. Favor cadastrar novamente."
      );
      return false;
    }
  }
  console.log("cadastro realizado com sucesso! Sua ID é: " + nUser.id);
  database.users.push(nUser);
  return true;
}

function registerCompany() {
  const nCompany = new Company();
  nCompany.id = database.companies.length;

  nCompany.user = question("Digite seu novo usuario: ");
  nCompany.password = question("Digite sua nova senha: ");
  nCompany.creationDate = question(
    "Digite a data de criacao da empresa (yyyy-mm-dd): "
  );
  let date = new Date(nCompany.creationDate);

  for (var usery of database.companies) {
    //Verificação de user
    if (nCompany.user == usery.user) {
      console.log(
        "Usuario já encontrado na base de dados. Favor cadastrar novamente."
      );
      return false;
    }
  }
  console.log("cadastro realizado com sucesso! Sua ID é: " + nCompany.id);
  database.companies.push(nCompany);
  return true;
}

main();
