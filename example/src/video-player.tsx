import React from 'react';
import {
  type StyleProp,
  StyleSheet,
  Text,
  View,
  type ViewStyle,
} from 'react-native';

import { MediaPlayer } from './media-player';

interface Props {
  style: StyleProp<ViewStyle>;
}

export function VideoPlayer(props: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Video Player</Text>
      <MediaPlayer
        style={props.style}
        source={{
          uri: 'https://ocyber.s3.amazonaws.com/fox-and-bird-segmented/fox-and-bird.m3u8',
        }}
        onError={(e) => {
          console.log('Error', e);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 500,
    backgroundColor: 'black',
  },
  text: {
    color: 'white',
  },
});
