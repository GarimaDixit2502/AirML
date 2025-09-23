import { useState } from "react"
import { motion } from "framer-motion"
import { 
  Search, 
  Filter, 
  Download,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Clock,
  TrendingUp,
  Calendar,
  MoreHorizontal
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

// Mock data for predictions history
const mockPredictions = [
  {
    id: "ENG-001",
    engineId: "N747BA-001",
    timestamp: "2024-01-15 14:30",
    rul: 145,
    confidence: 87,
    riskLevel: "low",
    status: "active"
  },
  {
    id: "ENG-002", 
    engineId: "N320AB-002",
    timestamp: "2024-01-15 13:45",
    rul: 62,
    confidence: 92,
    riskLevel: "medium",
    status: "maintenance_due"
  },
  {
    id: "ENG-003",
    engineId: "N777XY-003", 
    timestamp: "2024-01-15 12:20",
    rul: 28,
    confidence: 94,
    riskLevel: "high",
    status: "critical"
  },
  {
    id: "ENG-004",
    engineId: "N380QR-004",
    timestamp: "2024-01-15 11:15",
    rul: 189,
    confidence: 85,
    riskLevel: "low",
    status: "active"
  },
  {
    id: "ENG-005",
    engineId: "N787ST-005",
    timestamp: "2024-01-15 10:30",
    rul: 75,
    confidence: 89,
    riskLevel: "medium",
    status: "monitoring"
  }
]

const getRiskBadge = (level: string) => {
  switch (level) {
    case 'high':
      return <Badge variant="destructive">High Risk</Badge>
    case 'medium':
      return <Badge variant="outline" className="border-warning text-warning">Medium Risk</Badge>
    case 'low':
      return <Badge variant="outline" className="border-success text-success">Low Risk</Badge>
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

const getStatusBadge = (status: string) => {
  switch (status) {
    case 'active':
      return <Badge variant="outline" className="border-success text-success">Active</Badge>
    case 'maintenance_due':
      return <Badge variant="outline" className="border-warning text-warning">Maintenance Due</Badge>
    case 'critical':
      return <Badge variant="destructive">Critical</Badge>
    case 'monitoring':
      return <Badge variant="outline">Monitoring</Badge>
    default:
      return <Badge variant="outline">Unknown</Badge>
  }
}

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredPredictions = mockPredictions.filter(prediction =>
    prediction.engineId.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prediction.id.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const stats = {
    totalEngines: mockPredictions.length,
    criticalEngines: mockPredictions.filter(p => p.riskLevel === 'high').length,
    avgRUL: Math.floor(mockPredictions.reduce((acc, p) => acc + p.rul, 0) / mockPredictions.length),
    avgConfidence: Math.floor(mockPredictions.reduce((acc, p) => acc + p.confidence, 0) / mockPredictions.length)
  }

  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Engine Health <span className="gradient-text">Dashboard</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Monitor all your engine predictions and maintenance schedules in one place
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-8"
        >
          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Total Engines</p>
                  <p className="text-2xl font-bold text-foreground">{stats.totalEngines}</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Critical Engines</p>
                  <p className="text-2xl font-bold text-destructive">{stats.criticalEngines}</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <AlertTriangle className="h-6 w-6 text-destructive" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg RUL</p>
                  <p className="text-2xl font-bold text-foreground">{stats.avgRUL}</p>
                  <p className="text-xs text-muted-foreground">cycles</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-success/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-success" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="glass-card">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Avg Confidence</p>
                  <p className="text-2xl font-bold text-foreground">{stats.avgConfidence}%</p>
                </div>
                <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-accent" />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Main Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="glass-card">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <CardTitle>Recent Predictions</CardTitle>
                  <CardDescription>
                    Latest engine health predictions and maintenance schedules
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search engines..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-full sm:w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    <Download className="mr-2 h-4 w-4" />
                    Export
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Engine ID</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>RUL (cycles)</TableHead>
                      <TableHead>Confidence</TableHead>
                      <TableHead>Risk Level</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPredictions.map((prediction) => (
                      <TableRow key={prediction.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium">{prediction.engineId}</TableCell>
                        <TableCell className="text-muted-foreground">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {prediction.timestamp}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="font-semibold text-foreground">
                            {prediction.rul}
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <div className="text-sm font-medium">{prediction.confidence}%</div>
                            <div className="w-16 bg-muted rounded-full h-1.5">
                              <div 
                                className="bg-primary h-1.5 rounded-full" 
                                style={{ width: `${prediction.confidence}%` }}
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          {getRiskBadge(prediction.riskLevel)}
                        </TableCell>
                        <TableCell>
                          {getStatusBadge(prediction.status)}
                        </TableCell>
                        <TableCell className="text-right">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" size="sm">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>
                                <RefreshCw className="mr-2 h-4 w-4" />
                                Re-run Prediction
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem>
                                Export Data
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}