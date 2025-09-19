import type { contactform } from '@/types/contactform';
import type { newsletter } from '@/types/newsletter';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

console.log('BASE_URL:', BASE_URL);

export const contactForm = async (data: contactform) => {
  const response = await api.post('form/contact', data);
  return response.data;
};

export const newsletterRequest = async (data: newsletter) => {
  const response = await api.post('newsletter/subscribe', data);
  return response.data;
};
