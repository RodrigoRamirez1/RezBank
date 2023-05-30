import {Cliente} from "/Cliente.js"
import {ContaCorrente} from "./Contas/ContaCorreente.js"
import {ContaPoupanca} from "./Contas/ContaPoupança.js"
import {ContaSalario} from "./Contas/ContaSalario.js"

console.log("\n>>>>  CLIENTES DO REZBANK  <<<<\n")


const cliente1 = new Cliente("Rodrigo Pinheiro Ramirez", 12345678912)
const cliente2 = new Cliente("Ramon Porto de Sousa", 98765432198)
const cliente3 = new Cliente("Jessyka Pinheiro Borges", 96385274196)


//---------------->> CONTA CORRENTE <<----------------------------


const conta1 = new ContaCorrente(cliente1, 8080)
conta1.depositar(1000)
conta1.sacar(200)
// const valorSacado = conta1.sacar(200)
const conta2 = new ContaCorrente(cliente2, 8080)
// conta2.transferir(1000, conta1)
const conta3 = new ContaCorrente(cliente3, 8080)
// console.log(conta1, conta2, conta3, ContaCorrente.numeroDeContas)
// console.log(`Valor sacado: R$ ${valorSacado.toFixed(2)}`)
// let contas = [conta1, conta2, conta3]
// console.log(JSON.stringify(contas))

//----------------->> CONTA POUPANÇA <<-----------------------------


const contaPoupanca1 = new ContaPoupanca(0, cliente1, 8080)
// contaPoupanca1.depositar(200)
// contaPoupanca1.sacar(10)

//------------------>> CONTA SALÁRIO <<------------------------------

const contaSalario1 = new ContaSalario(cliente1)
contaSalario1.depositar(8000)
contaSalario1.sacar(1000)

console.log(contaSalario1)