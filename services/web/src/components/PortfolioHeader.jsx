import { Link, Tab, TabList, Toolbar, ToolbarButton } from '@fluentui/react-components';
import { ArrowUpRightRegular, HomeRegular, MailRegular } from '@fluentui/react-icons';

export function PortfolioHeader({ name }) {
  return (
    <header className="site-header">
      <Toolbar className="site-toolbar">
        <Link href="#top" className="brand-mark" aria-label="Back to top">
          <span className="brand-mark__square">P</span>
          <span>{name}</span>
        </Link>
        <div className="header-actions">
          <ToolbarButton as="a" href="#contact" icon={<MailRegular />} aria-label="Contact" />
          <ToolbarButton as="a" href="#work" icon={<ArrowUpRightRegular />} aria-label="View work" />
        </div>
      </Toolbar>
      <nav className="site-nav" aria-label="Primary navigation">
        <TabList defaultSelectedValue="about" size="small">
          <Tab value="about" icon={<HomeRegular />} as="a" href="#top">About</Tab>
          <Tab value="work" as="a" href="#work">Work</Tab>
          <Tab value="contact" as="a" href="#contact">Contact</Tab>
        </TabList>
      </nav>
    </header>
  );
}
