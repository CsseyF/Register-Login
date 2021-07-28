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

  constructor() {
    this.user = "";
    this.password = "";
    this.firstName = "";
    this.secondName = "";
    this.age = 0;
    this.id = 0;
    this.company = "";
    this.projects = [];
  }
}

class Company {
  user: string;
  password: string;
  employees: User[];
  projects: string[];
  creationDate: string | Date;
  id: number;

  constructor() {
    this.user = "";
    this.password = "";
    this.employees = [];
    this.projects = [];
    this.creationDate = "";
    this.id = 0;
  }
}
var database = { users: [new User()], companies: [new Company()] };
var currentLogin: User | null = null; //Armazena o login atual

function main() {
  while (currentLogin == null) {
    login();
  }
}

function login() {
  /*Pede login do usuário, verifica se login se encontra na base de dados, caso não encontrar,
  ,usuario digita "new user" e passa para função de registro*/
  console.log(
    "Bem vindo! Digite seu usuario e senha. Caso nao tenha um, digite: new user.\nCaso seja uma empresa,\nDigite new company.\n"
  );
  let userLogin: string = question("Digite seu usuario ");

  if (userLogin == "new user") {
    let currentRegister = registerUser();
    while (currentRegister != true) {
      currentRegister = registerUser();
    }
    return;
  } else if (userLogin == "new company") {
    let currentRegisterC = registerCompany();
    while (currentRegisterC != true) {
      currentRegisterC = registerCompany();
    }
  }

  let userPassword: string = question("Digite sua senha");
  for (var item of database.users) {
    if (userLogin == item.user) {
      console.log("Usuario encontrado!");
      return;
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
