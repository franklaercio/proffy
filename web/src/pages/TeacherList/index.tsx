import React from 'react';

import './styles.css';

import PageHeader from '../../componets/PageHeader';
import TeacherItem from '../../componets/TeacherItem';
import Input from '../../componets/Input';

function TeacherList(){
    return  (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <Input name="subject" label="Matéria" />
                    <Input name="week_day" label="Dia da semana" />
                    <Input type="time" name="time" label="Hora" />
                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>
        </div>
    )

}

export default TeacherList;