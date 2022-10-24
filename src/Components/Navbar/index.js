
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'; 
import {useSelector} from 'react-redux';



function Navbar(){
    const classes = useStyles();
    const cartLength = useSelector((data)=>data.cart);
    


    return(
    <>
      <Box>
        <Container maxWidth='xl'>
            <Box className={classes.flex_main_box}>
                <Box>
                    <Link to='/'>Home</Link>
                </Box>
                <Link to='/cart' className={classes.relative_box}>
                    <ShoppingCartIcon className={classes.icon_width}/>
                    <Box className={classes.absolute_box}>
                        {cartLength.length}
                    </Box>
                </Link>
            </Box>

        </Container>
      </Box>
    </>
    )
};

const useStyles = makeStyles({
    flex_main_box : {
        display : "flex",
        justifyContent : 'space-between',
        alignItems : "center",
        paddingTop:"25px"
    },
    relative_box : {
        position : 'relative'
    },

    absolute_box :{
        position : 'absolute',
        top : "-12px",
        left : "-14px",
        width : '30px',
        height :"30px",
        borderRadius :"50%",
        background : "red",
        display : "flex",
        justifyContent :'center',
        alignItems: "center"
    },

    icon_width :{
        fontSize : "36px !important"
    }


})

export default Navbar;