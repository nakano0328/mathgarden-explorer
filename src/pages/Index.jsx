import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Index = () => {
  const subjects = [
    { name: '代数学', description: '方程式、関数、行列など' },
    { name: '幾何学', description: '図形、空間、測量など' },
    { name: '微積分', description: '極限、微分、積分など' },
    { name: '統計学', description: 'データ分析、確率論など' },
    { name: '数論', description: '整数論、暗号理論など' },
    { name: '離散数学', description: 'グラフ理論、組み合わせ論など' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>数学の勉強サイト</title>
        <meta name="description" content="シンプルで分かりやすい数学の勉強サイト" />
      </Helmet>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">数学の勉強サイト</h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subjects.map((subject, index) => (
                <Link key={index} to={`/${subject.name}`} className="block">
                  <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 bg-white p-6">
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">{subject.name}</h2>
                    <p className="text-gray-600">{subject.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-sm">
            © 2024 数学の勉強サイト. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;