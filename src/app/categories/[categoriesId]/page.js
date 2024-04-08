import { getCategoryNews } from '@/utils/getCategoryNews';
import {  Card,  CardContent, CardMedia, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';


const DynamicNewsPage = async ({ params, searchParams }) => {

    const { data } = await getCategoryNews(searchParams.category)
    

    return (
        <div className='my-5'>
            <h1>Total <span className='font-bold'>{searchParams.category}</span> news: {data.length}</h1>

            <Grid className='mt-5' container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                {
                    data.map(news => (
                        <Grid key={news.id} item xs={6}>
                            <Link href={`/${news.category.toLowerCase()}/${news._id}`}>
                                <Card className='my-5'>
                                    <CardMedia sx={{
                                        "& img": {
                                            width: "100%",
                                            height: "250px",
                                        }
                                    }}>
                                        <Image src={news.thumbnail_url} width={800} height={100} alt='top-news' />
                                    </CardMedia>
                                    <CardContent>
                                        <span className='px-2 my-3 rounded bg-red-500 text-white'>
                                            {news.category}
                                        </span>
                                        <Typography variant='h6' gutterBottom >
                                            {news.title.length > 30 ? news.title.slice(0, 30) + "..." : news.title}
                                        </Typography>
                                        <Typography gutterBottom className='my-2'>
                                            {news.author.name} - {news.published_date}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {news.details.length > 200 ? news.details.slice(0, 200) + "...." : news.details}
                                        </Typography>
                                    </CardContent>
                                
                                </Card>
                            </Link>
                        </Grid>
                    ))
                }



            </Grid>

        </div>
    );
};

export default DynamicNewsPage;