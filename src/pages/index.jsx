import Head from 'next/head';
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Link from 'next/link';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Head>
        <title>数学の勉強サイト</title>
        <meta name="description" content="シンプルで分かりやすい数学の勉強サイト" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">数学の勉強サイトへようこそ</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['代数学', '幾何学', '微積分'].map((subject) => (
            <Card key={subject} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle>{subject}</CardTitle>
                <CardDescription>数学の基礎から応用まで</CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/${subject.toLowerCase()}`} passHref>
                  <Button className="w-full">学習を始める</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;