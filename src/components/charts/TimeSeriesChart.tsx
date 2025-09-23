import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock time-series sensor data
const sensorData = [
  { cycle: 0, sensor1: 518.67, sensor2: 641.82, sensor3: 1589.70, sensor4: 1400.60, sensor7: 554.36 },
  { cycle: 50, sensor1: 518.85, sensor2: 642.15, sensor3: 1591.82, sensor4: 1404.06, sensor7: 554.74 },
  { cycle: 100, sensor1: 519.12, sensor2: 642.87, sensor3: 1594.22, sensor4: 1408.85, sensor7: 555.32 },
  { cycle: 150, sensor1: 519.45, sensor2: 643.76, sensor3: 1597.01, sensor4: 1414.12, sensor7: 556.15 },
  { cycle: 200, sensor1: 519.89, sensor2: 644.91, sensor3: 1600.15, sensor4: 1420.03, sensor7: 557.22 },
  { cycle: 250, sensor1: 520.42, sensor2: 646.31, sensor3: 1603.64, sensor4: 1426.59, sensor7: 558.54 },
  { cycle: 300, sensor1: 521.05, sensor2: 647.97, sensor3: 1607.49, sensor4: 1433.81, sensor7: 560.11 },
]

export default function TimeSeriesChart() {
  return (
    <Card className="glass-card">
      <CardHeader>
        <CardTitle>Time-Series Sensor Data</CardTitle>
        <CardDescription>
          Engine sensor degradation over operational cycles
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sensorData}>
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis 
                dataKey="cycle" 
                label={{ value: 'Operational Cycles', position: 'insideBottom', offset: -5 }}
              />
              <YAxis label={{ value: 'Sensor Values', angle: -90, position: 'insideLeft' }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="sensor1" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="Temperature Sensor"
              />
              <Line 
                type="monotone" 
                dataKey="sensor2" 
                stroke="hsl(var(--accent))" 
                strokeWidth={2}
                name="Pressure Sensor"
              />
              <Line 
                type="monotone" 
                dataKey="sensor3" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                name="Vibration Sensor"
              />
              <Line 
                type="monotone" 
                dataKey="sensor7" 
                stroke="hsl(var(--warning))" 
                strokeWidth={2}
                name="Flow Sensor"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}