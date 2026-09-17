import { Button, Card, CardFooter, CardHeader, MessageBar, Skeleton, Title2, Body1 } from '@fluentui/react-components';
import { ArrowUpRightRegular, BriefcaseRegular, DismissCircleRegular } from '@fluentui/react-icons';

export function WorkList({ state, work, onRetry }) {
  return (
    <section id="work" className="content-section" aria-labelledby="work-heading">
      <div className="section-heading"><div><p className="section-kicker"><BriefcaseRegular /> Selected work</p><Title2 id="work-heading">Projects and experiments</Title2></div><span className="section-count">{state === 'data' ? '01' : '—'}</span></div>
      {state === 'loading' && <div className="project-grid" aria-label="Loading projects">{[1, 2].map((item) => <Card key={item} className="project-card"><Skeleton className="skeleton-block" /><Skeleton className="skeleton-title" /><Skeleton className="skeleton-line" /></Card>)}</div>}
      {state === 'error' && <MessageBar intent="error" icon={<DismissCircleRegular />}>Work could not be loaded. <Button appearance="subtle" onClick={onRetry}>Try again</Button></MessageBar>}
      {state === 'empty' && <Card className="empty-state"><BriefcaseRegular fontSize={32} /><Title2>No projects to show yet</Title2><Body1>Supplied project details will appear here when they are available.</Body1></Card>}
      {state === 'data' && work.length === 0 && <Card className="empty-state"><BriefcaseRegular fontSize={32} /><Title2>No projects to show yet</Title2><Body1>Supplied project details will appear here when they are available.</Body1></Card>}
      {state === 'data' && work.length > 0 && <div className="project-grid">{work.map((project) => <Card key={project.name} className="project-card"><CardHeader header={<Title2>{project.name}</Title2>} description={project.description} /><CardFooter>{project.url && <Button appearance="secondary" icon={<ArrowUpRightRegular />} as="a" href={project.url}>View project</Button>}</CardFooter></Card>)}</div>}
    </section>
  );
}
