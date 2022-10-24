
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from 'react-router-dom'; 
import car from '../../Assets/Images/car.webp';
import car2 from '../../Assets/Images/car2.jpeg';
import car3 from '../../Assets/Images/car3.jpg';
import car4 from '../../Assets/Images/car4.jpg';
import car5 from '../../Assets/Images/car5.jpg';
import car6 from '../../Assets/Images/car6.jpg';
import {useSelector,useDispatch } from 'react-redux';
import {add} from '../../Store/cartSlice';




function Home(){
    const classes = useStyles();

    const dispatch = useDispatch();
    const cardData = useSelector((data)=>data.cart);
    const cartData = [
        {
          id : 1,  img : car , name : "dummy 1", model : "gr-1" , price : "44,000",quantity : 1,
        },
        {
            id : 2,  img : car2 , name : "dummy 2", model : "gr-2" , price : "54,000",quantity : 1,
        },
        {
           id:3, img : car3 , name : "dummy 3", model : "gr-3" , price : "64,000",quantity : 1,
        },
        {
            id:4, img : car4 , name : "dummy 4", model : "gr-4" , price : "74,000",quantity : 1,
        },
        {
            id:5, img : car5 , name : "dummy 5", model : "gr-5" , price : "84,000",quantity : 1,
        },
        {
            id:6, img : car6 , name : "dummy 6", model : "gr-6" , price : "94,000",quantity : 1,
        },
    ];
       

    const cartHandler = (data)=>{
        const isFound = cardData.some(element => {
            if (element.id === data.id) {
              return true;
            }
          
            return false;
          });
          
          console.log(isFound);
          if(!isFound){
        dispatch(add(data))
          }
          else{
            alert('Aleady added')
          }
   

    }




    return(
        <>

        <Box sx={{marginTop:"50px"}}>
         <Container maxWidth='xl'>
            <Grid container spacing={2}>
          {
            cartData.map((data,index)=>{
                return(
                    <>
                      <Grid item lg={3} md={4} sm={6} xs={12} key   ={data.id}>
                <Box className={classes.card_main_div}>
                    <Box>
                        <img src={data.img} className={classes.img_width}/>
                    </Box>
                    <Box>
                        <ul>
                            <li>Name : {data.name}</li>
                            <li>Model : {data.model}</li>
                            <li>Price : ${data.price}</li>
                        </ul>
                    </Box>
                    <Box sx={{padding : '0px 0px 0px 15px'}}>
                        <button onClick={()=>cartHandler(data)}>Add to cart</button>
                    </Box>


                </Box>

            </Grid>
                    </>
                )
            })
          }
            </Grid>
          
         </Container>
        </Box>
   
        </>
    )
};


const useStyles = makeStyles({
    card_main_div : {
        border : "1px solid #000",
        paddingBottom :"15px",
        marginBottom : "15px"
    },
    img_width : {
        height : "150px",
        width  :"100%",
        objectFit : "cover"
    }

})

export default Home;