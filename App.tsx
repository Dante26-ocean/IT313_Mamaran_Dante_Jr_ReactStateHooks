import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
} from 'react-native';

function useStopwatch(isRunning: boolean) {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!isRunning) {
      return;
    }

    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning]);

  return seconds;
}

interface PracticeTrackerProps {
  solved: number;
  onSolve: () => void;
  onReset: () => void;
}

function PracticeTracker({
  solved,
  onSolve,
  onReset,
}: PracticeTrackerProps) {
  return (
    <View style={styles.section}>
      <Text style={styles.solvedText}>
        Solved: {solved}
      </Text>

      <View style={styles.button}>
        <Button
          title="Solve +1"
          onPress={onSolve}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={onReset}
        />
      </View>

      {solved >= 5 && (
        <Text style={styles.successText}>
          Great job!
        </Text>
      )}
    </View>
  );
}

interface StopwatchProps {
  seconds: number;
  isRunning: boolean;
}

function Stopwatch({
  seconds,
  isRunning,
}: StopwatchProps) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  const formattedTime =
    `${String(minutes).padStart(2, '0')}:` +
    `${String(remainingSeconds).padStart(2, '0')}`;

  return (
    <View style={styles.section}>
      <Text style={styles.timerText}>
        {formattedTime}
      </Text>

      {isRunning ? (
        <Text style={styles.statusText}>
          Running...
        </Text>
      ) : (
        <Text style={styles.statusText}>
          Paused
        </Text>
      )}
    </View>
  );
}

export default function LabScreen() {
  const [solved, setSolved] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const seconds = useStopwatch(isRunning);

  const handleSolve = () => {
    setSolved(s => s + 1);
  };

  const handleReset = () => {
    setSolved(0);
  };

  const handleStart = () => {
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Lab Timer & Practice Tracker
      </Text>

      <PracticeTracker
        solved={solved}
        onSolve={handleSolve}
        onReset={handleReset}
      />

      <Stopwatch
        seconds={seconds}
        isRunning={isRunning}
      />

      <View style={styles.controls}>
        <View style={styles.button}>
          <Button
            title="Start"
            onPress={handleStart}
          />
        </View>

        <View style={styles.button}>
          <Button
            title="Stop"
            onPress={handleStop}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },

  section: {
    width: '90%',
    alignItems: 'center',
    marginBottom: 25,
  },

  solvedText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
  },

  timerText: {
    fontSize: 50,
    fontWeight: 'bold',
  },

  statusText: {
    fontSize: 20,
    marginTop: 5,
  },

  successText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 15,
  },

  controls: {
    width: '90%',
  },

  button: {
    width: '100%',
    marginBottom: 10,   
  },

});