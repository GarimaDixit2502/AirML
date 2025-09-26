import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock feature importance data
const featureData = [
  { feature: 'Temperature', importance: 42 },
  { feature: 'Pressure', importance: 28 },
  { feature: 'Vibration', importance: 15 },
  { feature: 'Flow Rate', importance: 8 },
  { feature: 'RPM', importance: 4 },
  { feature: 'Fuel Flow', importance: 3 },
]

export default function FeatureImportanceChart() {
  return (
    <Card className="glass-card dark:bg-sky-900">
      <CardHeader>
        <CardTitle>Feature Importance</CardTitle>
        <CardDescription className="text-white">
          Which sensors contribute most to RUL predictions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart 
              data={featureData} 
              layout="horizontal" 
              margin={{ top: 20, right: 30, left: 80, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                type="number" 
                tick={{ fill: 'currentColor' }} 
                domain={[0, 50]}
                label={{ value: 'Importance (%)', position: 'insideBottom', offset: -5 ,fill: 'currentColor'}}
              />
              <YAxis 
                type="category" 
                dataKey="feature" 
                width={70}
                tick={{ fill: 'currentColor' }} 
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value) => [`${value}%`, 'Importance']}
              />
              <Bar 
                dataKey="importance" 
                fill="hsl(var(--primary))" 
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}