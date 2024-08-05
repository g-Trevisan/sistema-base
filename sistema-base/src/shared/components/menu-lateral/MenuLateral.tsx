import { Height } from "@mui/icons-material";
import { Avatar, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import Divider from '@mui/material/Divider';
import { Box } from '@mui/system'

interface IMenuLateralProps{
    children: React.ReactNode
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => { 
    
    const theme = useTheme()


    return (
        <>
            <Drawer variant='permanent'>
                <Box width={theme.spacing(28)} height="100%" display="flex" flexDirection="column">
                    <Box width="100%" height={theme.spacing(20)} display="flex" alignItems="center" justifyContent="center"> 
                        <Avatar
                            sx={{ height: theme.spacing(12), width: theme.spacing(12)}}
                            src="https://avatars.githubusercontent.com/u/157915846?v=4"
                        />
                    </Box>

                <Divider/>

                <Box flex={1}>
                    <List component="nav">
                        <ListItemButton>
                            <ListItemIcon>
                                <HomeIcon></HomeIcon>
                            <ListItemText primary="Pagina Inicial"/>    
                            </ListItemIcon>
                        </ListItemButton>

                    </List>


                </Box>

                </Box>
            </Drawer>

            <Box height= "100vh" marginLeft={theme.spacing(28)}>  {/* unidade de medida do MUI trabalha com medidas multiplas de 4px(neste caso 28 * 4 = 112) */}
                {children}
            </Box>
        </>
    )
}