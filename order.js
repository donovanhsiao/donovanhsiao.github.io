// Portfolio content data
const portfolioData = {
    about: {
        title: '🍕 About Me',
        content: `
            <div class="content-section">
                <h2>About Donovan</h2>
                <p>
                    Hi! I'm Donovan, a passionate developer with a love for creating innovative solutions 
                    and beautiful user experiences. I started my journey in tech because I believe 
                    software can make a real difference in people's lives.
                </p>
                <p>
                    When I'm not coding, you'll find me exploring new technologies, contributing to 
                    open-source projects, or enjoying a good cup of coffee while reading tech blogs.
                </p>
                <div class="info-grid">
                    <div class="info-item">
                        <strong>Location:</strong> San Francisco, CA
                    </div>
                    <div class="info-item">
                        <strong>Education:</strong> BS in Computer Science
                    </div>
                    <div class="info-item">
                        <strong>Interests:</strong> Web Development, AI/ML, Open Source
                    </div>
                    <div class="info-item">
                        <strong>Languages:</strong> English, Mandarin
                    </div>
                </div>
            </div>
        `
    },
    experience: {
        title: '💼 Experience',
        content: `
            <div class="content-section">
                <h2>Work Experience</h2>
                <div class="timeline">
                    <div class="timeline-item">
                        <div class="timeline-date">2023 - Present</div>
                        <div class="timeline-content">
                            <h3>Senior Software Engineer</h3>
                            <h4>TechCorp Inc.</h4>
                            <p>
                                Leading development of cloud-based applications and mentoring junior developers.
                            </p>
                            <ul>
                                <li>Architected microservices infrastructure serving 1M+ users</li>
                                <li>Improved application performance by 60% through optimization</li>
                                <li>Led team of 5 engineers in agile development process</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-date">2021 - 2023</div>
                        <div class="timeline-content">
                            <h3>Software Engineer</h3>
                            <h4>StartupXYZ</h4>
                            <p>
                                Full-stack development for a fast-growing SaaS platform.
                            </p>
                            <ul>
                                <li>Built responsive web applications with React and Node.js</li>
                                <li>Implemented RESTful APIs and GraphQL endpoints</li>
                                <li>Collaborated with design team on UI/UX improvements</li>
                            </ul>
                        </div>
                    </div>

                    <div class="timeline-item">
                        <div class="timeline-date">2019 - 2021</div>
                        <div class="timeline-content">
                            <h3>Junior Developer</h3>
                            <h4>Digital Solutions Co.</h4>
                            <p>
                                Started my professional journey, learning best practices and modern web development.
                            </p>
                            <ul>
                                <li>Developed frontend components using HTML, CSS, and JavaScript</li>
                                <li>Participated in code reviews and sprint planning</li>
                                <li>Maintained and updated client websites</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    projects: {
        title: '🚀 Projects',
        content: `
            <div class="content-section">
                <h2>Featured Projects</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <h3>TaskMaster Pro</h3>
                        <p>
                            A collaborative task management application with real-time updates, 
                            team analytics, and integration with popular tools.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React</span>
                            <span class="tech-tag">Node.js</span>
                            <span class="tech-tag">MongoDB</span>
                            <span class="tech-tag">Socket.io</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">View Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>WeatherWise</h3>
                        <p>
                            Beautiful weather app with location-based forecasts, interactive maps, 
                            and severe weather alerts.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Vue.js</span>
                            <span class="tech-tag">TypeScript</span>
                            <span class="tech-tag">OpenWeather API</span>
                            <span class="tech-tag">Tailwind CSS</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">View Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>CodeSnippet Manager</h3>
                        <p>
                            Developer tool for organizing, searching, and sharing code snippets 
                            with syntax highlighting and tagging system.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">Python</span>
                            <span class="tech-tag">Django</span>
                            <span class="tech-tag">PostgreSQL</span>
                            <span class="tech-tag">Redis</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">View Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>

                    <div class="project-card">
                        <h3>FitTrack AI</h3>
                        <p>
                            Fitness tracking app with AI-powered workout recommendations and 
                            progress analytics.
                        </p>
                        <div class="project-tech">
                            <span class="tech-tag">React Native</span>
                            <span class="tech-tag">TensorFlow</span>
                            <span class="tech-tag">Firebase</span>
                            <span class="tech-tag">Chart.js</span>
                        </div>
                        <div class="project-links">
                            <a href="#" class="project-link">View Demo →</a>
                            <a href="#" class="project-link">GitHub →</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    },
    skills: {
        title: '⚡ Skills',
        content: `
            <div class="content-section">
                <h2>Technical Skills</h2>
                <div class="skills-category">
                    <h3>Frontend Development</h3>
                    <div class="skills-list">
                        <span class="skill-badge">HTML5</span>
                        <span class="skill-badge">CSS3/SCSS</span>
                        <span class="skill-badge">JavaScript (ES6+)</span>
                        <span class="skill-badge">TypeScript</span>
                        <span class="skill-badge">React</span>
                        <span class="skill-badge">Vue.js</span>
                        <span class="skill-badge">Next.js</span>
                        <span class="skill-badge">Tailwind CSS</span>
                        <span class="skill-badge">Bootstrap</span>
                        <span class="skill-badge">Responsive Design</span>
                    </div>
                </div>

                <div class="skills-category">
                    <h3>Backend Development</h3>
                    <div class="skills-list">
                        <span class="skill-badge">Node.js</span>
                        <span class="skill-badge">Express</span>
                        <span class="skill-badge">Python</span>
                        <span class="skill-badge">Django</span>
                        <span class="skill-badge">Flask</span>
                        <span class="skill-badge">Java</span>
                        <span class="skill-badge">Spring Boot</span>
                        <span class="skill-badge">RESTful APIs</span>
                        <span class="skill-badge">GraphQL</span>
                    </div>
                </div>

                <div class="skills-category">
                    <h3>Database & Tools</h3>
                    <div class="skills-list">
                        <span class="skill-badge">MongoDB</span>
                        <span class="skill-badge">PostgreSQL</span>
                        <span class="skill-badge">MySQL</span>
                        <span class="skill-badge">Redis</span>
                        <span class="skill-badge">Git</span>
                        <span class="skill-badge">Docker</span>
                        <span class="skill-badge">Kubernetes</span>
                        <span class="skill-badge">AWS</span>
                        <span class="skill-badge">CI/CD</span>
                    </div>
                </div>

                <div class="skills-category">
                    <h3>Design & Others</h3>
                    <div class="skills-list">
                        <span class="skill-badge">Figma</span>
                        <span class="skill-badge">Adobe XD</span>
                        <span class="skill-badge">UI/UX Design</span>
                        <span class="skill-badge">Agile/Scrum</span>
                        <span class="skill-badge">Testing (Jest, Pytest)</span>
                        <span class="skill-badge">Performance Optimization</span>
                    </div>
                </div>
            </div>
        `
    },
    resume: {
        title: '📄 Resume',
        content: `
            <div class="content-section">
                <h2>Resume</h2>
                <div class="resume-download">
                    <p>Download my complete resume with detailed information about my experience, education, and certifications.</p>
                    <button class="btn btn-primary download-btn" onclick="alert('Resume download would start here! (Add your actual resume PDF link)')">
                        📥 Download PDF Resume
                    </button>
                </div>

                <div class="resume-preview">
                    <h3>Quick Summary</h3>
                    <div class="resume-section">
                        <h4>Education</h4>
                        <div class="resume-item">
                            <strong>Bachelor of Science in Computer Science</strong>
                            <p>University of California - 2015-2019</p>
                            <p>GPA: 3.8/4.0 | Graduated with Honors</p>
                        </div>
                    </div>

                    <div class="resume-section">
                        <h4>Certifications</h4>
                        <ul>
                            <li>AWS Certified Solutions Architect - Associate</li>
                            <li>Google Cloud Professional Developer</li>
                            <li>MongoDB Certified Developer</li>
                            <li>Certified Scrum Master (CSM)</li>
                        </ul>
                    </div>

                    <div class="resume-section">
                        <h4>Contact Information</h4>
                        <div class="contact-info">
                            <p>📧 Email: donovan.hsiao@example.com</p>
                            <p>🔗 LinkedIn: linkedin.com/in/donovanhsiao</p>
                            <p>💻 GitHub: github.com/donovanhsiao</p>
                            <p>🌐 Portfolio: donovanhsiao.github.io</p>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
};

// Load and display ordered items
window.addEventListener('DOMContentLoaded', () => {
    const cart = JSON.parse(localStorage.getItem('portfolioCart') || '[]');
    const orderContent = document.getElementById('order-content');

    if (cart.length === 0) {
        orderContent.innerHTML = `
            <div class="empty-order">
                <h2>No items in your order!</h2>
                <p>Looks like your cart was empty. Head back to the menu to order some info.</p>
                <a href="index.html" class="btn btn-primary">Go to Menu</a>
            </div>
        `;
        return;
    }

    // Display ordered items
    const itemsHTML = cart.map(item => {
        const data = portfolioData[item];
        return `
            <div class="order-item">
                <div class="order-item-header">
                    <h2>${data.title}</h2>
                </div>
                ${data.content}
            </div>
        `;
    }).join('');

    orderContent.innerHTML = itemsHTML;
});
