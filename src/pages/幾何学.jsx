import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const GeometryPage = () => {
  const topics = ['平面図形', '立体図形', '三角関数'];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-white">
      <Head>
        <title>幾何学 | 数学の勉強サイト</title>
        <meta name="description" content="幾何学の基礎から応用まで学べるページ" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-purple-800">幾何学</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topics.map((topic) => (
            <Card key={topic} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{topic}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">学習する</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link href="/" passHref>
            <Button variant="outline">ホームに戻る</Button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default GeometryPage;