import React from 'react'
import { Card, Icon } from 'antd';
import axios from 'axios';

const baseUrl = `http://localhost:3002/oapi/vagas`
export default class DetailsVaga extends React.Component {
    
    state = {
        list: {}
    }

    componentWillMount() {
        const id = this.props.match.params.id;
        axios(`${baseUrl}/${id}`).then(resp => {
            this.setState({ list: resp.data })
        })
      }

      componentDidUpdate(){
        document.title = this.state.list.nomeCargo
      }    
    
    render() {        
        return (
            <center>
                <h1>Detalhes da vaga</h1>
                <div style={{ marginLeft: 100, marginRight: 100 }}>
                <br/>
                <Card
                    title={this.state.list.nomeCargo}
                    style={{ width: 900, textAlign: 'justify' }} >
                    <p><Icon type="fund" theme="twoTone" /><strong> Tipo de contratação:</strong> {this.state.list.tipoContratacao}</p>
                    <p><Icon type="clock-circle" theme="twoTone" /><strong> Carga horária: </strong>{this.state.list.cargaHoraria} horas semanais</p>
                    <p><Icon type="dollar" theme="twoTone" /><strong> Salário: </strong>R$ {this.state.list.salario}</p>
                    <p><Icon type="profile" theme="twoTone" /><strong> Descrição: </strong>{this.state.list.descricao}</p>
                </Card>
                </div>
            </center>

        );
    }


}
