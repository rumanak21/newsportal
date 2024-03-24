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


function Navbar() {


  return (
    <AppBar position="static" className='bg-black'>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image src={logo} alt='logo' />
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
                <FacebookIcon />
              </IconButton>
              <IconButton>
                <InstagramIcon />
              </IconButton>
              <IconButton>
                <TwitterIcon />
              </IconButton>
              <IconButton>
                <YouTubeIcon />
              </IconButton>
            </Stack>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;