import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DashboardLayout from './components/layout/DashboardLayout';
import Dashboard from './pages/Dashboard';
import TenantsList from './pages/tenants/TenantsList';
import AddTenant from './pages/tenants/AddTenant';
import PropertiesList from './pages/properties/PropertiesList';
import AddProperty from './pages/properties/AddProperty';
import LandlordsList from './pages/landlords/LandlordsList.jsx';
import AddLandlord from './pages/landlords/AddLandlord';
import DocumentsList from './pages/documents/DocumentsList';
import EditTenant from './pages/tenants/EditTenant';
import EditProperty from './pages/properties/EditProperty';
import EditLandlord from './pages/landlords/EditLandlord';
import ErrorBoundary from './components/ErrorBoundary';
import RentCollection from './pages/finance/RentCollection';
import PaymentHistory from './pages/finance/PaymentHistory';
import TenantProfile from './pages/tenants/TenantProfile';
import PropertyProfile from './pages/properties/PropertyProfile';
import LandlordProfile from './pages/landlords/LandlordProfile';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#f5f5f5',
          margin: 0,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          zIndex: 1000,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          zIndex: 1100,
        },
      },
    },
  },
});

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Router>
            <ErrorBoundary>
              <DashboardLayout>
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/tenants" element={<TenantsList />} />
                  <Route path="/tenants/add" element={<AddTenant />} />
                  <Route path="/tenants/edit/:id" element={<EditTenant />} />
                  <Route path="/properties" element={<PropertiesList />} />
                  <Route path="/properties/add" element={<AddProperty />} />
                  <Route path="/properties/edit/:id" element={<EditProperty />} />
                  <Route path="/landlords" element={<LandlordsList />} />
                  <Route path="/landlords/add" element={<AddLandlord />} />
                  <Route path="/landlords/edit/:id" element={<EditLandlord />} />
                  <Route path="/documents" element={<DocumentsList />} />
                  <Route path="/finance/rent-collection" element={<RentCollection />} />
                  <Route path="/finance/payment-history" element={<PaymentHistory />} />
                  <Route path="/tenants/profile/:id" element={<TenantProfile />} />
                  <Route path="/properties/profile/:id" element={<PropertyProfile />} />
                  <Route path="/landlords/profile/:id" element={<LandlordProfile />} />
                </Routes>
              </DashboardLayout>
            </ErrorBoundary>
            <Toaster position="top-right" />
          </Router>
        </LocalizationProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
