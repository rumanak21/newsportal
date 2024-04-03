import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import topNews from "@/assets/top-news.png"
import topNews2 from "@/assets/top-news2.png"
import Image from 'next/image';

const LatestNews = () => {
    return (

        <Box>
            <Card className='my-5'>
                <CardMedia>
                    <Image src={topNews} width={800} alt='top-news' />
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
            <Grid className='mt-5'container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Card className='my-5'>
                        <CardMedia>
                            <Image src={topNews2} width={800} alt='top-news' />
                        </CardMedia>
                        <CardContent>
                            <p className='px-2 my-5 rounded w-[100px] bg-red-500 text-white'>
                                Technology
                            </p>
                            <Typography gutterBottom >
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
                </Grid>
                <Grid item xs={6}>
                    <Card className='my-5'>
                        <CardMedia>
                            <Image src={topNews2} width={800} alt='top-news' />
                        </CardMedia>
                        <CardContent>
                            <p className='px-2 my-5 rounded w-[100px] bg-red-500 text-white'>
                                Technology
                            </p>
                            <Typography gutterBottom >
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
                </Grid>
                <Grid item xs={6}>
                    <Card className='my-5'>
                        <CardMedia>
                            <Image src={topNews2} width={800} alt='top-news' />
                        </CardMedia>
                        <CardContent>
                            <p className='px-2 my-5 rounded w-[100px] bg-red-500 text-white'>
                                Technology
                            </p>
                            <Typography gutterBottom >
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
                </Grid>
                <Grid item xs={6}>
                    <Card className='my-5'>
                        <CardMedia>
                            <Image src={topNews2} width={800} alt='top-news' />
                        </CardMedia>
                        <CardContent>
                            <p className='px-2 my-5 rounded w-[100px] bg-red-500 text-white'>
                                Technology
                            </p>
                            <Typography gutterBottom >
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
                </Grid>

            </Grid>
        </Box>

    );
};

export default LatestNews;