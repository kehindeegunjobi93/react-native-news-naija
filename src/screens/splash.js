import React from 'react';
import { View, Text } from 'react-native';

class SplashScreen extends React.Component {
  performTimeConsumingTask = async() => {
    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    // Preload data from an external API
    // Preload data using AsyncStorage
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.props.navigation.navigate('Entry');
    }
  }

  render() {
    return (
      <View style={styles.viewStyles}>
        <Text style={styles.textStyles}>
           News Naija
        </Text>
        <Text style={styles.subtextStyles}>
          Developed by Kehinde Egunjobi
        </Text>
      </View>
    );
  }
}

const styles = {
  viewStyles: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'orange'
  },
  textStyles: {
    color: 'green',
    fontSize: 40,
    fontWeight: 'bold'
  },
  subtextStyles: {
    color: 'green',
    fontSize: 20,
  }
}

export default SplashScreen;