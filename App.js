import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(randomNumber);
  };

  // Usamos imágenes de dados del 1 al 6
  const diceImages = {
    1: require('./assets/dice1.png'),
    2: require('./assets/dice2.png'),
    3: require('./assets/dice3.png'),
    4: require('./assets/dice4.png'),
    5: require('./assets/dice5.png'),
    6: require('./assets/dice6.png'),
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={rollDice}>
        <Image source={diceImages[diceNumber]} style={styles.diceImage} />
      </TouchableOpacity>
      <Text style={styles.text}>Toca el dado para tirar</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  text: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
