import React from 'react'
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function CartModal({ cartItems, emitter }) {
    const [openModal, setOpenModal] = React.useState(false);
    emitter.on('openCart', (modalState) => {
        setOpenModal(modalState);
    })

    const handleRemoveItem = (name) => {
        emitter.emit('removeItemCart', name)
    };

    const onClose = () => {
        setOpenModal(false);
    }

    return (
        <Modal open={openModal} onClose={onClose}>
            <Paper sx={{ width: "70%", mx: "auto", mt: 5 }}>
                <Box display="flex" justifyContent="space-between" px={4} alignItems="center">
                    <Typography>Cart</Typography>
                    <IconButton aria-label="close" onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>
                <Divider sx={{ my: 1 }} />
                {cartItems.map(({ name, price, image, quantity }) => <Card sx={{ display: "flex", py: 1, justifyContent: "space-between", alignItems: "center", px: 4 }}>
                    <CardMedia
                        component="img"
                        sx={{ width: 70, my: 5 }}
                        image={image}
                        alt="Live from space album cover"
                    />
                    <Typography>(price)</Typography>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <Button variant='contained' sx={{ height: '2.5rem' }}>+</Button>
                        <TextField type='number' size="small" value={quantity} />
                        <Button variant='contained' sx={{ height: '2.5rem' }}>-</Button>
                    </Box>
                    <IconButton color="error" onClick={() => handleRemoveItem(name)}><CloseIcon /></IconButton>
                    <Typography>Ksh. {price * quantity}</Typography>
                </Card>)}
                {cartItems.length <= 0 && <Typography sx={{ p: 1 }}>No Items on your cart currently.</Typography>}
            </Paper>
        </Modal>
    )
}

export default CartModal