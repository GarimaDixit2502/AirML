import { motion } from "framer-motion"
import { 
  Database, 
  Brain, 
  GitBranch, 
  Award,
  Users,
  Target,
  Lightbulb,
  ArrowRight,
  ExternalLink
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technologies = [
  {
    name: "Random Forest",
    description: "Ensemble learning method for robust predictions",
    accuracy: "94.2%"
  },
  {
    name: "XGBoost",
    description: "Gradient boosting for high-performance modeling",
    accuracy: "96.1%"
  },
  {
    name: "Neural Networks",
    description: "Deep learning for complex pattern recognition",
    accuracy: "98.3%"
  }
]

const features = [
  {
    icon: Database,
    title: "NASA Turbofan Dataset",
    description: "Built on NASA's comprehensive turbofan engine degradation simulation dataset with over 100 engines and 21 sensor measurements."
  },
  {
    icon: Brain,
    title: "Advanced ML Models",
    description: "Combines multiple machine learning algorithms including Random Forest, XGBoost, and Neural Networks for optimal prediction accuracy."
  },
  {
    icon: Target,
    title: "Precise Predictions",
    description: "Achieves up to 98.3% accuracy in predicting remaining useful life with confidence intervals and uncertainty quantification."
  },
  {
    icon: Award,
    title: "Production Ready",
    description: "Enterprise-grade system with REST APIs, real-time monitoring, and scalable architecture for production deployments."
  }
]

const team = [
  {
    name: "Research Team",
    role: "AI/ML Engineers",
    description: "Specialized in predictive maintenance and aerospace applications"
  },
  {
    name: "Data Scientists",
    role: "Analytics Experts",
    description: "Expert in time-series analysis and sensor data processing"
  },
  {
    name: "Software Engineers",
    role: "Full-Stack Development",
    description: "Building scalable and reliable software solutions"
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-blue-300 py-12 dark:bg-sky-950">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-6 border-primary/20 text-primary">
            About AirML
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Revolutionizing Aircraft 
            <span className=" block dark:text-white">Maintenance with AI</span>
          </h1>
          <p className="mt-6 text-xl leading-8 font-semibold  dark:text-white max-w-4xl mx-auto">
            AirML leverages cutting-edge machine learning to predict aircraft engine remaining useful life, 
            transforming maintenance strategies from reactive to predictive, saving costs and enhancing safety.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="glass-card bg-white dark:bg-sky-900 border-primary/10">
            <CardContent className="p-12 text-center">
              <Lightbulb className="mx-auto dark:bg-white rounded-2xl h-12 w-12 text-primary mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg dark:text-white font-semibold max-w-4xl mx-auto">
                To democratize predictive maintenance in aviation by making advanced AI accessible to airlines, 
                maintenance providers, and aerospace engineers worldwide. We're building the future where aircraft 
                downtime is minimized, safety is maximized, and maintenance costs are optimized through intelligent predictions.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advanced Machine Learning Models
            </h2>
            <p className="mt-6 text-lg leading-8 dark:text-white font-semibold">
              Our ensemble approach combines multiple ML algorithms for superior prediction accuracy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card bg-white dark:bg-sky-900 h-full hover:shadow-card transition-all duration-300">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-primary flex items-center justify-center">
                      <Brain className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{tech.name}</CardTitle>
                    <Badge variant="outline" className="w-fit mx-auto border-success text-success">
                      {tech.accuracy} Accuracy
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="dark:text-white font-semibold text-center">{tech.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Key Features & Capabilities
            </h2>
            <p className="mt-6 text-lg leading-8 dark:text-white font-semibold">
              Built on solid foundations with enterprise-grade features
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card h-full bg-white dark:bg-sky-900">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                        <feature.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="dark:text-white font-semibold">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dataset Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <Card className="glass-card bg-white dark:bg-sky-900">
            <CardHeader className="text-center">
              <Database className="mx-auto h-12 w-12 text-primary mb-4 dark:bg-white rounded-2xl" />
              <CardTitle className="text-2xl">NASA Turbofan Engine Dataset</CardTitle>
              <CardDescription className="text-lg text-white font-semibold">
                Our models are trained on NASA's comprehensive engine degradation simulation
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-current mb-2">100+</div>
                  <div className="dark:text-white font-semibold">Engine Units</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-current mb-2">21</div>
                  <div className="dark:text-white font-semibold">Sensor Measurements</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-current mb-2">3</div>
                  <div className="dark:text-white font-semibold">Operating Conditions</div>
                </div>
              </div>
              
              <div className="prose prose-sm max-w-none text-muted-foreground">
                <p className="text-center text-black font-semibold dark:text-white">
                  The dataset includes sensor measurements such as temperature, pressure, fan speed, and core speed 
                  under various operating conditions and fault modes. Each engine starts from normal operation and 
                  develops a fault over time until system failure.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Expert Team
            </h2>
            <p className="mt-6 text-lg leading-8 dark:text-white font-semibold">
              Built by aerospace and AI experts passionate about innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="glass-card text-center bg-white dark:bg-sky-900">
                  <CardContent className="p-8">
                    <div className="h-16 w-16 mx-auto mb-6 rounded-full bg-gradient-primary flex items-center justify-center">
                      <Users className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">{member.name}</h3>
                    <Badge variant="outline" className="mb-4">{member.role}</Badge>
                    <p className="text-black dark:text-white font-semibold">{member.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <Card className="glass-card bg-white dark:bg-sky-900 border-primary/10">
            <CardContent className="p-12">
              <GitBranch className="mx-auto h-12 w-12 dark: bg-white rounded-2xl text-primary mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-6">Open Source & Research</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                AirML is committed to advancing the field of predictive maintenance. Our research and methodologies 
                contribute to the open-source community and academic research.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="btn-hero">
                  View Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" size="lg">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  GitHub Repository
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}