import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, TouchableOpacity, Linking } from "react-native";
import * as MailComposer from "expo-mail-composer";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Detail() {
  const navigation = useNavigation();
  const message =
    "Olá APAD, estou entrando em contato pois gostaria de ajudar no caso 'Cachorro atropelado' com o valor de R$120.50";
  function navigateBack() {
    navigation.goBack();
  }
  //funçao para mandar email
  function sendMail() {
    MailComposer.composeAsync({
      subject: "Herói do caso: cachorro atropelado", //assunto da mensagem
      recipients: ["thallys.braz@firstdecision.com"], //pra quem o email vai ser enviado
      body: message,
    });
  }
  //funçao para mandar whatsapp
  function sendWhatsApp() {
    Linking.openURL(`whatsapp://send?phone=55619843-7284&text=${message}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0 }]}>ONG:</Text>
        <Text style={styles.incidentValue}>APAD</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>cachorro atropelado</Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>120.50</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTittle}>Salve o dia!</Text>
        <Text style={styles.heroTittle}>Seja o herói.</Text>
        <Text style={styles.heroDescription}>Entre em contato:</Text>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.action} onPress={sendWhatsApp}>
            <Text style={styles.actionsText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={sendMail}>
            <Text style={styles.actionsText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
