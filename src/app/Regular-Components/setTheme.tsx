        import { ReactElement } from "react";
        import { useTheme } from "next-themes";
        import { DarkModeIcon } from "@/icons/darkMode";

        function SetThemeButton(): ReactElement {
        const { theme, setTheme } = useTheme();

        const toggleTheme = () => {
            setTheme(theme === "dark" ? "light" : "dark");
        }

        return (   
        <DarkModeIcon onClick={toggleTheme} className="cursor-pointer border-solid border-2 border-red-400"/>
        );}

        export {
            SetThemeButton
        }