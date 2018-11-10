import React from 'react'
import { Row, Col, Card, Avatar, Icon } from 'antd';
import imageAvatar from '../assets/images/FotoPerfil.png'

const { Meta } = Card;

export default props =>

    <div style={{ textAlign: 'center'}}>
        <p>SOMOS UM SITE PARA ANÚNCIO DE VAGAS DE EMPREGO</p>
        <p>DESENVOLVIDO NA DISICPLINA DE TECNOLOGIAS PARA INTERNET II</p>
        <p>AINDA EM DESENVOLVIMENTO...</p>
        <br/>
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <center>
                <Row gutter={16}>
                    <Col>
                        <Card
                            style={{ width: 300, marginTop: 16 }}
                            actions={[
                                <a href="http://www.linkedin.com/in/leonardo-ribeiro-as/" target="blank"><Icon type="linkedin" /></a>, 
                                <a href="http://github.com/leonardoribeiro1505" target="blank"><Icon type="github" /></a>, 
                                <a href="mailto:leo.ribeiro.as@gmail.com" ><Icon type="mail" /></a>]}
                        >
                            <Meta
                                avatar={<Avatar src={imageAvatar} size={64}/>}
                                title="Leonardo Ribeiro"
                                description="Dsenvolvedor Full Stack"
                            />
                        </Card>
                    </Col>
                    
                </Row>
            </center>
        </div>
    </div>
