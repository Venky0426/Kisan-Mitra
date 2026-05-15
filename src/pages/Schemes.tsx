import { useState } from 'react';
import { Building2, Calendar, CheckCircle, IndianRupee, MapPin, TrendingUp, Filter } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';

export default function Schemes() {
  const [selectedState, setSelectedState] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const states = ['All States', 'Karnataka', 'Maharashtra', 'Punjab', 'Tamil Nadu', 'Uttar Pradesh'];
  const crops = ['All Crops', 'Rice', 'Wheat', 'Cotton', 'Sugarcane', 'Vegetables'];
  const categories = ['All Categories', 'Small Farmers', 'Marginal Farmers', 'Women Farmers', 'All Farmers'];

  const trendingSchemes = [
    {
      title: 'PM-KISAN Samman Nidhi',
      benefit: '₹6,000/year',
      applicants: '11 Crore+',
      icon: '🌾'
    },
    {
      title: 'Kisan Credit Card',
      benefit: 'Low Interest Loan',
      applicants: '7 Crore+',
      icon: '💳'
    },
    {
      title: 'Soil Health Card Scheme',
      benefit: 'Free Soil Testing',
      applicants: '22 Crore+',
      icon: '🧪'
    },
    {
      title: 'Pradhan Mantri Fasal Bima Yojana',
      benefit: 'Crop Insurance',
      applicants: '5.5 Crore+',
      icon: '🛡️'
    }
  ];

  const schemes = [
    {
      id: 1,
      title: 'PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)',
      state: 'All India',
      category: 'All Farmers',
      crop: 'All Crops',
      eligibility: [
        'Small and marginal farmers',
        'Landholding up to 2 hectares',
        'Valid Aadhaar card',
        'Bank account details'
      ],
      benefits: [
        '₹6,000 per year in 3 installments',
        'Direct Benefit Transfer (DBT)',
        'No paperwork required after registration',
        'Automatic renewal yearly'
      ],
      deadline: '31st March 2025',
      status: 'Active',
      trending: true
    },
    {
      id: 2,
      title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
      state: 'All India',
      category: 'All Farmers',
      crop: 'All Crops',
      eligibility: [
        'All farmers growing notified crops',
        'Sharecroppers and tenant farmers eligible',
        'Premium: 2% for Kharif, 1.5% for Rabi',
        'Compulsory for loanee farmers'
      ],
      benefits: [
        'Comprehensive risk insurance',
        'Coverage for pre-sowing to post-harvest',
        'Prevents losses due to natural calamities',
        'Quick claim settlement'
      ],
      deadline: '15th July 2024 (Kharif)',
      status: 'Active',
      trending: true
    },
    {
      id: 3,
      title: 'Kisan Credit Card (KCC)',
      state: 'All India',
      category: 'All Farmers',
      crop: 'All Crops',
      eligibility: [
        'Farmers owning cultivable land',
        'Tenant farmers and sharecroppers',
        'Self-Help Groups',
        'Valid land records required'
      ],
      benefits: [
        'Low interest rate (7% per annum)',
        'Interest subvention of 2%',
        'Flexible repayment',
        'Limit based on land holding'
      ],
      deadline: 'Ongoing',
      status: 'Active',
      trending: true
    },
    {
      id: 4,
      title: 'National Mission for Sustainable Agriculture',
      state: 'All India',
      category: 'All Farmers',
      crop: 'All Crops',
      eligibility: [
        'Farmers practicing sustainable methods',
        'Willing to adopt climate-resilient practices',
        'Group or individual farmers',
        'Priority to rain-fed areas'
      ],
      benefits: [
        'Subsidy on soil health management',
        'Support for organic farming',
        'Water conservation assistance',
        'Training and capacity building'
      ],
      deadline: '30th June 2024',
      status: 'Active',
      trending: false
    },
    {
      id: 5,
      title: 'Karnataka Raitha Shakti Scheme',
      state: 'Karnataka',
      category: 'All Farmers',
      crop: 'All Crops',
      eligibility: [
        'Farmers in Karnataka state',
        'Valid land ownership documents',
        'Aadhaar linked bank account',
        'Active farming activity'
      ],
      benefits: [
        'Financial assistance for farming inputs',
        '₹4,000 per acre for up to 5 acres',
        'Direct bank transfer',
        'Covers irrigation and seeds'
      ],
      deadline: '31st August 2024',
      status: 'Active',
      trending: false
    },
    {
      id: 6,
      title: 'Soil Health Card Scheme',
      state: 'All India',
      category: 'All Farmers',
      crop: 'All Crops',
      eligibility: [
        'All farmers across India',
        'Land ownership or cultivation proof',
        'No size limit on land holding',
        'Free of cost service'
      ],
      benefits: [
        'Free soil testing',
        'Detailed nutrient status report',
        'Customized fertilizer recommendations',
        'Improve soil health and productivity'
      ],
      deadline: 'Ongoing',
      status: 'Active',
      trending: true
    }
  ];

  const filteredSchemes = schemes.filter(scheme => {
    const matchesState = selectedState === 'all' || scheme.state === selectedState || scheme.state === 'All India';
    const matchesCrop = selectedCrop === 'all' || scheme.crop === selectedCrop || scheme.crop === 'All Crops';
    const matchesCategory = selectedCategory === 'all' || scheme.category === selectedCategory || scheme.category === 'All Farmers';
    return matchesState && matchesCrop && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-3">Government Schemes</h1>
          <p className="text-xl text-gray-600">Discover and apply for agricultural schemes and subsidies</p>
        </div>

        {/* Trending Schemes Carousel */}
        <Card className="mb-8 bg-gradient-to-br from-green-50 to-yellow-50 border-green-200">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              Trending Schemes
            </CardTitle>
            <CardDescription>Most popular schemes among farmers</CardDescription>
          </CardHeader>
          <CardContent>
            <Carousel className="w-full">
              <CarouselContent>
                {trendingSchemes.map((scheme, idx) => (
                  <CarouselItem key={idx} className="md:basis-1/2 lg:basis-1/4">
                    <Card className="bg-white border-2 border-green-200 hover:border-green-400 transition-colors cursor-pointer">
                      <CardContent className="p-6 text-center">
                        <div className="text-4xl mb-3">{scheme.icon}</div>
                        <h3 className="text-sm text-gray-800 mb-2 h-12">{scheme.title}</h3>
                        <Badge className="bg-green-600 mb-2">{scheme.benefit}</Badge>
                        <p className="text-xs text-gray-500">{scheme.applicants} farmers enrolled</p>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </CardContent>
        </Card>

        {/* Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3 className="text-lg text-gray-800">Filter Schemes</h3>
            </div>
            <div className="grid sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-600 mb-2 block">State</label>
                <Select value={selectedState} onValueChange={setSelectedState}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select State" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All States</SelectItem>
                    {states.slice(1).map((state) => (
                      <SelectItem key={state} value={state}>{state}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Crop Type</label>
                <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Crops</SelectItem>
                    {crops.slice(1).map((crop) => (
                      <SelectItem key={crop} value={crop}>{crop}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-600 mb-2 block">Farmer Category</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.slice(1).map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Schemes Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl text-gray-800">Available Schemes</h2>
            <p className="text-sm text-gray-600">{filteredSchemes.length} schemes found</p>
          </div>

          {filteredSchemes.map((scheme) => (
            <Card key={scheme.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                      <div>
                        <CardTitle className="text-xl text-gray-800">{scheme.title}</CardTitle>
                        <CardDescription className="flex items-center gap-4 mt-2">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {scheme.state}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            Deadline: {scheme.deadline}
                          </span>
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Badge className="bg-green-600">{scheme.status}</Badge>
                    {scheme.trending && <Badge variant="outline" className="border-orange-500 text-orange-700">🔥 Trending</Badge>}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Eligibility */}
                  <div>
                    <h4 className="text-sm text-gray-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-blue-600" />
                      Eligibility Criteria
                    </h4>
                    <ul className="space-y-2">
                      {scheme.eligibility.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-blue-600 flex-shrink-0">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div>
                    <h4 className="text-sm text-gray-800 mb-3 flex items-center gap-2">
                      <IndianRupee className="w-4 h-4 text-green-600" />
                      Benefits
                    </h4>
                    <ul className="space-y-2">
                      {scheme.benefits.map((item, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-gray-700">
                          <span className="text-green-600 flex-shrink-0">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mt-6 pt-6 border-t">
                  <Button className="bg-gradient-to-r from-green-500 to-green-600">
                    Check Eligibility
                  </Button>
                  <Button variant="outline" className="border-green-600 text-green-700 hover:bg-green-50">
                    Apply Now
                  </Button>
                  <Button variant="ghost" className="text-gray-700">
                    Read More Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
