
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">NPO法人エンカレッジ</h1>
        <p className="text-lg text-gray-600 mb-8">すべてのこどもが夢と希望を</p>
        <button
          onClick={() => navigate('/event')}
          className="bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transition-colors duration-300 whitespace-nowrap cursor-pointer"
        >
          成果発表会2025へ
        </button>
      </div>
    </div>
  );
};

export default HomePage;
