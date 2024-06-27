"use client";

import { useEffect, useState } from "react";

const getTimeLeft = () => {
    const now = new Date();
    const then = new Date("12/31/2024");
    const difference = +then - +now;
    console.log(difference);
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
}

export default function Timer() {
    const [timeLeft, changeTimeLeft] = useState(getTimeLeft());

    useEffect(() => {
        const update = () => {
            changeTimeLeft(getTimeLeft());
        }

        setInterval(update, 1000);

        return () => clearInterval(update);
    }, []);

    return (
        <div className="flex items-start gap-[10px]">
            <div className="flex flex-col items-center gap-[10px]">
                <h2 className="w-[100px] font-bold flex items-center justify-center  rounded-[15px] h-[70px] text-4xl bg-white-400">{toStringNum(timeLeft.days)}</h2>
                <p>DAYS</p>
            </div>
            <h2 className="font-bold text-4xl h-[70px] flex items-center">:</h2>
            <div className="flex flex-col items-center gap-[10px]">
                <h2 className="w-[100px] font-bold flex items-center justify-center  rounded-[15px] h-[70px] text-4xl bg-white-400">{toStringNum(timeLeft.hours)}</h2>
                <p>HOURS</p>
            </div>
            <h2 className="font-bold text-4xl h-[70px] flex items-center">:</h2>
            <div className="flex flex-col items-center gap-[10px]">
                <h2 className="w-[100px] font-bold flex items-center justify-center  rounded-[15px] h-[70px] text-4xl bg-white-400">{toStringNum(timeLeft.minutes)}</h2>
                <p>MINUTES</p>
            </div>
            <h2 className="font-bold text-4xl h-[70px] flex items-center">:</h2>
            <div className="flex flex-col items-center gap-[10px]">
                <h2 className="w-[100px] font-bold flex items-center justify-center  rounded-[15px] h-[70px] text-4xl bg-white-400">{toStringNum(timeLeft.seconds)}</h2>
                <p>SECONDS</p>
            </div>
        </div>

    )
}

const toStringNum = (num) => {
    if(num < 10) return `0${num}`;
    return num;
}