import type { CSSProperties } from "react";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import type { TimelineEntry, EducationItem } from "@/content/profile";

const timelineStartOffset = 35;

export function CareerTimeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ol className="career-timeline" aria-label="My career timeline">
      {entries.map((entry, index) => {
        const offset = entries.length > 1 ? ((entries.length - index - 1) / (entries.length - 1)) * timelineStartOffset : 0;
        const width = index === 0 ? 100 - offset : Math.max(50, 60 - index * 1.5);
        return (
          <li key={`${entry.company}-${entry.title}`} className="timeline-item" style={{ "--timeline-offset": `${offset}%`, "--timeline-width": `${width}%` } as CSSProperties}>
            <details className={`career-step${index === 0 ? " is-current" : ""}`} open={index === 0}>
              <summary>
                <span className="timeline-identity"><span className="timeline-company">{entry.company}</span><span className="timeline-title">{entry.title}</span></span>
                <span className="timeline-period">{entry.period}</span>
                <CaretDown size={20} weight="bold" className="timeline-caret" aria-hidden="true" />
              </summary>
              <div className="timeline-description">
                <p className="timeline-location">{entry.location}</p>
                {entry.summary ? <p>{entry.summary}</p> : null}
                {entry.positions?.map(position => (
                  <div className="timeline-position" key={`${position.title}-${position.period}`}>
                    <h4>{position.title}</h4>
                    <p className="timeline-position-period">{position.period}</p>
                    <p>{position.summary}</p>
                  </div>
                ))}
                {entry.details?.map(detail => <p key={detail}>{detail}</p>)}
              </div>
            </details>
          </li>
        );
      })}
    </ol>
  );
}

export function EducationTimeline({ entries }: { entries: EducationItem[] }) {
  return (
    <ol className="education-timeline" aria-label="My education timeline">
      {entries.map((entry, index) => (
        <li key={`${entry.school}-${entry.degree}`} className="education-step" style={{ "--education-offset": `${index === 0 ? timelineStartOffset : (entries.length - index - 1) * 12}%` } as CSSProperties}>
          <p className="education-year">{entry.period}</p>
          <h3>{entry.school}</h3>
          <p className="education-degree">{entry.degree}</p>
          <p className="education-location">{entry.location}</p>
        </li>
      ))}
    </ol>
  );
}
