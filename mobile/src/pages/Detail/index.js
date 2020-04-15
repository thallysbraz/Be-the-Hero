import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";
import styles from "./styles";
import logoImg from "../../assets/logo.png";

export default function Detail() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity>
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
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionsText}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.action} onPress={() => {}}>
            <Text style={styles.actionsText}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
