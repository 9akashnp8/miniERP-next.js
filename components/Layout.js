import * as React from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import GroupsIcon from '@mui/icons-material/Groups';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DevicesIcon from '@mui/icons-material/Devices';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import AddToQueueIcon from '@mui/icons-material/AddToQueue';
import AppsIcon from '@mui/icons-material/Apps';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const drawerWidth = 240;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            miniERP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {/* {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))} */}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp"/>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default function Layout({children}) {
  const [employeeOpen, setEmployeeOpen] = React.useState(true);
  const [hardwareOpen, setHardwareOpen] = React.useState(true);
  const [financeOpen, setFinanceOpen] = React.useState(true);

  const handleEmployeeClick = () => {
    setEmployeeOpen(!employeeOpen);
  }

  const handleHardwareClick = () => {
    setHardwareOpen(!hardwareOpen);
  }

  const handleFinanceClick = () => {
    setFinanceOpen(!financeOpen);
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ResponsiveAppBar/>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <Link href='/employees'><ListItemText primary='Dashboard'/></Link>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <AccountTreeIcon/>
                    </ListItemIcon>
                    <Link href='/employees'><ListItemText primary='IT Process'/></Link>
                </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItemButton onClick={handleEmployeeClick}>
              <ListItemIcon>
                <CorporateFareIcon />
              </ListItemIcon>
              <ListItemText primary="Employees" />
              {employeeOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={employeeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <GroupsIcon />
                  </ListItemIcon>
                  <Link href='/employee'><ListItemText primary="Dashboard" /></Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <PersonAddIcon />
                  </ListItemIcon>
                  <Link href='/employee/create'><ListItemText primary="Add New" /></Link>
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleHardwareClick}>
              <ListItemIcon>
                <DevicesIcon />
              </ListItemIcon>
              <ListItemText primary="Hardware" />
              {hardwareOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={hardwareOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AppsIcon />
                  </ListItemIcon>
                  <Link href='/hardware'><ListItemText primary="Dashboard" /></Link>
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AddToQueueIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add New" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={handleFinanceClick}>
              <ListItemIcon>
                <AccountBalanceIcon />
              </ListItemIcon>
              <ListItemText primary="Finance" />
              {financeOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={financeOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <LibraryBooksIcon />
                  </ListItemIcon>
                  <ListItemText primary="Services" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <AccountBalanceWalletIcon />
                  </ListItemIcon>
                  <ListItemText primary="Add Payment" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}
