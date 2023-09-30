import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import React from 'react'

const products = [
    {
        name: 'Orange',
        image: 'http://www.azspagirls.com/files/2010/09/orange.jpg',
        price: 50
    },
    {
        name: 'Banana',
        image: 'http://images.all-free-download.com/images/graphicthumb/vector_illustration_of_ripe_bananas_567893.jpg',
        price: 30
    },
    {
        name: 'Lemon',
        image: 'https://3.imimg.com/data3/IC/JO/MY-9839190/organic-lemon-250x250.jpg',
        price: 80
    },
]

const defaultTheme = createTheme();

function Catalogue({ emitter }) {
  const handleAddToCart = ({ name, image, price }) => {
    emitter.emit('cartChange', { name, image, price, quantity: 1 })
  }
  return (
    <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {products.map(({ name, image, price }) => (
              <Grid item key={name} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '100%',
                    }}
                    image={image}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {name}
                    </Typography>
                    <Typography>
                      Price: Ksh. {price}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant='contained' onClick={() => handleAddToCart({name, image, price})}>Add to Cart</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

    </ThemeProvider>
  )
}

export default Catalogue