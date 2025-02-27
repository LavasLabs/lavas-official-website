import { useTranslation } from 'react-i18next';

const CorporateCard = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">LAVAS LABS</h1>
            <p className="text-xl mb-8">A corporate card designed for modern finance.<br />Save money and time. All with one corporate card.</p>
            <div className="flex space-x-4">
              <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
                {t('common.startForFree')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Save more by preventing out-of-policy spend</h2>
              <p className="text-gray-600 mb-8">Preset controls on corporate cards for specific vendors and categories.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Real-time spend tracking and controls</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Customizable spending limits</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Vendor-specific restrictions</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img src="/src/assets/card-preview.png" alt="Corporate Card Preview" className="rounded-lg shadow-xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CorporateCard;