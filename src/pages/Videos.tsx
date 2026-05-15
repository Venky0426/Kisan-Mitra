import { useState } from 'react';
import { Search, Play, Clock, Eye, Filter } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Videos() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { value: 'all', label: 'All Videos' },
    { value: 'crop', label: 'Crop Management' },
    { value: 'disease', label: 'Disease Control' },
    { value: 'tools', label: 'Tools & Equipment' },
    { value: 'organic', label: 'Organic Farming' },
    { value: 'yield', label: 'High Yield Tips' }
  ];

  const videos = [
    {
      id: 1,
      title: 'How to Identify and Treat Wheat Rust Disease',
      thumbnail: 'https://images.unsplash.com/photo-1633766158438-151884dabfc4?w=400&h=225&fit=crop',
      duration: '12:45',
      views: '45K',
      category: 'disease',
      language: 'Hindi',
      expert: 'Dr. Rajesh Kumar'
    },
    {
      id: 2,
      title: 'Modern Rice Transplanting Techniques',
      thumbnail: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=400&h=225&fit=crop',
      duration: '18:30',
      views: '62K',
      category: 'crop',
      language: 'Kannada',
      expert: 'Suresh Patel'
    },
    {
      id: 3,
      title: 'Organic Fertilizer Making at Home',
      thumbnail: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=225&fit=crop',
      duration: '15:20',
      views: '89K',
      category: 'organic',
      language: 'Tamil',
      expert: 'Lakshmi Devi'
    },
    {
      id: 4,
      title: 'Cotton Pest Management Best Practices',
      thumbnail: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=225&fit=crop',
      duration: '22:15',
      views: '34K',
      category: 'disease',
      language: 'Telugu',
      expert: 'Prof. Narayana'
    },
    {
      id: 5,
      title: 'Smart Drip Irrigation System Setup',
      thumbnail: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=400&h=225&fit=crop',
      duration: '25:00',
      views: '71K',
      category: 'tools',
      language: 'Marathi',
      expert: 'Anil Shinde'
    },
    {
      id: 6,
      title: 'Increasing Tomato Yield by 50%',
      thumbnail: 'https://images.unsplash.com/photo-1592921870789-04563d55041c?w=400&h=225&fit=crop',
      duration: '16:45',
      views: '95K',
      category: 'yield',
      language: 'Hindi',
      expert: 'Dr. Meena Sharma'
    },
    {
      id: 7,
      title: 'Soil Testing and Analysis Guide',
      thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=225&fit=crop',
      duration: '14:30',
      views: '58K',
      category: 'crop',
      language: 'English',
      expert: 'Dr. Amit Singh'
    },
    {
      id: 8,
      title: 'Vermicompost Production Complete Tutorial',
      thumbnail: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=225&fit=crop',
      duration: '20:10',
      views: '78K',
      category: 'organic',
      language: 'Kannada',
      expert: 'Ramesh Gowda'
    },
    {
      id: 9,
      title: 'Modern Tractor Operations and Maintenance',
      thumbnail: 'https://images.unsplash.com/photo-1595359669901-5bf4f2616ccc?w=400&h=225&fit=crop',
      duration: '28:50',
      views: '103K',
      category: 'tools',
      language: 'Hindi',
      expert: 'Vijay Thakur'
    }
  ];

  const recommended = [
    {
      title: 'Seasonal Crop Planning for Kharif',
      views: '120K',
      duration: '19:25'
    },
    {
      title: 'Weather-Based Farming Decisions',
      views: '87K',
      duration: '13:15'
    },
    {
      title: 'Government Schemes Explained',
      views: '156K',
      duration: '22:30'
    }
  ];

  const filteredVideos = videos.filter(video => {
    const matchesSearch = video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         video.expert.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || video.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-3">Farming Videos Library</h1>
          <p className="text-xl text-gray-600">Learn from expert farmers and agricultural scientists</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              placeholder="Search videos, topics, experts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger className="w-48">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.value} value={cat.value}>
                    {cat.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Video Grid */}
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-2xl text-gray-800">
                {selectedCategory === 'all' ? 'All Videos' : categories.find(c => c.value === selectedCategory)?.label}
              </h2>
              <p className="text-sm text-gray-600">{filteredVideos.length} videos</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <Card key={video.id} className="group cursor-pointer hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                        <Play className="w-8 h-8 text-green-600 ml-1" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="text-gray-800 mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">{video.expert}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        <Eye className="w-4 h-4" />
                        <span>{video.views}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {video.language}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar - Recommended */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-4">
                <h3 className="text-lg mb-4 text-gray-800">Recommended for You</h3>
                <div className="space-y-4">
                  {recommended.map((rec, idx) => (
                    <div key={idx} className="flex gap-3 cursor-pointer group">
                      <div className="relative flex-shrink-0 w-32 h-20 bg-gradient-to-br from-green-400 to-green-600 rounded-lg flex items-center justify-center">
                        <Play className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                        <div className="absolute bottom-1 right-1 bg-black/80 text-white text-xs px-1.5 py-0.5 rounded">
                          {rec.duration}
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-sm text-gray-800 line-clamp-2 group-hover:text-green-700 transition-colors mb-1">
                          {rec.title}
                        </h4>
                        <div className="flex items-center gap-1 text-xs text-gray-500">
                          <Eye className="w-3 h-3" />
                          <span>{rec.views}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Categories Quick Filter */}
            <Card className="mt-4">
              <CardContent className="p-4">
                <h3 className="text-lg mb-4 text-gray-800">Browse by Category</h3>
                <div className="space-y-2">
                  {categories.filter(c => c.value !== 'all').map((cat) => (
                    <Button
                      key={cat.value}
                      variant={selectedCategory === cat.value ? 'default' : 'outline'}
                      className="w-full justify-start"
                      onClick={() => setSelectedCategory(cat.value)}
                    >
                      {cat.label}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
