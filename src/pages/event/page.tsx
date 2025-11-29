
import { useState, useEffect } from 'react';

const EventPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const targetDate = new Date('2025-12-07T11:00:00+09:00');
    
    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://static.readdy.ai/image/a07cc33f23a8168b9486d98ccfeb54e4/f0f6d0e43cedb79986004edadca52fea.png" 
                alt="NPO法人エンカレッジ" 
                className="h-10 md:h-12"
              />
            </div>
            <nav className="hidden lg:flex items-center space-x-6">
              <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                トップ
              </button>
              <button onClick={() => scrollToSection('highlights')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                見どころ
              </button>
              <button onClick={() => scrollToSection('program')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                プログラム
              </button>
              <button onClick={() => scrollToSection('registration')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                参加申込
              </button>
              <button onClick={() => scrollToSection('access')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                アクセス
              </button>
              <button onClick={() => scrollToSection('support')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                応援・協賛
              </button>
              <button onClick={() => scrollToSection('faq')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                Q&A
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                団体紹介
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-sky-600 transition-colors duration-200 font-medium whitespace-nowrap cursor-pointer">
                お問い合わせ
              </button>
            </nav>
            <button 
              onClick={() => scrollToSection('registration')}
              className="hidden lg:block bg-sky-600 text-white px-6 py-2 rounded-full font-bold hover:bg-sky-700 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              来場申込
            </button>
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
              >
                <i className={`${isMobileMenuOpen ? 'ri-close-line' : 'ri-menu-line'} text-2xl w-6 h-6 flex items-center justify-center`}></i>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
          <nav className="bg-white border-t border-gray-200 px-6 py-4">
            <div className="space-y-3">
              <button 
                onClick={() => scrollToSection('hero')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                トップ
              </button>
              <button 
                onClick={() => scrollToSection('highlights')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                見どころ
              </button>
              <button 
                onClick={() => scrollToSection('program')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                プログラム
              </button>
              <button 
                onClick={() => scrollToSection('registration')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                参加申込
              </button>
              <button 
                onClick={() => scrollToSection('access')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                アクセス
              </button>
              <button 
                onClick={() => scrollToSection('support')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                応援・協賛
              </button>
              <button 
                onClick={() => scrollToSection('faq')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                Q&A
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                団体紹介
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="block w-full text-left py-3 px-4 text-gray-700 hover:bg-sky-50 hover:text-sky-600 rounded-lg transition-colors duration-200 font-medium cursor-pointer"
              >
                お問い合わせ
              </button>
              <button 
                onClick={() => scrollToSection('registration')}
                className="block w-full bg-sky-600 text-white px-6 py-3 rounded-full font-bold hover:bg-sky-700 transition-colors duration-300 whitespace-nowrap cursor-pointer text-center mt-4"
              >
                来場申込
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-100 to-blue-50">
        <div className="absolute inset-0">
          <img 
            src="https://readdy.link/preview/b83bf40c-23a7-4f16-9da0-66fb01506389/3346895/static/media/page-0001.jpg" 
            alt="成果発表会2025" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-900/70 to-blue-900/50"></div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-8 h-8 text-yellow-300 opacity-70">
          <i className="ri-star-fill text-2xl"></i>
        </div>
        <div className="absolute top-40 right-20 w-6 h-6 text-pink-300 opacity-60">
          <i className="ri-star-fill text-xl"></i>
        </div>
        <div className="absolute bottom-32 left-1/4 w-10 h-10 text-yellow-200 opacity-50">
          <i className="ri-cloud-fill text-3xl"></i>
        </div>
        <div className="absolute top-60 right-1/3 w-8 h-8 text-pink-200 opacity-60">
          <i className="ri-cloud-fill text-2xl"></i>
        </div>

        <div className="relative z-10 h-full min-h-screen flex items-center pt-40 md:pt-32 pb-16 md:pb-0">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="text-left text-white max-w-3xl">
              {/* 参加無料バッジ */}
              <div className="inline-flex items-center bg-gradient-to-r from-pink-400 to-pink-500 text-white px-6 py-3 rounded-full shadow-lg mb-6 animate-bounce">
                <i className="ri-gift-line text-2xl mr-2 w-6 h-6 flex items-center justify-center"></i>
                <span className="font-bold text-lg">参加無料</span>
                <i className="ri-heart-fill text-xl ml-2 w-5 h-5 flex items-center justify-center"></i>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold mb-6 leading-tight">
                成果発表会<br />
                <span className="text-yellow-300">2025</span>
              </h1>
              <p className="text-xl md:text-2xl lg:text-3xl mb-8 font-medium">
                子どもたちの成長をリアルに実感！<br />
                一緒に"共育"しよう。
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 mb-8 border border-white/20">
                <div className="grid md:grid-cols-2 gap-4 text-base md:text-lg">
                  <div className="flex items-center">
                    <i className="ri-calendar-line text-yellow-300 mr-3 text-xl w-6 h-6 flex items-center justify-center"></i>
                    <span className="text-sm md:text-base">2025年12月7日（日）11:00–16:00</span>
                  </div>
                  <div className="flex items-center">
                    <i className="ri-map-pin-line text-pink-300 mr-3 text-xl w-6 h-6 flex items-center justify-center"></i>
                    <span className="text-sm md:text-base">中城村 吉の浦会館</span>
                  </div>
                </div>
                <p className="text-xs md:text-sm mt-2 opacity-90">沖縄県中頭郡中城村安里187-1</p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8">
                <button 
                  onClick={() => scrollToSection('registration')}
                  className="bg-sky-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-sky-700 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  来場申込する
                </button>
                <a
                  href="https://drive.google.com/file/d/1PBr1AIYV3HeXaDsxZg7X6kTi6o89pTfh/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-yellow-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-yellow-600 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer inline-block text-center"
                >
                  チラシダウンロード
                </a>
                <button 
                  onClick={() => scrollToSection('support')}
                  className="bg-pink-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-base md:text-lg hover:bg-pink-600 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer"
                >
                  応援・協賛のご相談
                </button>
              </div>

              {/* Countdown Timer */}
              <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
                <h3 className="text-lg md:text-xl font-bold mb-4 text-center">イベントまで</h3>
                <div className="grid grid-cols-4 gap-2 md:gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-2 md:p-3">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-300">{timeLeft.days}</div>
                    <div className="text-xs md:text-sm">日</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2 md:p-3">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-300">{timeLeft.hours}</div>
                    <div className="text-xs md:text-sm">時間</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2 md:p-3">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-300">{timeLeft.minutes}</div>
                    <div className="text-xs md:text-sm">分</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-2 md:p-3">
                    <div className="text-2xl md:text-3xl font-bold text-yellow-300">{timeLeft.seconds}</div>
                    <div className="text-xs md:text-sm">秒</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            子どもたちのがんばりを"実感"する一日。<br />
            学びと出会いが、未来の沖縄をつくる。
          </h2>
          
          {/* 楽しそうな活動の様子を表現する画像 */}
          <div className="mb-12">
            <img 
              src="https://readdy.ai/api/search-image?query=Happy%20Japanese%20junior%20high%20school%20students%20aged%2013-15%20learning%20together%20in%20classroom%2C%20smiling%20Japanese%20middle%20school%20teenagers%20working%20on%20creative%20projects%2C%20colorful%20educational%20activities%2C%20bright%20and%20cheerful%20atmosphere%2C%20Japanese%20junior%20high%20students%20raising%20hands%20with%20excitement%2C%20collaborative%20learning%20environment%2C%20warm%20lighting%2C%20joyful%20expressions%2C%20Asian%20teenage%20students&width=800&height=400&seq=intro-japanese-middle-school-learning&orientation=landscape" 
              alt="楽しく学ぶ子どもたち" 
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg object-cover object-top"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mt-12">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-eye-line text-sky-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">取り組みと成果を直接見られる</h3>
              <p className="text-sm md:text-base text-gray-600">子どもたちの日々の努力と成長の軌跡を間近で感じることができます</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-team-line text-yellow-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">地域×学校×企業×NPOの新しい"共育"連携を知れる</h3>
              <p className="text-sm md:text-base text-gray-600">多様な主体が連携した新しい教育のかたちを体験できます</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="ri-heart-line text-pink-600 text-2xl w-8 h-8 flex items-center justify-center"></i>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">応援・協賛の具体的な関わり方がわかる</h3>
              <p className="text-sm md:text-base text-gray-600">どのように子どもたちを支援できるか、具体的な方法を知ることができます</p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section id="program" className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="w-32 h-32 bg-gradient-to-br from-sky-100 to-blue-100 rounded-full mx-auto mb-6 shadow-lg flex items-center justify-center">
              <i className="ri-calendar-event-line text-sky-600 text-5xl w-16 h-16 flex items-center justify-center"></i>
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">プログラム</h2>
            <p className="text-lg text-gray-600">当日のスケジュール</p>
          </div>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-sky-600 text-white p-6">
              <h3 className="text-2xl font-bold text-center">2025年12月7日（日）11:00–16:00</h3>
            </div>
            
            <div className="p-8">
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-sky-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    第1部
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">トークセッション</h4>
                    <p className="text-gray-600 mb-2">時間：調整中（後日更新予定）</p>
                    <p className="text-gray-700">テーマ：「沖縄の子どもを取り巻く現状と"共育"の可能性」</p>
                    <p className="text-sm text-gray-500 mt-2">※登壇者詳細は確定次第お知らせいたします</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    第2部
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">ステージ発表</h4>
                    <p className="text-gray-600 mb-2">時間：調整中（後日更新予定）</p>
                    <p className="text-gray-700">教室発表・合唱・楽器・活動紹介 等</p>
                    <p className="text-sm text-gray-500 mt-2">※各教室の子どもたちによる発表をお楽しみください</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-pink-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    第3部
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">ワークショップ</h4>
                    <p className="text-gray-600 mb-2">時間：調整中（後日更新予定）</p>
                    <p className="text-gray-700">来場者参加型／体験コーナー</p>
                    <p className="text-sm text-gray-500 mt-2">※子どもたちと一緒に楽しめる内容をご用意しています</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-500 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold text-lg mr-6 flex-shrink-0">
                    常設
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-gray-800 mb-2">常設展示</h4>
                    <p className="text-gray-600 mb-2">時間：11:00–16:00（自由観覧）</p>
                    <p className="text-gray-700">メッセージカード、絵・作文・新聞、写真・動画、工作など</p>
                    <p className="text-sm text-gray-500 mt-2">※会場内で自由にご覧いただけます</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                <p className="text-sm text-gray-700">
                  <strong>注意：</strong>参加者募集系の内容は当日実施される場合は「観覧可」として実施いたします。詳細なタイムテーブルは確定次第、本ページにて更新いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section id="registration" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">参加申込</h2>
            <p className="text-lg text-gray-600">皆様のご来場をお待ちしております</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="mb-6">
              <div className="w-24 h-24 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-file-list-3-line text-sky-600 text-4xl w-12 h-12 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">参加申込フォーム</h3>
              <p className="text-gray-600 mb-8">
                下記のボタンから申込フォームにアクセスしてください。<br />
                必要事項をご記入の上、送信をお願いいたします。
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdH5ycsEo_0BSSoQYOcIxPl7ry0fVzei7tMdkJEoMLusbx18w/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-sky-600 text-white py-4 px-8 rounded-lg font-bold text-lg hover:bg-sky-700 transition-colors duration-300 whitespace-nowrap cursor-pointer"
            >
              申込フォームを開く
              <i className="ri-external-link-line ml-2 w-5 h-5 inline-flex items-center justify-center"></i>
            </a>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-700">
                フォーム送信後、受付完了メールをお送りします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">アクセス</h2>
            <p className="text-lg text-gray-600">会場へのアクセス方法</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">会場情報</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <i className="ri-map-pin-line text-sky-600 text-xl mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                    <div>
                      <h4 className="font-bold text-gray-800">吉の浦会館</h4>
                      <p className="text-gray-600">沖縄県中頭郡中城村安里187-1</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <i className="ri-car-line text-sky-600 text-xl mr-3 mt-1 w-6 h-6 flex items-center justify-center"></i>
                    <div>
                      <h4 className="font-bold text-gray-800">駐車場</h4>
                      <p className="text-gray-600">あり（台数に限りあり）</p>
                      <p className="text-sm text-gray-500">公共交通・乗り合いを推奨いたします</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-bold text-gray-800 mb-4">当日の会場案内</h4>
                  <div className="bg-sky-50 rounded-lg p-6">
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-center">
                        <i className="ri-checkbox-circle-line text-sky-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        <span><strong>受付：</strong>会館エントランス</span>
                      </li>
                      <li className="flex items-center">
                        <i className="ri-checkbox-circle-line text-sky-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        <span><strong>展示会場：</strong>1階ロビー・廊下</span>
                      </li>
                      <li className="flex items-center">
                        <i className="ri-checkbox-circle-line text-sky-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        <span><strong>ステージ会場：</strong>大ホール</span>
                      </li>
                      <li className="flex items-center">
                        <i className="ri-checkbox-circle-line text-sky-600 mr-3 w-5 h-5 flex items-center justify-center"></i>
                        <span><strong>ワークショップ：</strong>中・小会議室</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.8!2d127.8!3d26.3!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z5ZCJ44Gu5rWm5Lya6aSo!5e0!3m2!1sja!2sjp!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="吉の浦会館の地図"
                  ></iframe>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-gray-800 mb-2">Googleマップで確認</h4>
                  <p className="text-sm text-gray-600">
                    詳細な経路案内は上記の地図をご利用ください。満車時は近隣の駐車場をご利用ください。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section id="highlights" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">みんなが主役！一緒に共育しよう！</h2>
            <p className="text-lg text-gray-600">当日の見どころをご紹介します</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Professional%20panel%20discussion%20with%20diverse%20Japanese%20speakers%20on%20stage%2C%20microphones%20and%20presentation%20setup%2C%20Japanese%20audience%20listening%20attentively%2C%20conference%20hall%20setting%2C%20warm%20lighting%2C%20educational%20seminar%20atmosphere%2C%20collaborative%20discussion%20environment%2C%20Asian%20professionals&width=300&height=200&seq=japanese-talk-session-panel&orientation=landscape" 
                  alt="トークセッションの様子" 
                  className="w-full h-32 object-cover object-top rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">トークセッション</h3>
              <p className="text-gray-600 text-center mb-4">
                「沖縄の子どもたちと共に未来を拓く"共育"」をテーマに、有識者と現場の声を紹介
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2">登壇者（予定）</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 教育関係者</li>
                  <li>• 行政担当者</li>
                  <li>• 企業代表者</li>
                  <li>• NPO関係者</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Japanese%20junior%20high%20school%20students%20aged%2013-15%20performing%20on%20stage%20with%20bright%20smiles%2C%20colorful%20costumes%2C%20musical%20instruments%2C%20dance%20performance%2C%20excited%20Japanese%20audience%20watching%2C%20stage%20lights%2C%20joyful%20celebration%2C%20Japanese%20middle%20school%20teenagers%20showing%20their%20talents%20with%20confidence%20and%20happiness&width=300&height=200&seq=japanese-middle-school-stage-performance&orientation=landscape" 
                  alt="ステージ発表の様子" 
                  className="w-full h-32 object-cover object-top rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">ステージ発表</h3>
              <p className="text-gray-600 text-center mb-4">
                各教室の子どもたちが活動・ダンス・バンド等を披露
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2">発表内容</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 学習成果発表</li>
                  <li>• ダンスパフォーマンス</li>
                  <li>• 音楽演奏</li>
                  <li>• 活動紹介</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="mb-6">
                <img 
                  src="https://readdy.ai/api/search-image?query=Japanese%20junior%20high%20school%20students%20aged%2013-15%20and%20adults%20working%20together%20in%20hands-on%20workshop%2C%20creative%20activities%2C%20art%20and%20craft%20projects%2C%20collaborative%20learning%2C%20smiling%20Japanese%20teenage%20faces%2C%20colorful%20materials%2C%20interactive%20experience%2C%20family-friendly%20environment%2C%20joyful%20participation%2C%20Asian%20middle%20school%20students&width=300&height=200&seq=japanese-middle-school-workshop&orientation=landscape" 
                  alt="ワークショップの様子" 
                  className="w-full h-32 object-cover object-top rounded-lg mb-4"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">ワークショップ</h3>
              <p className="text-gray-600 text-center mb-4">
                来場者も体験できるコーナー。子どもたちと一緒に楽しめる内容
              </p>
              <div className="bg-white rounded-lg p-4">
                <p className="text-sm text-gray-500 mb-2">体験内容</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 工作体験</li>
                  <li>• ゲーム体験</li>
                  <li>• 学習体験</li>
                  <li>• 交流活動</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">常設展示</h3>
            
            {/* 展示作品の様子を表現する画像 */}
            <div className="mb-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Colorful%20Japanese%20junior%20high%20school%20students%20aged%2013-15%20artwork%20display%2C%20creative%20drawings%20and%20crafts%20exhibition%20by%20Japanese%20middle%20school%20teenagers%2C%20handmade%20projects%20showcase%2C%20bright%20gallery%20setting%2C%20Japanese%20visitors%20admiring%20middle%20school%20students%20work%2C%20inspiring%20educational%20displays%2C%20warm%20and%20welcoming%20atmosphere%2C%20Asian%20teenage%20art%20exhibition&width=600&height=300&seq=japanese-middle-school-exhibition&orientation=landscape" 
                alt="子どもたちの作品展示" 
                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg object-cover object-top"
              />
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-message-3-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">メッセージカード</h4>
                <p className="text-sm text-gray-600">子どもたちからの心温まるメッセージ</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-article-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">絵・作文・新聞</h4>
                <p className="text-sm text-gray-600">創作活動の成果作品</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-camera-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">写真・動画</h4>
                <p className="text-sm text-gray-600">活動の様子を記録した映像</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <i className="ri-hammer-line text-white text-xl w-6 h-6 flex items-center justify-center"></i>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">工作</h4>
                <p className="text-sm text-gray-600">手作りの作品展示</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">応援・協賛</h2>
            <p className="text-2xl text-pink-600 font-bold mb-4">子どもたちの"できた！"を、沖縄の未来につなぐ。</p>
            <p className="text-lg text-gray-600 mb-8">様々な形で子どもたちを支援していただけます</p>
            
            {/* 支援の様子を表現する画像 */}
            <div className="mb-12">
              <img 
                src="https://readdy.ai/api/search-image?query=Japanese%20community%20volunteers%20and%20business%20people%20supporting%20junior%20high%20school%20students%20aged%2013-15%20education%2C%20diverse%20group%20of%20Japanese%20adults%20helping%20middle%20school%20teenagers%20with%20learning%20activities%2C%20collaborative%20community%20support%2C%20warm%20and%20caring%20atmosphere%2C%20intergenerational%20cooperation%2C%20bright%20and%20hopeful%20setting%2C%20Asian%20community%20supporting%20teenage%20students&width=700&height=350&seq=japanese-community-support-middle-school&orientation=landscape" 
                alt="地域の皆さんによる子どもたちへの支援" 
                className="w-full max-w-3xl mx-auto rounded-2xl shadow-lg object-cover object-top"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-building-line text-white text-3xl w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">協賛のご相談</h3>
              <p className="text-gray-600 text-center mb-6">
                企業向け／連携・寄付・ボランティア受入れ
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>• 企業連携プログラム</li>
                <li>• 資金・物品協賛</li>
                <li>• 社員ボランティア派遣</li>
                <li>• CSR活動としての参画</li>
              </ul>
              <a
                href="https://www.enc-ok.jp/shien.php#gsc.tab=0"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-sky-600 text-white py-3 rounded-lg font-bold hover:bg-sky-700 transition-colors duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                協賛について相談する
              </a>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-heart-line text-white text-3xl w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">寄付で応援</h3>
              <p className="text-gray-600 text-center mb-6">
                継続的な活動を支える寄付
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>• 月額寄付（サポーター制度）</li>
                <li>• 単発寄付</li>
                <li>• 遺贈・相続財産寄付</li>
                <li>• クラウドファンディング</li>
              </ul>
              <a
                href="https://encourage-donate.square.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-pink-600 text-white py-3 rounded-lg font-bold hover:bg-pink-600 transition-colors duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                寄付について詳しく見る
              </a>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="ri-hand-heart-line text-white text-3xl w-10 h-10 flex items-center justify-center"></i>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">ボランティア</h3>
              <p className="text-gray-600 text-center mb-6">
                物品提供・当日運営ボランティア
              </p>
              <ul className="text-sm text-gray-700 space-y-2 mb-6">
                <li>• 当日運営スタッフ</li>
                <li>• 学習支援ボランティア</li>
                <li>• 物品・食材提供</li>
                <li>• 専門スキル提供</li>
              </ul>
              <a
                href="https://enc-agrearms.webagre.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-yellow-600 text-white py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors duration-300 whitespace-nowrap cursor-pointer text-center"
              >
                活動に参加する
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-sky-100 to-blue-100 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">期待される社会的インパクト</h3>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-sky-600 mb-2">200+</div>
                <p className="text-gray-700 font-medium">参加予定人数</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">150+</div>
                <p className="text-gray-700 font-medium">展示作品数</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-600 mb-2">20+</div>
                <p className="text-gray-700 font-medium">地域企業コラボ件数</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                <p className="text-gray-700 font-medium">支援者・ボランティア数</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Q&A</h2>
            <p className="text-lg text-gray-600">よくあるご質問</p>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                  <span className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">Q</span>
                  入退場は自由ですか？
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 flex items-start">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">A</span>
                    <span>はい、自由にご入退場いただけます。ただし、会場混雑時は入場制限をさせていただく可能性があります。</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                  <span className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">Q</span>
                  子連れ参加は可能ですか？
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 flex items-start">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">A</span>
                    <span>可能です。お子さまの安全のため、保護者の方はお子さまから目を離さないようお願いいたします。</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                  <span className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">Q</span>
                  撮影はできますか？
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 flex items-start">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">A</span>
                    <span>一部エリアは撮影不可となっております。会場内の表示に従ってください。</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center">
                  <span className="bg-sky-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">Q</span>
                  駐車場はありますか？
                </h3>
                <div className="ml-11">
                  <p className="text-gray-600 flex items-start">
                    <span className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">A</span>
                    <span>あります（台数制限あり）。満車時は近隣駐車場をご利用ください。公共交通機関や乗り合いでのご来場をお勧めします。</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">NPO法人エンカレッジについて</h2>
            <p className="text-2xl text-sky-600 font-bold mb-6">「すべてのこどもが夢と希望を」</p>
          </div>

          <div className="bg-gradient-to-r from-sky-50 to-blue-50 rounded-2xl p-8 mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">法人メッセージ</h3>
            
            {/* 団体の活動の様子を表現する画像 */}
            <div className="mb-8">
              <img 
                src="https://readdy.ai/api/search-image?query=Diverse%20Japanese%20junior%20high%20school%20students%20aged%2013-15%20and%20caring%20Japanese%20teachers%20in%20educational%20setting%2C%20warm%20and%20nurturing%20learning%20environment%2C%20Japanese%20middle%20school%20teenagers%20engaged%20in%20various%20activities%2C%20supportive%20Japanese%20adult%20mentors%2C%20bright%20classroom%20atmosphere%2C%20hope%20and%20growth%2C%20collaborative%20learning%20community%2C%20Asian%20educators%20with%20teenage%20students&width=600&height=300&seq=japanese-npo-middle-school-activities&orientation=landscape" 
                alt="NPO法人エンカレッジの活動の様子" 
                className="w-full max-w-2xl mx-auto rounded-xl shadow-lg object-cover object-top"
              />
            </div>

            <div className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
              <p className="mb-4">
                子どもたちの健気な努力と、それを支える先生たちの<br />
                根気強い想い。その積み重ねが10年後、20年後の沖縄の未来を育てていく
              </p>
              <p className="font-bold text-sky-600 mb-6">
                私たちは"共育（きょういく）"：共に学び、共に育てる社会を目指しています。
              </p>
              
              <div className="flex justify-center">
                <a
                  href="https://www.enc-ok.jp/#gsc.tab=0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-sky-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-sky-700 transition-all duration-300 hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
                >
                  <i className="ri-home-line text-xl mr-2 w-6 h-6 flex items-center justify-center"></i>
                  法人HPを見る
                  <i className="ri-external-link-line text-lg ml-2 w-5 h-5 flex items-center justify-center"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gradient-to-b from-sky-50 to-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">お問い合わせ</h2>
            <p className="text-lg text-gray-600">ご質問・ご相談はお気軽にどうぞ</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8">
            <form 
              id="contact-form"
              data-readdy-form 
              action="https://readdy.ai/api/form/d424n5rupn899ion1eq0" 
              method="POST" 
              className="space-y-6"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const formData = new FormData(form);
                
                // Validate textarea length
                const message = formData.get('message') as string;
                if (message && message.length > 500) {
                  alert('お問い合わせ内容は500文字以内でご記入ください');
                  return;
                }

                try {
                  const response = await fetch(form.action, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams(formData as any).toString()
                  });

                  const result = await response.json();

                  if (response.ok) {
                    alert('お問い合わせを送信しました。ありがとうございます！');
                    form.reset();
                  } else {
                    alert('送信に失敗しました。もう一度お試しください。');
                  }
                } catch (error) {
                  alert('送信中にエラーが発生しました。もう一度お試しください。');
                }
              }}
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact_name" className="block text-sm font-medium text-gray-700 mb-2">
                    お名前 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact_name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                    placeholder="山田太郎"
                  />
                </div>
                <div>
                  <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700 mb-2">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact_email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                    placeholder="exampleアットemail.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  件名 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm pr-8"
                >
                  <option value="">選択してください</option>
                  <option value="成果発表会について">成果発表会について</option>
                  <option value="協賛・連携について">協賛・連携について</option>
                  <option value="寄付について">寄付について</option>
                  <option value="ボランティアについて">ボランティアについて</option>
                  <option value="その他">その他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  maxLength={500}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
                  placeholder="お問い合わせ内容をご記入ください（500文字以内）"
                ></textarea>
                <p className="text-xs text-gray-500 mt-1">500文字以内でご記入ください</p>
              </div>

              <button
                type="submit"
                className="w-full bg-sky-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:bg-sky-700 transition-colors duration-300 whitespace-nowrap cursor-pointer"
              >
                お問い合わせを送信
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid md:grid-cols-2 gap-6 text-center">
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <i className="ri-mail-line text-sky-600 text-xl mr-2 w-6 h-6 flex items-center justify-center"></i>
                    <span className="font-bold text-gray-800">メール</span>
                  </div>
                  <p className="text-gray-600">infoアットenc-ok.jp</p>
                </div>
                <div>
                  <div className="flex items-center justify-center mb-2">
                    <i className="ri-phone-line text-sky-600 text-xl mr-2 w-6 h-6 flex items-center justify-center"></i>
                    <span className="font-bold text-gray-800">電話</span>
                  </div>
                  <p className="text-gray-600">098-923-1813</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <div className="flex items-center mb-6">
                <img 
                  src="https://static.readdy.ai/image/a07cc33f23a8168b9486d98ccfeb54e4/f0f6d0e43cedb79986004edadca52fea.png" 
                  alt="NPO法人エンカレッジ" 
                  className="h-10"
                />
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                NPO法人エンカレッジは、すべての子どもたちが夢と希望を持ち、自分の可能性を信じられる温かい空間を提供しています。
              </p>
              <div className="flex space-x-4">
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300 cursor-pointer" aria-label="Twitter">
                  <i className="ri-twitter-line text-lg w-5 h-5 flex items-center justify-center"></i>
                </button>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300 cursor-pointer" aria-label="Facebook">
                  <i className="ri-facebook-line text-lg w-5 h-5 flex items-center justify-center"></i>
                </button>
                <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors duration-300 cursor-pointer" aria-label="Instagram">
                  <i className="ri-instagram-line text-lg w-5 h-5 flex items-center justify-center"></i>
                </button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">イベント情報</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('highlights')} className="text-gray-300 hover:text-sky-400 transition-colors duration-200 cursor-pointer">見どころ</button></li>
                <li><button onClick={() => scrollToSection('program')} className="text-gray-300 hover:text-sky-400 transition-colors duration-200 cursor-pointer">プログラム</button></li>
                <li><button onClick={() => scrollToSection('registration')} className="text-gray-300 hover:text-sky-400 transition-colors duration-200 cursor-pointer">参加申込</button></li>
                <li><button onClick={() => scrollToSection('access')} className="text-gray-300 hover:text-sky-400 transition-colors duration-200 cursor-pointer">アクセス</button></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">支援・参加</h3>
              <ul className="space-y-3">
                <li><button onClick={() => scrollToSection('support')} className="text-gray-300 hover:text-sky-400 transition-colors duration-200 cursor-pointer">応援・協賛</button></li>
                <li><a className="text-gray-300 hover:text-sky-400 transition-colors duration-200 cursor-pointer" href="#">寄付について</a></li>
                <li><a className="text-gray-300 hover:text-sky-400 transition-colors duration-200 cursor-pointer" href="#">ボランティア募集</a></li>
                <li><a className="text-gray-300 hover:text-sky-400 transition-colors duration-200 cursor-pointer" href="#">企業連携</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6">法人情報</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-5 h-5 flex items-center justify-center mt-1 mr-3">
                    <i className="ri-map-pin-line text-sky-400"></i>
                  </div>
                  <div className="text-gray-300 text-sm">
                    〒904-2153<br />
                    沖縄県沖縄市美里1丁目26−53 1階
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-phone-line text-sky-400"></i>
                  </div>
                  <span className="text-gray-300 text-sm">098-923-1813</span>
                </div>
                <div className="flex items-center">
                  <div className="w-5 h-5 flex items-center justify-center mr-3">
                    <i className="ri-mail-line text-sky-400"></i>
                  </div>
                  <span className="text-gray-300 text-sm">infoアットenc-ok.jp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 NPO法人エンカレッジ. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <a className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer" href="#">プライバシーポリシー</a>
                <a className="text-gray-400 hover:text-white text-sm transition-colors duration-200 cursor-pointer" href="https://readdy.ai/?origin=logo">Powered by Readdy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection('hero')}
        className="fixed bottom-8 right-8 bg-sky-600 text-white w-12 h-12 rounded-full shadow-lg hover:bg-sky-700 transition-all duration-300 hover:scale-110 z-40 cursor-pointer"
        aria-label="トップへ戻る"
      >
        <i className="ri-arrow-up-line text-xl w-6 h-6 flex items-center justify-center mx-auto"></i>
      </button>

      {/* Floating CTA */}
      <div className={`fixed bottom-24 right-8 z-40 transition-all duration-500 ease-in-out ${isScrolled ? 'transform translate-y-0 opacity-100 scale-100' : 'transform translate-y-4 opacity-0 scale-95'}`}>
        <button
          onClick={() => scrollToSection('registration')}
          className="bg-pink-400/80 backdrop-blur-sm text-white px-6 py-3 rounded-full font-bold shadow-lg hover:bg-pink-500/90 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer border border-pink-300/30"
        >
          来場申込
        </button>
      </div>
    </div>
  );
};

export default EventPage;
