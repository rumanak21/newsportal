import { Box, Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import sidebarNews from "@/assets/side-top-news.png"
import sideBottomImage from "@/assets/side-bottom-img.png"

const SideBarNews = () => {
    return (
        <>
            <Box>
                <Card className='my-5'>
                    <CardMedia>
                        <Image src={sidebarNews} width={800} alt='top-news' />
                    </CardMedia>
                    <CardContent>
                        <p className='px-2 my-5 rounded w-[100px] bg-red-500 text-white'>
                            Technology
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                        </Typography>
                        <Typography gutterBottom className='my-3'>
                            By Rumana K. - April 03 2024
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti totam culpa quidem optio facilis, iste voluptates laborum voluptatem minus saepe?
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
                <Box>
                    <Divider className='my-5'></Divider>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase >
                                <Image src={sidebarNews} width={100} alt='sidebarNews' />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8} sm container>
                            <Grid item xs container direction="column" >
                                <Grid item xs>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className='my-1'>
                                        April 03 2024
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider className='my-5'></Divider>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase >
                                <Image src={sidebarNews} width={100} alt='sidebarNews' />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8} sm container>
                            <Grid item xs container direction="column" >
                                <Grid item xs>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className='my-1'>
                                        April 03 2024
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider className='my-5'></Divider>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase >
                                <Image src={sidebarNews} width={100} alt='sidebarNews' />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8} sm container>
                            <Grid item xs container direction="column" >
                                <Grid item xs>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className='my-1'>
                                        April 03 2024
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider className='my-5'></Divider>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase >
                                <Image src={sidebarNews} width={100} alt='sidebarNews' />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8} sm container>
                            <Grid item xs container direction="column" >
                                <Grid item xs>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className='my-1'>
                                        April 03 2024
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider className='my-5'></Divider>
                    <Grid container spacing={2}>
                        <Grid item>
                            <ButtonBase >
                                <Image src={sidebarNews} width={100} alt='sidebarNews' />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={8} sm container>
                            <Grid item xs container direction="column" >
                                <Grid item xs>
                                    <Typography gutterBottom >
                                        Bitcoin Climbs as Elon Musk Says Tesla Likely to Accept it Again
                                    </Typography>
                                    <Typography gutterBottom className='my-1'>
                                        April 03 2024
                                    </Typography>
                                </Grid>

                            </Grid>
                        </Grid>
                    </Grid>

                </Box>
                <box>
                    <Image className="my-5" src={sideBottomImage} width={500} alt='sidebarNews' />
                </box>
            </Box>
        </>
    );
};

export default SideBarNews;