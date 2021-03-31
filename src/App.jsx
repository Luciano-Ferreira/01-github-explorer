import React from 'react';
import { RepositoryList } from '../components/RepositoryList';
import { Counter } from '../components/Counter';
import './styles/global.scss';

export function App() {
    return(
        <>
            <RepositoryList />
            <Counter />
        </>
    )
}