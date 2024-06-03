export const apiUrl =
    process.env.NODE_ENV !== 'production'
        ? 'http://localhost:5000/api'
        : //   'https://server-zeta-five-76.vercel.app/api'
          'https://server-zeta-five-76.vercel.app/api';
