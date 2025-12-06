import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Alert,
  CircularProgress,
} from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { colors } from '../theme';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  subject: Yup.string()
    .min(5, 'Subject must be at least 5 characters')
    .required('Subject is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const Contact: React.FC = () => {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, { resetForm }) => {
      setIsSubmitting(true);
      setSubmitStatus('idle');

      try {
        // EmailJS configuration
        // Replace these with your actual EmailJS credentials
        const serviceId = 'service_w6zxvz8';
        const templateId = 'template_1zy42vs';
        const publicKey = 'l9zoPx3fTzoGMM1cB';

        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: values.name,
            from_email: values.email,
            subject: values.subject,
            message: values.message,
          },
          publicKey
        );

        setSubmitStatus('success');
        resetForm();
        
        // Clear success message after 5 seconds
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } catch (error) {
        console.error('Email send error:', error);
        setSubmitStatus('error');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        pt: '80px', 
        pb: 8,
        background: `linear-gradient(135deg, ${colors.secondary} 0%, ${colors.primary} 100%)`,
      }}
    >
      <Container maxWidth="md">
        {/* Header Section */}
        <Box sx={{ mb: 6, mt: 4, textAlign: 'center' }}>
          <Typography
            variant="h2"
            sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                mb: 3,
                color: 'white',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '100px',
                  height: '4px',
                  backgroundColor: colors.brightCyan,
                  borderRadius: '2px',
                },
              }}
            >
              Let's Connect
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: '1.1rem', md: '1.3rem' },
                fontWeight: 400,
                color: colors.lightCyan,
                mt: 4,
                lineHeight: 1.6,
                maxWidth: '700px',
                mx: 'auto',
              }}
            >
              Have an exciting project in mind or looking to collaborate on something amazing? 
              I'd love to hear from you! Drop me a message and let's create something extraordinary together.
            </Typography>
        </Box>

        {/* Status Messages */}
        {submitStatus === 'success' && (
          <Alert 
            severity="success" 
            sx={{ mb: 3 }}
            onClose={() => setSubmitStatus('idle')}
          >
            Thank you for reaching out! I'll get back to you as soon as possible.
          </Alert>
        )}
        {submitStatus === 'error' && (
          <Alert 
            severity="error" 
            sx={{ mb: 3 }}
            onClose={() => setSubmitStatus('idle')}
          >
            Oops! Something went wrong. Please try again or email me directly.
          </Alert>
        )}

        {/* Form */}
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(10px)',
              p: { xs: 3, md: 5 },
              borderRadius: 3,
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
            }}
          >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Name and Email Row */}
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
                gap: 3,
              }}
            >
              <TextField
                fullWidth
                id="name"
                name="name"
                label="Your Name"
                variant="outlined"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: colors.primary,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.primary,
                    },
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: colors.primary,
                  },
                }}
              />
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Your Email"
                type="email"
                variant="outlined"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '&:hover fieldset': {
                      borderColor: colors.primary,
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: colors.primary,
                    },
                  },
                  '& .MuiFormLabel-root.Mui-focused': {
                    color: colors.primary,
                  },
                }}
              />
            </Box>

            {/* Subject */}
            <TextField
              fullWidth
              id="subject"
              name="subject"
              label="Subject"
              variant="outlined"
              value={formik.values.subject}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.subject && Boolean(formik.errors.subject)}
              helperText={formik.touched.subject && formik.errors.subject}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: colors.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.primary,
                  },
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: colors.primary,
                },
              }}
            />

            {/* Message */}
            <TextField
              fullWidth
              id="message"
              name="message"
              label="Your Message"
              multiline
              rows={6}
              variant="outlined"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              error={formik.touched.message && Boolean(formik.errors.message)}
              helperText={formik.touched.message && formik.errors.message}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '&:hover fieldset': {
                    borderColor: colors.primary,
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: colors.primary,
                  },
                },
                '& .MuiFormLabel-root.Mui-focused': {
                  color: colors.primary,
                },
              }}
            />

            {/* Submit Button */}
            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isSubmitting}
              startIcon={isSubmitting ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
              sx={{
                backgroundColor: colors.primary,
                color: 'white',
                py: 1.8,
                fontSize: '1.1rem',
                fontWeight: 600,
                textTransform: 'none',
                borderRadius: '50px',
                boxShadow: `0 4px 20px rgba(0, 126, 167, 0.3)`,
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: colors.secondary,
                  boxShadow: `0 6px 30px rgba(47, 48, 97, 0.4)`,
                  transform: 'translateY(-2px)',
                },
                '&:disabled': {
                  backgroundColor: '#ccc',
                },
              }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </Box>
        </Box>

        {/* Email Section */}
        <Box
          sx={{
            mt: 4,
            textAlign: 'center',
            p: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: 3,
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              color: colors.lightCyan,
              fontSize: '1rem',
              mb: 1,
            }}
          >
            Or reach me directly at:
          </Typography>
          <Typography
            component="a"
            href="mailto:mohamedgamal.shafie@gmail.com"
            sx={{
              color: colors.brightCyan,
              fontSize: '1.2rem',
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.3s ease',
              '&:hover': {
                color: 'white',
                textDecoration: 'underline',
              },
            }}
          >
            mohamedgamal.shafie@gmail.com
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
