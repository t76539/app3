import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import MaterialTableDemo from './MaterialTableDemo';
import DenseTable from './DenseTable';
import Main from './Main';
import App from './App';
import SimpleTabs from './SimpleTabs';
import AlertDialog from './AlertDialog';
import VerticalTabs from './VerticalTabs';
import "./i18n";
import LocalizationDemo from './LocalizationDemo';

// Importing the Bootstrap CSS
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<MaterialTableDemo />,  document.getElementById('Main'));
//ReactDOM.render(<DenseTable />,  document.getElementById('Main'));
//ReactDOM.render(<Main />,  document.getElementById('Main'));
//ReactDOM.render(<App />,  document.getElementById('App'));
//ReactDOM.render(<SimpleTabs />,  document.getElementById('SimpleTabs'));
//ReactDOM.render(<AlertDialog />,  document.getElementById('AlertDialog'));
//ReactDOM.render(<VerticalTabs />,  document.getElementById('VerticalTabs'));
//ReactDOM.render(<LocalizationDemo />,  document.getElementById('LocalizationDemo'));
