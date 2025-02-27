import { useTranslation } from 'react-i18next';

const Expense = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">EXPENSE MANAGEMENT SOFTWARE DESIGNED TO CLOSE YOUR BOOKS FASTER</h1>
            <p className="text-base md:text-xl mb-6 md:mb-8">Automated expense software built into your corporate card, reimbursements, and more</p>
            <button className="w-full md:w-auto bg-red-600 text-white px-6 md:px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
              {t('common.startForFree')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Save more by preventing out-of-policy spend</h3>
              <p className="text-gray-600">Preset controls on corporate cards for specific vendors and categories.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Be free from expense reports</h3>
              <p className="text-gray-600">Easily submit expenses through SMS, mobile app, and integrations.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Unlock savings in real time</h3>
              <p className="text-gray-600">Get insight into spend as it happens, with a platform that pays off immediately.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">Grow your business with the right terms</h3>
              <p className="text-gray-600">Get rewards and perks, like 5% savings. There's no personal credit checks or personal guarantee.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Expense;