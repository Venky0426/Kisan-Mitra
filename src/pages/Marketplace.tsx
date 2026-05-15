import { useState } from 'react';
import { Store, MapPin, Star, TrendingUp, Filter, ShoppingCart, Phone, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Input } from '../components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Marketplace() {
  const [mode, setMode] = useState<'buy' | 'sell'>('buy');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const regions = ['All Regions', 'Within 50km', 'Within 100km', 'Within 200km'];
  const categories = ['All Categories', 'Grains', 'Vegetables', 'Fruits', 'Pulses', 'Spices'];

  const products = [
    {
      id: 1,
      name: 'Premium Wheat',
      category: 'Grains',
      seller: 'Ramesh Patel',
      location: 'Bangalore, Karnataka',
      distance: '45 km',
      quantity: '500 kg',
      price: '₹2,200/quintal',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1595360584848-6404da6fe097?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGVhdCUyMGdyYWluJTIwaGFydmVzdHxlbnwxfHx8fDE3NjM0MDI4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      verified: true,
      bidding: true,
      currentBid: '₹2,150'
    },
    {
      id: 2,
      name: 'Organic Rice (Basmati)',
      category: 'Grains',
      seller: 'Suresh Kumar',
      location: 'Mysore, Karnataka',
      distance: '82 km',
      quantity: '1000 kg',
      price: '₹3,500/quintal',
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1613758235256-43a7bdc21d82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaWNlJTIwZ3JhaW5zJTIwY2xvc2UlMjB1cHxlbnwxfHx8fDE3NjM0MDI4NjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      verified: true,
      bidding: false
    },
    {
      id: 3,
      name: 'Fresh Tomatoes',
      category: 'Vegetables',
      seller: 'Lakshmi Reddy',
      location: 'Chennai, Tamil Nadu',
      distance: '28 km',
      quantity: '200 kg',
      price: '₹25/kg',
      rating: 4.6,
      reviews: 89,
      image: 'https://images.unsplash.com/photo-1748342319942-223b99937d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmVzaCUyMHZlZ2V0YWJsZXMlMjBtYXJrZXR8ZW58MXx8fHwxNzYzMzA5MDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
      verified: true,
      bidding: true,
      currentBid: '₹23'
    },
    {
      id: 4,
      name: 'Cotton Bales',
      category: 'Grains',
      seller: 'Vijay Singh',
      location: 'Mumbai, Maharashtra',
      distance: '156 km',
      quantity: '2000 kg',
      price: '₹7,200/quintal',
      rating: 4.7,
      reviews: 178,
      image: 'https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?w=400&h=300&fit=crop',
      verified: true,
      bidding: false
    },
    {
      id: 5,
      name: 'Fresh Potatoes',
      category: 'Vegetables',
      seller: 'Anil Sharma',
      location: 'Delhi, NCR',
      distance: '67 km',
      quantity: '800 kg',
      price: '₹18/kg',
      rating: 4.5,
      reviews: 112,
      image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=400&h=300&fit=crop',
      verified: false,
      bidding: true,
      currentBid: '₹16'
    },
    {
      id: 6,
      name: 'Yellow Onions',
      category: 'Vegetables',
      seller: 'Prakash Desai',
      location: 'Pune, Maharashtra',
      distance: '92 km',
      quantity: '600 kg',
      price: '₹28/kg',
      rating: 4.8,
      reviews: 145,
      image: 'https://images.unsplash.com/photo-1508313880080-c4bef43d8a66?w=400&h=300&fit=crop',
      verified: true,
      bidding: false
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesCategory;
  });

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-3">Marketplace</h1>
          <p className="text-xl text-gray-600">Buy and sell agricultural produce directly</p>
        </div>

        {/* Buy/Sell Toggle */}
        <Tabs value={mode} onValueChange={(value) => setMode(value as 'buy' | 'sell')} className="mb-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="buy" className="gap-2">
              <ShoppingCart className="w-4 h-4" />
              Buy Produce
            </TabsTrigger>
            <TabsTrigger value="sell" className="gap-2">
              <Store className="w-4 h-4" />
              Sell Produce
            </TabsTrigger>
          </TabsList>

          {/* Buy Tab */}
          <TabsContent value="buy">
            {/* Filters */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Filter className="w-5 h-5 text-gray-600" />
                  <h3 className="text-lg text-gray-800">Filter Products</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Location</label>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                      <SelectTrigger>
                        <MapPin className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Select Distance" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region} value={region.toLowerCase().replace(/\s+/g, '-')}>
                            {region}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Category</label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map((cat) => (
                          <SelectItem key={cat} value={cat.toLowerCase().replace(/\s+/g, '-')}>
                            {cat}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="text-sm text-gray-600 mb-2 block">Search</label>
                    <Input placeholder="Search products..." />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-xl transition-shadow overflow-hidden">
                  <div className="relative">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.bidding && (
                      <Badge className="absolute top-3 right-3 bg-orange-600">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Live Bidding
                      </Badge>
                    )}
                    {product.verified && (
                      <Badge className="absolute top-3 left-3 bg-green-600">
                        ✓ Verified
                      </Badge>
                    )}
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription className="space-y-1">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {product.location} • {product.distance}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                        {product.rating} ({product.reviews} reviews)
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {/* Seller Info */}
                      <div className="flex items-center gap-2 pb-3 border-b">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white">
                          {product.seller.charAt(0)}
                        </div>
                        <div>
                          <p className="text-sm text-gray-800">{product.seller}</p>
                          <p className="text-xs text-gray-500">Seller</p>
                        </div>
                      </div>

                      {/* Quantity & Price */}
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-xs text-gray-600">Available Quantity</p>
                          <p className="text-gray-800">{product.quantity}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-600">Price</p>
                          <p className="text-xl text-green-700">{product.price}</p>
                        </div>
                      </div>

                      {/* Bidding Info */}
                      {product.bidding && (
                        <div className="bg-orange-50 p-3 rounded-lg">
                          <p className="text-xs text-gray-600 mb-1">Current Bid</p>
                          <p className="text-lg text-orange-700">{product.currentBid}</p>
                        </div>
                      )}

                      {/* Actions */}
                      <div className="flex gap-2 pt-2">
                        <Button className="flex-1 bg-gradient-to-r from-green-500 to-green-600">
                          {product.bidding ? 'Place Bid' : 'Buy Now'}
                        </Button>
                        <Button variant="outline" size="icon">
                          <Phone className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="icon">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sell Tab */}
          <TabsContent value="sell">
            <Card>
              <CardHeader>
                <CardTitle>List Your Produce for Sale</CardTitle>
                <CardDescription>Fill in the details to start selling</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Product Name</label>
                      <Input placeholder="e.g., Organic Wheat" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Category</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories.slice(1).map((cat) => (
                            <SelectItem key={cat} value={cat.toLowerCase()}>
                              {cat}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Quantity</label>
                      <Input type="number" placeholder="Enter quantity" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Unit</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select unit" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="kg">Kilogram (kg)</SelectItem>
                          <SelectItem value="quintal">Quintal</SelectItem>
                          <SelectItem value="ton">Ton</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Price per Unit</label>
                      <Input type="number" placeholder="Enter price" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm text-gray-700">Location</label>
                      <Input placeholder="City, State" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-700">Description</label>
                    <textarea
                      className="w-full min-h-24 p-3 rounded-lg border border-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
                      placeholder="Describe your product quality, variety, etc."
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm text-gray-700">Upload Photos</label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                      <p className="text-gray-500 mb-2">Drag & drop photos or click to browse</p>
                      <Button variant="outline">Choose Files</Button>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <input type="checkbox" id="bidding" className="w-4 h-4 text-green-600" />
                    <label htmlFor="bidding" className="text-sm text-gray-700">
                      Enable bidding for this product
                    </label>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-green-500 to-green-600" size="lg">
                    <Store className="w-4 h-4 mr-2" />
                    List Product
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
