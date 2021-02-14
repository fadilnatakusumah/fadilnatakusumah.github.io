import { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Storage from "local-storage-fallback";

import { GlobalStyle } from './GlobalStyles';

export const MyTheme = () => {
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    Storage.setItem('mfm-theme', theme);
  }, [theme]);

  useEffect(() => {
    const storedTheme = Storage.getItem('mfm-theme');
    setTheme(storedTheme || "light");
  }, []);

  return (
    <GlobalStyle />
  )
}