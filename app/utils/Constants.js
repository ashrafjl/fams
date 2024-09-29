export const transitionY = {
  hidden: { opacity: 0, y: -100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const itemVariants = {
  hidden: { opacity: 0, y: -150 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export const portfolioSliderSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


export const testimonialSliderSetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1, // Show one testimonial at a time
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const brandsSliderSetting = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 10,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 10,
        slidesToScroll: 3,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
  ],
};


export const portfolioItems = [
  { id: 1, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image1.jpeg" },
  { id: 2, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image2.jpeg" },
  { id: 3, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image3.jpeg" },
  { id: 4, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image4.jpeg" },
  { id: 5, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image5.jpeg" },
  { id: 6, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image6.jpeg" },
  { id: 7, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image7.jpeg" },
  { id: 8, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image8.jpeg" },
  { id: 9, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image9.jpeg" },
  { id: 10, title: `IAA TRANSPORTATION 2024 Hannover, Germany`, description: "", image: "/images/image10.jpeg" },
];

export const testimonils = [
  {id:1,name:'Sarah T.',description:`FAMS transformed our vision into reality! Their attention to detail made our event unforgettable. Highly recommend!`,image:'/images/testimonial.png'},
  {id:2,name:'Mark L.',description:`Professional, creative, and efficient! FAMS took our exhibition to the next level. We couldn’t be happier!`,image:'/images/testimonial.png'},
  {id:3,name:'Jenna R',description:`From start to finish, FAMS was incredible. They handled everything seamlessly, making our event stress-free.`,image:'/images/testimonial.png'},
  {id:4,name:'Sharline K',description:`FAMS is a game-changer! Their expertise in organizing our event exceeded all expectations." – Tom W.`,image:'/images/testimonial.png'},
  {id:5,name:' Lisa M',description:`Working with FAMS was a dream! Their team is dedicated, passionate, and truly cares about their clients.`,image:'/images/testimonial.png'},
]

export const brands = [
  '/images/brands/a.png',
  '/images/brands/b.png',
  '/images/brands/c.png',
  '/images/brands/d.png',
  '/images/brands/e.png',
  '/images/brands/f.png',
  '/images/brands/g.png',
  '/images/brands/h.png',
  '/images/brands/i.png',
  '/images/brands/j.png',
  '/images/brands/k.png',
  '/images/brands/l.png',
  '/images/brands/m.png',
  '/images/brands/n.png',
  '/images/brands/o.png',
  '/images/brands/p.png',
  '/images/brands/q.png',
  '/images/brands/r.png',
  '/images/brands/s.png',
  '/images/brands/t.png',
  '/images/brands/u.png',
  '/images/brands/v.png',
  '/images/brands/w.png',
  '/images/brands/x.png',
]
