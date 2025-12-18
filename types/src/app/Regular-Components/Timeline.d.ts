import React from "react";
interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}
declare const Timeline: ({ data }: {
    data: TimelineEntry[];
}) => React.JSX.Element;
export { Timeline };
