import React from "react";
import { View, StyleSheet } from 'react-native';

import ReimbursementList from '../components/ReimbursementList';
import CircleButton from '../components/CircleButton';

export default function ReimbursementListScreen(proprs) {
  const { navigation } = proprs;
  return (
    <View style={styles.container}>
      <ReimbursementList />
      <CircleButton
        name="plus"
        onPress={() => navigation.navigate('MemoCreate')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F1F1',
  },
});
