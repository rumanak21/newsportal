import LatestNews from '@/components/ui/LatestNews/LatestNews';
import SideBarNews from '@/components/ui/SideBarNews/SideBarNews';
import { Grid } from '@mui/material';
import React from 'react';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews/>
        </Grid>
        <Grid item xs={4}>
          <SideBarNews/>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;