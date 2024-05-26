import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import { useEffect, useState } from 'react';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

import bg1 from "../assets/bg1.jpg";

import { db, ref, onValue } from "../firebase";

const { width, height } = Dimensions.get('window');

const Monitoring = () => {

  const [PAPER1, setPAPER1] = useState(10);
  const [PAPER2, setPAPER2] = useState(10);
  const [PAPER3, setPAPER3] = useState(10);

  return (
    <ImageBackground source={bg1} style={styles.container} resizeMode="cover">
      <View style={styles.tempWrapper}>
        <Text style={styles.text}>
          PAPER VENDO MACHINE
        </Text>
      </View>
      <View style={styles.centerWrapper}>
        <View style={styles.progressWrapper}>
          <AnimatedCircularProgress
            size={150}
            width={5}
            fill={PAPER1}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
            style={styles.progressBar}
          >
            {
              (fill) => (
                <Text style={styles.progressText}>Intermediate <Text></Text>
                  {`${Math.round(fill)}%`}
                </Text>
              )
            }
          </AnimatedCircularProgress>
          <AnimatedCircularProgress
            size={150}
            width={5}
            fill={PAPER2}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
            style={styles.progressBar}
          >
            {
              (fill) => (
                <Text style={styles.progressText}>Index<Text></Text>
                  {`${Math.round(fill)}%`}
                </Text> 
              )
            }
          </AnimatedCircularProgress>
          <AnimatedCircularProgress
            size={150}
            width={5}
            fill={PAPER3}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
            style={styles.progressBar}
          >
            {
              (fill) => (
                <Text style={styles.progressText}>Yellow <Text></Text>
                  {`${Math.round(fill)}%`}
                </Text>
              )
            }
          </AnimatedCircularProgress>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Monitoring;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    justifyContent: "center",
    alignItems: "center", // Ensure content is centered horizontally
    width: width,
    height: height,
  },
  tempWrapper: {
    flex: 1, 
    justifyContent: "center",
  },
  text: {
    fontSize: width * 0.1, // Make text size responsive
    fontWeight: "100",
    textAlign: "center",
    color: "black",
    fontFamily: "Arial",
  },
  centerWrapper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  progressWrapper: {
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "column",
    height: "100%",
  },
  progressBar: {
    marginVertical: 20,
  },
  progressText: {
    fontSize: 15,
    color: "white",
  },
});
