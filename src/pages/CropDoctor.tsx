import { useState } from 'react';
import { Upload, Camera, AlertTriangle, CheckCircle, Info } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { Badge } from '../components/ui/badge';

export default function CropDoctor() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [diagnosis, setDiagnosis] = useState<any>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
        analyzeCrop();
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeCrop = () => {
    setAnalyzing(true);
    setDiagnosis(null);
    
    // Simulate AI analysis
    setTimeout(() => {
      setDiagnosis({
        disease: 'Late Blight (Phytophthora infestans)',
        severity: 'High',
        confidence: 94,
        affectedArea: 'Leaves and stems',
        steps: [
          'Remove and destroy all infected plant parts immediately',
          'Apply copper-based fungicide (Bordeaux mixture)',
          'Improve air circulation by proper spacing',
          'Avoid overhead irrigation',
          'Apply organic neem oil spray as preventive measure'
        ],
        fertilizers: [
          { name: 'Copper Oxychloride 50% WP', dose: '2-3 gm/liter', frequency: 'Every 7-10 days' },
          { name: 'Mancozeb 75% WP', dose: '2 gm/liter', frequency: 'Alternate sprays' }
        ],
        prevention: [
          'Use disease-resistant varieties',
          'Ensure proper drainage in fields',
          'Practice crop rotation',
          'Remove crop debris after harvest',
          'Monitor weather - high humidity increases risk'
        ]
      });
      setAnalyzing(false);
    }, 2500);
  };

  const getSeverityColor = (severity: string) => {
    switch (severity.toLowerCase()) {
      case 'low': return 'bg-green-500';
      case 'medium': return 'bg-yellow-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-8 container mx-auto px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl text-gray-800 mb-3">AI Crop Doctor</h1>
          <p className="text-xl text-gray-600">Upload a photo of your crop to get instant disease diagnosis</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Upload Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Upload Crop Image</CardTitle>
                <CardDescription>Take a clear photo of affected leaves or plant parts</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {!uploadedImage ? (
                  <div className="border-2 border-dashed border-green-300 rounded-xl p-12 text-center bg-green-50/30 hover:bg-green-50/50 transition-colors">
                    <Upload className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <p className="text-gray-700 mb-4">Drag & drop your image here</p>
                    <p className="text-sm text-gray-500 mb-6">or</p>
                    <div className="flex gap-3 justify-center">
                      <label htmlFor="file-upload">
                        <Button asChild>
                          <span>
                            <Upload className="w-4 h-4 mr-2" />
                            Choose File
                          </span>
                        </Button>
                      </label>
                      <Button variant="outline">
                        <Camera className="w-4 h-4 mr-2" />
                        Take Photo
                      </Button>
                    </div>
                    <input
                      id="file-upload"
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="rounded-xl overflow-hidden border-2 border-green-200">
                      <img src={uploadedImage} alt="Uploaded crop" className="w-full h-64 object-cover" />
                    </div>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => {
                        setUploadedImage(null);
                        setDiagnosis(null);
                      }}
                    >
                      Upload Different Image
                    </Button>
                  </div>
                )}

                {analyzing && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Analyzing image...</span>
                      <span className="text-sm text-green-600">AI Processing</span>
                    </div>
                    <Progress value={66} className="h-2" />
                    <p className="text-xs text-gray-500 text-center">Our AI is analyzing your crop image</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="mt-6 bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-sm flex items-center gap-2">
                  <Info className="w-4 h-4" />
                  Tips for Best Results
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-700 space-y-2">
                  <li>• Take photo in good natural lighting</li>
                  <li>• Focus on affected areas clearly</li>
                  <li>• Include both diseased and healthy parts</li>
                  <li>• Avoid blurry or dark images</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Diagnosis Section */}
          <div>
            {diagnosis && (
              <div className="space-y-6">
                {/* Disease Info */}
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-red-700">{diagnosis.disease}</CardTitle>
                        <CardDescription>Detected with {diagnosis.confidence}% confidence</CardDescription>
                      </div>
                      <Badge className={`${getSeverityColor(diagnosis.severity)} text-white`}>
                        {diagnosis.severity} Severity
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-red-800">Affected Area: {diagnosis.affectedArea}</p>
                        <p className="text-sm text-red-600 mt-1">Immediate action required to prevent spread</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Treatment Steps */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Treatment Steps</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ol className="space-y-3">
                      {diagnosis.steps.map((step: string, idx: number) => (
                        <li key={idx} className="flex gap-3">
                          <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-700 flex items-center justify-center text-sm">
                            {idx + 1}
                          </span>
                          <span className="text-gray-700 pt-0.5">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </CardContent>
                </Card>

                {/* Recommended Products */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Recommended Fertilizers & Pesticides</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {diagnosis.fertilizers.map((fert: any, idx: number) => (
                        <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="text-gray-800">{fert.name}</p>
                              <p className="text-sm text-gray-600 mt-1">Dosage: {fert.dose}</p>
                            </div>
                            <Badge variant="outline" className="text-green-700 border-green-700">
                              {fert.frequency}
                            </Badge>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Prevention Tips */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      Prevention Tips
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {diagnosis.prevention.map((tip: string, idx: number) => (
                        <li key={idx} className="flex gap-2 text-gray-700">
                          <span className="text-green-600 flex-shrink-0">✓</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            )}

            {!diagnosis && !analyzing && uploadedImage && (
              <Card className="h-full flex items-center justify-center">
                <CardContent className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <p className="text-gray-600">Analysis complete! Review the diagnosis above.</p>
                </CardContent>
              </Card>
            )}

            {!uploadedImage && (
              <Card className="h-full flex items-center justify-center border-2 border-dashed">
                <CardContent className="text-center py-12">
                  <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Upload an image to see diagnosis</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
