import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { 
  Stethoscope, 
  Calculator, 
  CalendarDays, 
  Video, 
  Building2, 
  TrendingUp, 
  Store, 
  BookOpen,
  Sparkles,
  CloudRain,
  Leaf
} from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Landing() {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const features = [
    {
      icon: Stethoscope,
      title: t('cropDoctor'),
      description: 'Diagnose crop diseases instantly with AI-powered image analysis',
      color: 'from-green-500 to-emerald-600',
      route: '/crop-doctor'
    },
    {
      icon: Calculator,
      title: t('calculator'),
      description: 'Calculate exact fertilizer and pesticide requirements',
      color: 'from-yellow-500 to-orange-600',
      route: '/calculator'
    },
    {
      icon: CalendarDays,
      title: t('farmingCalendar'),
      description: 'Get personalized crop suggestions based on season and weather',
      color: 'from-blue-500 to-cyan-600',
      route: '/calendar'
    },
    {
      icon: Video,
      title: t('videosLibrary'),
      description: 'Learn from expert farming videos in your language',
      color: 'from-purple-500 to-pink-600',
      route: '/videos'
    },
    {
      icon: Building2,
      title: t('govSchemes'),
      description: 'Discover and apply for government farming schemes',
      color: 'from-indigo-500 to-blue-600',
      route: '/schemes'
    },
    {
      icon: TrendingUp,
      title: t('marketPrices'),
      description: 'Real-time market prices and trend analysis',
      color: 'from-red-500 to-rose-600',
      route: '/market-prices'
    },
    {
      icon: Store,
      title: t('marketplace'),
      description: 'Buy and sell produce directly with buyers',
      color: 'from-teal-500 to-green-600',
      route: '/marketplace'
    },
    {
      icon: BookOpen,
      title: t('kisanNotebook'),
      description: 'Track expenses, income and farm activities',
      color: 'from-amber-500 to-yellow-600',
      route: '/dashboard'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-600 via-green-500 to-yellow-400">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                <Sparkles className="w-4 h-4" />
                <span className="text-sm">Powered by AI Technology</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl leading-tight">
                {t('heroTitle')}
              </h1>
              
              <p className="text-xl text-green-50">
                {t('heroSubtext')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="bg-white text-green-700 hover:bg-green-50"
                  onClick={() => navigate('/dashboard')}
                >
                  {t('startNow')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20"
                  onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {t('exploreFeatures')}
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl">50K+</div>
                  <div className="text-sm text-green-100">Active Farmers</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl">98%</div>
                  <div className="text-sm text-green-100">Accuracy</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-3xl">24/7</div>
                  <div className="text-sm text-green-100">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1595359669901-5bf4f2616ccc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtZXIlMjB0cmFjdG9yJTIwZmllbGR8ZW58MXx8fHwxNzYzNDAwMjM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Farmer with tractor in field"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-white rounded-full p-4 shadow-lg">
                <CloudRain className="w-8 h-8 text-blue-500" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-full p-4 shadow-lg">
                <Leaf className="w-8 h-8 text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 lg:py-24 container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-gray-800 mb-4">Powerful Features for Smart Farming</h2>
          <p className="text-xl text-gray-600">Everything you need to grow better crops and earn more</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <button
                key={idx}
                onClick={() => navigate(feature.route)}
                className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-green-300 text-left"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-gray-800 mb-2 group-hover:text-green-700 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </button>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl text-white mb-4">Ready to Transform Your Farming?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using KisanSathi to increase their yield and income
          </p>
          <Button 
            size="lg" 
            className="bg-white text-green-700 hover:bg-green-50"
            onClick={() => navigate('/dashboard')}
          >
            Get Started Now
          </Button>
        </div>
      </section>
    </div>
  );
}
