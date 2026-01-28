import React from "react";
interface TimelineEntry {
    title: string;
    content: React.ReactNode;
}
declare const Timeline: ({ data }: {
    data: TimelineEntry[];
}) => import("react/jsx-runtime").JSX.Element;
export { Timeline };
