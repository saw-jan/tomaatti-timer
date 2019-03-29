'use strict';

import timer from './timer-controls.js';
import helpers from './helpers.js';
import settings from './settings.js';

let breaks = (function() {
  let tomaattiCycles = 0;
  let shortBreakTime = 0;
  let longBreakTime = 0;
  let isBreak = false;
  let breakTimeLabel = document.getElementById('break-time');
  let cycleStartSound = new Audio('./src/assets/audio/cycle-start.mp3');
  let cycleEndSound = new Audio('./src/assets/audio/cycle-end.mp3');
  
  function breakStarted() {
    tomaattiCycles += 1;
    isBreak = true;
    timer.setTimerState(false);
    playStartCycleSound();
    breakTimeLabel.style.visibility = 'visible';
    setTimeout(() => {
      breakSelector();
    }, 3000);
  }
  
  function breakSelector() {
    if (tomaattiCycles < 4) {
      return short();
    } else {
      return long();
    }
  }
  
  function short() {
    helpers.countdown(helpers.minToMsec(shortBreakTime));
  }
  
  function long() {
    tomaattiCycles = 0;
    helpers.countdown(helpers.minToMsec(longBreakTime));
  }
  
  function breakFinished() {
    isBreak = false;
    breakTimeLabel.style.visibility = 'hidden';
    timer.tomaattiLabel.removeAttribute('disabled');
    timer.startButton.style.display = 'initial';
    settings.disableSettingsPage(false);
    playEndCycleSound();
    return timer.preset();
  }

  function getBreakState() {
    return isBreak;
  }
  
  function setBreakState(state) {
    isBreak = state;
    return isBreak;
  }
  
  function getShortBreakTime() {
    return shortBreakTime;

  }

  function setShortBreakTime(minutes) {
    shortBreakTime = minutes;
    return shortBreakTime;
  }

  function getLongBreakTime() {
    return longBreakTime;
  }

  function setLongBreakTime(minutes) {
    longBreakTime = minutes;
    return longBreakTime;
  }

  function playStartCycleSound() {
    cycleStartSound.load();
    cycleStartSound.play();
  }

  function playEndCycleSound() {
    cycleEndSound.load();
    cycleEndSound.play();
  }

  return {
    breakSelector: breakSelector,
    short: short,
    long: long,
    tomaattiCycles: tomaattiCycles,
    breakTimeLabel: breakTimeLabel,
    getShortBreakTime: getShortBreakTime,
    setShortBreakTime: setShortBreakTime,
    getLongBreakTime: getLongBreakTime,
    setLongBreakTime: setLongBreakTime,
    started: breakStarted,
    finished: breakFinished,
    getBreakState: getBreakState,
    setBreakState: setBreakState
  }
}());

export default breaks;