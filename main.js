"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var User = /** @class */ (function () {
    function User() {
        this.userName = "";
        this.password = "";
        this.firstName = "";
        this.secondName = "";
        this.age = 0;
        this.id = 0;
        this.company = "";
        this.projects = [];
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company() {
        this.userName = "";
        this.password = "";
        this.employees = [];
        this.projects = [];
        this.creationDate = "";
        this.id = 0;
    }
    return Company;
}());
var database = { users: [new User()], companies: [new Company()] };
var currentLogin = null; //Armazena o login atual
function main() {
    while (currentLogin == null) {
        login();
    }
}
function login() {
    /*Pede login do usuário, verifica se login se encontra na base de dados, caso não encontrar,
    ,usuario digita "new user" e passa para função de registro*/
    console.log("Bem vindo! Digite seu usuario e senha. Caso nao tenha um, digite: new user.\nCaso seja uma empresa,\nDigite new company.\n");
    var userLogin = readline_sync_1.question("Digite seu usuario: ");
    if (userLogin == "new user") {
        var currentRegister = registerUser();
        while (currentRegister != true) {
            currentRegister = registerUser();
        }
        return;
    }
    else if (userLogin == "new company") {
        var currentRegisterC = registerCompany();
        while (currentRegisterC != true) {
            currentRegisterC = registerCompany();
        }
    }
    var userConfirm = false;
    var userPassword = readline_sync_1.question("Digite sua senha: ");
    //Confirma username do usuário
    for (var _i = 0, _a = database.users; _i < _a.length; _i++) {
        var item = _a[_i];
        if (userLogin == item.userName) {
            if (userPassword == item.password) {
                userConfirm = true;
                currentLogin = item.userName;
                console.log("Login efetuado com sucesso!");
                return;
            }
        }
    }
    if (userConfirm == false) {
        console.log("Usuario não encontrado!");
    }
}
function registerUser() {
    var nUser = new User();
    nUser.id = database.users.length;
    nUser.userName = readline_sync_1.question("Digite seu novo usuario: ");
    nUser.password = readline_sync_1.question("Digite sua nova senha: ");
    nUser.firstName = readline_sync_1.question("Digite seu nome: ");
    nUser.secondName = readline_sync_1.question("Digite seu segundo nome: ");
    nUser.age = parseInt(readline_sync_1.question("Digite sua idade: "));
    nUser.company = readline_sync_1.question("Digite a empresa em que trabalha: ");
    for (var _i = 0, _a = database.users; _i < _a.length; _i++) {
        var userx = _a[_i];
        //Verificação de user
        if (nUser.userName == userx.userName) {
            console.log("Usuario já encontrado na base de dados. Favor cadastrar novamente.");
            return false;
        }
    }
    console.log("cadastro realizado com sucesso! Sua ID é: " + nUser.id);
    database.users.push(nUser);
    return true;
}
function registerCompany() {
    var nCompany = new Company();
    nCompany.id = database.companies.length;
    nCompany.userName = readline_sync_1.question("Digite seu novo usuario: ");
    nCompany.password = readline_sync_1.question("Digite sua nova senha: ");
    nCompany.creationDate = readline_sync_1.question("Digite a data de criacao da empresa (yyyy-mm-dd): ");
    var date = new Date(nCompany.creationDate);
    for (var _i = 0, _a = database.companies; _i < _a.length; _i++) {
        var usery = _a[_i];
        //Verificação de user
        if (nCompany.userName == usery.userName) {
            console.log("Usuario já encontrado na base de dados. Favor cadastrar novamente.");
            return false;
        }
    }
    console.log("cadastro realizado com sucesso! Sua ID é: " + nCompany.id);
    database.companies.push(nCompany);
    return true;
}
main();
