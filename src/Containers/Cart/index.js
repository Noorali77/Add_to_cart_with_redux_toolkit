
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {useSelector,useDispatch} from 'react-redux';
import {remove,quantityAdd,quantityRemove} from '../../Store/cartSlice';



function Cart(){
    const classes = useStyles();
    const dispatch = useDispatch();
    const cardData = useSelector((data)=>data.cart);
       
    const removeCartHandler = (id)=>{
        dispatch(remove(id))

    };
    const quantityAddHandler = (id)=>{
        const addFindData = cardData.find(val=> val.id == id);

        console.log('addFindData',addFindData);

        if(addFindData.quantity < 10 ){
            dispatch(quantityAdd(id))
        }
        else{
            alert('Quantity exceed!')
        }
        
    };

    const quantityRemoveHandler = (id)=>{
        const addFindData = cardData.find(val=> val.id == id);
        console.log('addFindData',addFindData);
        if(addFindData.quantity > 1 ){
            dispatch(quantityRemove(id))

        }
        else{
            alert('Quantity exceed!')
        }
    }


         return(
        <>
            <Box>
                <Container maxWidth = 'xl'>
                 {
                    cardData.map((data,index)=>{
                        return(
                            <>
                               <Grid container className={classes.cart_main_div} spacing={2}>
                        <Grid lg={3} md={3}>
                            <Box>
                                <img src={data.img} className={classes.img_width}/>
                            </Box>
                        </Grid>
                        <Grid lg={3} md={3}>
                        <Box sx={{display :"flex",justifyContent : "center",alignItems :'center'}}>
                            <ul className={classes.ul_list}>
                            <li>Name : {data.name}</li>
                            <li>Model : {data.model}</li>
                            <li>Price : {data.price}</li>
                        </ul>
                            </Box>
                        </Grid>

                        <Grid lg={3} md={3}>
                            <Box sx={{display :"flex",justifyContent : "center",alignItems :'center' ,height : "100%"}}>
                                <button onClick={()=>quantityRemoveHandler(data.id)}>-</button>
                                <button>{data.quantity}</button>
                                <button onClick={()=>quantityAddHandler(data.id)}>+</button>

                            </Box>
                        </Grid>
                        <Grid lg={3} md={3}>
                        <Box sx={{display :"flex",justifyContent : "center",alignItems :'center' ,height : "100%"}}>

                                <button onClick={()=>removeCartHandler(data.id)}>Remove</button>
                            </Box>
                        </Grid>
                    </Grid>
                            </>
                        )
                    })
                 }
                </Container>
            </Box>
        </>
    )
};

const useStyles = makeStyles({
    img_width : {
        width : "100%",
        height :"200px",
        objectFit : "cover !impotant"
    },
    cart_main_div : {
        padding : "20px 0px"
    },
    ul_list : {
        padding : "35px",
        '& li':{
            padding : "5px 0px"
        } 
      
    }
    
})

export default Cart;