import React from 'react'
import { Layout } from 'antd';
import { BrowserRouter } from 'react-router-dom'
import MenuNav from '../template/MenuNav'
import Routes from './routes'
import PageHeader from '../template/pageHeader';

const { Header, Content, Footer } = Layout;


export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Layout className="layout">
                    <Header style={{ background: '#fff', padding: 0, height: '150px' }}>
                        <div className="logo"/>
                        <MenuNav />
                        <PageHeader />
                    </Header>
                        <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: '100%' }}>
                            <Routes />
                    </Content>
                    <Footer style={{ textAlign: 'center', bottom: 0, position: 'fixed', width: '100%', lineHeight: '10px', height: '10%' }}>
                        <p>&copy; Copyrights <b>EquipeVagasDeEmprego.</b> Todos os direitos reservados</p>
                        <p>Desenvolvido na disciplina de Tecnologias para Internet II</p>
                    </Footer>
                </Layout>
            </BrowserRouter>
        )
    }
}
