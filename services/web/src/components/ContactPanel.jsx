import { Button, Card, Field, Input, MessageBar, Textarea, Title2 } from '@fluentui/react-components';
import { MailRegular, SendRegular } from '@fluentui/react-icons';

export function ContactPanel({ contact }) {
  return <section id="contact" className="content-section contact-section" aria-labelledby="contact-heading"><div><p className="section-kicker"><MailRegular /> Contact</p><Title2 id="contact-heading">Start a conversation</Title2></div>{contact ? <a className="contact-address" href={`mailto:${contact}`}>{contact}<SendRegular /></a> : <MessageBar intent="warning">No contact method supplied yet.</MessageBar>}<form className="contact-form"><Field label="Your email" validationState="warning" validationMessage="A supplied contact form is not configured yet."><Input type="email" placeholder="you@example.com" disabled /></Field><Field label="Message"><Textarea placeholder="A note for the portfolio owner" disabled /></Field><Button appearance="primary" icon={<SendRegular />} disabled>Send message</Button></form></section>;
}
