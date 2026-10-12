type IconProps = { className?: string };

const base = "stroke-current fill-none";
const strokeProps = {
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function CodeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M8.5 8 4.5 12l4 4" />
      <path d="M15.5 8l4 4-4 4" />
      <path d="M13.5 5.5l-3 13" />
    </svg>
  );
}

export function SparkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M12 3v3M12 18v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M3 12h3M18 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" />
      <circle cx="12" cy="12" r="3.2" />
    </svg>
  );
}

export function AccessIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <circle cx="12" cy="5.5" r="1.6" />
      <path d="M5 9.2c3 1 11 1 14 0" />
      <path d="M12 9.5v4.2M12 13.5l-3.4 6.3M12 13.5l3.4 6.3M8.6 12l-2 2.6M15.4 12l2 2.6" />
    </svg>
  );
}

export function SeoIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <circle cx="10.5" cy="10.5" r="6" />
      <path d="M15 15l5 5" />
      <path d="M8 10.5l1.8 1.8L13.5 8" />
    </svg>
  );
}

export function AdviceIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M4 19V9.5L12 4l8 5.5V19" />
      <path d="M9 19v-6h6v6" />
      <path d="M12 4v5" />
    </svg>
  );
}

export function TrainingIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M3 8l9-4 9 4-9 4-9-4Z" />
      <path d="M7 10.5V16c0 1 2.2 2.2 5 2.2s5-1.2 5-2.2v-5.5" />
      <path d="M20 8v6" />
    </svg>
  );
}

export function CheckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M5 12.5l4.5 4.5L19 7" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function CloudIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M7 18h10.5a3.5 3.5 0 0 0 .3-6.98A5 5 0 0 0 8.2 9.1 4 4 0 0 0 7 18Z" />
      <path d="M9.5 12.5v6M14.5 12.5v6" strokeDasharray="0.1 3" />
    </svg>
  );
}

export function HardwareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <rect x="4" y="4.5" width="16" height="10.5" rx="1.5" />
      <path d="M9 19h6M12 15v4" />
      <path d="M8 9h2M8 12h4" />
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function CrossIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={`${base} ${className ?? ""}`} {...strokeProps}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

const SERVICE_ICONS: Record<string, (props: IconProps) => React.JSX.Element> = {
  "accessible-web-development": AccessIcon,
  "ai-image-processing": SparkIcon,
  "cloud-migration": CloudIcon,
  "it-consultancy-training": AdviceIcon,
  "hardware-lifecycle": HardwareIcon,
};

export function ServiceIcon({ slug, className }: IconProps & { slug: string }) {
  const Icon = SERVICE_ICONS[slug] ?? CodeIcon;
  return <Icon className={className} />;
}
