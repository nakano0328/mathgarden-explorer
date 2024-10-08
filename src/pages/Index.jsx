import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Search from '../components/Search';

const Index = () => {
  const subjects = [
    { name: '代数学', description: '方程式、関数、行列など', color: 'bg-pink-100 hover:bg-pink-200', icon: '∑' },
    { name: '幾何学', description: '図形、空間、測量など', color: 'bg-purple-100 hover:bg-purple-200', icon: '△' },
    { name: '微積分', description: '極限、微分、積分など', color: 'bg-blue-100 hover:bg-blue-200', icon: '∫' },
    { name: '統計学', description: 'データ分析、確率論など', color: 'bg-green-100 hover:bg-green-200', icon: 'σ' },
    { name: '数論', description: '整数論、暗号理論など', color: 'bg-yellow-100 hover:bg-yellow-200', icon: 'π' },
    { name: '離散数学', description: 'グラフ理論、組み合わせ論など', color: 'bg-orange-100 hover:bg-orange-200', icon: '⊕' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Helmet>
        <title>数学の探求 | 魅力的な数学の世界へようこそ</title>
        <meta name="description" content="数学の美しさと不思議さを探求する、魅力的な学習サイト" />
      </Helmet>

      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            数学の探求
          </h1>
          <Search />
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            数学の美しい世界へようこそ
          </p>
          <p className="mt-4 text-xl text-gray-600">
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
                <div className={`rounded-lg shadow-md overflow-hidden ${subject.color}`}>
                  <div className="p-6 flex items-center">
                    <div className="text-4xl mr-4">{subject.icon}</div>
                    <div>
                      <h2 className="text-2xl font-bold mb-2 text-gray-800">{subject.name}</h2>
                      <p className="text-gray-600">{subject.description}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-white mt-16 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 数学の探求. すべての権利を保有します。
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;