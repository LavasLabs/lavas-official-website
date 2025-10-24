import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'
import './styles/font.css'
import { useEffect } from 'react';
import useGlobalStore from './store/useGlobalStore';
import GeoRestrictionModal from './components/GeoRestrictionModal';
import useGeoRestriction from './hooks/useGeoRestriction';

const App = () => {
  const { initScreenSize, initLanguage } = useGlobalStore();
  const { shouldShowModal, isLoading, hideModal, dontShowAgain } = useGeoRestriction();

  useEffect(() => {
    // 初始化语言设置
    const initLang = async () => {
      await initLanguage();
    };
    initLang();
    
    // 初始化屏幕尺寸
    const cleanup = initScreenSize();
    return cleanup;
  }, [initScreenSize, initLanguage]);

  return (
    <>
      <RouterProvider router={router} />
      <GeoRestrictionModal
        open={shouldShowModal}
        onClose={hideModal}
        onDontShowAgain={dontShowAgain}
        isLoading={isLoading}
      />
    </>
  )
}

export default App
