import { useState, useEffect } from 'react';

interface GeoLocation {
  country: string;
  countryCode: string;
  region?: string;
  city?: string;
}

interface UseGeoRestrictionReturn {
  shouldShowModal: boolean;
  isLoading: boolean;
  error: string | null;
  hideModal: () => void;
  dontShowAgain: () => void;
}

const STORAGE_KEY = 'geo_restriction_dismissed'; // localStorage - 永久"不再显示"
const SESSION_KEY = 'geo_restriction_shown'; // sessionStorage - 本次会话是否已显示
const HONG_KONG_CODES = ['HK', 'Hong Kong'];

const useGeoRestriction = (): UseGeoRestrictionReturn => {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // 检查用户是否已经选择不再显示
  const checkDismissalStatus = (): boolean => {
    try {
      const dismissed = localStorage.getItem(STORAGE_KEY);
      return dismissed === 'true';
    } catch {
      return false;
    }
  };

  // 检查本次会话是否已经显示过弹窗
  const checkSessionStatus = (): boolean => {
    try {
      const shown = sessionStorage.getItem(SESSION_KEY);
      return shown === 'true';
    } catch {
      return false;
    }
  };

  // 标记本次会话已显示弹窗
  const markSessionShown = (): void => {
    try {
      sessionStorage.setItem(SESSION_KEY, 'true');
    } catch {
    }
  };

  // 获取用户地理位置信息
  const fetchGeoLocation = async (): Promise<GeoLocation | null> => {
    try {
      // 免费IP地理位置API服务
      const response = await fetch('https://ipapi.co/json/');
      
      if (!response.ok) {
        throw new Error('Failed to fetch geo location');
      }
      
      const data = await response.json();
      
      return {
        country: data.country_name || '',
        countryCode: data.country_code || '',
        region: data.region || '',
        city: data.city || ''
      };
    } catch (err) {
      // 如果API调用失败，尝试使用备用API
      try {
        const fallbackResponse = await fetch('https://api.country.is/');
        if (fallbackResponse.ok) {
          const fallbackData = await fallbackResponse.json();
          return {
            country: fallbackData.country || '',
            countryCode: fallbackData.country || '',
          };
        }
      } catch {
        // 所有API都失败
        console.warn('Failed to detect user location, showing modal by default');
        return null;
      }
      
      throw err;
    }
  };

  // 检查是否为香港IP
  const isHongKongIP = (geoData: GeoLocation): boolean => {
    return HONG_KONG_CODES.some(code => 
      geoData.countryCode?.toUpperCase() === code.toUpperCase() ||
      geoData.country?.toLowerCase().includes('hong kong')
    );
  };

  // 隐藏弹窗
  const hideModal = () => {
    setShouldShowModal(false);
    // 用户处理了弹窗，标记本次会话已显示过
    markSessionShown();
  };

  // 不再显示弹窗
  const dontShowAgain = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'true');
      setShouldShowModal(false);
      // 用户选择永久不再显示，同时也标记本次会话已处理
      markSessionShown();
    } catch (err) {
      console.error('Failed to save dismissal status:', err);
      setShouldShowModal(false);
      markSessionShown();
    }
  };

  useEffect(() => {
    const initGeoCheck = async () => {
      try {
        // 首先检查用户是否已经选择永久不再显示
        if (checkDismissalStatus()) {
          setIsLoading(false);
          return;
        }

        // 检查本次会话是否已经显示过弹窗
        if (checkSessionStatus()) {
          setIsLoading(false);
          return;
        }

        // 获取地理位置信息
        const geoData = await fetchGeoLocation();
        
        if (geoData) {
          // 如果不是香港IP，显示弹窗
          const isHK = isHongKongIP(geoData);
          setShouldShowModal(!isHK);
        } else {
          // 无法获取地理位置信息，默认显示弹窗（保守策略）
          setShouldShowModal(true);
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
        // 错误默认
        setShouldShowModal(true);
      } finally {
        setIsLoading(false);
      }
    };

    initGeoCheck();
  }, []);

  return {
    shouldShowModal,
    isLoading,
    error,
    hideModal,
    dontShowAgain
  };
};

export default useGeoRestriction; 