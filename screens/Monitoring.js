import { StyleSheet, Text, View, ImageBackground, Dimensions } from 'react-native';
import {useEffect, useState} from 'react';

import { AnimatedCircularProgress } from 'react-native-circular-progress';

import bg1 from "../assets/bg1.jpg";

import {db, ref, onValue} from "../firebase"
 
const { width, height } = Dimensions.get('window');

const Monitoring = () => {

  const [PAPER1, setPAPER1] = useState(10);
  const [PAPER2, setPAPER2] = useState(10);
  const [PAPER3, setPAPER3] = useState(10)


  return (
    <ImageBackground source={bg1} style={styles.container}>
      <View style={styles.tempWrapper}>
        <Text style={styles.text}>
          PAPER VENDO MACHINE
        </Text>
      </View>
      {/* <View style={styles.data}>
        <View style={styles.spacer}></View>
        <View style={styles.dataWrapper}>
          <View style={styles.dataText}>
          </View>
        </View>
      </View> */}
      <View style={styles.progressWrapper}>
        <AnimatedCircularProgress
          size={200}
          width={10}
          fill={0}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          style={styles.progressBar}
        >
          {
            (fill) => (
              <Text style={styles.progressText}>{PAPER1}<Text></Text>
                {`${Math.round(fill)}%`}
              </Text>
            )
          }
          
        </AnimatedCircularProgress>
        <AnimatedCircularProgress
          size={200}
          width={10}
          fill={0}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          style={styles.progressBar}
        >
          {
            (fill) => (
              <Text style={styles.progressText}>{PAPER2} <Text></Text>
                {`${Math.round(fill)}%`}
              </Text> 
            )
          }
        </AnimatedCircularProgress>
        <AnimatedCircularProgress
          size={200}
          width={10}
          fill={0}
          tintColor="#00e0ff"
          backgroundColor="#3d5875"
          style={styles.progressBar}
        >
          {
            (fill) => (
              <Text style={styles.progressText}>{PAPER3} <Text></Text>
                {`${Math.round(fill)}%`}
              </Text>
            )
          }
        </AnimatedCircularProgress>
      </View>
    </ImageBackground>
  );
}

export default Monitoring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: width,
    height: height,
  },
  tempWrapper: {
    flex: 1, 
    justifyContent: "center",
  },
  text: {
    fontSize: width*0.1, // Make text size responsive
    fontWeight: "100",
    textAlign: "center",
    color: "black",
    fontFamily: "Arial",
  },
  data: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  dataWrapper: {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    flexDirection: "row",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    width: "20%",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  dataText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 50,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Helvetica",
  },
  dataLabel: {
    fontSize: 20,
    color: "white",
  },
  progressWrapper: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    paddingBottom: "auto",
  },
  progressBar: {
    marginVertical: 10,
  },
  progressText: {
    fontSize: 20,
    color: "white",
  },
});
