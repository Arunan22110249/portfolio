import { Card, Title2, Body1 } from '@fluentui/react-components';
import { LinkRegular } from '@fluentui/react-icons';

export function LinkList({ links }) {
  return <section className="content-section split-section" aria-labelledby="links-heading"><div className="section-heading"><div><p className="section-kicker"><LinkRegular /> Elsewhere</p><Title2 id="links-heading">Links</Title2></div></div>{links.length === 0 ? <Card className="compact-empty"><Body1>No destinations supplied.</Body1></Card> : <div className="link-list">{links.map((link) => <a key={link.url} className="link-row" href={link.url}>{link.label}<LinkRegular /></a>)}</div>}</section>;
}
