'use client';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const Bootstrap = () => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .then((module) => {
        console.log('Bootstrap JS loaded', module);
      })
      .catch((err) => {
        console.error('Error loading Bootstrap JS:', err);
      });
  }, []);
  return null;
};

export default Bootstrap;
