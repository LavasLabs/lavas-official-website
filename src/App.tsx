import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'
import './styles/font.css'
import { useEffect } from 'react';
import useGlobalStore from './store/useGlobalStore';
import GeoRestrictionModal from './components/GeoRestrictionModal';
import useGeoRestriction from './hooks/useGeoRestriction';
import useUserCountry from './hooks/useUserCountry';

const App = () => {
  const { initScreenSize, initLanguage, setIsUS, setLanguage } = useGlobalStore();
  const { shouldShowModal, isLoading, hideModal, dontShowAgain } = useGeoRestriction();
  const isUS = useUserCountry();

  // 当检测到用户地区时，更新状态并调整语言
  useEffect(() => {
    if (isUS !== null) {
      setIsUS(isUS);
      // 如果是美国用户，强制设置为英文
      if (isUS === true) {
        setLanguage('en');
      }
    }
  }, [isUS, setIsUS, setLanguage]);

  useEffect(() => {
    // 初始化语言设置
    initLanguage();
    
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
