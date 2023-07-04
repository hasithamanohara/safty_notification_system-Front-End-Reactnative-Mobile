import React, { useState, useEffect, useRef } from 'react';
import { View, Text } from 'react-native';
import { StartButton, PauseButton, ResetButton } from './Stopwachbutton';

const Stopwatch = () => {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const startTimer = () => {
        setIsRunning(true);
        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
        }, 1000);
    };

    const pauseTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
    };

    const resetTimer = () => {
        setIsRunning(false);
        clearInterval(intervalRef.current);
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    useEffect(() => {
        if (seconds === 60) {
            setSeconds(0);
            setMinutes((prevMinutes) => prevMinutes + 1);
        }
        if (minutes === 60) {
            setMinutes(0);
            setHours((prevHours) => prevHours + 1);
        }
    }, [seconds]);

    return (
        <View>
            <View className="justify-center flex-row absolute top-0 w-full h-20 bg-black border-b-2 rounded-xl border-[#c7e5f1]">
                <Text className=" items-center justify-center text-[70px] text-[#28b023] bottom-2">
                    {hours.toString().padStart(2, '0')}:{minutes
                        .toString()
                        .padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                </Text>
            </View>

            <View className="top-60">
                <View className="items-center flex-row w-full h-14 top-80 bg-black bg-opacity-50 rounded-xl border-b-2 border-[#c7e5f1]">

                    {!isRunning && <StartButton onPress={startTimer} />}
                    {isRunning && <PauseButton onPress={pauseTimer} />}

                    <View className=" absolute right-6">
                        <ResetButton onPress={resetTimer} />
                    </View>
                </View>
            </View>


        </View>
    );
};

export default Stopwatch;
