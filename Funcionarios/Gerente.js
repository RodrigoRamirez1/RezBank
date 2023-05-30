import { Funcionario } from "./Funcionário.js";

export class Gerente extends Funcionario {
    constructor(nome, salario, cpf){
        super(nome, salario, cpf)

        this._bonificação = 1.1
    }
}