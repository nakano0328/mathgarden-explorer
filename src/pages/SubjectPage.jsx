import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <title>{subject} | 数学の勉強サイト</title>
      </Helmet>

      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">{subject}</h1>
        </div>
      </header>

      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topics[subject].map((topic, index) => (
                <div key={index} className="border border-gray-200 rounded-lg shadow-sm bg-white p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">{topic}</h2>
                  <p className="text-gray-600">この項目の詳細な説明がここに入ります。</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-8">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-blue-600 hover:text-blue-800">← ホームに戻る</Link>
        </div>
      </footer>
    </div>
  );
};

export default SubjectPage;