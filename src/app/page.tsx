"use client"
import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Github, Linkedin, Twitter } from "lucide-react"
import GlobeVisualization from "../components/globe-visualization"
import PageScript from "./page-script"


import './styles.css'
export default function LandingPage() {
  return (
    <div className="app-container dark">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <div className="logo-space"></div>
            <span>Bolt AI</span>
          </div>
          <nav className="nav">
            <Link href="#about" className="nav-link">
              About
            </Link>
            <Link href="#features" className="nav-link">
              Features
            </Link>
            <Link href="#judges" className="nav-link">
              Judges
            </Link>
            <Link href="#sponsors" className="nav-link">
              Sponsors
            </Link>
            <Link href="#register" className="nav-link">
              Register
            </Link>
            <Link href="#faq" className="nav-link">
              FAQ
            </Link>
          </nav>
          <div className="header-buttons">
            <button className="btn btn-outline">Log in</button>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section with 3D Globe */}
        <section className="hero">
          <div className="globe-container">
            <GlobeVisualization />
          </div>
          <div className="container hero-content">
            <div className="hero-text">
              <h1 className="gradient-text">
                The World's Largest  
 <span> Hackathon</span>
              </h1>
              <p>
                Bolt AI is revolutionizing how we interact with artificial intelligence. Powerful, intuitive, and
                designed for the future.
              </p>
              <div className="hero-buttons">
                <button className="btn btn-primary btn-lg">
                  Join the Revolution <ChevronRight className="icon" />
                </button>
                <button className="btn btn-outline btn-lg">Watch Demo</button>
              </div>
            </div>
          </div>
          <div className="scroll-indicator">
            <span className="mouse">
              <span className="wheel"></span>
            </span>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <div className="section-header">
              <div className="badge">About Bolt AI</div>
              <h2>Redefining AI Possibilities</h2>
              <p>
                Bolt AI is at the forefront of artificial intelligence innovation, creating tools and solutions that
                empower developers, businesses, and individuals to harness the full potential of AI.
              </p>
            </div>
            <div className="features-grid">
              <div className="feature-card animate-on-scroll">
                <div className="feature-icon">🧠</div>
                <h3>Advanced Neural Networks</h3>
                <p>Our proprietary neural network architecture delivers unparalleled performance and accuracy.</p>
              </div>
              <div className="feature-card animate-on-scroll">
                <div className="feature-icon">⚡</div>
                <h3>Lightning Fast Processing</h3>
                <p>Experience AI that responds at the speed of thought with our optimized processing engine.</p>
              </div>
              <div className="feature-card animate-on-scroll">
                <div className="feature-icon">🔒</div>
                <h3>Privacy-First Design</h3>
                <p>Your data remains yours with our secure, privacy-focused implementation.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="section section-dark">
          <div className="container">
            <div className="section-header">
              <div className="badge">Features</div>
              <h2>Cutting-Edge Capabilities</h2>
              <p>Discover what makes Bolt AI the most powerful and versatile AI platform available today.</p>
            </div>

            <div className="tabs">
              <div className="tab-list">
                <button className="tab-button active" data-tab="developers">
                  For Developers
                </button>
                <button className="tab-button" data-tab="businesses">
                  For Businesses
                </button>
                <button className="tab-button" data-tab="researchers">
                  For Researchers
                </button>
              </div>

              <div className="tab-content active" id="developers-tab">
                <div className="cards-grid">
                  <div className="card animate-on-scroll">
                    <h3>Flexible API</h3>
                    <p>Integrate Bolt AI into your applications with our comprehensive and well-documented API.</p>
                  </div>
                  <div className="card animate-on-scroll">
                    <h3>Custom Models</h3>
                    <p>Train and deploy custom AI models tailored to your specific use cases and requirements.</p>
                  </div>
                  <div className="card animate-on-scroll">
                    <h3>Developer Tools</h3>
                    <p>Access a suite of tools designed to streamline AI development and implementation.</p>
                  </div>
                  <div className="card animate-on-scroll">
                    <h3>Community Support</h3>
                    <p>Join our thriving developer community for support, resources, and collaboration.</p>
                  </div>
                </div>
              </div>

              <div className="tab-content" id="businesses-tab">
                <div className="cards-grid">
                  <div className="card">
                    <h3>Business Intelligence</h3>
                    <p>Transform your data into actionable insights with our advanced analytics capabilities.</p>
                  </div>
                  <div className="card">
                    <h3>Process Automation</h3>
                    <p>Automate routine tasks and workflows to increase efficiency and reduce operational costs.</p>
                  </div>
                  <div className="card">
                    <h3>Customer Engagement</h3>
                    <p>Enhance customer experiences with personalized interactions powered by AI.</p>
                  </div>
                  <div className="card">
                    <h3>Scalable Solutions</h3>
                    <p>
                      Our enterprise-grade infrastructure grows with your business, from startup to global corporation.
                    </p>
                  </div>
                </div>
              </div>

              <div className="tab-content" id="researchers-tab">
                <div className="cards-grid">
                  <div className="card">
                    <h3>Research Tools</h3>
                    <p>Access specialized tools and frameworks designed for academic and scientific research.</p>
                  </div>
                  <div className="card">
                    <h3>Data Analysis</h3>
                    <p>Process and analyze complex datasets with our powerful computational capabilities.</p>
                  </div>
                  <div className="card">
                    <h3>Collaboration Platform</h3>
                    <p>Share findings and collaborate with researchers worldwide through our secure platform.</p>
                  </div>
                  <div className="card">
                    <h3>Publication Support</h3>
                    <p>Generate visualizations and prepare data for academic publications and presentations.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Judges Section */}
        <section id="judges" className="section">
          <div className="container">
            <div className="section-header">
              <div className="badge">Competition Judges</div>
              <h2>Meet Our Distinguished Panel</h2>
              <p>Our competition is judged by some of the most influential figures in technology and AI.</p>
            </div>
            <div className="judges-grid">
              <div className="judge-card animate-on-scroll">
                <div className="judge-image">
                  <Image src="/Images/nangu.jpg" alt="Pieter Levels" width={200} height={200} />
                </div>
                <h3>Pieter Levels</h3>
                <p className="judge-title">@levelsio</p>
                <p className="judge-bio">
                  Founder of Nomad List and Remote OK. Serial entrepreneur and maker of profitable internet businesses
                  with over 1 million users.
                </p>
                <div className="social-links">
                  <Link
                    href="https://twitter.com/levelsio"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </Link>
                </div>
              </div>
              <div className="judge-card animate-on-scroll">
                <div className="judge-image">
                  <Image
      src="/Images/l.jpg"       // Make sure l.jpg is in public/Images/
      alt="Logan Kilpatrick"
      width={200}               // Must match desired size
      height={200}              // Must match desired size
      
    />
                </div>
                <h3>Logan Kilpatrick</h3>
                <p className="judge-title">AI Researcher</p>
                <p className="judge-bio">
                  Developer advocate at OpenAI and AI researcher with expertise in machine learning and natural language
                  processing. Former AI evangelist at Apple.
                </p>
                <div className="social-links">
                  <Link
                    href="https://twitter.com/OfficialLoganK"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/logankilpatrick/"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>
              <div className="judge-card animate-on-scroll">
                <div className="judge-image">
                  <Image src="/Images/s.jpg" alt="Sarah Guo" width={200} height={200} />
                </div>
                <h3>Sarah Guo</h3>
                <p className="judge-title">Venture Capitalist</p>
                <p className="judge-bio">
                  Founder of Conviction and former General Partner at Greylock. Investor in AI and enterprise software
                  with a focus on transformative technologies.
                </p>
                <div className="social-links">
                  <Link
                    href="https://twitter.com/saranormous"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/sarahguo/"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin size={20} />
                  </Link>
                </div>
              </div>
              <div className="judge-card animate-on-scroll">
                <div className="judge-image">
                  <Image src="/Images/t.jpg" alt="Theo" width={200} height={200} />
                </div>
                <h3>Theo</h3>
                <p className="judge-title">t3.gg</p>
                <p className="judge-bio">
                  Creator of the T3 Stack and influential developer educator. Expert in TypeScript and modern web
                  development with a large following on YouTube.
                </p>
                <div className="social-links">
                  <Link
                    href="https://twitter.com/t3dotgg"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="https://github.com/TheoBr"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </Link>
                </div>
              </div>
              <div className="judge-card animate-on-scroll">
                <div className="judge-image">
                  <Image src="/Images/e.jpg" alt="Evan You" width={200} height={200} />
                </div>
                <h3>Evan You</h3>
                <p className="judge-title">Creator of Vue.js</p>
                <p className="judge-bio">
                  Independent software developer and creator of Vue.js, one of the most popular JavaScript frameworks
                  with over 200k GitHub stars and millions of users worldwide.
                </p>
                <div className="social-links">
                  <Link
                    href="https://twitter.com/youyuxi"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </Link>
                  <Link
                    href="https://github.com/yyx990803"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </Link>
                </div>
              </div>
              <div className="judge-card animate-on-scroll">
                <div className="judge-image">
                  <Image src="/Images/k.jpg" alt="KP" width={200} height={200} />
                </div>
                <h3>KP</h3>
                <p className="judge-title">Tech Innovator</p>
                <p className="judge-bio">
                  Technology innovator and thought leader in the AI and developer tools space. Advisor to multiple
                  successful startups and advocate for ethical AI development.
                </p>
                <div className="social-links">
                  <Link
                    href="https://twitter.com/kp_ai"
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Twitter size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sponsors Section */}
        <section id="sponsors" className="section section-dark">
          <div className="container">
            <div className="section-header">
              <div className="badge">Our Sponsors</div>
              <h2>Powered By Industry Leaders</h2>
              <p>We're proud to be supported by these innovative companies pushing the boundaries of technology.</p>
            </div>
            <div className="sponsors-grid">
              <div className="sponsor-card animate-on-scroll">
                <div className="sponsor-logo">
                  <Image src="/Images/sun.jpg" alt="Supabase" width={200} height={120} />
                </div>
                <h3>Supabase</h3>
                <p>
                  The open source Firebase alternative. Supabase adds realtime and RESTful APIs to your PostgreSQL
                  database without a single line of code. Trusted by thousands of developers worldwide.
                </p>
                <Link href="https://supabase.com" className="sponsor-link" target="_blank" rel="noopener noreferrer">
                  Learn more
                </Link>
              </div>
              <div className="sponsor-card animate-on-scroll">
                <div className="sponsor-logo">
                  <Image src="/Images/net.jpg" alt="Netlify" width={200} height={120} />
                </div>
                <h3>Netlify</h3>
                <p>
                  An intuitive Git-based workflow and powerful serverless platform to build, deploy, and collaborate on
                  web apps. Powering over 2 million developer projects and websites.
                </p>
                <Link href="https://netlify.com" className="sponsor-link" target="_blank" rel="noopener noreferrer">
                  Learn more
                </Link>
              </div>
              <div className="sponsor-card animate-on-scroll">
                <div className="sponsor-logo">
                  <Image
                    src="/Images/cloud.jpg"
                    alt="Cloudflare Developers"
                    width={200}
                    height={120}
                  />
                </div>
                <h3>Cloudflare Developers</h3>
                <p>
                  Build serverless applications, configure Cloudflare products, and deploy instant global networks with
                  Cloudflare's developer platform. Protecting over 25 million Internet properties.
                </p>
                <Link
                  href="https://developers.cloudflare.com"
                  className="sponsor-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Link>
              </div>
              <div className="sponsor-card animate-on-scroll">
                <div className="sponsor-logo">
                  <Image src="/Images/sen.jpg" alt="Sentry" width={200} height={120} />
                </div>
                <h3>Sentry</h3>
                <p>
                  Application monitoring platform that helps developers discover, triage, and prioritize errors in
                  real-time. Used by over 1 million developers and 80,000 organizations worldwide.
                </p>
                <Link href="https://sentry.io" className="sponsor-link" target="_blank" rel="noopener noreferrer">
                  Learn more
                </Link>
              </div>
              <div className="sponsor-card animate-on-scroll">
                <div className="sponsor-logo">
                  <Image src="/Images/loop.jpg" alt="Loops.so" width={200} height={120} />
                </div>
                <h3>Loops.so</h3>
                <p>
                  Customer communication platform that helps you send the right message to the right user at the right
                  time. Trusted by thousands of startups and growing businesses.
                </p>
                <Link href="https://loops.so" className="sponsor-link" target="_blank" rel="noopener noreferrer">
                  Learn more
                </Link>
              </div>
              <div className="sponsor-card animate-on-scroll">
                <div className="sponsor-logo">
                  <Image src="/Images/a.jpg" alt="Algorand Foundation" width={200} height={120} />
                </div>
                <h3>Algorand Foundation</h3>
                <p>
                  Supporting the development of the carbon-negative Algorand blockchain, designed for the future of
                  finance. Building a borderless economy with breakthrough technology.
                </p>
                <Link
                  href="https://algorand.foundation"
                  className="sponsor-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Registration Form Section */}
        <section id="register" className="section">
          <div className="container">
            <div className="section-header">
              <div className="badge">Join The Competition</div>
              <h2>Register Your Project</h2>
              <p>
                Showcase your AI innovation and compete for recognition and prizes from our esteemed judges and
                sponsors.
              </p>
            </div>
            <div className="form-container animate-on-scroll">
              <div className="form-card">
                <div className="form-header">
                  <h3>Competition Registration</h3>
                  <p>Fill out the form below to enter your AI project in the competition.</p>
                </div>
                <form className="registration-form" onSubmit={(e) => e.preventDefault()}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="first-name">
                        First Name <span className="required">*</span>
                      </label>
                      <input type="text" id="first-name" placeholder="John" required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="last-name">
                        Last Name <span className="required">*</span>
                      </label>
                      <input type="text" id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">
                      Email <span className="required">*</span>
                    </label>
                    <input type="email" id="email" placeholder="john.doe@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="project-name">
                      Project Name <span className="required">*</span>
                    </label>
                    <input type="text" id="project-name" placeholder="My Amazing AI Project" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="project-description">
                      Project Description <span className="required">*</span>
                    </label>
                    <textarea
                      id="project-description"
                      placeholder="Describe your AI project in detail... What problem does it solve? What technologies does it use? What makes it innovative?"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="project-url">Project URL (if available)</label>
                      <input type="url" id="project-url" placeholder="https://myproject.com" />
                    </div>
                    <div className="form-group">
                      <label htmlFor="category">
                        Project Category <span className="required">*</span>
                      </label>
                      <select id="category" required>
                        <option value="">Select a category</option>
                        <option value="nlp">Natural Language Processing</option>
                        <option value="cv">Computer Vision</option>
                        <option value="rl">Reinforcement Learning</option>
                        <option value="generative">Generative AI</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="team-members">Team Members</label>
                    <textarea
                      id="team-members"
                      placeholder="List the names and roles of your team members (if applicable)"
                      rows={3}
                    ></textarea>
                  </div>
                  <div className="form-group checkbox-group">
                    <input type="checkbox" id="terms" required />
                    <label htmlFor="terms">
                      I agree to the competition{" "}
                      <Link href="#" className="text-link">
                        terms and conditions
                      </Link>{" "}
                      <span className="required">*</span>
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Submit Registration
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="section section-dark">
          <div className="container">
            <div className="section-header">
              <div className="badge">FAQ</div>
              <h2>Frequently Asked Questions</h2>
              <p>Find answers to common questions about Bolt AI and our competition.</p>
            </div>
            <div className="faq-container animate-on-scroll">
              <div className="accordion">
                <div className="accordion-item">
                  <button className="accordion-button">
                    What is Bolt AI?
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      Bolt AI is a cutting-edge artificial intelligence platform that provides developers, businesses,
                      and researchers with powerful tools to build, deploy, and scale AI solutions. Our technology
                      focuses on speed, accuracy, and ease of use, with specialized capabilities in natural language
                      processing, computer vision, and predictive analytics.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-button">
                    How do I enter the competition?
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      To enter the competition, fill out the registration form on our website with details about your AI
                      project. Make sure to submit before the deadline (April 15, 2025) and follow all competition
                      guidelines. Your submission should include a working prototype or demo of your AI solution, along
                      with documentation explaining your approach.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-button">
                    What are the judging criteria?
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p>Projects will be judged on the following criteria:</p>
                    <ul>
                      <li>
                        <strong>Innovation (30%):</strong> Originality and creativity of the AI solution
                      </li>
                      <li>
                        <strong>Technical Implementation (25%):</strong> Quality of code, architecture, and technical
                        execution
                      </li>
                      <li>
                        <strong>Practical Application (20%):</strong> Real-world usefulness and potential impact
                      </li>
                      <li>
                        <strong>Scalability (15%):</strong> Ability to scale and handle increased demands
                      </li>
                      <li>
                        <strong>Presentation (10%):</strong> Quality of documentation and demonstration
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-button">
                    What are the prizes?
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p>The competition offers the following prizes:</p>
                    <ul>
                      <li>
                        <strong>1st Place:</strong> $50,000 cash prize, mentorship from our panel of judges, and
                        promotional features across our platforms
                      </li>
                      <li>
                        <strong>2nd Place:</strong> $25,000 cash prize and promotional features
                      </li>
                      <li>
                        <strong>3rd Place:</strong> $10,000 cash prize
                      </li>
                      <li>
                        <strong>Category Winners:</strong> $5,000 cash prize for the best project in each category
                      </li>
                      <li>
                        <strong>Community Choice:</strong> $5,000 cash prize for the project with the most community
                        votes
                      </li>
                    </ul>
                    <p>
                      Additionally, all finalists will receive potential investment opportunities and access to our
                      exclusive AI developer community.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-button">
                    Can I use Bolt AI in my project?
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes! We encourage participants to leverage Bolt AI's capabilities in their projects. We offer
                      special access and resources for competition participants, including:
                    </p>
                    <ul>
                      <li>Free access to our premium API tier during the competition period</li>
                      <li>Technical support from our engineering team</li>
                      <li>Access to exclusive documentation and tutorials</li>
                      <li>Early access to beta features</li>
                    </ul>
                    <p>
                      To get started, simply register for the competition and request API access through your
                      participant dashboard.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-button">
                    Is there a team size limit?
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      There is no strict team size limit, but we recommend teams of 1-5 members for optimal
                      collaboration. Both individual and team submissions are welcome. All team members should be listed
                      in your registration form, and any changes to team composition must be communicated to the
                      competition organizers before the submission deadline.
                    </p>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-button">
                    What is the competition timeline?
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p>The competition follows this timeline:</p>
                    <ul>
                      <li>
                        <strong>Registration Opens:</strong> January 15, 2025
                      </li>
                      <li>
                        <strong>Registration Closes:</strong> April 15, 2025
                      </li>
                      <li>
                        <strong>Submission Deadline:</strong> May 1, 2025
                      </li>
                      <li>
                        <strong>Finalists Announced:</strong> May 15, 2025
                      </li>
                      <li>
                        <strong>Final Presentations:</strong> June 1, 2025
                      </li>
                      <li>
                        <strong>Winners Announced:</strong> June 5, 2025
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="accordion-item">
                  <button className="accordion-button">
                    Do I retain intellectual property rights to my project?
                    <span className="accordion-icon">+</span>
                  </button>
                  <div className="accordion-content">
                    <p>
                      Yes, you retain all intellectual property rights to your project. By participating in the
                      competition, you grant Bolt AI a non-exclusive license to showcase your project for promotional
                      purposes. We encourage open-source submissions, but this is not a requirement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section cta-section">
          <div className="container">
            <div className="cta-content">
              <h2>Ready to Transform the Future?</h2>
              <p>
                Join the Bolt AI revolution and be part of the next generation of artificial intelligence innovation.
              </p>
              <div className="cta-buttons">
                <a href="#register" className="btn btn-primary btn-lg">
                  Register Now <ChevronRight className="icon" />
                </a>
                <a href="#about" className="btn btn-outline btn-lg">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-about">
              <div className="logo">
                <div className="logo-space"></div>
                <span>Bolt AI</span>
              </div>
              <p>Revolutionizing artificial intelligence with cutting-edge technology and innovative solutions.</p>
              <div className="social-links">
                <Link href="#" className="social-link">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="social-link">
                  <Github size={20} />
                </Link>
                <Link href="#" className="social-link">
                  <Linkedin size={20} />
                </Link>
              </div>
            </div>
            <div className="footer-links">
              <h3>Company</h3>
              <ul>
                <li>
                  <Link href="#">About Us</Link>
                </li>
                <li>
                  <Link href="#">Careers</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
                <li>
                  <Link href="#">Press</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Resources</h3>
              <ul>
                <li>
                  <Link href="#">Documentation</Link>
                </li>
                <li>
                  <Link href="#">API Reference</Link>
                </li>
                <li>
                  <Link href="#">Tutorials</Link>
                </li>
                <li>
                  <Link href="#">Community</Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h3>Legal</h3>
              <ul>
                <li>
                  <Link href="#">Terms of Service</Link>
                </li>
                <li>
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="#">Cookie Policy</Link>
                </li>
                <li>
                  <Link href="#">Security</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} Bolt AI. All rights reserved.</p>
            <p>Designed with ❤️ for the future of AI</p>
          </div>
        </div>
      </footer>

      {/* Include the page script component for JavaScript functionality */}
      <PageScript />
    </div>
  )
}

