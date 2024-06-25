"use client";

import { useState } from "react";

const getTimeLeft = () => {
    const now = new Date();
    const then = new Date("12/31/2024");
    const difference = then.getMilliseconds() - now.getMilliseconds();
    return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24))
    }
}

export default function Timer() {
    const [timeLeft, changeTimeLeft] = useState(getTimeLeft());


    return (
        <div>{timeLeft.days}</div>
    )
}