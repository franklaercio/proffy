import React, { useState } from 'react';
import {View, ScrollView, Text} from 'react-native';
import { TextInput, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';

import styles from './styles';
import {Feather} from '@expo/vector-icons';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [isFiltersVisible, setIsFiltersVisible] = useState(false);
    const [favorites, setFavorites] = useState<number[]>([]);
    const [teachers, setTeachers] = useState([]);

    const [subject, setSubject] = useState('');
    const [week_day, setWeekday] = useState('');
    const [time, setTime] = useState('');

    function loadFavorites() {
        AsyncStorage.getItem('favorites').then(response => {
            if (response) {
                const favoritedTeachers = JSON.parse(response);
                const favoritedTearchersIds = favoritedTeachers.map((teacher: Teacher) => {
                    return teacher.id;
                });

                setFavorites(favoritedTearchersIds);
            }
        });
    }

    useFocusEffect(() => {
        loadFavorites();
    });

    async function handleFiltersSubmit(){
        loadFavorites();

        const response = await api.get('/classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });

        setIsFiltersVisible(false);
        setTeachers(response.data);
    }

    function handleToggleFiltersVisible(){
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" 
            headerRight={<BorderlessButton onPress={handleToggleFiltersVisible}><Feather name="filter" size={20} color="#FFF"></Feather></BorderlessButton>}>
                {isFiltersVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matérias</Text>
                    <TextInput style={styles.input} value={subject} onChangeText={text=> setSubject(text)} placeholder="Qual a matéria?" placeholderTextColor="c1bccc" />

                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput style={styles.input} value={week_day} onChangeText={text=> setWeekday(text)} placeholder="Qual o dia?" placeholderTextColor="c1bccc"/>
                        </View>

                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput style={styles.input} value={time} onChangeText={text=> setTime(text)} placeholder="Qual o horário?" placeholderTextColor="c1bccc"/>
                        </View>
                    </View>

                    <RectButton style={styles.submitButton} onPress={handleFiltersSubmit}>
                        <Text style={styles.textSubmitButton}>Filtrar</Text>
                    </RectButton>
                </View>)}
            </PageHeader>    

            <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 24,}}>
                {teachers.map((teacher: Teacher) => {
                    return <TeacherItem key={teacher.id} teacher={teacher} favorited={favorites.includes(teacher.id)}/>;
                })}
            </ScrollView>
        </View>
    );
} 

export default TeacherList;