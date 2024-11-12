import { useState } from 'react'
import viteLogo from '/vite.svg'
import reactLogo from '/src/assets/react.svg'
import '/src/css/App.css'
import { motion } from 'framer-motion';
import { AtSign, Dribbble, Facebook, Instagram, Twitter } from 'lucide-react'
import { NextUIProvider } from '@nextui-org/react';
import HomePage from './HomePage';

function App() {
  return (
    <NextUIProvider>
      <HomePage />
    </NextUIProvider>
  )
}
export default App;
