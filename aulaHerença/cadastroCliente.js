class Pessoa{
    #nome
    #cpf
    constructor(nome,cpf){
        this.#nome = nome
        this.#cpf = cpf
    }
    set nome(nome){this.#nome = nome}
    get nome() { return this.#nome }
 
    set cpf(cpf){this.#cpf = cpf}
    get cpf() { return this.#cpf }
}
class cliente extends Pessoa {
    #whatsapp
    constructor(whatsapp){
        super(nome, cpf),this.#whatsapp = whatsapp
    }
    set endereco(endereco){this.#endereco = endereco}
    get endereco(){return this.#endereco}
}
class Funcionarios extends Pessoa{
    #areaTrabalho 
    constructor(areaTrabalho){
        this.#areaTrabalho = areaTrabalho
    }
    set areaTrabalho(AreaTrabalho){this.#areaTrabalho = areaTrabalho}
    get areaTrabalho(){return this.#areaTrabalho}
        toString(){return "Nome:" + this.#nome + ",Cpf:" + this.#cpf}
    
}




    toString(){return "Nome:" + this.#nome + ",Cpf:" + this.#cpf}
// class Cliente extends Funcionarios{
//  #
}
    
 