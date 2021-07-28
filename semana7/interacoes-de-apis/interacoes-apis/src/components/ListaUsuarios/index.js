import React from 'react'
import axios from 'axios'

const url =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "israel-cordeiro-lovelace"
  }
};


export default class listaUsuarios extends React.Component {
        state = {
        usuarios: [],
        selecaoUsuarios: null
        }
    
    
        componentDidMount() {
         this.buscarUsuario()
         }

        buscarUsuario = () => {
            axios
                .get(url,headers)
                .then((res) => {
                    this.setState({usuarios : res.data})
                })
                .catch((error) => {
                    alert(error.response.data.message)
                })
        }

            limparUsuariosSelecionados = () => {
                this.setState({selecaoUsuarios: null})
                }

            deletarUsuario = (id) => {
                const quandoDeleta = window.confirm("Você Realmente quer deletar esse usuário?")
            

            if (quandoDeleta) {
                axios
                .delete(`${url}/${id}`, headers)
                .then(() => {
                    this.buscarUsuario()
                    alert ("Usuário Deletado com Sucesso")

                    if (id === this.state.selecaoUsuarios) {
                        this.limparUsuariosSelecionados()
                    }
                })
                    .catch((error) => {
                        alert (error.response.data.message)
                    })
            }
        }

    usuarioSelecionado = (id) => {
        this.setState  ({ selecaoUsuarios: id})
    }

    render() {
        if (this.state.selecaoUsuarios !== null)
        return(
            <div>
                {this. state.usuarios.map((usuario) => (
                    <div key={usuario.id}>
                        <p onClick={() => this.buscarUsuario(usuario.id)}>{usuario.name}</p>
                        <button onClick={() => this.deletarUsuario(usuario.id)}>X</button>
                    </div>
                ))}
                {!this.state.usuarios.length && <p>Nenhum usuário cadastrado</p>}
            </div>

        )
    }
}
    
    
       