import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">LAVAS LABS</h1>
            <p className="text-xl mb-8">A corporate card designed for modern finance.<br />Save money and time. All with one corporate card.</p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
              {t('common.startForFree')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Corporate Card</h3>
              <p className="text-gray-600">Preset controls on corporate cards for specific vendors and categories.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Travel</h3>
              <p className="text-gray-600">Book flights and hotels at the lowest rates with automated expense tracking.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Expense Management</h3>
              <p className="text-gray-600">Easily submit expenses through SMS, mobile app, and integrations.</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Advertising</h3>
              <p className="text-gray-600">Global investment agency is open, welcome to join our network.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;