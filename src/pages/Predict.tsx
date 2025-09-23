import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Upload, 
  Play, 
  AlertCircle, 
  CheckCircle, 
  TrendingDown,
  Activity,
  Gauge,
  FileText,
  BarChart3
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"

const sensorFields = [
  { name: "temperature", label: "Temperature (°C)", placeholder: "550.0" },
  { name: "pressure", label: "Pressure (psi)", placeholder: "14.7" },
  { name: "fanSpeed", label: "Fan Speed (RPM)", placeholder: "2400" },
  { name: "coreSpeed", label: "Core Speed (RPM)", placeholder: "9000" },
  { name: "fuelFlow", label: "Fuel Flow (kg/h)", placeholder: "0.84" },
  { name: "vibration", label: "Vibration (g)", placeholder: "2.1" },
]

const operationalFields = [
  { name: "altitude", label: "Altitude (ft)", placeholder: "35000" },
  { name: "mach", label: "Mach Number", placeholder: "0.8" },
  { name: "throttle", label: "Throttle Setting (%)", placeholder: "85" },
  { name: "cycles", label: "Engine Cycles", placeholder: "450" },
]

export default function Predict() {
  const [activeTab, setActiveTab] = useState("manual")
  const [isLoading, setIsLoading] = useState(false)
  const [prediction, setPrediction] = useState<any>(null)
  const [sensorData, setSensorData] = useState<Record<string, string>>({})
  const [operationalData, setOperationalData] = useState<Record<string, string>>({})

  const handleInputChange = (field: string, value: string, type: 'sensor' | 'operational') => {
    if (type === 'sensor') {
      setSensorData(prev => ({ ...prev, [field]: value }))
    } else {
      setOperationalData(prev => ({ ...prev, [field]: value }))
    }
  }

  const handlePredict = async () => {
    setIsLoading(true)
    
    // Simulate API call
    setTimeout(() => {
      const mockPrediction = {
        rul: Math.floor(Math.random() * 150) + 50,
        confidence: Math.floor(Math.random() * 30) + 70,
        riskLevel: Math.random() > 0.7 ? 'high' : Math.random() > 0.4 ? 'medium' : 'low',
        recommendations: [
          "Schedule maintenance inspection within 30 days",
          "Monitor temperature readings closely",
          "Check fuel system efficiency"
        ]
      }
      setPrediction(mockPrediction)
      setIsLoading(false)
    }, 2000)
  }

  const getRiskColor = (level: string) => {
    switch (level) {
      case 'high': return 'text-destructive'
      case 'medium': return 'text-warning'
      case 'low': return 'text-success'
      default: return 'text-muted-foreground'
    }
  }

  const getRiskBg = (level: string) => {
    switch (level) {
      case 'high': return 'bg-destructive/10 border-destructive/20'
      case 'medium': return 'bg-warning/10 border-warning/20'
      case 'low': return 'bg-success/10 border-success/20'
      default: return 'bg-muted/10'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Engine Health <span className="gradient-text">Prediction</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            Input your engine sensor data and operational parameters to get AI-powered predictions of remaining useful life
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="glass-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5 text-primary" />
                  Input Data
                </CardTitle>
                <CardDescription>
                  Enter sensor readings and operational parameters for prediction
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="manual">Manual Input</TabsTrigger>
                    <TabsTrigger value="upload">File Upload</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="manual" className="space-y-6 mt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Sensor Data</h3>
                        {sensorFields.map((field) => (
                          <div key={field.name} className="space-y-2">
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                              id={field.name}
                              placeholder={field.placeholder}
                              value={sensorData[field.name] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value, 'sensor')}
                            />
                          </div>
                        ))}
                      </div>
                      
                      <div className="space-y-4">
                        <h3 className="text-lg font-semibold text-foreground">Operational Parameters</h3>
                        {operationalFields.map((field) => (
                          <div key={field.name} className="space-y-2">
                            <Label htmlFor={field.name}>{field.label}</Label>
                            <Input
                              id={field.name}
                              placeholder={field.placeholder}
                              value={operationalData[field.name] || ''}
                              onChange={(e) => handleInputChange(field.name, e.target.value, 'operational')}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="upload" className="space-y-6 mt-6">
                    <div className="border-2 border-dashed border-border rounded-lg p-12 text-center">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">Upload CSV File</h3>
                      <p className="text-muted-foreground mb-4">
                        Upload a CSV file with sensor readings and operational parameters
                      </p>
                      <Button variant="outline">
                        <FileText className="mr-2 h-4 w-4" />
                        Choose File
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
                
                <div className="mt-8 flex justify-center">
                  <Button
                    onClick={handlePredict}
                    disabled={isLoading}
                    size="lg"
                    className="btn-hero min-w-48"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Predicting...
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Run Prediction
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {prediction ? (
              <>
                {/* Main Prediction Card */}
                <Card className={`glass-card ${getRiskBg(prediction.riskLevel)}`}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Gauge className="h-5 w-5 text-primary" />
                      Prediction Results
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-foreground mb-2">
                        {prediction.rul} cycles
                      </div>
                      <div className="text-lg text-muted-foreground">
                        Remaining Useful Life
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Confidence</span>
                        <span className="font-medium">{prediction.confidence}%</span>
                      </div>
                      <Progress value={prediction.confidence} className="h-2" />
                    </div>
                    
                    <Alert className={getRiskBg(prediction.riskLevel)}>
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription className={getRiskColor(prediction.riskLevel)}>
                        Risk Level: <strong className="capitalize">{prediction.riskLevel}</strong>
                      </AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>

                {/* Recommendations Card */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-success" />
                      Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {prediction.recommendations.map((rec: string, index: number) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card className="glass-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BarChart3 className="h-5 w-5 text-accent" />
                      Key Metrics
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Health Score</span>
                      <span className="font-semibold text-foreground">
                        {Math.floor((prediction.rul / 200) * 100)}%
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Time to Service</span>
                      <span className="font-semibold text-foreground">
                        {Math.floor(prediction.rul / 10)} days
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Degradation Rate</span>
                      <span className="font-semibold text-foreground flex items-center gap-1">
                        <TrendingDown className="h-3 w-3" />
                        0.3%/cycle
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </>
            ) : (
              <Card className="glass-card">
                <CardContent className="p-12 text-center">
                  <Gauge className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Ready for Prediction
                  </h3>
                  <p className="text-muted-foreground">
                    Enter your engine data and click "Run Prediction" to get AI-powered insights
                  </p>
                </CardContent>
              </Card>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  )
}