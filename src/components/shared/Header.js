import { Box, Container, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import headingImage from "../../assets/The Dragon News.png"
import { getCurrentDate } from '@/utils/GetCurrentDate';

const Header = () => {
    const currentDate = getCurrentDate()
    return (
        <Box className="w-full my-5">
            <Container>
                <Image src={headingImage} width={500} height={500} className='mx-auto' alt='Heading Image'/>
                <Typography className='my-2' color="gray" variant='body2' textAlign="center" >
                    Journalism Without Fear or favour
                </Typography>
                <Typography textAlign="center" >
                    {currentDate}
                </Typography>
            </Container>
        </Box>
    );
};

export default Header;