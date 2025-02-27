import { useTranslation } from 'react-i18next';

const Advertising = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">全球广告投放解决方案</h1>
            <p className="text-base md:text-xl mb-6 md:mb-8">为您的品牌提供全球化的广告投放服务，助力业务增长，实现全球化营销目标。</p>
            <button className="w-full md:w-auto bg-red-600 text-white px-6 md:px-8 py-3 rounded-md hover:bg-red-700 transition-colors">
              {t('common.startForFree')}
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">全方位的广告投放服务</h2>
              <p className="text-gray-600 mb-6 md:mb-8">我们提供专业的全球广告投放解决方案，帮助您的品牌在全球市场获得更大的曝光度。</p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>全球化广告网络覆盖</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>精准的目标受众定位</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>实时数据分析和优化</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-2">✓</span>
                  <span>多样化的广告形式</span>
                </li>
              </ul>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="bg-gray-900 rounded-lg p-6 md:p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-4">广告投放优势</h3>
                <ul className="space-y-3">
                  <li>• 全球化广告资源网络</li>
                  <li>• 智能投放策略优化</li>
                  <li>• 多维度数据分析</li>
                  <li>• 专业的投放团队支持</li>
                  <li>• 灵活的预算管理</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-12 md:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">为什么选择我们</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">全球化网络</h3>
              <p className="text-gray-600">覆盖全球主要市场的广告资源网络，确保您的品牌信息传递到目标受众。</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">智能优化</h3>
              <p className="text-gray-600">采用AI算法实时优化投放策略，提升广告效果，降低获客成本。</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-sm">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">专业服务</h3>
              <p className="text-gray-600">专业的投放团队为您提供一对一的服务支持，确保投放效果最大化。</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advertising;