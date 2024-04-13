import LatestNews from '@/components/ui/LatestNews/LatestNews';
import SideBarNews from '@/components/ui/SideBarNews/SideBarNews';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Grid  container spacing={2}>
        <Grid className='max-sm:mx-auto' item xs={8}>
          <LatestNews />
        </Grid>
        <Grid className='  max-sm:hidden '  item xs={4}>
          <SideBarNews/>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;