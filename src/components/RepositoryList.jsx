import { RepositoryItem } from './RepositoryItem';
import '../styles/repositories.scss'
const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https://github.com/Luciano-Ferreira/'
}
export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>

            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}