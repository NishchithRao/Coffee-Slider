import {SafeAreaView, StyleSheet} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Slider} from 'slider';

function App() {
  return (
    <SafeAreaView style={styles.backgroundStyle}>
      <Slider leftLabel="Coffee" rightLabel="Milk" initialValue={0.5} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: Colors.darker,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
