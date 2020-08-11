import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import api from '../../services/api';

export interface Teacher {
    id: number,
    avatar: string,
    bio: string,
    cost: number,
    name: string,
    subject: string,
    whatsapp: string,
}

interface TeacherItemProps {
    teacher: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    function createNewConnection(){
        api.post('/connections', {
            user_id: teacher.id,
        });
    }

    return <article className="teacher-item">
    <header>
        <img src="https://avatars3.githubusercontent.com/u/38151364?s=460&u=e839b3579bd6b77ba25cc1f090c74f9ed55d1821&v=4" alt="Frank Laércio"/>
        <div>
            <strong>{teacher.name}</strong>
            <span>{teacher.subject}</span>
        </div>
    </header>

    <p>
        {teacher.bio}
    </p>

    <footer>
        <p>
            Preço/hora 
            <strong>R$ {teacher.cost}</strong>
        </p>

        <a href={`https://wa.me/${teacher.whatsapp}`} type="button" onClick={createNewConnection} target="blank">
            <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
        </a>
    </footer>
</article>;
}

export default TeacherItem;