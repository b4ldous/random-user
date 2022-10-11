import { useEffect, useState } from "react";
import axios from "axios";
import Box from '@mui/material/Box'
import { CssBaseline } from "@mui/material";


function App() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const result = await axios("https://random-data-api.com/api/v2/users");

        setData(result.data);
        
      } catch (error) {
        setIsError(true);
      }

      setIsLoading(false);
    };
    fetchData();
    
  }, [user]);


  const handleButton = () => {
    setUser(user + 1);
  };

  return (
    <>
    <CssBaseline/>
    <Box sx={{display: 'flex',justifyContent: 'center', background: 'radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(70,244,252,1) 100%);'}}>




<Box sx={{display: 'flex', justifyContent: 'center'}} >
      {isError && <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box>Something went wrong ...</Box>
          
          </Box>}
      {isLoading ? (
        <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Box>Loading ...</Box>
          
          </Box>
      ) : (
        <Box>
          <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
            {
              <Box sx={{display: 'flex', flexDirection: 'column'}} key={data.id}>
                <Box component='img' alt="userAvatar" src={data.avatar}/>
                <typography>{data.first_name} {data.last_name}</typography>
                <Box>{data.email}</Box>
                
              </Box>
            }
          </Box>
          <Box component='button' onClick={handleButton}>Random</Box>
        </Box>
      )}
    </Box>



</Box>


    
    </>




  
  );
}

export default App;
