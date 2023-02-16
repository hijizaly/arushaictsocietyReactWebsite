import { people01, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "features",
    title: "About",
  },
  {
    id: "product",
    title: "Membership",
  },
  {
    id: "clients",
    title: "Join",
  },
];

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:"",
    name: "Herman Jensen",
    title: "Founder & Leader",
    img: people01,
  },
  {
    id: "feedback-2",
    content:"",
    name: "Steve Mark",
    title: "Founder & Leader",
    img: people02,
  },
  {
    id: "feedback-3",
    content:"",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people03,
  },
  {
    id: "feedback-4",
    content:"",
    name: "Kenn Gallagher",
    title: "Founder & Leader",
    img: people02,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Active Members",
    value: "3800+",
  },
  {
    id: "stats-2",
    title: "Trusted by Company",
    value: "230+",
  },
  {
    id: "stats-3",
    title: "Activities",
    value: "199+",
  },
];

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Login",
        link: "",
      },
      {
        name: "SignUp",
        link: "",
      },
      {
        name: "AboutUs",
        link: "aboutUs",
      },
      {
        name: "Terms & Services",
        link: "termsServices",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "helpCenter",
      },
      {
        name: "Partners",
        link: "partners",
      },
      {
        name: "All Members",
        link: "allMembers",
      },
      // {
      //   name: "Suggestions",
      //   link: "https://www.hoobank.com/suggestions/",
      // },
      // {
      //   name: "Blog",
      //   link: "https://www.hoobank.com/blog/",
      // },
      // {
      //   name: "Newsletters",
      //   link: "https://www.hoobank.com/newsletters/",
      // },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "partners",
      },
      {
        name: "Become a Partner",
        link: "partners",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];

export const menuLists=[
  {menuName:"Membership",menuAction:"handleClose"},
  {menuName:"Register",menuAction:"handleClose"},
  {menuName:"Why join?",menuAction:"handleClose"},
];