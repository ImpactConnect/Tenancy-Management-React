export const mockTenants = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+234 801 234 5678',
    property: 'Sunshine Apartments',
    unit: 'Unit 203',
    leaseStart: '2024-01-01',
    leaseEnd: '2024-12-31',
    rentAmount: '₦150,000',
    status: 'Active',
    lastPayment: '2024-03-01'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane.smith@example.com',
    phone: '+234 802 345 6789',
    property: 'Green Valley Estate',
    unit: 'Unit 105',
    leaseStart: '2024-02-01',
    leaseEnd: '2025-01-31',
    rentAmount: '₦200,000',
    status: 'Active',
    lastPayment: '2024-03-15'
  },
  {
    id: 3,
    name: 'Robert Johnson',
    email: 'robert.j@example.com',
    phone: '+234 803 456 7890',
    property: 'Palm Heights',
    unit: 'Unit 301',
    leaseStart: '2023-12-01',
    leaseEnd: '2024-11-30',
    rentAmount: '₦180,000',
    status: 'Active',
    lastPayment: '2024-03-10'
  }
];

export const mockProperties = [
  {
    id: 1,
    name: 'Sunshine Apartments',
    address: '123 Victoria Island, Lagos',
    type: 'Apartment Building',
    units: 12,
    occupiedUnits: 10,
    landlord: 'Michael Brown',
    totalRevenue: '₦1,800,000',
    status: 'Active',
    amenities: ['Parking', 'Security', 'Generator'],
    maintenanceStatus: 'Good'
  },
  {
    id: 2,
    name: 'Green Valley Estate',
    address: '456 Lekki Phase 1, Lagos',
    type: 'Residential Complex',
    units: 20,
    occupiedUnits: 15,
    landlord: 'Sarah Wilson',
    totalRevenue: '₦3,000,000',
    status: 'Active',
    amenities: ['Swimming Pool', 'Gym', 'Security', 'Generator'],
    maintenanceStatus: 'Excellent'
  },
  {
    id: 3,
    name: 'Palm Heights',
    address: '789 Ikoyi, Lagos',
    type: 'Luxury Apartments',
    units: 8,
    occupiedUnits: 6,
    landlord: 'David Chen',
    totalRevenue: '₦1,440,000',
    status: 'Active',
    amenities: ['Rooftop Garden', 'Parking', 'Security', 'Generator', 'Elevator'],
    maintenanceStatus: 'Good'
  }
];

export const mockLandlords = [
  {
    id: 1,
    name: 'Michael Brown',
    email: 'michael.brown@example.com',
    phone: '+234 804 567 8901',
    properties: ['Sunshine Apartments'],
    totalUnits: 12,
    totalRevenue: '₦1,800,000',
    paymentMethod: 'Bank Transfer',
    bankAccount: '**** **** **** 1234',
    joinDate: '2023-01-15'
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    email: 'sarah.wilson@example.com',
    phone: '+234 805 678 9012',
    properties: ['Green Valley Estate'],
    totalUnits: 20,
    totalRevenue: '₦3,000,000',
    paymentMethod: 'Bank Transfer',
    bankAccount: '**** **** **** 5678',
    joinDate: '2023-03-20'
  },
  {
    id: 3,
    name: 'David Chen',
    email: 'david.chen@example.com',
    phone: '+234 806 789 0123',
    properties: ['Palm Heights'],
    totalUnits: 8,
    totalRevenue: '₦1,440,000',
    paymentMethod: 'Bank Transfer',
    bankAccount: '**** **** **** 9012',
    joinDate: '2023-06-10'
  }
];

export const mockUnits = [
  {
    id: 1,
    number: 'Unit 203',
    property: 'Sunshine Apartments',
    type: '2 Bedroom',
    tenant: 'John Doe',
    rentAmount: '₦150,000',
    status: 'Occupied',
    lastMaintenance: '2024-02-15'
  },
  {
    id: 2,
    number: 'Unit 105',
    property: 'Green Valley Estate',
    type: '3 Bedroom',
    tenant: 'Jane Smith',
    rentAmount: '₦200,000',
    status: 'Occupied',
    lastMaintenance: '2024-01-20'
  },
  {
    id: 3,
    number: 'Unit 301',
    property: 'Palm Heights',
    type: '2 Bedroom',
    tenant: 'Robert Johnson',
    rentAmount: '₦180,000',
    status: 'Occupied',
    lastMaintenance: '2024-03-01'
  }
];

export const mockMaintenanceRequests = [
  {
    id: 1,
    property: 'Sunshine Apartments',
    unit: 'Unit 203',
    tenant: 'John Doe',
    issue: 'Faulty Air Conditioner',
    priority: 'High',
    status: 'In Progress',
    dateSubmitted: '2024-03-10',
    scheduledDate: '2024-03-20'
  },
  {
    id: 2,
    property: 'Green Valley Estate',
    unit: 'Unit 105',
    tenant: 'Jane Smith',
    issue: 'Leaking Faucet',
    priority: 'Medium',
    status: 'Pending',
    dateSubmitted: '2024-03-15',
    scheduledDate: null
  }
];

export const mockPayments = [
  {
    id: 1,
    tenant: 'John Doe',
    property: 'Sunshine Apartments',
    unit: 'Unit 203',
    amount: '₦150,000',
    date: '2024-03-01',
    type: 'Rent',
    status: 'Completed',
    method: 'Bank Transfer'
  },
  {
    id: 2,
    tenant: 'Jane Smith',
    property: 'Green Valley Estate',
    unit: 'Unit 105',
    amount: '₦200,000',
    date: '2024-03-15',
    type: 'Rent',
    status: 'Completed',
    method: 'Bank Transfer'
  }
]; 