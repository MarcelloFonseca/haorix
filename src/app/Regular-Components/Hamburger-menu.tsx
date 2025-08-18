    "use client";
    import * as React from "react";

    type HamburgerMenuProps = {
    className?: string;
    isOpen: boolean;
    onClick: () => void;
    controlsId?: string;
    };

    export function HamburgerMenu({
    className = "",
    isOpen,
    onClick,
    controlsId = "mobile-nav",
    }: HamburgerMenuProps) {
    return (
        <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
        aria-controls={controlsId}
        onClick={onClick}
        className={[
            "relative inline-flex items-center justify-center p-3",
            "rounded-md text-black hover:bg-black/5",
            "focus:outline-none focus:ring-2 focus:ring-black/30",
            className,
        ].join(" ")}
        >
        <span
            className={[
            "relative block h-[2px] w-7 bg-current transition-all duration-200",
            isOpen && "bg-transpa not-last:irent",
            ].join(" ")}
        >
            <span
            className={[
                "absolute left-0 top-0 block h-[2px] w-7 bg-current",
                "transition-transform duration-200",
                isOpen ? "translate-y-0 rotate-45" : "-translate-y-2",
            ].join(" ")}
            />
            <span
            className={[
                "absolute left-0 top-0 block h-[2px] w-7 bg-current",
                "transition-transform duration-200",
                isOpen ? "translate-y-0 -rotate-45" : "translate-y-2",
            ].join(" ")}
            />
        </span>
        </button>
    );
    }
