import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock predicted vs actual RUL data
const rulData = [
  { engine: 'ENG-001', predicted: 145, actual: 142 },
  { engine: 'ENG-002', predicted: 62, actual: 58 },
  { engine: 'ENG-003', predicted: 28, actual: 31 },
  { engine: 'ENG-004', predicted: 189, actual: 185 },
  { engine: 'ENG-005', predicted: 75, actual: 72 },
  { engine: 'ENG-006', predicted: 110, actual: 115 },
]

export default function RULComparisonChart() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Predicted vs Actual RUL</CardTitle>
        <CardDescription>
          Comparison of AI predictions with ground truth data
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={rulData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="engine" 
                label={{ value: 'Engine ID', position: 'insideBottom', offset: -5 }}
              />
              <YAxis label={{ value: 'RUL (cycles)', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Bar 
                dataKey="predicted" 
                fill="hsl(var(--primary))" 
                name="Predicted RUL"
                radius={[4, 4, 0, 0]}
              />
              <Bar 
                dataKey="actual" 
                fill="hsl(var(--accent))" 
                name="Actual RUL"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}