import React from 'react'
import { List, Card } from 'antd';
import axios from 'axios';
import imageAvatar from '../../assets/images/mslogo.jpg'
import { Link } from 'react-router-dom'

const { Meta } = Card;

const baseUrl = 'http://localhost:3002/oapi/vagas'
export default class VagasList extends React.Component {

    state = {
        
    };

    componentWillMount() {
        axios(baseUrl).then(resp => {
          this.setState({ list: resp.data })
        })
      }

      componentDidUpdate(){
        document.title = 'Vagas de Emprego'
      } 

    render() {
        const listData = this.state.list
        return (
            <center>
                <h1>Vagas Disponíveis</h1>
                <br/>
                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={listData}
                    renderItem={item => (
                        <List.Item>
                            <Card
                                hoverable
                                style={{ width: 300 }}
                                cover={<Link to={`/details/${item._id}`}><img width="298" alt="imagemDaEmpresa" src={imageAvatar} /></Link>}
                            >
                                <Meta
                                title={<Link to={`/details/${item._id}`}>{item.nomeCargo}</Link>}
                                description={<Link to={`/details/${item._id}`}>Contratação: {item.tipoContratacao}</Link>}
                                />
                            </Card>
                        </List.Item>
                )}
                />
            </center>
        );
    }
}
