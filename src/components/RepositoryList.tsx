import { useState, useEffect } from 'react';
import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'

interface IRepository {
    name: string;
    description: string;
    html_url: string;
}

export function RepositoryList() {
    const [repositories, setRepositories] = useState<IRepository[]>([]);

    useEffect(() => {
        fetch('https://api.github.com/users/luciano-ferreira/repos')
            .then(res => res.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryItem key={repository.name} repository={repository} />
                })}
            </ul>
        </section>
    )
}