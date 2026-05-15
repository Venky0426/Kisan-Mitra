import { useState } from 'react';
import { CalendarDays, CloudRain, Droplets, Sun, Sprout, TrendingUp } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function Calendar() {
  const [season, setSeason] = useState('kharif');

  const weatherData = {
    temperature: '28°C',
    rainfall: 'Moderate',
    humidity: '65%',
    season: 'Kharif Season'
  };

  const recommendations = {
    kharif: [
      {
        crop: 'Rice (Paddy)',
        icon: '🌾',
        sowingTime: 'June - July',
        harvestTime: 'October - November',
        waterNeed: 'High',
        yield: '25-30 quintals/acre',
        irrigation: 'Weekly flooding for first 60 days, then moderate',
        fertilizer: 'N:P:K = 120:60:40 kg/acre',
        profit: '₹45,000 - ₹60,000/acre'
      },
      {
        crop: 'Cotton',
        icon: '🌿',
        sowingTime: 'May - June',
        harvestTime: 'October - December',
        waterNeed: 'Medium',
        yield: '15-20 quintals/acre',
        irrigation: 'Drip irrigation every 7-10 days',
        fertilizer: 'N:P:K = 100:50:50 kg/acre',
        profit: '₹50,000 - ₹70,000/acre'
      },
      {
        crop: 'Soybean',
        icon: '🫘',
        sowingTime: 'June - July',
        harvestTime: 'September - October',
        waterNeed: 'Medium',
        yield: '12-18 quintals/acre',
        irrigation: 'Rainfed, supplemental if needed',
        fertilizer: 'N:P:K = 20:60:40 kg/acre',
        profit: '₹35,000 - ₹50,000/acre'
      }
    ],
    rabi: [
      {
        crop: 'Wheat',
        icon: '🌾',
        sowingTime: 'November - December',
        harvestTime: 'March - April',
        waterNeed: 'Medium',
        yield: '20-25 quintals/acre',
        irrigation: '4-6 irrigations throughout season',
        fertilizer: 'N:P:K = 120:60:40 kg/acre',
        profit: '₹40,000 - ₹55,000/acre'
      },
      {
        crop: 'Mustard',
        icon: '🌼',
        sowingTime: 'October - November',
        harvestTime: 'February - March',
        waterNeed: 'Low',
        yield: '8-12 quintals/acre',
        irrigation: '2-3 irrigations',
        fertilizer: 'N:P:K = 60:40:20 kg/acre',
        profit: '₹30,000 - ₹45,000/acre'
      },
      {
        crop: 'Potato',
        icon: '🥔',
        sowingTime: 'October - November',
        harvestTime: 'January - February',
        waterNeed: 'High',
        yield: '80-100 quintals/acre',
        irrigation: 'Every 7-10 days',
        fertilizer: 'N:P:K = 120:80:100 kg/acre',
        profit: '₹80,000 - ₹120,000/acre'
      }
    ],
    summer: [
      {
        crop: 'Muskmelon',
        icon: '🍈',
        sowingTime: 'February - March',
        harvestTime: 'May - June',
        waterNeed: 'High',
        yield: '100-150 quintals/acre',
        irrigation: 'Drip irrigation daily',
        fertilizer: 'N:P:K = 80:60:60 kg/acre',
        profit: '₹60,000 - ₹90,000/acre'
      },
      {
        crop: 'Watermelon',
        icon: '🍉',
        sowingTime: 'February - March',
        harvestTime: 'May - June',
        waterNeed: 'High',
        yield: '150-200 quintals/acre',
        irrigation: 'Every 2-3 days',
        fertilizer: 'N:P:K = 100:50:75 kg/acre',
        profit: '₹50,000 - ₹80,000/acre'
      },
      {
        crop: 'Green Gram',
        icon: '🫛',
        sowingTime: 'March - April',
        harvestTime: 'June - July',
        waterNeed: 'Low',
        yield: '4-6 quintals/acre',
        irrigation: '1-2 irrigations',
        fertilizer: 'N:P:K = 15:40:20 kg/acre',
        profit: '₹25,000 - ₹35,000/acre'
      }
    ]
  };

  const timeline = [
    { month: 'Jun', activity: 'Sowing', color: 'bg-green-500' },
    { month: 'Jul', activity: 'Growth', color: 'bg-green-400' },
    { month: 'Aug', activity: 'Growth', color: 'bg-green-400' },
    { month: 'Sep', activity: 'Flowering', color: 'bg-yellow-500' },
    { month: 'Oct', activity: 'Harvest', color: 'bg-orange-500' },
    { month: 'Nov', activity: 'Harvest', color: 'bg-orange-500' }
  ];

  const getWaterIcon = (need: string) => {
    switch (need.toLowerCase()) {
      case 'high': return <Droplets className="w-4 h-4 text-blue-600" />;
      case 'medium': return <Droplets className="w-4 h-4 text-blue-400" />;
      case 'low': return <Droplets className="w-4 h-4 text-blue-300" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-3">AI Farming Calendar</h1>
          <p className="text-xl text-gray-600">Smart crop recommendations based on season and weather</p>
        </div>

        {/* Weather Card */}
        <Card className="mb-8 bg-gradient-to-br from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex items-center gap-3">
                <Sun className="w-10 h-10" />
                <div>
                  <p className="text-sm text-blue-100">Temperature</p>
                  <p className="text-2xl">{weatherData.temperature}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CloudRain className="w-10 h-10" />
                <div>
                  <p className="text-sm text-blue-100">Rainfall</p>
                  <p className="text-2xl">{weatherData.rainfall}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Droplets className="w-10 h-10" />
                <div>
                  <p className="text-sm text-blue-100">Humidity</p>
                  <p className="text-2xl">{weatherData.humidity}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <CalendarDays className="w-10 h-10" />
                <div>
                  <p className="text-sm text-blue-100">Current Season</p>
                  <p className="text-xl">{weatherData.season}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI Recommendation Banner */}
        <Card className="mb-8 bg-gradient-to-r from-green-50 to-yellow-50 border-green-200">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Sprout className="w-12 h-12 text-green-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl text-gray-800 mb-2">AI Recommendation</h3>
                <p className="text-gray-700">
                  Based on current rainfall patterns and temperature, <strong>Rice and Cotton</strong> are highly recommended for this season. 
                  Expected monsoon activity is favorable for water-intensive crops.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Season Tabs */}
        <Tabs value={season} onValueChange={setSeason}>
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="kharif" className="gap-2">
              <CloudRain className="w-4 h-4" />
              Kharif (Monsoon)
            </TabsTrigger>
            <TabsTrigger value="rabi" className="gap-2">
              <Sun className="w-4 h-4" />
              Rabi (Winter)
            </TabsTrigger>
            <TabsTrigger value="summer" className="gap-2">
              <Sun className="w-4 h-4" />
              Summer
            </TabsTrigger>
          </TabsList>

          {Object.entries(recommendations).map(([key, crops]) => (
            <TabsContent key={key} value={key}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {crops.map((crop, idx) => (
                  <Card key={idx} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <span className="text-4xl">{crop.icon}</span>
                          <div>
                            <CardTitle className="text-lg">{crop.crop}</CardTitle>
                            <CardDescription>Season: {key.charAt(0).toUpperCase() + key.slice(1)}</CardDescription>
                          </div>
                        </div>
                        {getWaterIcon(crop.waterNeed)}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {/* Timeline */}
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <p className="text-xs text-gray-600 mb-2">Crop Timeline</p>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-green-700 border-green-700">
                            🌱 {crop.sowingTime}
                          </Badge>
                          <span className="text-gray-400">→</span>
                          <Badge variant="outline" className="text-orange-700 border-orange-700">
                            🌾 {crop.harvestTime}
                          </Badge>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Expected Yield:</span>
                          <span className="text-gray-800">{crop.yield}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Water Requirement:</span>
                          <Badge variant="outline" className={
                            crop.waterNeed === 'High' ? 'text-blue-700 border-blue-700' :
                            crop.waterNeed === 'Medium' ? 'text-blue-500 border-blue-500' :
                            'text-blue-300 border-blue-300'
                          }>
                            {crop.waterNeed}
                          </Badge>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-gray-600 mb-1">Irrigation:</p>
                          <p className="text-xs text-gray-500">{crop.irrigation}</p>
                        </div>
                        <div className="pt-2 border-t">
                          <p className="text-gray-600 mb-1">Fertilizer Schedule:</p>
                          <p className="text-xs text-gray-500">{crop.fertilizer}</p>
                        </div>
                        <div className="pt-2 border-t bg-green-50 -mx-4 px-4 py-2 rounded-b-lg">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-600 flex items-center gap-1">
                              <TrendingUp className="w-4 h-4" />
                              Profit Potential:
                            </span>
                            <span className="text-green-700">{crop.profit}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Timeline (Example: Rice Crop)</CardTitle>
            <CardDescription>Track your crop's growth stages month by month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex gap-2 overflow-x-auto pb-4">
              {timeline.map((item, idx) => (
                <div key={idx} className="flex-shrink-0 text-center">
                  <div className={`w-20 h-20 ${item.color} rounded-lg flex items-center justify-center text-white mb-2`}>
                    <span>{item.month}</span>
                  </div>
                  <p className="text-xs text-gray-600">{item.activity}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
