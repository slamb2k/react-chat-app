import { Box, IconButton, Stack, Typography, Divider } from
  '@mui/material'
import { PlusCircle, MagnifyingGlass } from 'phosphor-react';
import {useTheme } from '@mui/material/styles';
import React from 'react';
import {ChatList} from '../../data';
import { Search, SearchIconWrapper, StyledInputBase } from '../../components/Search';
import ChatElement from '../../components/ChatElement';

const Chats = () => {
  const theme = useTheme();
  return (    
    <Box sx={{
      position: "relative", width: 420, 
      backgroundColor: theme.palette.mode === 'light'? "#F8FAFF" : theme.palette.background.folder,
      boxShadow: '0px 0px 2px rgba(0,0,0,0.25)'
    }}>
      <Stack p={3} spacing={2} sx={{height:"100vh"}}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
          <Typography variant='h5'>
            Chats
          </Typography>
          <IconButton>
            <PlusCircle />
          </IconButton>
        </Stack>

        <Stack sx={{ width: "100%" }}>
          <Search sx={{ marginTop: "16px" }}>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase placeholder='Search...' inputProps={{ "aria-label": "search" }} />
          </Search>
        </Stack>

        <Stack spacing={5} sx={{ width: "100%" }}>
          <Divider sx={{ marginTop: "10px", marginBottom: "3px" }} />
        </Stack>
        
        <Stack className='scrollbar' spacing={2} direction='column' sx={{flexGrow:1, overflow:'scroll', height:'100%'}}>

            <Stack spacing={2.4}>
              <Typography variant='subtitle2' sx={{color:"#676767"}}>
                Document Chats
              </Typography>
              {ChatList.filter((el)=> el.pinned).map((el)=>{
                return <ChatElement  {...el}/>
              })}
              
            </Stack>
          
          <Stack spacing={2.4}>
            <Typography variant='subtitle2' sx={{color:"#676767"}}>
              All Chats
            </Typography>
            {ChatList.filter((el)=> !el.pinned).map((el)=>{
              return <ChatElement {...el}/>
            })}
            
          </Stack>
          
        </Stack>
      </Stack>

    </Box>
  )
}

export default Chats