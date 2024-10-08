import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Index = () => {
  const subjects = [
    { name: '代数学', description: '方程式、関数、行列など', color: 'from-pink-500 to-red-500', icon: '∑' },
    { name: '幾何学', description: '図形、空間、測量など', color: 'from-purple-500 to-indigo-500', icon: '△' },
    { name: '微積分', description: '極限、微分、積分など', color: 'from-blue-500 to-teal-500', icon: '∫' },
    { name: '統計学', description: 'データ分析、確率論など', color: 'from-green-500 to-lime-500', icon: 'σ' },
    { name: '数論', description: '整数論、暗号理論など', color: 'from-yellow-500 to-amber-500', icon: 'π' },
    { name: '離散数学', description: 'グラフ理論、組み合わせ論など', color: 'from-orange-500 to-red-500', icon: '⊕' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <Helmet>
        <title>数学の探求 | 魅力的な数学の世界へようこそ</title>
        <meta name="description" content="数学の美しさと不思議さを探求する、魅力的な学習サイト" />
      </Helmet>

      <header className="bg-black bg-opacity-50 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            数学の探求
          </h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
            数学の美しい世界へようこそ
          </p>
          <p className="mt-4 text-xl text-gray-300">
            論理と創造性が交差する場所、それが数学です。一緒に探求しましょう。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/${subject.name}`} className="block">
                <div className={`rounded-lg shadow-lg overflow-hidden bg-gradient-to-br ${subject.color}`}>
                  <div className="p-6 flex items-center">
                    <div className="text-4xl mr-4">{subject.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2">{subject.name}</h2>
                      <p className="text-white text-opacity-80">{subject.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-black bg-opacity-50 mt-16">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            © 2024 数学の探求. すべての権利を保有します。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;