import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Link from 'next/link';

const Footer = () => {
    const navItems = [
        {
            route: "Home",
            pathName: "/"
        },
        {
            route: "Pages",
            pathName: "/pages"
        },
        {
            route: "Category",
            pathName: "/category"
        },
        {
            route: "News",
            pathName: "/news"
        },
        {
            route: "About",
            pathName: "/about"
        },
        {
            route: "Contact",
            pathName: "/contact"
        },


    ];
    return (
        <Box className="bg-black px-2 py-10">
            <Container>
                <Box sx={{
                    "& svg": { color: "white" },
                }} className="w-full text-center">

                    <IconButton>
                        <Link href="http://facebook.com"><FacebookIcon /></Link>
                    </IconButton>
                    <IconButton>
                        <Link href="https://www.instagram.com/"><InstagramIcon /></Link>
                    </IconButton>
                    <IconButton>
                        <Link href="https://twitter.com/"><TwitterIcon /></Link>
                    </IconButton>
                    <IconButton>
                        <Link href="https://www.youtube.com/"><YouTubeIcon /></Link>
                    </IconButton>

                </Box>
                <Box className="w-full text-center">
                    {navItems.map((item) => (
                        <Link key={item} href={item.pathName}>
                            <Button className="text-white">{item.route}</Button>
                        </Link>
                    ))}
                </Box>
                <Typography color="gray" variant='body2' textAlign="center" >
                    @2024 Hot News Design by RK
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;