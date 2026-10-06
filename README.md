# IT313 Laboratory 5 - React State & Hooks

## Problem

This project is a Lab Timer and Practice Tracker for students during laboratory sessions.

The application allows students to:

- Track the number of practice problems they have solved.
- Track how long they have been working.
- Start and stop a stopwatch.
- Reset the solved problem counter.

## Approach

This project uses React Native with Expo.

### useState

I used useState to store the solved problem count and the running state of the stopwatch.

The solved state starts at 0.

The isRunning state starts at false.

### useEffect

I used useEffect inside the custom useStopwatch hook.

The effect creates an interval that increases the stopwatch every 1000 milliseconds while the stopwatch is running.

### Cleanup Function

I used clearInterval inside the cleanup function.

This prevents the interval from continuing when the stopwatch is stopped or when the component is unmounted.

### Conditional Rendering

Conditional rendering is used to:

- Display "Great job!" when the solved count reaches 5.
- Display "Running..." when the stopwatch is running.
- Display "Paused" when the stopwatch is stopped.

### Event Handling

The Solve +1, Reset, Start, and Stop buttons use function references with onPress.

### Lifting State Up

LabScreen owns the shared state.

PracticeTracker and Stopwatch receive the required information through props from LabScreen.

### Custom Hook

The stopwatch functionality is placed inside the custom hook:

useStopwatch()

This separates the timer logic from the interface.

## How to Run

1. Install Node.js.
2. Install Expo Go on the mobile device.
3. Open the project folder in Visual Studio Code.
4. Open the terminal.
5. Run:

```bash
npx expo start