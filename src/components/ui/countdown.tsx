import React, { useEffect, useState } from 'react';

interface CountdownTimerProps {
  duration: number;
  initialTime?: Date;
  item?: string
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ duration, initialTime, item }) => {
  const [countdown, setCountdown] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const countDownDate = initialTime
      ? initialTime.getTime() + duration * 1000
      : new Date().getTime() + duration * 1000;

    const countDownTimer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      const milliseconds = Math.floor(distance % 1000);

      if (distance > 0) {
        setCountdown(`${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`);
      } else {
        setCountdown('');
        clearInterval(countDownTimer);
      }
    }, 10);

    setTimer(countDownTimer);

    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  return <div className='text-[14px] sm:text-[24px]'>{countdown}</div>;
};

export default CountdownTimer;