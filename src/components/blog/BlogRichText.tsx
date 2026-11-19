import type { ReactNode } from "react";
import type { TextBlock } from "@/lib/blog/types";
import { safeLink } from "@/lib/blog/content";

function spans(block: TextBlock): ReactNode {
  return (block.children ?? []).map((span, index) => {
    let children: ReactNode = span.text.split("\n").map((line, lineIndex) => (
      <span key={lineIndex}>{lineIndex > 0 && <br />}{line}</span>
    ));
    for (const mark of span.marks ?? []) {
      switch (mark) {
        case "strong": children = <strong>{children}</strong>; break;
        case "em": children = <em>{children}</em>; break;
        case "underline": children = <u>{children}</u>; break;
        case "strike-through": children = <s>{children}</s>; break;
        default: {
          const annotation = block.markDefs?.find((definition) => definition._key === mark);
          const href = annotation?._type === "link" ? safeLink(annotation.href) : undefined;
          if (href) children = (
            <a href={href} target={annotation?.blank ? "_blank" : undefined} rel={annotation?.blank ? "noopener noreferrer" : undefined} className="text-aiesec-blue underline">
              {children}
            </a>
          );
        }
      }
    }
    return <span key={span._key ?? index}>{children}</span>;
  });
}

function renderBlock(block: TextBlock, key: string | number): ReactNode {
  const children = spans(block);
  switch (block.style) {
    case "h1": return <h1 key={key} className="text-2xl font-bold leading-[1.2] lg:text-rd-heading-02">{children}</h1>;
    case "h2": return <h2 key={key} className="text-2xl font-bold leading-[1.2] lg:text-hero-subtitle">{children}</h2>;
    case "h3": return <h3 key={key} className="text-xl font-bold leading-[1.333] lg:text-rd-body-02">{children}</h3>;
    case "h4": return <h4 key={key} className="text-lg font-bold leading-[1.5] lg:text-xl">{children}</h4>;
    case "blockquote": return <blockquote key={key} className="border-l-4 border-aiesec-blue pl-6 italic">{children}</blockquote>;
    default: return <p key={key}>{children}</p>;
  }
}

function renderList(blocks: TextBlock[], start: number): { node: ReactNode; end: number } {
  const first = blocks[start];
  const level = first.level ?? 1;
  const type = first.listItem;
  const items: ReactNode[] = [];
  let index = start;
  while (index < blocks.length) {
    const block = blocks[index];
    if (!block.listItem || (block.level ?? 1) < level || block.listItem !== type) break;
    const key = block._key ?? index;
    index++;
    const nested: ReactNode[] = [];
    while (index < blocks.length && blocks[index].listItem && (blocks[index].level ?? 1) > level) {
      const child = renderList(blocks, index);
      nested.push(child.node);
      index = child.end;
    }
    items.push(<li key={key}>{spans(block)}{nested}</li>);
  }
  const key = first._key ?? start;
  return {
    node: type === "number"
      ? <ol key={key} className="list-decimal space-y-2 pl-6">{items}</ol>
      : <ul key={key} className="list-disc space-y-2 pl-6">{items}</ul>,
    end: index,
  };
}

/** Portable Text blocks and decorators used by the existing Sanity blog schema. */
export default function BlogRichText({ value }: { value: TextBlock[] }) {
  const nodes: ReactNode[] = [];
  let index = 0;
  while (index < value.length) {
    const block = value[index];
    if (block.listItem) {
      const list = renderList(value, index);
      nodes.push(list.node);
      index = list.end;
    } else {
      nodes.push(renderBlock(block, block._key ?? index));
      index++;
    }
  }
  return <>{nodes}</>;
}
