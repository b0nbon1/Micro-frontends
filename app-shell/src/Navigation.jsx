import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './HomePage';
import RenderMFE from './RenderMFE';
import { createNanoEvents } from 'nanoevents';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Catalogue = React.lazy(() => import('catalogue/Catalogue'))
const Cart = React.lazy(() => import('cart/Cart'))

function Navigation() {
    const [cart, setCart] = React.useState([]);
    const emitter = createNanoEvents();

    emitter.on('cartChange', (newProduct) => {
        setCart(prevState => {
            let found = false;
            prevState.map((item) => {
                if (item.name === newProduct.name) {
                    found = true
                    item.quantity += 1;
                }
                return item;
            });

            if (!found) {
                return [...prevState, newProduct]
            }
            return prevState
        });
    })

emitter.on('removeItemCart', (name) => {
    setCart(prevState => {
        return prevState.filter((item) => item.name !== name);
    })
})

const handleOpenCart = () => {
    emitter.emit('openCart', true)
}

React.useEffect(() => {
    emitter.emit('cartUpdate', cart)
}, [cart])

return (
    <Router>
        <AppBar position="static">
            <Toolbar sx={{ justifyContent: "space-between" }}>
                <Box display="flex" alignItems="center">
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                            <HomeIcon />
                        </Link>
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <Link to="/catalogue" style={{ textDecoration: "none", color: "inherit" }}>
                            Products
                        </Link>
                    </Typography>
                </Box>
                <Box sx={{ position: 'relative' }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                        onClick={handleOpenCart}
                    >
                        <ShoppingCartIcon />
                    </IconButton>
                    <Box sx={{ bgcolor: "orange", p: 1, borderRadius: "50%", width: '1rem', height: '1rem', position: 'absolute', top: 4, right: 22 }} display="flex" justifyContent="center" alignItems="center" >
                        <Typography sx={{ fontSize: '12px' }}>{cart.length}</Typography>
                    </Box>
                </Box>
                <RenderMFE MFE={Cart} cartItems={cart || []} emitter={emitter} />
            </Toolbar>
        </AppBar>
        <Routes>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route exact path='/catalogue' element={<RenderMFE MFE={Catalogue} emitter={emitter} />}></Route>
        </Routes>
    </Router>
)
}

export default Navigation