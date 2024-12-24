import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Tab,
  Tabs,
  IconButton,
  InputAdornment
} from '@mui/material';
import {
  Search as SearchIcon,
  Add as AddIcon,
  FilterList as FilterIcon
} from '@mui/icons-material';
import { TabPanel, TabContext } from '@mui/lab';
import MessageList from '../../components/messages/MessageList';
import ChatWindow from '../../components/messages/ChatWindow';
import AnnouncementsList from '../../components/messages/AnnouncementsList';
import NotificationsList from '../../components/messages/NotificationsList';

function MessageCenter() {
  const [selectedTab, setSelectedTab] = useState('messages');
  const [selectedChat, setSelectedChat] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleNewMessage = () => {
    // TODO: Implement new message functionality
    console.log('New message clicked');
  };

  const handleNewAnnouncement = () => {
    // TODO: Implement new announcement functionality
    console.log('New announcement clicked');
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Communication Center</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          {selectedTab === 'messages' && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleNewMessage}
            >
              New Message
            </Button>
          )}
          {selectedTab === 'announcements' && (
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleNewAnnouncement}
            >
              New Announcement
            </Button>
          )}
        </Box>
      </Box>

      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Messages" value="messages" />
            <Tab label="Announcements" value="announcements" />
            <Tab label="Notifications" value="notifications" />
          </Tabs>
        </Box>

        <TabPanel value="messages" sx={{ p: 0 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card>
                <CardContent>
                  <TextField
                    fullWidth
                    size="small"
                    placeholder="Search messages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="action" />
                        </InputAdornment>
                      ),
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton size="small">
                            <FilterIcon />
                          </IconButton>
                        </InputAdornment>
                      )
                    }}
                    sx={{ mb: 2 }}
                  />
                  <MessageList
                    selectedChat={selectedChat}
                    onSelectChat={setSelectedChat}
                    searchQuery={searchQuery}
                  />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={8}>
              {selectedChat ? (
                <ChatWindow chat={selectedChat} />
              ) : (
                <Card sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CardContent>
                    <Typography color="textSecondary">
                      Select a conversation to start messaging
                    </Typography>
                  </CardContent>
                </Card>
              )}
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="announcements" sx={{ p: 0 }}>
          <AnnouncementsList />
        </TabPanel>

        <TabPanel value="notifications" sx={{ p: 0 }}>
          <NotificationsList />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default MessageCenter; 