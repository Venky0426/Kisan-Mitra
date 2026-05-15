import { ReactNode, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage, Language } from '../context/LanguageContext';
import { Bell, Menu, X, Sprout, Languages } from 'lucide-react';
import { Button } from './ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from './ui/sheet';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [alertsOpen, setAlertsOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('home') },
    { to: '/crop-doctor', label: t('cropDoctor') },
    { to: '/calculator', label: t('calculator') },
    { to: '/calendar', label: t('farmingCalendar') },
    { to: '/videos', label: t('videos') },
    { to: '/schemes', label: t('schemes') },
    { to: '/market-prices', label: t('marketPrices') },
    { to: '/marketplace', label: t('marketplace') },
    { to: '/dashboard', label: t('dashboard') },
  ];

  const languageOptions: { value: Language; label: string }[] = [
    { value: 'en', label: 'English' },
    { value: 'hi', label: 'हिंदी (Hindi)' },
    { value: 'kn', label: 'ಕನ್ನಡ (Kannada)' },
    { value: 'te', label: 'తెలుగు (Telugu)' },
    { value: 'ta', label: 'தமிழ் (Tamil)' },
    { value: 'mr', label: 'मराठी (Marathi)' },
  ];

  const mockAlerts = [
    { type: 'weather', message: 'Heavy rainfall expected in next 48 hours', icon: '🌧️' },
    { type: 'market', message: 'Wheat prices increased by 12% this week', icon: '📈' },
    { type: 'scheme', message: 'PM-KISAN scheme deadline: 5 days remaining', icon: '⏰' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-yellow-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-green-200 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className="relative">
                <Sprout className="w-8 h-8 text-green-600" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full" />
              </div>
              <span className="text-green-800">KisanSathi</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-3 py-2 rounded-lg text-sm transition-colors ${
                    location.pathname === link.to
                      ? 'bg-green-100 text-green-800'
                      : 'text-gray-700 hover:bg-green-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Alerts */}
              <Button
                variant="ghost"
                size="icon"
                className="relative"
                onClick={() => setAlertsOpen(true)}
              >
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
              </Button>

              {/* Language Selector */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <Languages className="w-4 h-4" />
                    <span className="hidden sm:inline">{t('language')}</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {languageOptions.map((option) => (
                    <DropdownMenuItem
                      key={option.value}
                      onClick={() => setLanguage(option.value)}
                      className={language === option.value ? 'bg-green-50' : ''}
                    >
                      {option.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              {/* Mobile Menu */}
              <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="w-5 h-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <nav className="flex flex-col gap-2 mt-8">
                    {navLinks.map((link) => (
                      <Link
                        key={link.to}
                        to={link.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`px-4 py-3 rounded-lg transition-colors ${
                          location.pathname === link.to
                            ? 'bg-green-100 text-green-800'
                            : 'text-gray-700 hover:bg-green-50'
                        }`}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Alerts Dialog */}
      <Dialog open={alertsOpen} onOpenChange={setAlertsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5 text-green-600" />
              Notifications & Alerts
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-3">
            {mockAlerts.map((alert, idx) => (
              <div
                key={idx}
                className="p-4 rounded-lg bg-gradient-to-r from-green-50 to-yellow-50 border border-green-200"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{alert.icon}</span>
                  <p className="text-sm text-gray-700">{alert.message}</p>
                </div>
              </div>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
