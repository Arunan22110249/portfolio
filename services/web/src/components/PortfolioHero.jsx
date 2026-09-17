import { Button, Card, Title1, Body1 } from '@fluentui/react-components';
import { ArrowDownRegular, ArrowUpRightRegular } from '@fluentui/react-icons';

export function PortfolioHero({ identity }) {
  return (
    <Card className="hero-card" appearance="filled-alternative">
      <svg className="hero-mesh" aria-hidden="true" viewBox="0 0 800 400" preserveAspectRatio="none">
        <defs>
          <radialGradient id="hero-coral" cx="0%" cy="0%" r="80%"><stop offset="0%" stopColor="#ffb39e" stopOpacity=".5" /><stop offset="100%" stopColor="#ffb39e" stopOpacity="0" /></radialGradient>
          <radialGradient id="hero-teal" cx="100%" cy="100%" r="80%"><stop offset="0%" stopColor="#7bd2c5" stopOpacity=".45" /><stop offset="100%" stopColor="#7bd2c5" stopOpacity="0" /></radialGradient>
        </defs>
        <rect width="800" height="400" fill="url(#hero-coral)" />
        <rect width="800" height="400" fill="url(#hero-teal)" />
      </svg>
      <div className="hero-content">
        <p className="eyebrow"><span /> Portfolio / {identity.title}</p>
        <Title1>{identity.name}</Title1>
        <Body1>{identity.introduction}</Body1>
        <div className="hero-actions">
          <Button appearance="primary" icon={<ArrowDownRegular />} as="a" href="#work">Explore work</Button>
          <Button appearance="secondary" icon={<ArrowUpRightRegular />} as="a" href="#contact">Get in touch</Button>
        </div>
      </div>
    </Card>
  );
}
