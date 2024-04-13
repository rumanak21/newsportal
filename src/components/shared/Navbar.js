"use client"
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Image from 'next/image';
import logo from '@/assets/logo.png'
import { IconButton, Stack } from '@mui/material';
import Link from 'next/link';
//Icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Header from './Header';



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
    pathName: "/categories/news?category=all-news"
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


function Navbar() {


  return (
   <>
   <Header/>
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link className='w-full' href="/">
          <Image src={logo} alt='logo' />
          </Link>
          <Box className="w-full text-center">
            {navItems.map((item) => (
              <Link key={item} href={item.pathName}>
                <Button className="text-white">{item.route}</Button>
              </Link>
            ))}
          </Box>
          <Box>
            <Stack 
            direction="row" 
            sx={{ "& svg": { color: "white" }, 
            }}>
              <IconButton>
                <Link  href="http://facebook.com"><FacebookIcon /></Link>
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
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
   </>
  );
}
export default Navbar;