import { Box, Button, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { getAllNews } from '@/utils/getAllNews';

const LatestNews = async () => {
    const { data } = await getAllNews()

    return (

        <Box>
            <Card className='my-5'>
                <CardMedia>
                    <Image src={data[0].thumbnail_url} width={800} height={500} alt='top-news' />
                </CardMedia>
                <CardContent>
                    <p className='px-2 my-5 rounded w-[100px] bg-red-500 text-white'>
                        {data[0].category}
                    </p>
                    <Typography gutterBottom variant="h5" component="div">
                        {data[0].title}
                    </Typography>
                    <Typography gutterBottom className='my-3'>
                        By {data[0].author.name} - {data[0].author.published_date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {data[0].details.length > 200 ? data[0].details.slice(0, 200) + "...." : data[0].details}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link href={`/${data[0].category.toLowerCase()}/${data[0]._id}`}>
                        <Button size="small">Learn More</Button>
                    </Link>
                </CardActions>
            </Card>
            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.slice(0, 4).map((news) => (
                        <Grid key={news._id} item xs={6}>
                            <Card className='my-5'>
                                <CardMedia
                                    sx={{
                                        "& img": {
                                            width: "100%",
                                            height: "250px",
                                        }
                                    }}
                                >
                                    <Image src={news.thumbnail_url} width={800} height={300} alt='top-news' />
                                </CardMedia>
                                <CardContent>
                                    <span className='px-2 my-3 rounded bg-red-500 text-white'>
                                        {news.category}
                                    </span>
                                    <Typography gutterBottom >
                                        {news.title}
                                    </Typography>
                                    <Typography gutterBottom className='my-2'>
                                        By {news.author.name} - {news.author.published_date}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {news.details.length > 200 ? news.details.slice(0, 200) + "...." : news.details}
                                    </Typography>
                                </CardContent>
                                <CardActions>

                                    <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                        <Button size="small">Learn More</Button>
                                    </Link>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }


            </Grid>
        </Box>

    );
};

export default LatestNews;