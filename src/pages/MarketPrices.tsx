import { useState } from 'react';
import { TrendingUp, TrendingDown, MapPin, Calendar, BarChart3 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function MarketPrices() {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState('wheat');

  const regions = ['All Regions', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad'];

  const marketData = [
    {
      crop: 'Wheat',
      icon: '🌾',
      minPrice: '₹2,015',
      maxPrice: '₹2,265',
      avgPrice: '₹2,140',
      trend: 'up',
      change: '+12%',
      region: 'Delhi',
      lastUpdated: '2 hours ago',
      chartData: [
        { date: 'Mon', price: 2000 },
        { date: 'Tue', price: 2050 },
        { date: 'Wed', price: 2100 },
        { date: 'Thu', price: 2120 },
        { date: 'Fri', price: 2140 },
      ]
    },
    {
      crop: 'Rice',
      icon: '🌾',
      minPrice: '₹2,800',
      maxPrice: '₹3,100',
      avgPrice: '₹2,950',
      trend: 'down',
      change: '-5%',
      region: 'Mumbai',
      lastUpdated: '1 hour ago',
      chartData: [
        { date: 'Mon', price: 3100 },
        { date: 'Tue', price: 3050 },
        { date: 'Wed', price: 3000 },
        { date: 'Thu', price: 2980 },
        { date: 'Fri', price: 2950 },
      ]
    },
    {
      crop: 'Cotton',
      icon: '🌿',
      minPrice: '₹6,800',
      maxPrice: '₹7,400',
      avgPrice: '₹7,100',
      trend: 'up',
      change: '+8%',
      region: 'Bangalore',
      lastUpdated: '3 hours ago',
      chartData: [
        { date: 'Mon', price: 6800 },
        { date: 'Tue', price: 6900 },
        { date: 'Wed', price: 7000 },
        { date: 'Thu', price: 7050 },
        { date: 'Fri', price: 7100 },
      ]
    },
    {
      crop: 'Tomato',
      icon: '🍅',
      minPrice: '₹15',
      maxPrice: '₹25',
      avgPrice: '₹20',
      trend: 'up',
      change: '+15%',
      region: 'Chennai',
      lastUpdated: '30 mins ago',
      chartData: [
        { date: 'Mon', price: 15 },
        { date: 'Tue', price: 17 },
        { date: 'Wed', price: 18 },
        { date: 'Thu', price: 19 },
        { date: 'Fri', price: 20 },
      ]
    },
    {
      crop: 'Potato',
      icon: '🥔',
      minPrice: '₹12',
      maxPrice: '₹18',
      avgPrice: '₹15',
      trend: 'down',
      change: '-3%',
      region: 'Kolkata',
      lastUpdated: '4 hours ago',
      chartData: [
        { date: 'Mon', price: 18 },
        { date: 'Tue', price: 17 },
        { date: 'Wed', price: 16 },
        { date: 'Thu', price: 15.5 },
        { date: 'Fri', price: 15 },
      ]
    },
    {
      crop: 'Onion',
      icon: '🧅',
      minPrice: '₹18',
      maxPrice: '₹28',
      avgPrice: '₹23',
      trend: 'up',
      change: '+20%',
      region: 'Hyderabad',
      lastUpdated: '1 hour ago',
      chartData: [
        { date: 'Mon', price: 18 },
        { date: 'Tue', price: 20 },
        { date: 'Wed', price: 21 },
        { date: 'Thu', price: 22 },
        { date: 'Fri', price: 23 },
      ]
    },
    {
      crop: 'Sugarcane',
      icon: '🎋',
      minPrice: '₹300',
      maxPrice: '₹340',
      avgPrice: '₹320',
      trend: 'up',
      change: '+6%',
      region: 'Delhi',
      lastUpdated: '5 hours ago',
      chartData: [
        { date: 'Mon', price: 300 },
        { date: 'Tue', price: 305 },
        { date: 'Wed', price: 310 },
        { date: 'Thu', price: 315 },
        { date: 'Fri', price: 320 },
      ]
    },
    {
      crop: 'Soybean',
      icon: '🫘',
      minPrice: '₹4,200',
      maxPrice: '₹4,600',
      avgPrice: '₹4,400',
      trend: 'up',
      change: '+10%',
      region: 'Mumbai',
      lastUpdated: '2 hours ago',
      chartData: [
        { date: 'Mon', price: 4200 },
        { date: 'Tue', price: 4250 },
        { date: 'Wed', price: 4300 },
        { date: 'Thu', price: 4350 },
        { date: 'Fri', price: 4400 },
      ]
    }
  ];

  const filteredData = marketData.filter(item => {
    const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
    return matchesRegion;
  });

  const selectedCropData = marketData.find(item => item.crop.toLowerCase() === selectedCrop.toLowerCase());

  const weeklyData = [
    { week: 'Week 1', price: 2000 },
    { week: 'Week 2', price: 2050 },
    { week: 'Week 3', price: 2100 },
    { week: 'Week 4', price: 2140 },
  ];

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-3">Market Prices</h1>
          <p className="text-xl text-gray-600">Real-time crop prices and market trends</p>
        </div>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Select Region / District</label>
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger>
                    <MapPin className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Select Region" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Regions</SelectItem>
                    {regions.slice(1).map((region) => (
                      <SelectItem key={region} value={region}>{region}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">View Detailed Chart</label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger>
                    <BarChart3 className="w-4 h-4 mr-2" />
                    <SelectValue placeholder="Select Crop" />
                  </SelectTrigger>
                  <SelectContent>
                    {marketData.map((item) => (
                      <SelectItem key={item.crop} value={item.crop.toLowerCase()}>
                        {item.icon} {item.crop}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Chart */}
        {selectedCropData && (
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-2xl">{selectedCropData.icon}</span>
                {selectedCropData.crop} - Price Trend (Last 7 Days)
              </CardTitle>
              <CardDescription>Monitor daily price changes and trends</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={selectedCropData.chartData}>
                  <defs>
                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16a34a" stopOpacity={0.3}/>
                      <stop offset="95%" stopColor="#16a34a" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Area type="monotone" dataKey="price" stroke="#16a34a" fillOpacity={1} fill="url(#colorPrice)" />
                </AreaChart>
              </ResponsiveContainer>
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Average Price</p>
                  <p className="text-2xl text-green-700">{selectedCropData.avgPrice}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Min Price</p>
                  <p className="text-2xl text-blue-700">{selectedCropData.minPrice}</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-1">Max Price</p>
                  <p className="text-2xl text-orange-700">{selectedCropData.maxPrice}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Price Cards Grid */}
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-800">Current Market Prices</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredData.map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-3xl">{item.icon}</span>
                      <div>
                        <CardTitle className="text-lg">{item.crop}</CardTitle>
                        <CardDescription className="flex items-center gap-1 text-xs">
                          <MapPin className="w-3 h-3" />
                          {item.region}
                        </CardDescription>
                      </div>
                    </div>
                    <Badge className={item.trend === 'up' ? 'bg-green-600' : 'bg-red-600'}>
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-3 h-3 mr-1" />
                      ) : (
                        <TrendingDown className="w-3 h-3 mr-1" />
                      )}
                      {item.change}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {/* Price Info */}
                    <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-3 rounded-lg">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-600">Average Price</span>
                        <span className="text-xl text-green-700">{item.avgPrice}</span>
                      </div>
                      <div className="flex justify-between text-xs text-gray-600">
                        <span>Min: {item.minPrice}</span>
                        <span>Max: {item.maxPrice}</span>
                      </div>
                    </div>

                    {/* Mini Chart */}
                    <div className="h-16">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={item.chartData}>
                          <Line type="monotone" dataKey="price" stroke={item.trend === 'up' ? '#16a34a' : '#dc2626'} strokeWidth={2} dot={false} />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>

                    {/* Last Updated */}
                    <div className="flex items-center justify-between text-xs text-gray-500 pt-2 border-t">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        Updated {item.lastUpdated}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Price Alerts */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-lg">Set Price Alerts</CardTitle>
            <CardDescription>Get notified when prices reach your target</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Wheat Alert</p>
                    <p className="text-gray-800">Notify when price ≥ ₹2,200</p>
                  </div>
                  <Badge className="bg-blue-600">Active</Badge>
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg border border-blue-200">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Cotton Alert</p>
                    <p className="text-gray-800">Notify when price ≥ ₹7,500</p>
                  </div>
                  <Badge className="bg-blue-600">Active</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
