import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock RUL distribution data (histogram)
const distributionData = [
  { range: '0-50', count: 12 },
  { range: '51-100', count: 28 },
  { range: '101-150', count: 35 },
  { range: '151-200', count: 22 },
  { range: '201-250', count: 8 },
  { range: '251+', count: 3 },
]

export default function RULDistributionChart() {
  return (
    <Card className="glass-card dark:bg-sky-900">
      <CardHeader>
        <CardTitle>RUL Distribution</CardTitle>
        <CardDescription className="text-white">
          Distribution of predicted remaining useful life across all engines
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={distributionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="range" 
                tick={{ fill: 'currentColor' }} 
                label={{ value: 'RUL Range (cycles)', position: 'insideBottom', offset: -5 ,fill: 'currentColor'}}
              />
              <YAxis  tick={{ fill: 'currentColor' }}  label={{ value: 'Number of Engines', angle: -90, position: 'insideLeft',fill: 'currentColor' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value) => [value, 'Engines']}
              />
              <Bar 
                dataKey="count" 
                fill="hsl(var(--accent))" 
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}