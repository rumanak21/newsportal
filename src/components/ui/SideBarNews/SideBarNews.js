import { Box, Button, ButtonBase, Card, CardActions, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import sidebarNews from "@/assets/side-top-news.png"
import sideBottomImage from "@/assets/side-bottom-img.png"
import { getAllNews } from '@/utils/getAllNews';
import Link from 'next/link';

const SideBarNews = async () => {
    const { data } = await getAllNews()
    return (
        <>
            <Box>
                <Card className='my-5'>
                    <CardMedia>
                        <Image src={data[1].thumbnail_url} width={800} height={300} alt='top-news' />
                    </CardMedia>
                    <CardContent>
                        <p className='px-2 my-5 rounded w-[100px] bg-red-500 text-white'>
                            {data[1].category}
                        </p>
                        <Typography gutterBottom variant="h5" component="div">
                            {data[1].title}
                        </Typography>
                        <Typography gutterBottom className='my-3'>
                            By {data[1].author.name} - {data[1].author.published_date}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {data[1].details.length > 200 ? data[1].details.slice(0, 200) + "...." : data[1].details}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Link href={`/${data[1].category.toLowerCase()}/${data[1]._id}`}>
                            <Button size="small">Learn More</Button>
                        </Link>
                    </CardActions>

                </Card>

                <Box>
                    {
                        data.slice(0, 5).map((news) => (
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}  key={news._id}>
                                <Box>
                                    <Divider className='my-5'></Divider>
                                    <Grid container spacing={2}>
                                        <Grid item>
                                            <ButtonBase >
                                                <Image src={news.thumbnail_url} width={120} height={100} alt='sidebarNews' />
                                            </ButtonBase>
                                        </Grid>
                                        <Grid item xs={8} sm container>
                                            <Grid item xs container direction="column" >
                                                <Grid item xs>
                                                    <Typography gutterBottom >
                                                        {news.title}
                                                    </Typography>
                                                    <Typography className='text-sm'>
                                                        {news.author.published_date}
                                                    </Typography>
                                                </Grid>

                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Link>
                        ))
                    }


                </Box>
                <box>
                    <Image className="my-5" src={sideBottomImage} width={500} alt='sidebarNews' />
                </box>
            </Box>
        </>
    );
};

export default SideBarNews;