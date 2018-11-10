import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import { LocaleProvider } from 'antd';
import pt_BR from 'antd/lib/locale-provider/pt_BR'
import 'moment/locale/pt-br'
import App from './main/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<LocaleProvider locale={pt_BR}>
    <App />
</LocaleProvider>, document.getElementById('root'));
registerServiceWorker();
