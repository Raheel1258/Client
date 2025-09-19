import { newsletterRequest } from '@/Api/api';
import type { newsletter } from '@/types/newsletter';
import { AxiosError } from 'axios';
import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

export const useNewsletter = () => {
  return useMutation({
    mutationFn: (data: newsletter) => newsletterRequest(data),
    onSuccess: () => {
      toast.success('Newsletter Subscribed successfully');
    },
    onError: (error) => {
      const axiosError = error as AxiosError<{
        error?: string;
        detail?: string;
        message?: string;
      }>;
      toast.error('Failed to Subscribe Newsletter', {
        description: axiosError.response?.data?.error,
      });
    },
  });
};
