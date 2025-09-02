import { useEffect } from "preact/hooks";
import { ThemeButton } from "./ThemeButton";
import { Globe } from "lucide-preact";

export function App() {
    useEffect(() => {
        document.title = "adilet.dev";
    }, []);

    const handleRandomCatFactButton = () => {
        const facts = [
            "Cats sleep 70% of their lives.",
            "A group of cats is called a clowder.",
            "Cats have five toes on their front paws, four on the back.",
            "Cats can make over 100 different sounds.",
            "A cat's whiskers are roughly as wide as its body.",
            "The oldest known pet cat was found in a 9,500-year-old grave.",
            "Cats can rotate their ears 180 degrees.",
        ];
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        alert(randomFact);
    };

    return (
        <>
            <header>
                <h1><Globe width={30} height={30} /><a href="#hello" rel="noopener noreferrer">adilet.dev</a></h1>
                <div id="header-right-container">
                    <ThemeButton />
                </div>
            </header>
            <nav>
                <a href="#hello">Hello</a>
                <a href="#about">About Me</a>
                <a href="#about-cats">About Cats</a>
                <a href="#skills">Skills</a>
                <a href="#coming-soon">Coming Soon</a>
            </nav>
            <main role="main">
                <section id="hello">
                    <h2>Hello!</h2>
                    <p>This is a temporary domain placeholder site. Full site coming soon.</p>
                    <a href="https://github.com/hhiruko/site-placeholder" target="_blank">Source Code</a>
                    <p>Meanwhile enjoy photos of my cats.</p>
                    <div className="img-container">
                        <img 
                            src="img/misti_250.webp" 
                            srcset="img/misti_375.webp 1.5x, img/misti_500.webp 2x"
                            alt="A photo of a very polite white and tabbi cat." 
                            onClick={() => alert('Misti says "MEOW".')}
                            fetchpriority="high"
                            width="250"
                            height="250"
                        />
                        <img 
                            src="img/smoki_250.webp" 
                            srcset="img/smoki_375.webp 1.5x, img/smoki_500.webp 2x"
                            alt="A funny photo of a sleeping tabbi cat." 
                            onClick={() => alert('Smoki is talking in his sleep.')}
                            fetchpriority="high"
                            width="250"
                            height="250"
                        />
                        <img 
                            src="img/marta_250.webp" 
                            srcset="img/marta_375.webp 1.5x, img/marta_500.webp 2x"
                            alt="A photo of a menacing (but funny) black and white cat." 
                            onClick={() => 
                            alert('Marta prepares to hit you.')}
                            fetchpriority="high"
                            width="250"
                            height="250"
                        />
                    </div>
                </section>

                <section id="about">
                    <h2>About Me</h2>
                    <p>My name is Adilet Toktybay. I'm a passionate Full-Stack Engineer with over <strong>3 years</strong> of professional experience designing, developing, and scaling production-grade applications. I specialize in <strong>PHP</strong> and <strong>JS</strong>, and I'm also comfortable working with Python, C++, Java and Rust. I enjoy working across the stack from writing backend and frontend code to configuring servers, managing deployments, and optimizing runtime performance.</p>
                    <ul>
                        <li>🌍  I'm based in Astana, Kazakhstan</li>
                        <li>🎓  Master of Technical Sciences in the field of Media Technologies</li>
                        <li>📚  Bachelor of Science in Information and Communication Technologies in the field of Computer Science</li>
                    </ul>
                </section>

                <section id="about-cats">
                    <h2>About Cats</h2>
                    <p>Click the button to learn a random cat fact!</p>
                    <button onClick={handleRandomCatFactButton} aria-label="Show a random cat fact">Random Cat Fact</button>
                </section>

                <section id="skills">
                    <h2>Skills</h2>
                    <p>An overview of my technical skills, frameworks, tools, and languages I have worked with professionally and on my own.</p>
                    <table>
                        <caption>Technical skills and tools I use:</caption>
                        <tbody>
                            <tr>
                                <td><strong>PHP</strong></td>
                                <td>Yii2, Laravel, Symfony, CakePHP</td>
                            </tr>
                            <tr>
                                <td><strong>JavaScript</strong></td>
                                <td>Preact, Node.js, Vite, Next.js, React</td>
                            </tr>
                            <tr>
                                <td><strong>Database</strong></td>
                                <td>PostgreSQL, MySQL, MariaDB, OracleSQL, MongoDB</td>
                            </tr>
                            <tr>
                                <td><strong>Queue</strong></td>
                                <td>Redis</td>
                            </tr>
                            <tr>
                                <td><strong>Message Broker</strong></td>
                                <td>Kafka</td>
                            </tr>
                            <tr>
                                <td><strong>Cache</strong></td>
                                <td>Memcached, Redis</td>
                            </tr>
                            <tr>
                                <td><strong>Search Engine</strong></td>
                                <td>Elasticsearch</td>
                            </tr>
                            <tr>
                                <td><strong>Test</strong></td>
                                <td>Codeception, PHPUnit, Postman</td>
                            </tr>
                            <tr>
                                <td><strong>Log</strong></td>
                                <td>Grafana Loki</td>
                            </tr>
                            <tr>
                                <td><strong>Server</strong></td>
                                <td>NGINX, Apache</td>
                            </tr>
                            <tr>
                                <td><strong>Containerization</strong></td>
                                <td>Docker</td>
                            </tr>
                            <tr>
                                <td><strong>Cloud</strong></td>
                                <td>AWS, Oracle Cloud, Azure</td>
                            </tr>
                            <tr>
                                <td><strong>AWS</strong></td>
                                <td>EC2, S3, DynamoDB, Lambda, Cloud9, IAM</td>
                            </tr>
                            <tr>
                                <td><strong>Hosting</strong></td>
                                <td>Github Pages, VPS, Vercel</td>
                            </tr>
                            <tr>
                                <td><strong>DNS & SSL</strong></td>
                                <td>Cloudflare, Namecheap, Let's Encrypt</td>
                            </tr>
                            <tr>
                                <td><strong>Environment</strong></td>
                                <td>Linux, Ubuntu, Arch, EndeavourOS</td>
                            </tr>
                            <tr>
                                <td><strong>UI:</strong></td>
                                <td>HTML5, CSS, SCSS, WaterCSS, TailwindCSS, Bootstrap</td>
                            </tr>
                            <tr>
                                <td><strong>Protocol</strong></td>
                                <td>REST API, WebSocket, Webhook</td>
                            </tr>
                            <tr>
                                <td><strong>Additional Language</strong></td>
                                <td>C++, Java, Python, Rust</td>
                            </tr>
                            <tr>
                                <td><strong>IDE</strong></td>
                                <td>PHPStorm, VSCode</td>
                            </tr>
                        </tbody>
                    </table>
                </section>

                <section id="coming-soon">
                    <h2>Coming Soon</h2>
                    <ul>
                        <li>Blog</li>
                        <li>Portfolio</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2025 Adilet Toktybay. All rights reserved.</p>
                <div className="social-links-container">
                    <a href="https://www.linkedin.com/in/atoktybay/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/hhiruko" target="_blank" rel="noopener noreferrer">Github</a>
                    <a href="mailto:adilet.toktybay@gmail.com">Email Me</a>
                    <a href="#">Back to top ⬆</a>
                </div>
            </footer>
        </>
    );
}