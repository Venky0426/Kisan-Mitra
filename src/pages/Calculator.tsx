import { useState } from 'react';
import { Calculator as CalcIcon, Sprout, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Slider } from '../components/ui/slider';

export default function Calculator() {
  const [formData, setFormData] = useState({
    cropType: '',
    fieldArea: 1,
    soilType: '',
    growthStage: '',
    expectedYield: 50,
    budget: ''
  });
  const [result, setResult] = useState<any>(null);

  const handleCalculate = () => {
    // Simulate calculation
    setResult({
      fertilizers: [
        { name: 'Urea (46% N)', quantity: '87 kg', timing: 'Split: 50% at sowing, 25% at 30 days, 25% at 60 days', price: '₹1,740' },
        { name: 'DAP (18-46-0)', quantity: '65 kg', timing: 'Apply at sowing/planting time', price: '₹1,950' },
        { name: 'Potash (MOP)', quantity: '42 kg', timing: 'Apply at sowing time', price: '₹840' }
      ],
      pesticides: [
        { name: 'Chlorpyrifos 20% EC', quantity: '500 ml', usage: 'Mix 2ml per liter water, spray during evening', price: '₹450' },
        { name: 'Imidacloprid 17.8% SL', quantity: '250 ml', usage: 'Mix 0.5ml per liter water, for sucking pests', price: '₹380' }
      ],
      instructions: [
        'Apply fertilizers in moist soil for better absorption',
        'Never mix different fertilizers together before application',
        'Maintain 7-10 days gap between fertilizer and pesticide application',
        'Always do a patch test before full field spray'
      ],
      safety: [
        'Wear protective gloves and mask during application',
        'Avoid application during windy conditions',
        'Keep pesticides away from water sources',
        'Store in cool, dry place away from food items',
        'Wash hands thoroughly after handling chemicals'
      ],
      totalCost: '₹5,360',
      costPerAcre: '₹5,360'
    });
  };

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-3">Fertilizer & Pesticide Calculator</h1>
          <p className="text-xl text-gray-600">Get precise recommendations for your crop needs</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Input Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalcIcon className="w-5 h-5 text-green-600" />
                  Farm Details
                </CardTitle>
                <CardDescription>Enter your crop and field information</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Crop Type */}
                <div className="space-y-2">
                  <Label>Crop Type</Label>
                  <Select onValueChange={(value) => setFormData({...formData, cropType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select crop" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wheat">🌾 Wheat</SelectItem>
                      <SelectItem value="rice">🌾 Rice (Paddy)</SelectItem>
                      <SelectItem value="corn">🌽 Corn (Maize)</SelectItem>
                      <SelectItem value="cotton">🌿 Cotton</SelectItem>
                      <SelectItem value="tomato">🍅 Tomato</SelectItem>
                      <SelectItem value="potato">🥔 Potato</SelectItem>
                      <SelectItem value="sugarcane">🎋 Sugarcane</SelectItem>
                      <SelectItem value="soybean">🫘 Soybean</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Field Area */}
                <div className="space-y-2">
                  <Label>Field Area (acres)</Label>
                  <Input 
                    type="number" 
                    value={formData.fieldArea}
                    onChange={(e) => setFormData({...formData, fieldArea: parseFloat(e.target.value)})}
                    min="0.1"
                    step="0.1"
                  />
                </div>

                {/* Soil Type */}
                <div className="space-y-2">
                  <Label>Soil Type</Label>
                  <Select onValueChange={(value) => setFormData({...formData, soilType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select soil type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clay">Clay Soil</SelectItem>
                      <SelectItem value="loamy">Loamy Soil</SelectItem>
                      <SelectItem value="sandy">Sandy Soil</SelectItem>
                      <SelectItem value="silt">Silt Soil</SelectItem>
                      <SelectItem value="red">Red Soil</SelectItem>
                      <SelectItem value="black">Black Soil</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Growth Stage */}
                <div className="space-y-2">
                  <Label>Growth Stage</Label>
                  <Select onValueChange={(value) => setFormData({...formData, growthStage: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select growth stage" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sowing">Sowing / Planting</SelectItem>
                      <SelectItem value="vegetative">Vegetative Growth</SelectItem>
                      <SelectItem value="flowering">Flowering Stage</SelectItem>
                      <SelectItem value="fruiting">Fruiting Stage</SelectItem>
                      <SelectItem value="maturity">Maturity Stage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Expected Yield */}
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <Label>Expected Yield (%)</Label>
                    <span className="text-sm text-gray-600">{formData.expectedYield}%</span>
                  </div>
                  <Slider 
                    value={[formData.expectedYield]}
                    onValueChange={(value) => setFormData({...formData, expectedYield: value[0]})}
                    min={20}
                    max={100}
                    step={5}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>Low</span>
                    <span>Medium</span>
                    <span>High</span>
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-2">
                  <Label>Budget (Optional)</Label>
                  <Input 
                    type="number" 
                    placeholder="Enter budget in ₹"
                    value={formData.budget}
                    onChange={(e) => setFormData({...formData, budget: e.target.value})}
                  />
                </div>

                <Button 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600"
                  onClick={handleCalculate}
                  disabled={!formData.cropType || !formData.soilType || !formData.growthStage}
                >
                  <CalcIcon className="w-4 h-4 mr-2" />
                  Calculate Requirements
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results */}
          <div className="lg:col-span-3">
            {result ? (
              <div className="space-y-6">
                {/* Cost Summary */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
                    <CardHeader>
                      <CardDescription className="text-green-100">Total Cost</CardDescription>
                      <CardTitle className="text-3xl">{result.totalCost}</CardTitle>
                    </CardHeader>
                  </Card>
                  <Card className="bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
                    <CardHeader>
                      <CardDescription className="text-yellow-100">Cost Per Acre</CardDescription>
                      <CardTitle className="text-3xl">{result.costPerAcre}</CardTitle>
                    </CardHeader>
                  </Card>
                </div>

                {/* Fertilizers */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Sprout className="w-5 h-5 text-green-600" />
                      Fertilizer Requirements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.fertilizers.map((fert: any, idx: number) => (
                        <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-gray-800">{fert.name}</h4>
                            <span className="text-green-700">{fert.price}</span>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-700">Quantity: <span>{fert.quantity}</span></p>
                            <p className="text-gray-600">Timing: {fert.timing}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Pesticides */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <AlertCircle className="w-5 h-5 text-orange-600" />
                      Pesticide Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {result.pesticides.map((pest: any, idx: number) => (
                        <div key={idx} className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                          <div className="flex justify-between items-start mb-2">
                            <h4 className="text-gray-800">{pest.name}</h4>
                            <span className="text-orange-700">{pest.price}</span>
                          </div>
                          <div className="space-y-1 text-sm">
                            <p className="text-gray-700">Quantity: <span>{pest.quantity}</span></p>
                            <p className="text-gray-600">Usage: {pest.usage}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Instructions */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Application Instructions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-2">
                      {result.instructions.map((instruction: string, idx: number) => (
                        <li key={idx} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-sm">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700 pt-0.5">{instruction}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                {/* Safety */}
                <Card className="bg-red-50 border-red-200">
                  <CardHeader>
                    <CardTitle className="text-lg text-red-800 flex items-center gap-2">
                      <AlertCircle className="w-5 h-5" />
                      Safety Precautions
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {result.safety.map((tip: string, idx: number) => (
                        <li key={idx} className="flex gap-2 text-red-900">
                          <span className="text-red-600 flex-shrink-0">⚠</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ) : (
              <Card className="h-full flex items-center justify-center border-2 border-dashed min-h-96">
                <CardContent className="text-center py-12">
                  <CalcIcon className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Fill in the form and click calculate to see recommendations</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
