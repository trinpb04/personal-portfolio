// A subtle shine sweep across text. Styling lives in index.css (.shiny-text).
export default function ShinyText({ children, className = '' }) {
  return <span className={`shiny-text ${className}`}>{children}</span>;
}
