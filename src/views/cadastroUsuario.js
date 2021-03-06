import React from 'react'

import Card from '../components/card'
import FormGroup from '../components/form-group'

class CadastroUsuario extends React.Component{

    state = {
        nome: '',
        email: '',
        senha: '',
        senhaRepeticao: ''
    }

    cadastrar = () => {
        console.log(this.state)
    }

    render(){
        return (
            <Card title="Cadastro de Usuário">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                        <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text"
                                    id="inputNome"
                                    name="nome"
                                    className="form-control"
                                    placeholder="Nome *"
                                    onChange={e => this.setState({nome: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="email"
                                    id="inputEmail"
                                    name="email"
                                    className="form-control"
                                    placeholder="E-mail *"
                                    onChange={e => this.setState({email: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password"
                                    id="inputSenha"
                                    name="senha"
                                    className="form-control"
                                    placeholder="Senha *"
                                    onChange={e => this.setState({senha: e.target.value})} />
                            </FormGroup>

                            <FormGroup label="Repita a Senha: *" htmlFor="inputRepitaSenha">
                                <input type="password"
                                    id="inputRepitaSenha"
                                    name="repitaSenha"
                                    className="form-control"
                                    placeholder="Repita a Senha *"
                                    onChange={e => this.setState({senhaRepeticao: e.target.value})} />
                            </FormGroup>
                            <br/>
                            <button onClick={this.cadastrar} className="btn btn-success">Salvar</button>
                            <button className="btn btn-danger">Cancelar</button>

                        </div>
                    </div>
                </div>
            </Card>
        )
    }
}

export default CadastroUsuario