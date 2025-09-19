import type { contactform } from '@/types/contactform';
import type { newsletter } from '@/types/newsletter';
import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;
console.log('API_KEY', API_KEY);

const api = axios.create({
  baseURL: 'http://localhost:3000/api/',
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
