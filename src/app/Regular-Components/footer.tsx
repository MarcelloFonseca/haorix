    import { ReactElement } from "react";
    import Link from "next/link";

    export function Footer({ className }: { className: string }): ReactElement {
    interface FooterElements {
        //Les éléments sont optionels=>pour plus de flexibilité
        elementName?: string;
        url?: string;
        image?: string;
    }

    const footerElements: FooterElements[] = [
        {
        url: "#",
        image: "/HaorixLogo.png",
        },
        {
        elementName: "Div 1",
        url: "#",
        },
        {
        elementName: "Div 1",
        url: "#",
        },
        {
        elementName: "Div 3",
        url: "#",
        },
    ];

    return (
        <footer className={className}>
        <div className="border-solid border-4 border-red-500 size-full grid grid-cols-3 gap-4">
            {footerElements.map((element, index) => (
            <Link
                key={index}
                href={"#"}
                className="text-muted-foreground hover:text-primary block duration-150"
            >
                {element.elementName}
                {element.image && (
                <img
                    src={element.image}
                    alt={element.elementName}
                    className="w-[100px] h-auto"
                />
                )}
            </Link>
            ))}
        </div>
        </footer>
    );
    }
