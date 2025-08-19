    import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
    import { faMoon } from "@fortawesome/free-solid-svg-icons/faMoon";
    import { ReactElement } from "react";

    function DarkModeIcon({ className, onClick}: { className?: string, onClick?: () => void }): ReactElement {
    return (
        <FontAwesomeIcon
        icon={faMoon}
        style={{ color: "#000000" }}
        className={className}
        onClick={onClick}
        />
    );
    }

    export { DarkModeIcon };
