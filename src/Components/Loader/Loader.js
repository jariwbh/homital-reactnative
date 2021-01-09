import React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <View style={styles.modalBackground}>
      <View style={styles.activityIndicatorWrapper}>
        <ActivityIndicator
          animating={true}
          color="#000000"
          size="large"
          style={styles.activityIndicator}
        />
      </View>
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicatorWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  activityIndicator: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
