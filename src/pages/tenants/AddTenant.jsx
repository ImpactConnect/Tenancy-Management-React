import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import PersonalInfo from './forms/PersonalInfo';
import WorkInfo from './forms/WorkInfo';
import RentDetails from './forms/RentDetails';
import DocumentUpload from './forms/DocumentUpload';

const steps = [
  'Personal Information',
  'Work Information',
  'Rent Details',
  'Documents'
];

function AddTenant() {
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      // Personal Info
      name: '',
      email: '',
      phone: '',
      address: '',
      
      // Work Info
      employer: '',
      position: '',
      workAddress: '',
      workEmail: '',
      workPhone: '',
      
      // Rent Details
      property: '',
      rentAmount: '',
      paymentFrequency: '',
      paymentMethod: '',
      startDate: '',
      duration: '',
      
      // Documents
      profilePicture: null,
      idCard: null,
      additionalDocuments: []
    }
  });

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // TODO: Implement API call
      console.log('Form data:', data);
      toast.success('Tenant added successfully');
      navigate('/tenants');
    } catch (error) {
      toast.error('Failed to add tenant');
    } finally {
      setLoading(false);
    }
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PersonalInfo control={control} errors={errors} />;
      case 1:
        return <WorkInfo control={control} errors={errors} />;
      case 2:
        return <RentDetails control={control} errors={errors} />;
      case 3:
        return <DocumentUpload control={control} errors={errors} />;
      default:
        return 'Unknown step';
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Add New Tenant</Typography>
        <Button
          variant="outlined"
          onClick={() => navigate('/tenants')}
        >
          Cancel
        </Button>
      </Box>

      <Card>
        <CardContent>
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          <form onSubmit={handleSubmit(onSubmit)}>
            {getStepContent(activeStep)}

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3, gap: 2 }}>
              {activeStep !== 0 && (
                <Button onClick={handleBack}>
                  Back
                </Button>
              )}
              {activeStep === steps.length - 1 ? (
                <Button
                  type="submit"
                  variant="contained"
                  disabled={loading}
                >
                  Add Tenant
                </Button>
              ) : (
                <Button
                  variant="contained"
                  onClick={handleNext}
                >
                  Next
                </Button>
              )}
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AddTenant; 