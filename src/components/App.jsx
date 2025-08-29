import { ThemeButton } from "./ThemeButton";
import { Globe } from "lucide-preact";

export function App() {

    return (
        <>
            <header>
                <h1><Globe width={30} height={30} />Site</h1>
                <div id="header-right-container">
                    <ThemeButton />
                </div>
            </header>
            <main>
                <h2>Hello!</h2>
                <p>This is a temporary domain placeholder site.</p>
                <a href="https://github.com/hhiruko/site-placeholder" target="_blank">Source Code</a>
                <p>Meanwhile enjoy photos of my cats.</p>
                <div className="img-container">
                    <img src="img/misti.PNG" alt="A photo of a very polite white and tabbi cat."/>
                    <img src="img/smoki.PNG" alt="A funny photo of a sleeping tabbi cat."/>
                    <img src="img/marta.PNG" alt="A photo of a menacing (but funny) black and white cat."/>
                </div>
            </main>
        </>
    );
}