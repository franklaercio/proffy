import React from 'react';
import { View, Image, Text } from 'react-native';

import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image style={styles.avatar} source={{uri: 'https://avatars3.githubusercontent.com/u/38151364?s=460&u=e839b3579bd6b77ba25cc1f090c74f9ed55d1821&v=4'}} />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}> Frank Laércio</Text>
                    <Text style={styles.subject}> Programação </Text>
                </View>
            </View>

            <Text style={styles.bio}>
                Sometimes I am a student, teacher or doctor, because I solve problems by developing software.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {' '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/* <Image source={heartOutlineIcon}/> */}
                        <Image source={unFavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                    
                </View>
            </View>
        </View>    
    );    
}   

export default TeacherItem;