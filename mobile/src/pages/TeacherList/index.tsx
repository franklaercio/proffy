import React from 'react';
import {View, ScrollView} from 'react-native';

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import { TextInput } from 'react-native-gesture-handler';

function TeacherList() {
    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" >
                <View style={styles.searchForm}>
                    <Text style={styles.label}>Matérias</Text>
                    <TextInput style={styles.input} placeholder={styles.input}>Qual a matéria?</TextInput>
                </View>
            </PageHeader>    

            <ScrollView style={styles.teacherList} contentContainerStyle={{paddingHorizontal: 16, paddingBottom: 24,}}>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </ScrollView>
        </View>
    );
} 

export default TeacherList;