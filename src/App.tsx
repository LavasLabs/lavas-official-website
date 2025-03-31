import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'
import './styles/font.css'
import { useEffect } from 'react';
import useGlobalStore from './store/useGlobalStore';

const App = () => {
  const { initScreenSize } = useGlobalStore();

  useEffect(() => {
    const cleanup = initScreenSize();
    return cleanup;
  }, [initScreenSize]);

  return <RouterProvider router={router} />
}

export default App
