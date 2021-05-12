import React from 'react';
import cn from 'classnames';
import styles from './App.modules.scss';
import './custom.css';

const App = () => {
    return (
        <div className={cn(styles.header, 'color')}>This  is App Component!</div>
    )
};

export default App;
