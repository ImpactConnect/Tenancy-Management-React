import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Stepper,
  Step,
  StepLabel,
  Button
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

function EditTenant() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeStep, setActiveStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, formState: { errors }, reset } = useForm();

  useEffect(() => {
    // Mock data - replace with API call
    const tenantData = {
      personalInfo: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john@example.com',
        phone: '+234 123 456 7890',
        address: '123 Main St'
      },
      workInfo: {
        employer: 'Tech Corp',
        occupation: 'Software Engineer',
        workPhone: '+234 098 765 4321',
        workEmail: 'john@techcorp.com',
        workAddress: '456 Business Ave'
      },
      rentDetails: {
        rentAmount: '150000',
        securityDeposit: '150000',
        leaseStartDate: '2024-03-01',
        leaseEndDate: '2025-02-28',
        paymentFrequency: 'monthly'
      }
    };

    reset(tenantData);
  }, [reset]);

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
      toast.success('Tenant updated successfully');
      navigate('/tenants');
    } catch (error) {
      toast.error('Failed to update tenant');
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
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Edit Tenant
      </Typography>

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
                  Update Tenant
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

export default EditTenant; 