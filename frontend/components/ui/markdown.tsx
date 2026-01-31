import ReactMarkdown, { Components } from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";
import { CodeBlock } from "@/components/ui/code-block";
import { ExternalLink } from "lucide-react";

const components: Components = {
  // Text components
  p: ({ children }) => (
    <p className="text-sm leading-relaxed mb-3 last:mb-0 text-foreground">{children}</p>
  ),
  h1: ({ children }) => (
    <h1 className="text-2xl font-bold tracking-tight mb-4 mt-2 text-foreground">{children}</h1>
  ),
  h2: ({ children }) => (
    <h2 className="text-xl font-bold tracking-tight mt-5 mb-3 pb-2 border-b border-border text-foreground">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold tracking-tight mt-4 mb-2 text-foreground">{children}</h3>
  ),
  h4: ({ children }) => (
    <h4 className="text-base font-semibold tracking-tight mt-3 mb-2 text-foreground">{children}</h4>
  ),
  h5: ({ children }) => (
    <h5 className="text-sm font-semibold tracking-tight mt-2 mb-1 text-foreground">{children}</h5>
  ),
  h6: ({ children }) => (
    <h6 className="text-sm font-medium tracking-tight mt-2 mb-1 text-muted-foreground">{children}</h6>
  ),

  // Lists
  ul: ({ children }) => (
    <ul className="text-sm my-3 pl-5 list-disc marker:text-primary/60 space-y-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="text-sm my-3 pl-5 list-decimal marker:text-primary/60 space-y-1">{children}</ol>
  ),
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,

  // Inline formatting
  strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
  em: ({ children }) => <em className="italic">{children}</em>,
  del: ({ children }) => <del className="line-through text-muted-foreground">{children}</del>,

  // Block elements
  blockquote: ({ children }) => (
    <blockquote className="pl-4 border-l-4 border-primary/30 my-4 py-1 bg-primary/5 rounded-r-lg pr-4 text-muted-foreground italic">
      {children}
    </blockquote>
  ),
  hr: () => <hr className="my-6 border-t border-border" />,

  // Tables
  table: ({ children }) => (
    <div className="overflow-x-auto my-4 rounded-lg border border-border">
      <table className="min-w-full divide-y divide-border">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-muted/70">{children}</thead>,
  tbody: ({ children }) => <tbody className="divide-y divide-border bg-background">{children}</tbody>,
  tr: ({ children }) => <tr className="hover:bg-muted/30 transition-colors">{children}</tr>,
  th: ({ children }) => (
    <th className="px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td className="px-4 py-3 text-sm text-foreground">{children}</td>
  ),

  // Links and images
  a: ({ children, href, title }) => (
    <a
      href={href}
      title={title}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-primary hover:text-primary/80 underline underline-offset-2 decoration-primary/30 hover:decoration-primary/60 transition-colors"
    >
      {children}
      <ExternalLink className="w-3 h-3 flex-shrink-0" />
    </a>
  ),
  img: ({ src, alt, title }) => (
    <figure className="my-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src || ""}
        alt={alt || ""}
        title={title || alt || ""}
        className="max-w-full h-auto rounded-lg border border-border shadow-sm"
      />
      {alt && (
        <figcaption className="text-xs text-center text-muted-foreground mt-2 italic">
          {alt}
        </figcaption>
      )}
    </figure>
  ),

  // Code blocks and inline code
  code: ({ className, children }) => {
    const match = /language-(\w+)/.exec(className || "");
    const isInline = !match;
    return !isInline && match ? (
      <CodeBlock code={String(children).replace(/\n$/, "")} language={match[1]} />
    ) : (
      <code className="bg-muted/80 px-1.5 py-0.5 rounded text-xs text-primary font-mono border border-border/50">
        {children}
      </code>
    );
  },
  pre: ({ children }) => <div className="my-4">{children}</div>,
};

export default function Markdown({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={cn("w-full", className)}>
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {children}
      </ReactMarkdown>
    </div>
  );
}
