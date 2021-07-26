"use strict";
exports.__esModule = true;
var readline_sync_1 = require("readline-sync");
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var Company = /** @class */ (function () {
    function Company() {
    }
    return Company;
}());
var database = { users: [new User()], companies: [new Company()] };
function main() {
    while (true) {
        login();
    }
}
function login() {
    console.log("Bem vindo! Digite seu usuario e senha. Caso nao tenha um, digite: new user.\nCaso seja uma empresa,\nDigite new company.\n");
    var userlogin = readline_sync_1.question("Digite seu usuario ");
    if (userlogin == "new user") {
        var currentRegister = registerUser();
        while (currentRegister != true) {
            currentRegister = registerUser();
        }
    }
    if (userlogin == "new company") {
        var currentRegisterC = registerCompany();
        while (currentRegisterC != true) {
            currentRegisterC = registerCompany();
        }
    }
}
function registerUser() {
    var nUser = new User();
    nUser.id = database.users.length;
    nUser.user = readline_sync_1.question("Digite seu usuario: ");
    nUser.password = readline_sync_1.question("Digite sua senha: ");
    nUser.firstName = readline_sync_1.question("Digite seu nome: ");
    nUser.secondName = readline_sync_1.question("Digite seu segundo nome: ");
    nUser.age = parseInt(readline_sync_1.question("Digite sua idade: "));
    nUser.company = readline_sync_1.question("Digite a empresa em que trabalha: ");
    for (var _i = 0, _a = database.users; _i < _a.length; _i++) {
        var userx = _a[_i];
        //Verificação de user
        if (nUser.user == userx.user) {
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
    nCompany.user = readline_sync_1.question("Digite seu usuario: ");
    nCompany.password = readline_sync_1.question("Digite sua senha: ");
    nCompany.creationDate = readline_sync_1.question("Digite a data de criacao da empresa (yyyy-mm-dd): ");
    var date = new Date(nCompany.creationDate);
    for (var _i = 0, _a = database.companies; _i < _a.length; _i++) {
        var usery = _a[_i];
        //Verificação de user
        if (nCompany.user == usery.user) {
            console.log("Usuario já encontrado na base de dados. Favor cadastrar novamente.");
            return false;
        }
    }
    console.log("cadastro realizado com sucesso! Sua ID é: " + nCompany.id);
    database.companies.push(nCompany);
    return true;
}
main();
