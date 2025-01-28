import { Grid2 } from "@mui/material";
import Banner from "../banner/banner";
import Categories from "./categories";



const Home = () => {
    return (
     <>  
       <Banner />
            <Grid2 container>
                <Grid2 item lg={2} xs={12} sm={2}>
                    <Categories />
                </Grid2>
                <Grid2 container item xs={12} sm={10} lg={10}>
                    
                </Grid2>
            </Grid2>
       </>
    );
}

export default Home;


