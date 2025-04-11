import {
  Atom,
  Boxes,
  Braces,
  Cloud,
  Code,
  Component,
  Container,
  Database,
  Gauge,
  GitBranch,
  Hexagon,
  Layers3,
  type LucideProps,
  MousePointerClick,
  Palette,
  Puzzle,
  SearchCode,
  Server,
  TerminalSquare,
  TestTube2,
  Type,
  Wind,
  Workflow,
  Zap,
} from 'lucide-react'; // Or your preferred icon library

// Helper component for generic React-like frameworks/libs if specific icon isn't available
const ReactIcon = (props: LucideProps) => <Atom {...props} />;
const FrameworkIcon = (props: LucideProps) => <Layers3 {...props} />;
const LibraryIcon = (props: LucideProps) => <Puzzle {...props} />;
const ToolIcon = (props: LucideProps) => <TerminalSquare {...props} />;
const DefaultIcon = (props: LucideProps) => <Code {...props} />; // Fallback icon

// Map skill names (lowercase) to icon components
const skillIconMap: Record<string, React.ElementType<LucideProps>> = {
  // Programming Languages
  'javascript (es6+)': Braces,
  javascript: Braces,
  typescript: Type,
  html5: Code,
  css3: Palette,
  php: Code, // Or a specific PHP icon if you find one

  // Frameworks
  reactjs: ReactIcon,
  'next.js': FrameworkIcon, // Use generic or find specific Next.js icon
  remix: FrameworkIcon,
  angularjs: Hexagon, // Often associated with Angular
  'node.js': Server,
  'express.js': Server, // Related to Node.js
  '.net core': FrameworkIcon, // Use generic framework icon
  laravel: FrameworkIcon,

  // Libraries
  'tailwind css': Wind,
  'mantine ui': Component,
  'ant design': Component,
  zustand: Boxes, // State management - Boxes or Atom?
  'mobx-react': ReactIcon, // Related to React
  'tanstack query': ReactIcon, // Often used with React
  'react query': ReactIcon,
  'tanstack virtual': ReactIcon,
  'plotly.js': Gauge, // Data visualization
  'signalr client': Workflow, // Real-time communication

  // Databases
  postgresql: Database,
  mongodb: Database,
  mysql: Database,
  dynamodb: Cloud, // AWS database
  elasticsearch: Database, // Search DB
  mssql: Database,

  // Tools
  prisma: Database, // DB Tool
  playwright: MousePointerClick, // E2E Testing
  jest: TestTube2, // Testing
  'aws s3': Cloud,
  'aws cloudfront': Cloud,
  'aws ec2': Cloud,
  aws: Cloud,
  'azure devops': Workflow,
  vercel: Zap, // Deployment often associated with speed
  firebase: Cloud, // Cloud platform
  docker: Container,
  git: GitBranch,
  jira: Workflow, // Project Management
  'nx workspace': Workflow, // Monorepo tool
  vite: Zap, // Build tool speed
  'rest apis': Workflow, // API related
  wordpress: FrameworkIcon, // CMS can be seen as a framework
  'agolia search': SearchCode,
  'polar.sh': ToolIcon, // Generic tool icon

  // Methodologies (Less common to have icons, using generic)
  'monorepo architecture': Workflow,
  'performance optimization': Gauge,
  'ui/ux principles': Palette,
  'agile methodologies': Workflow,
  'micro-saas development': ToolIcon,

  // Default Fallback
  default: DefaultIcon,
};

// Function to get the icon component for a skill
export const getSkillIcon = (
  skillName: string,
): React.ElementType<LucideProps> => {
  if (!skillName) return DefaultIcon;
  const normalizedName = skillName.toLowerCase().trim();
  return skillIconMap[normalizedName] || DefaultIcon;
};
