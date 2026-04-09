import './framer/styles.css'
import { useState, useRef, useEffect } from 'react'
import { BrowserRouter, Routes, Route, useParams, Link } from 'react-router-dom'

import MainFramerComponent from './framer/main'
import EducationItemFramerComponent from './framer/education-item'
import CertificateItemFramerComponent from './framer/certificate-item'
import ButtonFramerComponent from './framer/button'
import ProjectItemFramerComponent from './framer/project-item'
import LoadMoreButtonFramerComponent from './framer/load-more-button'
import ProjectPagesFramerComponent from './framer/project-pages'

// Full Projects CMS Data - PARSED EXACTLY
const PROJECTS_DATA: Record<string, any> = {
  "djwya": {
    title: "DJWYA",
    slug: "djwya",
    subheading: "Predictive Discovery, Agentic Data Pipelines, and Data Visualization",
    year: "2026",
    type: "Website",
    objective: `<p dir="auto">Navigating the global electronic music landscape has become a problem of scale. With thousands of festivals worldwide hosting between 10 to 600 artists each, the gap between a user’s personal listening library and live festival discovery is growing. In 2026, finding where a specific electronic artist is performing still requires exhaustive manual searching. Additionally, the financial commitment of a festival ticket, often $300+, demands a level of certainty that "vibe-based" marketing just can't provide.</p><p dir="auto">The Solution: The goal of DJWYA was to bridge this gap by treating musical taste as a quantifiable data set. By creating a system that understands a user’s "Sonic DNA," we can eliminate festival discovery fatigue and ensure that every festival investment is backed by mathematical synergy.<br><br></p><ol dir="auto"><li data-preset-tag="p"><p><strong>Global Artist Intelligence:</strong> Implement a centralized lookup system to track artist performances across the global festival circuit.</p></li><li data-preset-tag="p"><p><strong>Quantitative Taxonomy:</strong> Build a multi-dimensional mathematical model to classify hundreds of electronic subgenres based on sonic characteristics (Intensity, Euphoria, Bass, etc.).</p></li><li data-preset-tag="p"><p><strong>Interactive Discovery:</strong> Design a high-fidelity, interactive, force directed network graph to make navigating complex genre relationships intuitive and engaging.</p></li><li data-preset-tag="p"><p><strong>Synergistic Matching:</strong> Develop a predictive recommendation engine that calculates "Sonic DNA" similarity between user listening data and festival lineups.</p></li><li data-preset-tag="p"><p><strong>User Analytics Dashboards:</strong> Empower users to visualize their own listening habits through advanced data visualizations, including StarCharts and Sunburst distributions.</p></li><li data-preset-tag="p"><p><strong>Agentic Ingestion:</strong> Automate the aggregation and processing of thousands of festival lineups through agentic ETL pipelines and image-scraping automation.</p></li></ol>`,
    process: `<p dir="auto">I began by mapping out a relational schema in Supabase PostgreSQL designed to support complex many-to-many relationships between artists, subgenres, and global event metadata.</p><ul dir="auto"><li data-preset-tag="p"><p><strong>Backend Engineering (Python):</strong> Initial development focused on high-performance ingestion engines. When faced with the limitations of current streaming APIs (Spotify🪦), I pivoted to a robust multi-source integration using Last.fm for granular artist metadata.</p></li><li data-preset-tag="p"><p><strong>The "Sonic DNA":</strong> To solve the problem of subjective "vibes," I engineered a proprietary classification system. This involved defining a 7-axis vector space (Intensity, Euphoria, Space, Pulse, Chaos, Swing, Bass) to mathematically map subgenres, and the artists carrying them, into a searchable sonic profile.</p></li><li data-preset-tag="p"><p><strong>Frontend &amp; UX (Next.js/TypeScript):</strong> Once the backend was stable, I architected a responsive frontend using React and Tailwind CSS. The interface was evolved through constant iteration, refactoring the codebase as the system scaled to handle more complex data relationships.</p></li><li data-preset-tag="p"><p><strong>Agentic Data Scavenging:</strong> To bring the database to life, I deployed an "Agentic" worker on a remote homelab workstation using OpenClaw. This worker autonomously scrapes the web for festival posters and pipes the raw data through an automated ETL pipeline into my production database.</p></li></ul>`,
    outcome: `<p dir="auto">The result is <strong>DJWYA</strong>, a fully decoupled ecosystem that effectively bridges the gap between music streaming data and live performance discovery. The platform successfully transforms listening habits into actionable intelligence, providing users with a definitive "Synergy Score" for festivals worldwide. By automating the extraction of lineup data from thousands of unstructured sources, I created a self-sustaining data engine that remains accurate as the festival circuit evolves.</p>`,
    standout: `<ul dir="auto"><li data-preset-tag="p"><p><strong>The Sonic DNA Brain:</strong> A custom-engineered mathematical model that quantifies musical preference into a 7-dimensional vector, allowing for precision matching between listeners and event lineups.</p></li><li data-preset-tag="p"><p><strong>Interactive Force-Directed Graph (D3.js):</strong> A massive, navigable "Sonic Universe" visualization. Each genre node and lineage edge was populated using an LLM-assisted script to ensure accurate genealogical relationships between musical styles.</p></li><li data-preset-tag="p"><p><strong>Geospatial Discovery (Leaflet):</strong> A dynamic festival map featuring high-density clustering and geolocation, allowing users to visualize the global music landscape geographically.</p></li><li data-preset-tag="p"><p><strong>Automated Agentic ETL:</strong> A headless scraping pipeline that utilizes OCR and LLM processing to turn flat images of festival posters into structured, relational database entries with zero manual input.</p></li><li data-preset-tag="p"><p><strong>Complex SQL Analytics:</strong> Optimized PostgreSQL queries and JSONB processing used to generate high-fidelity user taste visualizations like the "Genre Donut Chart" and "Sonic DNA StarChart"</p></li></ul>`,
    thumbnails: [
      "https://framerusercontent.com/images/oqSdgiTHA889fbV5iAZZcF2YjM.gif",
      "https://framerusercontent.com/images/NdCpHRHsJnn0NS4sRwwgxUjxM.png",
      "https://framerusercontent.com/images/vFLvQG3UqNfBVAVEQlhlCpBjX2k.gif",
      "https://framerusercontent.com/images/Py7CJ9J9JWIYKogqcdM9hr6319w.gif"
    ]
  },
  
  "lab": {
    title: "Cyber Security Homelab",
    slug: "lab",
    subheading: "AD Hardening & Incident Response",
    year: "Dec 2025 - Now",
    type: "Cyber Security",
    objective: `<p dir="auto">Initially, my objective was to create a simple vmWare Windows 11 based Homelab, in which I could get hands on experience with CyberSecurity tools in a simulated environment as fast and easily as possible. But just as soon as I began research on the art of the Homelab I had thought to myself "maybe running 5+ Virtual Machines on top of the already bloated windows 11 will be a little rough" and "How will I be able to work on it out of home?".  At that moment I had a Eureka.</p><ul dir="auto"><li data-preset-tag="p"><p>VPN Secure</p></li><li data-preset-tag="p"><p>Low Latency</p></li><li data-preset-tag="p"><p>Baremetal </p></li><li data-preset-tag="p"><p>Active Directory</p></li><li data-preset-tag="p"><p>Cyber Security Environment</p></li><li data-preset-tag="p"><p>SIEM</p></li></ul><p dir="auto">A highly efficient, headless, remote and secure Homelab in which I could even virtualize my own daily driver OS and work from whatever device, whenever and wherever I want, with the maximum performance possible.</p>`,
    process: `<p dir="auto"><strong>Architecture &amp; Virtualization</strong> I began by deploying Proxmox VE (Type-1 Hypervisor) on bare metal to maximize hardware efficiency. To simulate a realistic segmented network, I configured pfSense as the virtual router/firewall, creating a strict boundary between my home network and the vulnerable lab environment. This ensured that any malware or attacks executed within the lab remained contained.</p><p dir="auto"><strong>Identity &amp; Infrastructure (Active Directory)</strong> A core goal was simulating a corporate environment. I deployed Windows Server 2022 as the Domain Controller, configuring Active Directory Domain Services (AD DS), DNS, and DHCP. I joined the Windows 11 endpoint to the domain and created Group Policy Objects (GPOs) to manage security baselines and ultimately mimic the administration tasks of a real IT infrastructure.</p><p dir="auto"><strong>Security Monitoring (SIEM Integration)</strong> To move from "building" to "analyzing," I set  an Ubuntu Server VM running Splunk Enterprise. The challenge was ensuring visibility, so I configured Splunk Universal Forwarders on the Windows hosts. I also installed Sysmon with a SwiftOnSecurity configuration to generate granular event logs such as process creation and network connections, which were then ingested by Splunk for real-time monitoring.</p><p dir="auto"><strong>High-Performance Remote Access</strong> The most technically demanding phase was enabling remote daily-driving. Standard RDP and noVNC latency were insufficient for daily use. I implemented PCIe GPU Passthrough to dedicate my physical graphics card to a virtualization of my Arch Linux PC. To solve the latency issue, I deployed Moonlight (client) and Sunshine (host), using the NVENC encoder to stream the desktop with extremely low latency. Finally, I integrated Tailscale (Zero-Trust VPN) to allow secure, encrypted access to the entire lab from anywhere without exposing ports to the open internet.</p>`,
    outcome: `<p dir="auto"><strong>Functional Enterprise Simulation</strong> The result is a fully contained, persistent Active Directory environment that mirrors a small enterprise network. I now have a "live fire" range where I can execute attacks (using the Kali Linux instance) and immediately pivot to the Blue Team side to observe how those attacks appear in Splunk logs.</p><p dir="auto"><strong>Validated Defense Visibility</strong> By testing against my own virtual environment, using techniques like Nmap scanning and LLMNR/NBT-NS Poisoning, I confirmed that my logging pipeline works. I can now write Splunk queries to detect the specific artifacts left behind by these attacks, bridging the gap between theoretical knowledge and practical threat detection.</p><p dir="auto"><strong>Remote Workstation Capability</strong> Beyond security, I successfully solved the "performance vs. security" trade-off. The GPU passthrough and Sunshine configuration allow me to use a secure, virtualized Arch Linux environment for daily tasks with near native-level performance, regardless of my physical location. This project proved my ability to troubleshoot complex hardware virtualization issues and architect a system that is both secure and usable.</p>`,
    standout: `<ul dir="auto"><li data-preset-tag="p"><p><strong>PCIe GPU Passthrough:</strong> Native-performance graphics dedicated to virtualized workloads.</p></li><li data-preset-tag="p"><p><strong>Moonlight/Sunshine Integration:</strong> Sub-50ms latency for hardware-accelerated remote desktop access.</p></li><li data-preset-tag="p"><p><strong>Zero-Trust Networking:</strong> Encrypted, peer-to-peer remote management via Tailscale VPN.</p></li><li data-preset-tag="p"><p><strong>Purple Team Architecture:</strong> Integrated Kali Linux and Splunk environment for attack-defense simulation.</p></li></ul>`,
    thumbnails: [
      "https://framerusercontent.com/images/LXETyWeQitZTtKu7uVopd8vERrE.png",
      "https://framerusercontent.com/images/iw37ObccSFEnaMPdHQ0Ed7mJuI.png"
    ]
  },
  "myshell": {
    title: "Custom Shell",
    slug: "myshell",
    subheading: "POSIX Compliant Comand Line Interface",
    year: "March 2025",
    type: "C",
    objective: `<p dir="auto">The primary goal was to design and implement myshell, a functional command line shell utility in C that mirrors the core capabilities of standard shells like bash or zsh. The project focused on mastering POSIX system calls to manage process lifecycles, handle unbuffered stream I/O, and manipulate the environment. Beyond simple command execution, the objective was to build a robust tool capable of sophisticated features like piping, file redirection, and conditional execution logic.</p>`,
    process: `<p dir="auto">The development process was centered on the "Parse-Evaluate-Execute" loop, requiring precise control over low-level system interactions:</p><ul><li data-preset-tag="p"><p dir="auto">Input &amp; Tokenization: Implemented a custom parser using read() for unbuffered I/O to handle interactive and batch modes. The parser identifies tokens while managing special characters such as redirections (&lt;, &gt;), pipes( | ), comments (#), and wildcards (*).</p></li></ul><ul><li data-preset-tag="p"><p dir="auto">Process Management: Engineered an execution engine that uses fork() to spawn child processes and execv() to replace the child’s image with the target executable.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto">Environment Navigation: Built an automated search algorithm to locate binaries in /usr/local/bin, /usr/bin, and /bin, allowing for "bare name" command execution without explicit paths.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto">I/O Redirection &amp; Inter-process Communication: Utilized pipe() to create data channels between processes and dup2() to redirect standard input/output streams, allowing for complex command chaining.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto">State Management: Developed a persistent state tracker (previousStatus) to enable conditional logic (and/or), where the execution of a command depends on the success or failure of the preceding one.</p></li></ul>`,
    outcome: `<p dir="auto">The project resulted in a fully featured, POSIX-compliant shell that provides a seamless user experience in both interactive terminal sessions and automated batch script processing.</p><ul><li data-preset-tag="p"><p dir="auto">Standardized Shell Behavior: Successfully implemented essential built-in commands including cd, pwd, and exit.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto">Advanced Command Handling: Achieved complex workflow support including two-stage pipelines and multi-file redirection.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto">Reliable Error Handling: Established an error handling system that continues execution after non-fatal command failures and provides descriptive error messages for invalid syntax or missing directories.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto">Systems Proficiency: Proved the ability to manage low-level resources, handle file descriptors, and synchronize parent and child processes in a C environment.</p></li></ul>`,
    standout: `<ul><li data-preset-tag="p"><p dir="auto">POSIX Process Management: Native fork() and execv() implementation for child process lifecycles.</p></li><li data-preset-tag="p"><p dir="auto">Dual-Mode Execution: Automatic detection of Interactive vs. Batch processing using isatty().</p></li><li data-preset-tag="p"><p dir="auto">Wildcard Pattern Matching: Custom directory scanning engine for asterisk (*) path expansion.</p></li><li data-preset-tag="p"><p dir="auto">Zero-Dependency Pipelines: Manual I/O redirection using pipe() and dup2() system calls.</p></li><li data-preset-tag="p"><p dir="auto">Logical Conditional Execution: Support for and/or syntax based on process exit status codes.</p></li></ul>`,
    thumbnails: ["https://framerusercontent.com/images/ZOAntAuz0TGvNumai3XPsKB2G1E.png"]
  },
  "aiticket": {
    title: "AI-Driven IT Service Management System",
    slug: "aiticket",
    subheading: "ML for Ticket Triage & Routing",
    year: "Nov 2025 - Dec 2025",
    type: "ML",
    objective: `<p dir="auto">The goal was to engineer an intelligent ticketing system designed to minimize SLA (Service Level Agreement) breaches and ensure fair workload distribution among helpdesk staff. Standard systems often fail under high pressure or when ticket categories are missing. We aimed to build a pipeline that could automatically categorize incoming requests and then optimize the schedule using local search heuristics. Our focus was on moving beyond "simple" greedy assignments to create a system that actively manages helpdesk health by balancing speed with team sustainability.</p>`,
    process: `<p dir="auto">As the Data Scientist on the team, my primary responsibility was the "Triage" phase of the pipeline.</p><ul><li data-preset-tag="p"><p dir="auto"><strong>NLP Triage Pipeline:</strong> I developed a text preprocessing and classification engine using Scikit-learn. I implemented a Multinomial Naive Bayes (NB) classifier to predict ticket categories based on issue descriptions.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Confidence-Based Routing:</strong> To ensure reliability, I built a logic gate where the model only routes tickets if the prediction confidence exceeds a 0.60 threshold. If the model is uncertain, the system triggers a Keyword-based fallback mechanism.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Streamlit Visualization:</strong> I utilized Streamlit to build an interactive dashboard that visualized our comparative results. This allowed us to generate real-time graphs showing how different algorithms (Greedy vs. Simulated Annealing) handled various "stress levels" of ticket volume.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>System Integration:</strong> My classification output fed directly into the optimization engine (Simulated Annealing), providing the "Predicted Category" necessary for the scheduler to match tickets with qualified helpers.</p></li></ul>`,
    outcome: `<p dir="auto">Our testing across "Easy" and "Hard" regimes provided clear evidence of the system's value:</p><ul><li data-preset-tag="p"><p dir="auto"><strong>Significant Breach Reduction:</strong> In "Hard/Noisy" scenarios, the Simulated Annealing engine rescued the schedule, reducing the SLA breach rate from 16.36% to 10.45%.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Successful Triage:</strong> The Naive Bayes model achieved an accuracy of 0.76, providing a probabilistic foundation for automated routing.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Validation of Local Search:</strong> We proved that while simple heuristics work for low-load scenarios, optimization is essential during a crisis. Our system effectively "swapped" tasks to reduce workload variance, preventing helper burnout.</p></li></ul>`,
    standout: `<ul><li data-preset-tag="p"><p dir="auto">Hybrid NLP Triage: Scikit-Learn Naive Bayes combined with keyword-based fallbacks.</p></li><li data-preset-tag="p"><p dir="auto">Streamlit Visualization: Interactive dashboards for real-time SLA and workload analytics.</p></li><li data-preset-tag="p"><p dir="auto">Confidence-Threshold Routing: Automated assignment restricted to high-probability predictions (&gt;0.60).</p></li><li data-preset-tag="p"><p dir="auto">Simulated Annealing Optimization: Multi-variable local search to minimize SLA breaches and helper burnout.</p></li><li data-preset-tag="p"><p dir="auto">Automated Data Pipeline: Synthetic CSV processing with customized feature engineering.</p></li><li data-preset-tag="p"><p dir="auto">SLA "Rescue" Logic: Dynamic task-swapping to mitigate bottlenecks during high-traffic "Hard" regimes.</p></li></ul>`,
    thumbnails: ["https://framerusercontent.com/images/DEvJAKy389T8ODWpjHZvRzhIM.png"]
  },
  "rudonut": {
    title: "RUDONUTS",
    slug: "rudonut",
    subheading: "Kotlin Driven Software Development",
    year: "Nov 2025 - Dec 2025",
    type: "Kotlin",
    objective: `<p dir="auto">The objective was to develop "RU-Donuts," a fully functional native Android application that mimics a real-world mobile ordering platform. The goal was to master the Android SDK and Activity Lifecycle by building a system that could handle complex state management (shopping carts, order history) across multiple screens without relying on a traditional backend database.</p>`,
    process: `<p dir="auto">The development focused on object-oriented design and strict Android architectural patterns:</p><ul><li data-preset-tag="p"><p dir="auto"><strong>Architecture &amp; Navigation:</strong> I designed a multi-activity architecture (Main Menu, Ordering, Shopping Cart) connected via Intents. To manage the user's session data, I implemented the Singleton Design Pattern, creating a centralized "Cart" object that persists data seamlessly as the user navigates between different screens.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>UI Engineering:</strong> Instead of basic static lists, I implemented RecyclerViews with custom adapters to handle the dynamic rendering of 14+ distinct donut flavors and images. I utilized XML layouts to structure the interface, integrating Spinners and ListViews to allow for granular customization of coffee and sandwich orders.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Logic &amp; Reliability:</strong> I built a dynamic pricing engine that updates order totals in real-time as users select toppings or modify sizes. To ensure a professional user experience, I enforced strict exception handling to prevent runtime crashes and externalized all string resources to strings.xml to follow localization best practices.</p></li></ul>`,
    outcome: `<p dir="auto">The final product is a robust, "store-ready" application validated on Pixel API 34 emulators. It features a dynamic shopping basket, a persistent history of placed orders, and a responsive UI that handles user inputs such as, adding toppings or removing items, without performance degradation or loss of state.</p>`,
    standout: `<ul><li data-preset-tag="p"><p dir="auto"><strong>Singleton State Management: </strong>Centralized data structure to persist "Shopping Cart" state across multiple Activity lifecycles.</p></li><li data-preset-tag="p"><p dir="auto"><strong>Advanced RecyclerViews: </strong>Custom adapters for efficient, memory-safe rendering of scrollable, image-rich menu lists.</p></li><li data-preset-tag="p"><p dir="auto"><strong>Dynamic Pricing Engine:</strong> Object-oriented logic that recalculates totals in real-time based on attribute selection (toppings/sizes).</p></li><li data-preset-tag="p"><p dir="auto"><strong>Crash-Resistant Architecture: </strong>Comprehensive global exception handling ensuring 100% uptime during invalid user inputs.</p></li><li data-preset-tag="p"><p dir="auto"><strong>Localization Ready: </strong>Adherence to professional Android standards by decoupling UI text from logic via strings.xml.</p></li></ul>`,
    thumbnails: ["https://framerusercontent.com/images/GUGTfhBQuW7MQVtk9Nx9IJVUWA.png"]
  },
  "dns": {
    title: "DNS Resolver",
    slug: "dns",
    subheading: "DNS Protocol & Network Analysis",
    year: "Oct 2025",
    type: "Python",
    objective: `<p dir="auto">Design and implement a custom protocol mimicking the Domain Name System on a LAN with TCP sockets.</p>`,
    process: `<p dir="auto">The development required orchestrating a multi-stage communication pipeline across several networked machines:</p><ul><li data-preset-tag="p"><p dir="auto"><strong>Distributed Architecture</strong>: I developed a suite of six specialized programs (client.py, ls.py, rs.py, etc.) that simulate the real-world hierarchy of the internet. Each server maintains its own in-memory database loaded from local text files.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Iterative Resolution Logic:</strong> I engineered the Local Server (LS) to act as the central coordinator. If a query isn't in its cache, the LS iteratively contacts the Root Server, follows "NS" redirections to TLD servers, and finally retrieves the "AA" (Authoritative) response for the client.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Socket Programming:</strong> Using Python’s socket library, I implemented TCP transport to handle the request/response lifecycle. I ensured that the Identification Field was preserved across all hops so the client could asynchronously match incoming responses to original queries.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Caching Mechanism:</strong> To reduce network latency, I implemented a custom cache in the LS that automatically stores "AA" responses received more than three times, allowing subsequent identical queries to be resolved locally.</p></li></ul>`,
    outcome: `<p dir="auto">The project resulted in a fully functional, distributed DNS infrastructure capable of resolving complex hostnames across a multi-node network:</p><ul><li data-preset-tag="p"><p dir="auto"><strong>Reliable Multi-Server Communication:</strong> Successfully tested the system with each server running on a separate physical machine, managing remote socket connections and port assignments.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Protocol Accuracy</strong>: Achieved precise handling of various RU-DNS flags, including AA for authoritative hits, NS for TLD redirections, and NX for non-existent domains.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>System Transparency:</strong> Built a comprehensive logging system where every server and the client records its transactions in real-time, providing a full audit trail of the resolution path.</p></li></ul><ul><li data-preset-tag="p"><p dir="auto"><strong>Performance Optimization:</strong> The caching logic effectively reduced the number of recursive hops needed for frequent queries, demonstrating an understanding of efficient resource management.</p></li></ul>`,
    standout: `<ul><li data-preset-tag="p"><p dir="auto">Hierarchical Iterative Resolution</p></li><li data-preset-tag="p"><p dir="auto">Intelligent Local Caching</p></li><li data-preset-tag="p"><p dir="auto">TCP Based Protocol</p></li><li data-preset-tag="p"><p dir="auto">Identification Tracking</p></li><li data-preset-tag="p"><p dir="auto">Modular Server Design</p></li></ul>`,
    thumbnails: ["https://framerusercontent.com/images/Pnf4ETPnibfSqzpP44jbySoKmiA.png"]
  }
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] h-20 bg-[rgb(20,20,23)]/80 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-10 shadow-2xl">
      <Link to="/" className="text-white text-2xl font-black tracking-tighter hover:opacity-70 transition-opacity">
        OLIVER<span className="text-white/40">KING</span>
      </Link>

      <div className="flex items-center gap-10">
        <a href="/#home" className="text-white font-medium hover:text-white/60 transition-colors uppercase text-sm tracking-widest">Home</a>
        
        <div className="relative" ref={dropdownRef}>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-white font-medium hover:text-white/60 transition-colors uppercase text-sm tracking-widest outline-none"
          >
            Projects
            <svg className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
          </button>
          
          {isOpen && (
            <div className="absolute top-12 right-0 w-64 bg-[rgb(30,30,33)] border border-white/10 rounded-2xl overflow-hidden shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
              {Object.values(PROJECTS_DATA).map((p: any) => (
                <Link 
                  key={p.slug}
                  to={`/projects/${p.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-6 py-4 text-white hover:bg-white/5 transition-colors border-b border-white/5 last:border-0"
                >
                  <p className="font-bold text-sm tracking-tight">{p.title}</p>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1 truncate">{p.subheading}</p>
                </Link>
              ))}
            </div>
          )}
        </div>

        <a href="mailto:www.oli.m.king@proton.me" className="px-6 py-2 bg-white text-black font-bold text-xs uppercase tracking-widest rounded-full hover:bg-white/90 transition-all">Contact</a>
      </div>
    </nav>
  )
}

function Home() {
  return (
    <div className='flex flex-col items-center gap-3 bg-[rgb(20,_20,_23)] pt-20'>
      <div id="home" className="w-full">
        <MainFramerComponent.Responsive />
      </div>

    </div>
  )
}

function ProjectDetail() {
  const { slug } = useParams()
  const project = PROJECTS_DATA[slug || ""]
  const [imgIndex, setImgIndex] = useState(0)

  if (!project) {
    return <div className="text-white p-40 flex items-center justify-center min-h-screen">Project not found</div>
  }

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project.thumbnails.length > 1) {
      setImgIndex((prev) => (prev + 1) % project.thumbnails.length)
    }
  }

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (project.thumbnails.length > 1) {
      setImgIndex((prev) => (prev - 1 + project.thumbnails.length) % project.thumbnails.length)
    }
  }

  return (
    <div className='flex flex-col items-center bg-[rgb(20,_20,_23)] min-h-screen relative pt-20'>
      <div className="relative w-full max-w-[1440px] group">
        {/* Navigation Arrows - Fixed to Hero Image Area (Y=542 based on DOM analysis) */}
        {project.thumbnails.length > 1 && (
          <div className="absolute top-[542px] left-0 w-full flex justify-between px-8 z-50 pointer-events-none">
            <button 
              onClick={prevSlide}
              className="p-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 text-white hover:bg-white/30 transition-all opacity-60 hover:opacity-100 pointer-events-auto shadow-2xl"
              aria-label="Previous slide"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button 
              onClick={nextSlide}
              className="p-3 rounded-full bg-white/15 backdrop-blur-xl border border-white/25 text-white hover:bg-white/30 transition-all opacity-60 hover:opacity-100 pointer-events-auto shadow-2xl"
              aria-label="Next slide"
            >
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        )}

        <div onClick={nextSlide} className="cursor-pointer w-full flex flex-col items-center">
          <ProjectPagesFramerComponent.Responsive
            rqYSr2Mxd={project.title}
            oYD_u0e5Y={project.subheading}
            INKLqRsL5={project.year}
            YE4jP5GT_={project.type}
            m88dVLOyM={project.objective}
            gYOm4RnCm={project.process}
            pX6uv4AHe={project.outcome}
            N10BGPLRR={project.standout}
            rcpXaqRkc={{ src: project.thumbnails[imgIndex] }}
          />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
};