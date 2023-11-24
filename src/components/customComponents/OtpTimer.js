import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const OtpTimer = ({ timeSet,duration }) => {
  const initialSeconds = duration*60; // 2 minutes in seconds
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (timeSet) {
      const timerInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          // Timer expired, you can handle it here (e.g., resend OTP or show a message)
          clearInterval(timerInterval);
        }
      }, 1000);

      // Cleanup function to clear the interval when the component is unmounted
      return () => {
        clearInterval(timerInterval);
      };
    }
  }, [timeSet, seconds]);

  // Format seconds into mm:ss
  const formattedTime = `${Math.floor(seconds / 60)}:${(seconds % 60).toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  })}`;

  return (
    <View style={styles.timerContainer}>
      <Text style={styles.timerText}>{formattedTime}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default OtpTimer;
