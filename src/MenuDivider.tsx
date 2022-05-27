import React from 'react';

import { StyleSheet, View } from 'react-native';

export interface MenuDividerProps {
  color?: string;
}

export function MenuDivider() {
  return <View style={[styles.divider, { borderBottomColor: '#E6E6E6' }]} />;
}

const styles = StyleSheet.create({
  divider: {
    flex: 1,
    borderBottomWidth: 1,
    marginHorizontal: 16,
  },
});
