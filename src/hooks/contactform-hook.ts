import { contactForm } from '@/Api/api';
import type { contactform } from '@/types/contactform';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

export const useContactForm = () => {
  return useMutation({
    mutationFn: (data: contactform) => contactForm(data),
    onSuccess: () => {
      toast.success('Contact form submitted successfully');
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{
        detail: string;
        error?: string;
      }>;
      toast.error('Failed to submit Contact Form', {
        description: axiosError.response?.data?.error,
      });
    },
  });
};
