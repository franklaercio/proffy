import React from 'react';

import './styles.css';
import '../../componets/Select/styles.css'

import PageHeader from '../../componets/PageHeader';
import TeacherItem from '../../componets/TeacherItem';
import Input from '../../componets/Input';
import Select from '../../componets/Select';

function TeacherList(){
    return  (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis." >
                <form id="search-teachers">
                    <Select name="subject" label="Matéria" options={[
                            {value: 'Artes', label: 'Artes'}, 
                            {value: 'Biologia', label: 'Biologia'}, 
                            {value: 'Ciências', label: 'Ciências'}, 
                            {value: 'Educação Física', label: 'Educação Física'}, 
                            {value: 'Física', label: 'Física'},
                            {value: 'Geografia', label: 'Geografia'}, 
                            {value: 'História', label: 'História'},
                            {value: 'Matemática', label: 'Matemática'}, 
                            {value: 'Português', label: 'Português'}, 
                            {value: 'Química', label: 'Química'}, 
                        ]}     
                    />
                    
                    <Select name="week-day" label="Dia da Semana" options={[
                            {value: '0', label: 'Segunda-feira'},
                            {value: '1', label: 'Terça-feira'}, 
                            {value: '2', label: 'Quarta-feira'}, 
                            {value: '3', label: 'Quinta-feira'}, 
                            {value: '4', label: 'Sexta-feira'}, 
                            {value: '5', label: 'Sábado'},
                            {value: '6', label: 'Domingo'}, 
                        ]}     
                    />
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