import { ReactElement } from 'react';

    export function Footer({className}: {className:string}): ReactElement {

        return (
            <footer className={className}>
            <div className={"border-solid border-4 border-red-500 size-full grid grid-cols-3 gap-4 "}>
            <div>Div 1
                <div>Nested div</div>
            </div>
            <div>Div 2</div>
            <div>Div 3</div>
            </div>
            </footer>
        )

    }
