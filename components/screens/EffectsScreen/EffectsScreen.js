import React, { useRef } from 'react';
import {FlatList, Text, StyleSheet} from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';
import EffectListItem from './EffectListItem';
import DndEffects from '../../../models/DndEffects';

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 50,
    backgroundColor: '#000',
    flex: 1,
  },
  text: { 
    fontSize: 16,
    color: "#989899",
    margin: 10,
    alignSelf: "center",
  },
});

function EffectsScreen() {
  const data = Object.keys(DndEffects);
  const effects = data.map(ef => DndEffects[ef]);
  const transitionRef = useRef();
  const transition = <Transition.Change interpolation='easeInOut' />

  const onPress = () => {
    transitionRef.current.animateNextTransition();
  }

  const renderItem = ({ item }) => <EffectListItem item={item} onPress={onPress} />

  return (
    <Transitioning.View ref={transitionRef} transition={transition} style={styles.mainContainer}>
      <Text style={styles.text}>Эффекты</Text>
      <FlatList
        data={effects}
        keyExtractor={(item, index) => `${item.title}${index}`}
        renderItem={renderItem}
      />
    </Transitioning.View>
  );
};

export default EffectsScreen;