export const BASE_API = 'http://localhost:3001';
export const headers = {
  headers: { Authorization: '123456', 'Content-Type': 'application/json' },
};

export const convertJSON = response => response.json();

export const ERROR_API = null;
export const returnError = () => ERROR_API;

export const checkError = response => ('error' in response ? returnError() : response);


export const generateUID = () => (
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
);
