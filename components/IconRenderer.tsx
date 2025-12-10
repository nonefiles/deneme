import {
  User,
  Users,
  Monitor,
  RefreshCw,
  Heart,
  Shield,
  Lightbulb,
  GraduationCap,
  Award,
  Calendar,
  Clock,
  MessageCircle,
} from "lucide-react"

interface IconRendererProps {
  iconName: string
  className?: string
}

const iconMap = {
  user: User,
  users: Users,
  monitor: Monitor,
  "refresh-cw": RefreshCw,
  heart: Heart,
  shield: Shield,
  lightbulb: Lightbulb,
  "graduation-cap": GraduationCap,
  award: Award,
  calendar: Calendar,
  clock: Clock,
  "message-circle": MessageCircle,
}

export default function IconRenderer({ iconName, className = "w-6 h-6" }: IconRendererProps) {
  const IconComponent = iconMap[iconName as keyof typeof iconMap] || Heart

  return <IconComponent className={className} />
}
