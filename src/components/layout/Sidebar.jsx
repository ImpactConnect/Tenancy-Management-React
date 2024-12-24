import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Box,
  Typography,
  Divider
} from '@mui/material';
import {
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  Description as DocumentIcon,
  AttachMoney as MoneyIcon,
  Message as MessageIcon,
  Settings as SettingsIcon,
  Receipt as ReceiptIcon
} from '@mui/icons-material';
import { useLocation, useNavigate } from 'react-router-dom';

const drawerWidth = 240;

function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      title: 'Dashboard',
      path: '/',
      icon: <DashboardIcon />
    },
    {
      title: 'Properties',
      path: '/properties',
      icon: <HomeIcon />
    },
    {
      title: 'Tenants',
      path: '/tenants',
      icon: <PeopleIcon />
    },
    {
      title: 'Landlords',
      path: '/landlords',
      icon: <PersonIcon />
    },
    {
      title: 'Finance',
      items: [
        {
          title: 'Rent Collection',
          path: '/finance/rent-collection',
          icon: <MoneyIcon />
        },
        {
          title: 'Payment History',
          path: '/finance/payment-history',
          icon: <ReceiptIcon />
        }
      ]
    },
    {
      title: 'Documents',
      path: '/documents',
      icon: <DocumentIcon />
    },
    {
      title: 'Messages',
      path: '/messages',
      icon: <MessageIcon />
    },
    {
      title: 'Settings',
      path: '/settings',
      icon: <SettingsIcon />
    }
  ];

  const renderMenuItem = (item) => {
    // If the item has sub-items, render a group
    if (item.items) {
      return (
        <Box key={item.title}>
          <ListItem>
            <Typography
              variant="subtitle2"
              color="textSecondary"
              sx={{ fontWeight: 'bold', fontSize: '0.75rem' }}
            >
              {item.title}
            </Typography>
          </ListItem>
          {item.items.map((subItem) => renderMenuItem(subItem))}
        </Box>
      );
    }

    // Otherwise render a single menu item
    return (
      <ListItem key={item.path} disablePadding>
        <ListItemButton
          selected={location.pathname === item.path}
          onClick={() => navigate(item.path)}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'action.selected'
            }
          }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            {item.icon}
          </ListItemIcon>
          <ListItemText 
            primary={item.title}
            primaryTypographyProps={{
              fontSize: '0.875rem'
            }}
          />
        </ListItemButton>
      </ListItem>
    );
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: drawerWidth,
          boxSizing: 'border-box',
          borderRight: '1px solid rgba(0, 0, 0, 0.12)'
        }
      }}
    >
      <Box sx={{ p: 2 }}>
        <Typography variant="h6" noWrap component="div">
          Property Manager
        </Typography>
      </Box>
      <Divider />
      <List sx={{ px: 2 }}>
        {menuItems.map((item) => renderMenuItem(item))}
      </List>
    </Drawer>
  );
}

export default Sidebar; 