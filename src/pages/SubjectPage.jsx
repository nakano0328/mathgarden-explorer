import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const SubjectPage = () => {
  const { subject } = useParams();

  const topics = {
    '代数学': ['方程式', '関数', '行列'],
    '幾何学': ['平面図形', '立体図形', '三角関数'],
    '微積分': ['極限', '微分', '積分'],
    '統計学': ['記述統計', '推測統計', '回帰分析'],
    '数論': ['素数', '合同式', '暗号理論'],
    '離散数学': ['グラフ理論', '組み合わせ論', 'アルゴリズム'],
  };

  const subjectColors = {
    '代数学': 'from-pink-500 to-red-500',
    '幾何学': 'from-purple-500 to-indigo-500',
    '微積分': 'from-blue-500 to-teal-500',
    '統計学': 'from-green-500 to-lime-500',
    '数論': 'from-yellow-500 to-amber-500',
    '離散数学': 'from-orange-500 to-red-500',
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${subjectColors[subject]} text-white`}>
      <Helmet>
        <title>{subject} | 数学の探求</title>
      </Helmet>

      <header className="bg-black bg-opacity-30 shadow-lg">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-white">{subject}</h1>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p className="mt-4 text-xl text-white text-opacity-90">
            {subject}の世界を探索しましょう。各トピックをクリックして学習を始めてください。
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topics[subject].map((topic, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white bg-opacity-20 rounded-lg shadow-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{topic}</h2>
                  <p className="text-white text-opacity-80">このトピックの詳細な説明と学習リソースがここに表示されます。</p>
                  <button className="mt-4 bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300">
                    学習を始める
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-black bg-opacity-30 mt-16">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
            ← ホームに戻る
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default SubjectPage;