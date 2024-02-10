import { Avatar, Box, Typography, Stack } from '@mui/material'
import React from 'react';
import { useTheme } from "@mui/material/styles";
import { ToggleSidebar } from '../../redux/slices/app';
import { useDispatch } from 'react-redux';
import lucasLogo from '../../assets/Images/lucas-group-logo.png';

const Header = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  return (
    <Box p={2} sx={{ width:'100%', backgroundColor: theme.palette.mode === 'light' ? '#F8FAFF' : theme.palette.background.paper, boxShadow:'0px 0px 2px rgba(0,0,0,0.25)'}}>
    <Stack alignItems={'center'} direction='row' justifyContent={'space-between'}
    sx={{width:'100%', height:'100%'}}>
        <Stack onClick={()=>{
            dispatch(ToggleSidebar());
        }} direction={'row'} spacing={2}>
            <Box>
                <Avatar sx={{ bgcolor: theme.palette.primary.main, color: 'white' }}>L</Avatar>
            </Box>
            <Stack spacing={0.2}>
                    <Typography variant='subtitle2'>
                        LUCAS
                    </Typography>
                    <Typography variant='caption'>
                        AI Assistant
                    </Typography>
                </Stack>
        </Stack>
        <Stack direction='row' alignItems='center' spacing={3}>
            {/* <IconButton>
                <MagnifyingGlass/>
            </IconButton>
            <Divider orientation='vertical' flexItem/> */}

            <Box pr={2}>
                <img src={lucasLogo} alt={'Logo icon'} height={36} />
            </Box>
          
        </Stack>
    </Stack>
</Box>
  )
}

export default Header