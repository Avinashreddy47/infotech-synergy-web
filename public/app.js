var app = angular.module('infotechApp', ['ngRoute']);

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'public/views/home.html',
      controller: 'HomeController',
    })
    .when('/services', {
      templateUrl: 'public/views/services.html',
      controller: 'ServicesController',
    })
    .when('/about', {
      templateUrl: 'public/views/about.html',
      controller: 'AboutController',
    })
    .when('/contact', {
      templateUrl: 'public/views/contact.html',
      controller: 'ContactController',
    })
    .otherwise({ redirectTo: '/' });
});

// Home Controller
app.controller('HomeController', function ($scope) {
  $scope.heroTitle = 'Empowering Innovation Through Technology';
  $scope.heroSubtitle =
    'Transform your business with cutting-edge solutions in software development, cloud computing, and digital transformation';

  $scope.features = [
    {
      icon: '🚀',
      title: 'Innovation First',
      description:
        'Leveraging the latest technologies and methodologies to deliver cutting-edge solutions that keep you ahead of the competition',
    },
    {
      icon: '💎',
      title: 'Quality Assured',
      description:
        'Rigorous testing and quality control processes ensure every solution meets the highest standards of excellence',
    },
    {
      icon: '🤝',
      title: 'Client Partnership',
      description:
        'Building lasting relationships through transparent communication, collaboration, and dedicated support',
    },
    {
      icon: '⚡',
      title: 'Agile Delivery',
      description:
        'Fast, iterative development cycles that adapt to your changing needs and deliver value quickly',
    },
    {
      icon: '🔒',
      title: 'Security First',
      description:
        'Enterprise-grade security measures protecting your data and systems from evolving threats',
    },
    {
      icon: '📈',
      title: 'Scalable Solutions',
      description:
        'Future-proof architectures designed to grow seamlessly with your business needs',
    },
  ];

  $scope.stats = [
    { value: '500+', label: 'Projects Delivered' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Expert Team' },
    { value: '15+', label: 'Years Experience' },
  ];

  $scope.servicesPreview = [
    {
      icon: '💻',
      title: 'Software Development',
      description:
        'Custom software solutions tailored to your unique business requirements, built with modern technologies and best practices',
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      description:
        'Scalable cloud infrastructure and migration services to optimize performance, reduce costs, and enhance flexibility',
    },
    {
      icon: '🔐',
      title: 'Cybersecurity',
      description:
        'Comprehensive security solutions to protect your digital assets, data, and infrastructure from cyber threats',
    },
  ];
});

// Services Controller
app.controller('ServicesController', function ($scope) {
  $scope.services = [
    {
      icon: '💻',
      title: 'Software Development',
      tagline: 'Custom Solutions for Modern Businesses',
      description:
        'We create bespoke software applications that perfectly align with your business objectives. From web applications to enterprise systems, our expert developers use cutting-edge technologies to build scalable, maintainable, and high-performance solutions.',
      features: [
        'Custom Web Applications',
        'Enterprise Software Solutions',
        'API Development & Integration',
        'Legacy System Modernization',
        'Microservices Architecture',
        'Progressive Web Apps (PWA)',
      ],
    },
    {
      icon: '☁️',
      title: 'Cloud Solutions',
      tagline: 'Scalable Infrastructure for Growth',
      description:
        'Harness the power of cloud computing with our comprehensive cloud services. We help you migrate, optimize, and manage your infrastructure on leading platforms like AWS, Azure, and Google Cloud.',
      features: [
        'Cloud Migration Services',
        'Infrastructure as Code (IaC)',
        'Cloud Architecture Design',
        'DevOps & CI/CD Pipeline',
        'Cloud Cost Optimization',
        'Multi-Cloud Strategy',
      ],
    },
    {
      icon: '🎯',
      title: 'IT Consulting',
      tagline: 'Strategic Technology Guidance',
      description:
        'Our experienced consultants provide strategic guidance to help you make informed technology decisions. We analyze your current systems, identify opportunities, and create roadmaps for digital transformation.',
      features: [
        'Technology Strategy Planning',
        'Digital Transformation',
        'System Architecture Review',
        'Technology Stack Selection',
        'Process Optimization',
        'IT Governance & Compliance',
      ],
    },
    {
      icon: '🔐',
      title: 'Cybersecurity',
      tagline: 'Protecting Your Digital Assets',
      description:
        'Safeguard your business with our comprehensive cybersecurity services. We implement robust security measures, conduct assessments, and provide ongoing monitoring to protect against evolving threats.',
      features: [
        'Security Audits & Assessments',
        'Penetration Testing',
        'Security Architecture Design',
        'Incident Response Planning',
        'Compliance Management',
        '24/7 Security Monitoring',
      ],
    },
    {
      icon: '📊',
      title: 'Data Analytics',
      tagline: 'Insights That Drive Decisions',
      description:
        'Transform your data into actionable insights with our advanced analytics solutions. We help you collect, process, and visualize data to make informed business decisions.',
      features: [
        'Business Intelligence Solutions',
        'Data Warehouse Design',
        'Predictive Analytics',
        'Real-time Dashboards',
        'Machine Learning Models',
        'Data Visualization',
      ],
    },
    {
      icon: '📱',
      title: 'Mobile Development',
      tagline: 'Apps That Users Love',
      description:
        'Create engaging mobile experiences with our native and cross-platform app development services. We build intuitive, high-performance mobile applications for iOS and Android.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Mobile Backend Services',
        'App Maintenance & Support',
      ],
    },
  ];

  $scope.process = [
    {
      number: '1️⃣',
      title: 'Discovery',
      description:
        'We start by understanding your business goals, challenges, and requirements through detailed consultations',
    },
    {
      number: '2️⃣',
      title: 'Planning',
      description:
        'Our team creates a comprehensive project plan with timelines, milestones, and resource allocation',
    },
    {
      number: '3️⃣',
      title: 'Development',
      description:
        'Using agile methodologies, we build your solution iteratively with regular feedback and adjustments',
    },
    {
      number: '4️⃣',
      title: 'Testing',
      description:
        'Rigorous quality assurance ensures your solution is bug-free, secure, and performs optimally',
    },
    {
      number: '5️⃣',
      title: 'Deployment',
      description:
        'We handle the entire deployment process, ensuring a smooth transition to production',
    },
    {
      number: '6️⃣',
      title: 'Support',
      description:
        'Ongoing maintenance and support keep your solution running smoothly and up-to-date',
    },
  ];
});

// About Controller
app.controller('AboutController', function ($scope) {
  $scope.aboutTitle = 'Transforming Businesses Through Technology';
  $scope.aboutDescription1 =
    'Founded in 2010, InfoTech Synergy has been at the forefront of technology innovation, helping businesses across the globe achieve their digital transformation goals. With over 15 years of experience, we have successfully delivered 500+ projects for clients ranging from startups to Fortune 500 companies.';
  $scope.aboutDescription2 =
    "Our team of 50+ expert professionals brings together diverse skills in software development, cloud computing, cybersecurity, data analytics, and IT consulting. We pride ourselves on staying ahead of technology trends and continuously investing in our team's growth and development.";
  $scope.aboutDescription3 =
    'What sets us apart is our commitment to understanding your unique business challenges and delivering solutions that not only meet your immediate needs but also position you for future success. We believe in building long-term partnerships based on trust, transparency, and mutual growth.';

  $scope.values = [
    {
      title: 'Innovation',
      description:
        'We constantly explore new technologies and methodologies to deliver cutting-edge solutions that give our clients a competitive advantage',
    },
    {
      title: 'Excellence',
      description:
        'Quality is at the heart of everything we do. We maintain the highest standards in our work and never compromise on delivering exceptional results',
    },
    {
      title: 'Integrity',
      description:
        'We operate with complete transparency and honesty, building trust through ethical practices and open communication',
    },
    {
      title: 'Collaboration',
      description:
        'We believe in the power of teamwork, both within our organization and with our clients, to achieve remarkable outcomes',
    },
    {
      title: 'Customer Focus',
      description:
        "Our clients' success is our success. We go above and beyond to understand and exceed their expectations",
    },
    {
      title: 'Continuous Learning',
      description:
        'In the fast-paced world of technology, we invest in continuous learning and development to stay at the cutting edge',
    },
  ];

  $scope.team = [
    {
      name: 'Sarah Johnson',
      position: 'Chief Executive Officer',
      icon: '👩‍💼',
      bio: '15+ years leading technology companies',
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      icon: '👨‍💻',
      bio: 'Expert in cloud architecture and AI',
    },
    {
      name: 'Emily Rodriguez',
      position: 'VP of Engineering',
      icon: '👩‍🔬',
      bio: 'Passionate about building great teams',
    },
    {
      name: 'David Kim',
      position: 'Head of Security',
      icon: '👨‍🔒',
      bio: 'Cybersecurity specialist with 12+ years',
    },
  ];
});

// Contact Controller
app.controller('ContactController', function ($scope) {
  $scope.formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  };

  $scope.submitMessage = '';

  $scope.submitForm = function () {
    // Simulate form submission
    console.log('Form submitted:', $scope.formData);

    $scope.submitMessage = 'Thank you for your message! We will get back to you within 24 hours.';

    // Reset form after 3 seconds
    setTimeout(function () {
      $scope.$apply(function () {
        $scope.formData = {
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        };
        $scope.submitMessage = '';
      });
    }, 3000);
  };
});
