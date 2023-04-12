import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
    wrap: {
      marginVertical: 5,
      marginHorizontal: 10,
      borderRadius: 5,
      backgroundColor: '#000',
    },
    textContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: "center",
    },
    text: { 
      fontSize: 16,
      color: "#989899",
      margin: 10,
    },
    textName: { 
      fontSize: 16,
      color: "#989899",
      margin: 10,
      fontWeight: "bold",
    },
  });

function EffectListItem({ item, onPress }) {
  const [expanded, setExpanded] = useState(false);

  const onItemPress = () => {
    onPress()
    setExpanded(!expanded)
  }

  return (
    <TouchableOpacity style={styles.wrap} onPress={onItemPress}>
      <View style={styles.textContainer}>
        <Text style={styles.textName}>{item.nameRu}</Text>
        <MaterialCommunityIcons name={expanded? "chevron-up" : "chevron-down"} size={28} color="#989899"/>
      </View>
      {expanded && (
        <Text style={styles.text}>{item.description}</Text>
      )}
    </TouchableOpacity>
  );
};

export default EffectListItem;
