import type { contactform } from '@/types/contactform';
import type { newsletter } from '@/types/newsletter';
import axios from 'axios';


const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const contactForm = async (data: contactform) => {
  const response = await api.post('form/contact', data);
  return response.data;
};

export const newsletterRequest = async (data: newsletter) => {
  const response = await api.post('newsletter/subscribe', data);
  return response.data;
};
