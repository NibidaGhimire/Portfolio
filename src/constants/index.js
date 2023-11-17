import {
    graphics,
    game,
    uiux,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    unity,
    illustrator,
    photoshop,
    python,
    ieeepulchowk,
    pdsc,
    lancemeup,
    pulchowkgirls,
    locus,
    robofriends,
    galaxyshooter,
    certificatemailer,
    mousebot,
    tetris,
    linkedin,
    facebook,
    twitter,
    instagram, 
    github,
    dada,
    aama,
    apple,
    three,
    rdj,
    pencil,
    johnwick,
    eye,
    char,
    ax,
    nibida,
    moonknight,
    joker
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: web,
    },
    {
      title: "Graphic Designer",
      icon: graphics,
    },
    {
      title: "Ui/Ux Designer",
      icon: uiux,
    },
    {
      title: "Game Developer",
      icon: game,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Unity",
      icon: unity,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "illustrator",
      icon: illustrator,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "photoshop",
      icon: photoshop,
    },
  ];
  
  const experiences = [
    {
      title: "Creative Team Member",
      company_name: "PDSC",
      icon: pdsc,
      iconBg: "#383E56",
      date: "June 2022 - May 2023",
      points: [
        "Designed posters for different events.",
        "Learnt principles of design under the guidance of Creative Lead."
      ],
    },
    {
      title: "UI/UX Trainee",
      company_name: "LanceMe Up",
      icon: lancemeup,
      iconBg: "#383E56",
      date: "August 2023 - September 2023",
      points: [
        "Learnt and Implemented principles of Ui/Ux design.",
        "Collaborated with other trainees for brainstorming.",
        "Made User Personas,Information Architecture, etc.",
        "Built Wireframes for applications."
      ],
    },
    {
      title: "Graphics Lead/ Executive Committee Member",
      company_name: "IEEE Pulchowk Student Branch",
      icon: ieeepulchowk,
      iconBg: "#E6DEDD",
      date: "February 2024 - Present",
      points: [
        "Role in Planning and Decision making of various event as an Executive.",
        "Leading and managing Graphics Team for making attractive designs.",
        "Crafting templates for variety of designs.",
        "Reviewing designs by graphics team's members."
      ],
    },
    {
      title: "Technical Coordinator",
      company_name: "IOE Pulchowk Girls",
      icon: pulchowkgirls,
      iconBg: "#E6DEDD",
      date: "June 2023 - Present",
      points: [
        "Working for website designing,development and maintenance.",
        "Volunteered in various STEM based events for Women in STEM.",
        "Designing posters for social-medias."
      ],
    },
    {
      title: "Dashing Designer",
      company_name: "LOCUS",
      icon: locus,
      iconBg: "#383E56",
      date: "June 2023 - Present",
      points: [
        "Designed a team logo.",
        "Designed badges for Executives and Design-Chiefs.",
        "Designing posters for social-medias."
      ],
    },
  ];
  
  const artworks = [
    {
      name: "Pencil",
      image: pencil,
    },
    {
      name: "Dada",
      image: dada,
    },
    {
      name: "Aama",
      image: aama,
    },
    {
      name: "John Wick",
      image:johnwick,
    },
    {
      name: "RDJ",
      image: rdj,
    },
    {
      name: "Eye",
      image: eye,
    },
    {
      name: "Apple",
      image: apple,
    },
    {
      name: "Char",
      image: char,
    },
    {
      name: "Joker",
      image: joker,
    },
    {
      name: "Moon Knight",
      image: moonknight,
    },
    {
      name: "Three",
      image: three,
    },
    {
      name: "AX",
      image: ax,
    },
    {
      name: "Nibida",
      image: nibida,
    },
   
  ];
  


  const projects = [
    {
      name: "RoboFriends",
      description:
        "A web-app to search your robot friends from the list.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
  
      ],
      image: robofriends,
      source_code_link: "https://github.com/NibidaGhimire/RoboFriends",
    },
    {
      name: "Galaxy Shooter",
      description:
        "A fun shooter game to play while you are bored.",
      tags: [
        {
          name: "unity",
          color: "blue-text-gradient",
        },
        {
          name: "C#",
          color: "green-text-gradient",
        },
      ],
      image: galaxyshooter,
      source_code_link: "https://github.com/NibidaGhimire/Galaxy-Shooter",
    },
    {
      name: "Certificate Mailer",
      description:
        "Make distributing digital certificates easy by using certificate mailer which will write the name of the receiver in the middle of your certificate template and send it to the receiver's mail",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "pink-text-gradient",
        },
      ],
      image: certificatemailer,
      source_code_link: "https://github.com/NibidaGhimire/CertificateMailer",
    },
    {
      name: "Tetris",
      description:
        "The classic tetris game.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "OOP",
          color: "pink-text-gradient",
        },
      ],
      image: tetris,
      source_code_link: "https://github.com/NibidaGhimire/oop",
    },
    {
      name: "Mouse Bot",
      description:
        "A bot that will follow path avoiding obstacles.",
      tags: [
        {
          name: "TinkerCad",
          color: "blue-text-gradient",
        },
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
        {
          name: "C",
          color: "green-text-gradient",
        },
        {
          name: "C++",
          color: "blue-text-gradient",
        },
      ],
      image: mousebot,
      source_code_link: "https://www.tinkercad.com/things/lKOS22Fnis9-mousebot",
    },
  ];


  const socials = [
    {
      name: "LinkedIn",
      image: linkedin ,
      profile_link: "https://www.linkedin.com/in/nibida-ghimire",
    },

    {
      name: "FaceBook",
      image: facebook,
      profile_link: "https://www.facebook.com/nibida.ghimire",
    },

    {
      name: "Twitter",
      image: twitter ,
      profile_link: "https://twitter.com/Nibida_39",
    },
    {
      name: "InstaGram",
      image: instagram,
      profile_link: "https://www.instagram.com/nibidaghimire/",
    },
    {
      name: "GitHub",
      image: github,
      profile_link: "https://github.com/NibidaGhimire",
    },
  ];


  
  export { services, technologies, experiences, artworks, projects,socials };