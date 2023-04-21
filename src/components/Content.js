import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TouchAppTwoToneIcon from '@mui/icons-material/TouchAppTwoTone';

function ApiDataProvider() {
    const [advice, setAdvice] = useState('');
    const [click, setClick] = useState(false);

    const randomAdvice = async () => {
        try{
            const res = await fetch('https://api.adviceslip.com/advice');
            const {slip: { advice }} = await res.json();
            return advice;
        } catch (error) {
            console.error (
                setAdvice("An error occured generating message..."),
            )
        }
    };

    useEffect(() => {
        async function fetchData() {
            const adviceMessage = await randomAdvice();
            setAdvice(adviceMessage);
        }
        fetchData();
    }, []);

    useEffect(() => {
        if (click) {
        async function fetchData() {
            const adviceMessage = await randomAdvice();
            setAdvice(adviceMessage);
            setClick(false);
        }
        fetchData();
        }
    }, [click]);

    const handleClick = () => {
        setClick(true);
    }

  return (
        <Box className="bg-gray-100 dark:bg-gray-800 dark:text-white shadow-lg h-full w-screen flex items-center justify-center pt-10 pb-10">
            <Card className="bg-gray-200 dark:bg-gray-700 dark:text-white shadow-md w-auto h-auto ">
            <CardContent>
                <Typography className='font-bold shadow-sm'>A Little Piece I Have For You</Typography>
                <Typography>{advice}</Typography>
                <Button className='shadow-md bg-gray-100 dark:bg-gray-800'onClick={handleClick} >
                    <TouchAppTwoToneIcon />
                </Button>
            </CardContent>
            </Card>
        </Box>
  )
}

export default ApiDataProvider