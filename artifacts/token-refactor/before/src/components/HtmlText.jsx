export function HtmlText({ children, className = '' }) {
  return <span className={className} dangerouslySetInnerHTML={{ __html: children }} />;
}
