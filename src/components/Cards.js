import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useApiData } from './Content';

function Cards() {
    const data = useApiData();
    console.log(data)


    return (
        <Box>
            <Card>
            <CardContent>
                <Typography>A Little Piece I Have For You</Typography>
                <Typography>{data}</Typography>
            </CardContent>
            </Card>
        </Box>
      );
}

export default Cards