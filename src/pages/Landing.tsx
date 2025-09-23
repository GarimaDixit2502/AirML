import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { 
  Activity, 
  Brain, 
  Shield, 
  TrendingUp, 
  ArrowRight, 
  CheckCircle,
  Zap,
  BarChart3,
  Clock,
  AlertTriangle
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import heroImage from "@/assets/hero-engine.jpg"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Predictions",
    description: "Advanced machine learning models trained on NASA's turbofan engine data for accurate RUL predictions."
  },
  {
    icon: Activity,
    title: "Real-time Monitoring",
    description: "Continuous sensor data analysis with instant alerts for critical engine health conditions."
  },
  {
    icon: Shield,
    title: "Predictive Maintenance",
    description: "Prevent costly failures with proactive maintenance scheduling based on predicted engine life."
  },
  {
    icon: TrendingUp,
    title: "Performance Analytics",
    description: "Comprehensive dashboards showing engine performance trends and degradation patterns."
  }
]

const benefits = [
  "Reduce unplanned maintenance by up to 70%",
  "Extend engine life through optimal maintenance timing",
  "Lower operational costs with predictive insights",
  "Improve flight safety with early failure detection"
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20" />
        <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <div className="inline-flex items-center rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
                <Zap className="mr-2 h-4 w-4" />
                AI-Powered Engine Health Monitoring
              </div>
              
              <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Predict Engine Health with{" "}
                <span className="gradient-text">AI</span>
              </h1>
              
              <p className="mt-6 text-xl leading-8 text-muted-foreground max-w-xl">
                Harness the power of machine learning to predict aircraft engine remaining useful life, 
                optimize maintenance schedules, and prevent costly failures before they happen.
              </p>
              
              <div className="mt-10 flex items-center gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="btn-hero text-lg px-8 py-4">
                  <Link to="/predict">
                    Try Prediction <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="text-lg px-8 py-4">
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={heroImage}
                  alt="AI-powered aircraft engine monitoring"
                  className="w-full h-auto object-cover float-animation"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32 bg-gradient-subtle">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advanced Engine Health Intelligence
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
              Built on NASA's turbofan engine degradation dataset with state-of-the-art machine learning algorithms
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <motion.div key={feature.title} variants={itemVariants}>
                <Card className="h-full glass-card hover:shadow-card transition-all duration-300 group">
                  <CardContent className="p-6">
                    <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-primary group-hover:shadow-glow transition-all duration-300">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
                Transform Your Maintenance Strategy
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Move from reactive to predictive maintenance with AI-driven insights that optimize engine performance and reduce operational costs.
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-success flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              <Card className="glass-card pulse-glow">
                <CardContent className="p-6 text-center">
                  <BarChart3 className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">99.2%</div>
                  <div className="text-sm text-muted-foreground">Prediction Accuracy</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card pulse-glow">
                <CardContent className="p-6 text-center">
                  <Clock className="h-8 w-8 text-accent mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">70%</div>
                  <div className="text-sm text-muted-foreground">Cost Reduction</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card pulse-glow">
                <CardContent className="p-6 text-center">
                  <Shield className="h-8 w-8 text-success mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">95%</div>
                  <div className="text-sm text-muted-foreground">Failure Prevention</div>
                </CardContent>
              </Card>
              
              <Card className="glass-card pulse-glow">
                <CardContent className="p-6 text-center">
                  <AlertTriangle className="h-8 w-8 text-warning mx-auto mb-3" />
                  <div className="text-2xl font-bold text-foreground mb-1">30d</div>
                  <div className="text-sm text-muted-foreground">Early Warning</div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 sm:py-32 bg-gradient-primary overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to predict your engine's future?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90">
              Join the future of predictive maintenance. Start analyzing your engine data today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-4"
              >
                <Link to="/predict">
                  Start Prediction <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}