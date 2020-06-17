/* eslint-disable react/prop-types */
import React from 'react';
import { StyleSheet } from 'react-native';
import YouTube from 'react-native-youtube';

export default ({ link }) => {
  console.log(link);
  return (
    <YouTube
      apiKey="AIzaSyDlKVaj0DC8RMd71CfIc-Nv_GQ0CE8ZVBI"
      videoId="YfxnO16D1YY" // The YouTube video ID
      play={false} // control playback of video with true/false
      fullscreen={false} // control whether the video should play in fullscreen or inline
      loop={false} // control whether the video should loop when ended
      showFullscreenButton={false}
      showinfo
      // onReady={(e) => this.setState({ isReady: true })}
      // onChangeState={(e) => this.setState({ status: e.state })}
      // onChangeQuality={(e) => this.setState({ quality: e.quality })}
      // onError={(e) => this.setState({ error: e.error })}
      style={{ flex: 1, height: 300 }}
      controls={1}
    />
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  overlaySet: {
    flex: 1,
    flexDirection: 'row',
  },
  icon: {
    color: 'white',
    flex: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
  sliderCont: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  timer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
  },
  video: { width: 370, height: 230, backgroundColor: 'black' },
  fullscreenVideo: {
    backgroundColor: 'black',
    ...StyleSheet.absoluteFill,
    elevation: 5,
  },
});
