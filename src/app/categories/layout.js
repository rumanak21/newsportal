import CategoryList from '@/components/ui/CategoryList/CategoryList';
import { Box, Container, Grid } from '@mui/material';

const CategoriesLayout = ({children}) => {
    return (
        <Box>
            <Container>
                <Grid className=' max-sm:w-full max-sm:flex max-sm:flex-col max-sm:items-center' container spacing={2}>
                    <Grid item  columns={{ xs: 3, sm: 8, md: 12 }}>
                        <CategoryList/>
                    </Grid>
                    <Grid item xs={9}>
                        {children}
                    </Grid>
                </Grid>
            </Container>

        </Box>
    );
};

export default CategoriesLayout;