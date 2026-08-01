import { useState } from 'react';
import { Github, Linkedin, Mail, Send, Terminal } from 'lucide-react';
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Label } from "../../components/ui/label";
import Reveal from './Reveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | compiling | sent | error
  const [error, setError] = useState('');

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status === 'compiling') return;
    setStatus('compiling');
    setError('');
    try {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus('error');
      setError(err?.message || 'transmission failed');
    }
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-primary">07</span>
            <span className="h-px w-8 bg-primary/50" />
            <h2 className="font-heading text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              Get in Touch
            </h2>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <Reveal className="lg:col-span-5" delay={0.05}>
            <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight">
              Let's build<br />
              <span className="text-primary">something intelligent.</span>
            </h3>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              Open to software engineering and AI/ML engineering roles, research
              collaborations, and interesting projects. Reach out — I read every
              message.
            </p>
            <div className="mt-8 flex flex-col gap-3">
              <ContactLink
                title="LinkedIn"
                href="https://linkedin.com/in/suhas-s-641a6a243"
                icon={Linkedin}
                label="linkedin.com/in/suhas-s-641a6a243"
              />

              <ContactLink
                title="GitHub"
                href="https://github.com/SuhasGowda24"
                icon={Github}
                label="github.com/SuhasGowda24"
              />

              <ContactLink
                title="Email"
                href="mailto:srisuhasgowda24@gmail.com"
                icon={Mail}
                label="srisuhasgowda24@gmail.com"
              />
            </div>
          </Reveal>

          <Reveal className="lg:col-span-7" delay={0.1}>
            <form onSubmit={onSubmit} className="glass rounded-xl overflow-hidden">
              <div className="flex items-center gap-2 border-b border-border/60 px-4 py-3 bg-background/40">
                <span className="h-3 w-3 rounded-full bg-destructive/70" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <span className="h-3 w-3 rounded-full bg-primary/70" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="h-3 w-3" /> suhas@portfolio:~$
                </span>
              </div>

              <div className="p-5 sm:p-7 space-y-5">
                <TerminalInput label="enter_name" value={form.name} onChange={set('name')} required placeholder="Your name" />
                <TerminalInput label="enter_email" type="email" value={form.email} onChange={set('email')} required placeholder="you@example.com" />
                <TerminalArea label="enter_message" value={form.message} onChange={set('message')} required placeholder="Tell me about your opportunity or project..." />

                <div className="flex items-center justify-between gap-4 pt-1">
                  <div className="font-mono text-[11px]">
                    {status === 'idle' && <span className="text-muted-foreground">// awaiting input</span>}
                    {status === 'compiling' && <span className="text-yellow-400">Initializing transmission...<span className="animate-pulse">...</span></span>}
                    {status === 'sent' && <span className="text-primary">✓ message_transmitted_successfully [200]</span>}
                    {status === 'error' && <>
                      <span className="text-destructive">
                        ✗ Transmission Failed
                      </span>

                      {error && (
                        <p className="mt-1">
                          {error}
                        </p>
                      )}
                    </>}
                  </div>
                  <Button
                    type="submit"
                    disabled={status === "compiling"}
                    className="w-full sm:w-auto font-mono uppercase tracking-wider glow-accent hover:-translate-y-0.5 transition-all">
                    <Send className="h-4 w-4" />
                    {status === "compiling" ? "Transmitting..." : "Transmit"}
                  </Button>
                </div>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactLink({ href, icon: Icon, title, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group hairline rounded-xl px-4 py-3 hover:border-primary/60 transition-all duration-300"
    >
      <div className="flex items-center gap-3">

        <Icon className="h-5 w-5 text-primary" />

        <div>

          <p className="font-semibold text-foreground">
            {title}
          </p>

          <p className="font-mono text-sm text-muted-foreground group-hover:text-foreground transition-colors">
            {label}
          </p>

        </div>

      </div>
    </a>
  );
}

function TerminalInput({ label, ...props }) {
  return (
    <div>
      <Label className="font-mono text-xs text-primary">suhas@portfolio:~$ {label}_</Label>
      <Input
  {...props}
  className="
    mt-2
    bg-transparent
    border-border/70
    font-mono
    focus-visible:ring-primary
    focus-visible:border-primary
  "
/>
          </div>
        );
      }

function TerminalArea({ label, value, onChange, ...props }) {
  return (
    <div>
<Label className="font-mono text-xs text-primary">
    suhas@portfolio:~$ {label}_
</Label>
      <Textarea
    rows={5}
    value={value}
    onChange={onChange}
    {...props}
    className="
        mt-2
        resize-none
        font-mono
        bg-transparent
        border-border/70
        focus-visible:ring-primary
        focus-visible:border-primary
    "
/>
    </div>
  );
}