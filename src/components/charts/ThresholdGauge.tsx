import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, CheckCircle } from 'lucide-react'

interface ThresholdGaugeProps {
  value: number
  threshold: number
  title: string
  engineId: string
}

export default function ThresholdGauge({ value, threshold, title, engineId }: ThresholdGaugeProps) {
  const percentage = Math.min(100, Math.max(0, (value / threshold) * 100))
  const isAlert = percentage < 30
  
  const data = [
    { name: 'Remaining', value: percentage },
    { name: 'Used', value: 100 - percentage }
  ]

  const COLORS = [
    isAlert ? 'hsl(var(--destructive))' : percentage < 60 ? 'hsl(var(--warning))' : 'hsl(var(--success))',
    'hsl(var(--muted))'
  ]

  return (
    <Card className={`glass-card ${isAlert ? 'border-destructive/50' : ''}`}>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium flex items-center gap-2">
          {isAlert ? (
            <AlertTriangle className="h-4 w-4 text-destructive" />
          ) : (
            <CheckCircle className="h-4 w-4 text-success" />
          )}
          {title}
        </CardTitle>
        <CardDescription className="text-xs">{engineId}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative">
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={-270}
                  innerRadius={35}
                  outerRadius={50}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className={`text-lg font-bold ${isAlert ? 'text-destructive' : percentage < 60 ? 'text-warning' : 'text-success'}`}>
                {Math.round(percentage)}%
              </div>
              <div className="text-xs text-muted-foreground">
                {value} cycles
              </div>
            </div>
          </div>
        </div>
        {isAlert && (
          <div className="mt-2 p-2 bg-destructive/10 rounded-md">
            <div className="text-xs text-destructive font-medium">
              ⚠️ Maintenance Required
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}