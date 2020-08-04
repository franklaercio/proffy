import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return <article className="teacher-item">
    <header>
        <img src="https://avatars3.githubusercontent.com/u/38151364?s=460&u=e839b3579bd6b77ba25cc1f090c74f9ed55d1821&v=4" alt="Frank Laércio"/>
        <div>
            <strong>Frank Laércio</strong>
            <span>Programação Orientada à Objectos</span>
        </div>
    </header>

    <p>
        Entusiata das melhores tecnologias de programação.
        <br /> <br />
        Apaixonada por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências.
    </p>

    <footer>
        <p>
            Preço/hora 
            <strong>R$ 20,00</strong>
        </p>

        <button type="button">
            <img src={whatsappIcon} alt="whatsapp" />
            Entrar em contato
        </button>
    </footer>
</article>;
}

export default TeacherItem;