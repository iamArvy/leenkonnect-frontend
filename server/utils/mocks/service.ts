// const services = [
//   {
//     id: 1,
//     image: '',
//     name: "IT Consulting",
//     summary: "Transform your business with expert IT consultation services. We analyze your technology needs, provide tailored solutions, and implement strategies to optimize efficiency, enhance security, and drive innovation.",
//     content: "Our IT consulting services are designed to help businesses harness the power of technology for growth and efficiency. We start with an in-depth assessment of your current IT infrastructure, identifying strengths, weaknesses, and areas for improvement. Our experts then develop a customized strategy tailored to your business goals, covering areas such as cloud computing, digital transformation, cybersecurity, and IT cost optimization. We work closely with your team to implement these strategies, ensuring seamless integration and minimal disruption to operations. With our guidance, you can make informed technology decisions that drive long-term success."
//   },
//   {
//     id: 2,
//     image: '',
//     name: "Network Setup",
//     summary: "Streamline your operations with professional network setup services. We design, install, and configure reliable networks to keep your business connected and running efficiently.",
//     content: "A well-structured network is the backbone of a modern business. Our network setup services cover everything from designing a scalable infrastructure to installing and configuring hardware and software. We assess your connectivity needs, recommend the best networking solutions, and ensure your network is optimized for performance and security. Whether you're setting up a new office, upgrading your existing infrastructure, or expanding your network capabilities, our experts provide end-to-end solutions, including firewall implementation, VPN setup, and wireless networking. Our goal is to create a seamless, high-speed network that supports your business operations without interruptions."
//   },
//   {
//     id: 3,
//     image: '',
//     name: "Cybersecurity",
//     summary: "Protect your business with advanced cybersecurity services. We safeguard your data, prevent breaches, and ensure compliance with robust security measures tailored to your needs.",
//     content: "In today's digital landscape, cybersecurity is a top priority. Our comprehensive cybersecurity services help businesses protect their critical data and systems from cyber threats. We conduct security audits, implement advanced threat detection measures, and deploy robust security protocols to prevent unauthorized access and data breaches. Our services include firewall setup, intrusion detection, malware protection, endpoint security, and security awareness training for employees. Additionally, we ensure compliance with industry regulations such as GDPR, HIPAA, and ISO standards. With our proactive approach, we minimize risks and fortify your IT environment against evolving cyber threats.",
//   },
//   {
//     id: 4,
//     image: '',
//     name: "Managed IT Services",
//     summary: "Enhance your business efficiency with fully managed IT services. We provide proactive support, system monitoring, and IT infrastructure management to ensure seamless operations.",
//     content: "Our managed IT services provide businesses with reliable, round-the-clock IT support and maintenance. We handle everything from system monitoring and software updates to troubleshooting and data backups, allowing you to focus on your core business. Our proactive approach ensures that potential IT issues are identified and resolved before they disrupt your operations. With services like remote monitoring, helpdesk support, cloud management, and disaster recovery planning, we offer scalable IT solutions tailored to your business needs. Whether you need full IT outsourcing or co-managed support, we provide the expertise and resources to keep your technology running smoothly and securely."
//   }
// ];

const services = [
  {
    id: "1",
    name: "IT Consulting",
    summary:
      "Transform your business with expert IT consultation services. We analyze your technology needs, provide tailored solutions, and implement strategies to optimize efficiency, enhance security, and drive innovation.",
    features: [
      "Comprehensive IT infrastructure assessment",
      "Customized digital transformation strategies",
      "Cloud computing and migration guidance",
      "Cybersecurity and compliance consulting",
      "IT cost optimization and efficiency improvement",
    ],
    wikiLink: "https://en.wikipedia.org/wiki/Information_technology_consulting",
  },
  {
    id: "2",
    name: "Network Setup",
    summary:
      "Streamline your operations with professional network setup services. We design, install, and configure reliable networks to keep your business connected and running efficiently.",
    features: [
      "Network design and architecture planning",
      "LAN/WAN installation and configuration",
      "Firewall and VPN setup",
      "Wireless networking solutions",
      "Scalable infrastructure implementation",
    ],
    wikiLink: "https://en.wikipedia.org/wiki/Computer_network",
  },
  {
    id: "3",
    name: "Cybersecurity",
    summary:
      "Protect your business with advanced cybersecurity services. We safeguard your data, prevent breaches, and ensure compliance with robust security measures tailored to your needs.",
    features: [
      "Security audits and vulnerability assessments",
      "Threat detection and prevention systems",
      "Firewall and endpoint protection setup",
      "Incident response and recovery planning",
      "Compliance with GDPR, HIPAA, and ISO standards",
    ],
    wikiLink: "https://en.wikipedia.org/wiki/Computer_security",
  },
  {
    id: "4",
    name: "Managed IT Services",
    summary:
      "Enhance your business efficiency with fully managed IT services. We provide proactive support, system monitoring, and IT infrastructure management to ensure seamless operations.",
    features: [
      "24/7 system monitoring and maintenance",
      "Helpdesk and remote support",
      "Cloud and data backup management",
      "Disaster recovery planning",
      "Software updates and patch management",
    ],
    wikiLink: "https://en.wikipedia.org/wiki/Managed_services",
  },
  {
    id: "5",
    name: "Cloud Solutions",
    summary:
      "Accelerate your digital transformation with secure and scalable cloud solutions, from migration to management.",
    features: [
      "Cloud migration and integration",
      "Infrastructure as a Service (IaaS) setup",
      "Platform as a Service (PaaS) implementation",
      "Cloud security and compliance management",
      "Cost optimization for cloud operations",
    ],
    wikiLink: "https://en.wikipedia.org/wiki/Cloud_computing",
  },
  {
    id: "6",
    name: "Software Development",
    summary:
      "Build custom software solutions that streamline your business operations and enhance customer experience.",
    features: [
      "Custom web and mobile app development",
      "API and system integration",
      "Agile development and continuous delivery",
      "UX/UI design and prototyping",
      "Ongoing software maintenance and support",
    ],
    wikiLink: "https://en.wikipedia.org/wiki/Software_development",
  },
  {
    id: "7",
    name: "IT Support",
    summary:
      "Get reliable IT support for your business operations — from troubleshooting to technical assistance.",
    features: [
      "Remote and on-site technical support",
      "Hardware and software troubleshooting",
      "System upgrades and maintenance",
      "User training and knowledge transfer",
      "Proactive monitoring and performance tuning",
    ],
    wikiLink: "https://en.wikipedia.org/wiki/Technical_support",
  },
];


export const mockGetServices = () => {
  return services;
}