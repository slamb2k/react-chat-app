import { Avatar, Box, IconButton, Stack, Typography } from '@mui/material';
import {useTheme} from '@mui/material/styles';
import StyledBadge from './StyledBadge';
import {FileXls, Trash} from "phosphor-react";
import { green } from '@mui/material/colors';

//single chat element
const ChatElement = ({id,name, img, msg, time, online, unread, pinned}) => {
    const theme = useTheme();
    return (
      <Box sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor: theme.palette.mode === 'light'? "#fff" : theme.palette.background.default
      }}
        p={2}>
        <Stack direction="row" alignItems='center' justifyContent='space-between'>
          <Stack direction='row' spacing={2}>
            {online ? <StyledBadge overlap='circular' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant="dot">
            <Avatar><FileXls /></Avatar>
            </StyledBadge> : pinned ? <Avatar sx={{ bgcolor: green[900], color: 'white' }}><FileXls /></Avatar> : <Avatar sx={{ bgcolor: theme.palette.primary.main, color: 'white' }}>L</Avatar> }
            
            <Stack spacing={0.3}>
              <Stack direction='row' spacing={0}>
                <Typography variant='subtitle2'>
                  {name}
                </Typography>
              </Stack>
              <Typography variant='caption'>
                {msg}
              </Typography>
            </Stack>
            </Stack>
            <Stack spacing={0} alignItems='center'>
              <IconButton id="chat-delete" size="medium">
                <Trash/>
              </IconButton>
              {/* <Badge color='primary' badgeContent={unread}>
  
              </Badge> */}
            </Stack>
          
          
        </Stack>
  
  
      </Box>
    )
  };

  export default ChatElement