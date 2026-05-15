import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { User, Bell, Globe, Shield, MapPin, Smartphone, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Switch } from '../components/ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export default function Settings() {
  const { language, setLanguage } = useLanguage();
  const [notifications, setNotifications] = useState({
    weather: true,
    market: true,
    schemes: false,
    tasks: true,
  });

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl text-gray-800 mb-2">Settings</h1>
          <p className="text-xl text-gray-600">Manage your account and preferences</p>
        </div>

        <Tabs defaultValue="profile" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="notifications">Notifications</TabsTrigger>
            <TabsTrigger value="language">Language</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>

          {/* Profile Tab */}
          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-green-600" />
                  Personal Information
                </CardTitle>
                <CardDescription>Update your personal details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center text-white text-3xl">
                    R
                  </div>
                  <div>
                    <Button variant="outline" size="sm">Change Photo</Button>
                    <p className="text-xs text-gray-500 mt-1">JPG, PNG or GIF (max. 2MB)</p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Full Name</Label>
                    <Input placeholder="Ramesh Kumar" defaultValue="Ramesh Kumar" />
                  </div>
                  <div className="space-y-2">
                    <Label>Mobile Number</Label>
                    <Input placeholder="+91 98765 43210" defaultValue="+91 98765 43210" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Email Address</Label>
                  <Input type="email" placeholder="ramesh@example.com" defaultValue="ramesh@example.com" />
                </div>

                <div className="space-y-2">
                  <Label>Farm Name</Label>
                  <Input placeholder="Green Valley Farm" defaultValue="Green Valley Farm" />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Total Land (acres)</Label>
                    <Input type="number" placeholder="10" defaultValue="10" />
                  </div>
                  <div className="space-y-2">
                    <Label>Farmer Category</Label>
                    <Select defaultValue="small">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="marginal">Marginal Farmer ({'<'}1 hectare)</SelectItem>
                        <SelectItem value="small">Small Farmer (1-2 hectares)</SelectItem>
                        <SelectItem value="medium">Medium Farmer (2-10 hectares)</SelectItem>
                        <SelectItem value="large">Large Farmer ({'>'}10 hectares)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full bg-gradient-to-r from-green-500 to-green-600">
                  Save Changes
                </Button>
              </CardContent>
            </Card>

            {/* Location Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-green-600" />
                  Location
                </CardTitle>
                <CardDescription>Set your farm location for better recommendations</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>State</Label>
                    <Select defaultValue="karnataka">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="karnataka">Karnataka</SelectItem>
                        <SelectItem value="maharashtra">Maharashtra</SelectItem>
                        <SelectItem value="punjab">Punjab</SelectItem>
                        <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                        <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>District</Label>
                    <Select defaultValue="bangalore">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="bangalore">Bangalore</SelectItem>
                        <SelectItem value="mysore">Mysore</SelectItem>
                        <SelectItem value="mangalore">Mangalore</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Village/Town</Label>
                  <Input placeholder="Enter your village or town" defaultValue="Kanakapura" />
                </div>
                <div className="space-y-2">
                  <Label>Pincode</Label>
                  <Input placeholder="560062" defaultValue="560062" />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Notifications Tab */}
          <TabsContent value="notifications" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="w-5 h-5 text-green-600" />
                  Notification Preferences
                </CardTitle>
                <CardDescription>Choose what notifications you want to receive</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">Weather Alerts</p>
                    <p className="text-sm text-gray-500">Receive alerts about weather changes and warnings</p>
                  </div>
                  <Switch 
                    checked={notifications.weather} 
                    onCheckedChange={(checked) => setNotifications({...notifications, weather: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">Market Price Updates</p>
                    <p className="text-sm text-gray-500">Get notified when crop prices change significantly</p>
                  </div>
                  <Switch 
                    checked={notifications.market} 
                    onCheckedChange={(checked) => setNotifications({...notifications, market: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">Government Schemes</p>
                    <p className="text-sm text-gray-500">Updates about new schemes and deadlines</p>
                  </div>
                  <Switch 
                    checked={notifications.schemes} 
                    onCheckedChange={(checked) => setNotifications({...notifications, schemes: checked})}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">Task Reminders</p>
                    <p className="text-sm text-gray-500">Reminders for upcoming farm tasks and activities</p>
                  </div>
                  <Switch 
                    checked={notifications.tasks} 
                    onCheckedChange={(checked) => setNotifications({...notifications, tasks: checked})}
                  />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-green-600" />
                  Notification Channels
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">Push Notifications</p>
                    <p className="text-sm text-gray-500">Receive notifications on your device</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">SMS Alerts</p>
                    <p className="text-sm text-gray-500">Receive important alerts via SMS</p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">Email Notifications</p>
                    <p className="text-sm text-gray-500">Get weekly summary via email</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Language Tab */}
          <TabsContent value="language" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-green-600" />
                  Language & Region
                </CardTitle>
                <CardDescription>Choose your preferred language for the app</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>App Language</Label>
                  <Select value={language} onValueChange={(value: any) => setLanguage(value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="en">🇬🇧 English</SelectItem>
                      <SelectItem value="hi">🇮🇳 हिंदी (Hindi)</SelectItem>
                      <SelectItem value="kn">🇮🇳 ಕನ್ನಡ (Kannada)</SelectItem>
                      <SelectItem value="te">🇮🇳 తెలుగు (Telugu)</SelectItem>
                      <SelectItem value="ta">🇮🇳 தமிழ் (Tamil)</SelectItem>
                      <SelectItem value="mr">🇮🇳 मराठी (Marathi)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Date Format</Label>
                  <Select defaultValue="dd-mm-yyyy">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="dd-mm-yyyy">DD-MM-YYYY</SelectItem>
                      <SelectItem value="mm-dd-yyyy">MM-DD-YYYY</SelectItem>
                      <SelectItem value="yyyy-mm-dd">YYYY-MM-DD</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-3">
                  <Label>Currency</Label>
                  <Select defaultValue="inr">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="inr">₹ Indian Rupee (INR)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    💡 Tip: The voice assistant will also speak in your selected language
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* About Tab */}
          <TabsContent value="about" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Info className="w-5 h-5 text-green-600" />
                  About KisanSathi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4">
                    <span className="text-4xl">🌾</span>
                  </div>
                  <h2 className="text-2xl text-gray-800 mb-2">KisanSathi</h2>
                  <p className="text-gray-600 mb-4">Version 1.0.0</p>
                  <p className="text-sm text-gray-500 max-w-md mx-auto">
                    Your AI-powered farming companion. Helping Indian farmers grow better crops, 
                    earn more income, and access government schemes.
                  </p>
                </div>

                <div className="border-t pt-6 space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    Privacy Policy
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Terms of Service
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Help & Support
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    Contact Us
                  </Button>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <p className="text-sm text-green-800 text-center">
                    Made with ❤️ for Indian Farmers
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Data & Privacy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">Location Tracking</p>
                    <p className="text-sm text-gray-500">For weather and market data</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-gray-800">Usage Analytics</p>
                    <p className="text-sm text-gray-500">Help us improve the app</p>
                  </div>
                  <Switch />
                </div>

                <Button variant="outline" className="w-full text-red-600 hover:bg-red-50">
                  Delete My Data
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}