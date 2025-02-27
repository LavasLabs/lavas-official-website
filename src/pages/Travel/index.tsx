import { useTranslation } from 'react-i18next';

const Travel = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">SMARTER BUSINESS TRAVEL, FROM BOOKING TO BOOK CLOSE</h1>
            <p className="text-xl mb-8">Book flights and hotels at the lowest rates, automatically enforce customizable travel policies, and automate expenses throughout a trip—all from one platform.</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
              {t('common.startForFree')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Streamline Your Business Travel</h2>
              <p className="text-gray-600 mb-8">Simplify booking, expense reporting, and policy compliance with our integrated travel management solution.</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Best rates guaranteed for flights and hotels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Automated expense reporting and tracking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>Customizable travel policies and approvals</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>24/7 travel support</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="bg-gray-900 rounded-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Travel Benefits</h3>
                <ul className="space-y-3">
                  <li>• Exclusive corporate rates</li>
                  <li>• Flexible booking options</li>
                  <li>• Real-time expense tracking</li>
                  <li>• Policy compliance automation</li>
                  <li>• Integrated rewards program</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Travel;