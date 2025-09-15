import {
  LucideProps,
  TestTube2,
  Scale,
  Droplets,
  Stethoscope,
  MonitorSmartphone,
  Home,
  CheckCircle2,
  type LucideIcon
} from 'lucide-react';

export const icons = {
  TestTube2,
  Scale,
  Droplets,
  Stethoscope,
  MonitorSmartphone,
  Home,
  CheckCircle2,
};

interface IconProps extends LucideProps {
  name: keyof typeof icons;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = icons[name] as LucideIcon;
  return <LucideIcon {...props} />;
};
