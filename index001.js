import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./Funcionarios/SistemaAutenticação.js"
import {Cliente} from "./Cliente.js"

const gerente1 = new Gerente ("Luigi", 5000, 12587469852)
const diretor = new Diretor ("Yoshi", 10000, 36521478598)
const cliente1 = new Cliente("Mario Bros", 14725836978, "258")

diretor.cadastrarSenha("011")
gerente1.cadastrarSenha("252526")
const diretorLogado = SistemaAutenticacao.login(diretor, "011447")
const gerenteLogado = SistemaAutenticacao.login(gerente1, "252526")
const clienteLogado = SistemaAutenticacao.login(cliente1, "258")

console.log(diretorLogado, gerenteLogado, clienteLogado)
