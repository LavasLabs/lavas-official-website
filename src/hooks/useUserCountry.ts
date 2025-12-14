import { useState, useEffect } from 'react';

interface GeoLocation {
  country: string;
  countryCode: string;
}

const US_CODES = ['US', 'USA', 'United States'];

/**
 * Hook to detect if user is in the United States
 * Returns null while loading, true if in US, false otherwise
 */
const useUserCountry = (): boolean | null => {
  const [isUS, setIsUS] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchGeoLocation = async (): Promise<void> => {
      try {
        // Try primary API
        const response = await fetch('https://ipapi.co/json/');
        
        if (response.ok) {
          const data = await response.json();
          const countryCode = data.country_code || '';
          const country = data.country_name || '';
          
          const isUnitedStates = US_CODES.some(code => 
            countryCode?.toUpperCase() === code.toUpperCase() ||
            country?.toLowerCase().includes('united states')
          );
          
          setIsUS(isUnitedStates);
          return;
        }
      } catch (err) {
        // Fallback to secondary API
        try {
          const fallbackResponse = await fetch('https://api.country.is/');
          if (fallbackResponse.ok) {
            const fallbackData = await fallbackResponse.json();
            const countryCode = fallbackData.country || '';
            const isUnitedStates = US_CODES.some(code => 
              countryCode?.toUpperCase() === code.toUpperCase()
            );
            setIsUS(isUnitedStates);
            return;
          }
        } catch {
          // If all APIs fail, default to false (non-US)
          console.warn('Failed to detect user country, defaulting to non-US');
          setIsUS(false);
        }
      }
    };

    fetchGeoLocation();
  }, []);

  return isUS;
};

export default useUserCountry;
