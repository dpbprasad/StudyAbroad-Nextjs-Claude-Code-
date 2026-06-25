/**
 * Single source of truth for student success-story testimonials.
 * Used by the home "What our students say" carousel and the Stories page grid —
 * so a testimonial lives in ONE place and the two views can never drift apart.
 */
export interface Testimonial {
  name: string;
  program: string;
  /** Institution attended. Optional — older testimonials predate this field. */
  university?: string;
  /** Graduation/intake year. Optional — some records are missing it. */
  year?: string;
  country: string;
  text: string;
  image: string;
  /** Pin to the front of the list (client-requested top placement). */
  featured?: boolean;
}

const allTestimonials: Testimonial[] = [
  {
    name: "Indika Devendra",
    program: "Master of Management",
    university: "IPU New Zealand",
    year: "2013",
    country: "New Zealand",
    text: "Many students in our country have a dream to study in a foreign university. Even I had the same dream since my childhood and it would still be a dream, if STUDY ABROAD did not help me. We came to know about STUDY ABROAD through the internet and that Study Abroad is one of New Zealand’s specialist agents. STUDY ABROAD put in all their efforts to get us the visas as soon as possible. Special thanks go to the amazing team for the guidance they gave us to achieve our target. We would recommend STUDY ABROAD without any hesitation to anyone who aspires higher studies abroad. In fact, we say that STUDY ABROAD is the best in Sri Lanka and you could rely on them 100%.",
    image: "/images/testimonials/indika_devendra.jpg"
  },
  {
    name: "Ashan Goonathilake",
    program: "Bachelor's in Mechanical Engineering",
    university: "LeTourneau University",
    year: "2012",
    country: "USA",
    text: "I had almost given up on going abroad to study in USA, after a couple of bitter experiences that I had to face with some other student recruiting agencies. Due to this, I had to put my dreams on hold for about one year. From the very first phone call to STUDY ABROAD, I realized that they are different from the rest. They were reliable and professional compared to the places I had visited. Unlike with other countries, USA visa are quite hard to get, unless you know exactly how to handle the process. In this aspect STUDY ABROAD is experienced and knows what to do. They even guided me on how to face the interviews. My recommendation would always be STUDY ABROAD. This is not just another testimonial from a student,- make a call and find out for yourself!",
    image: "/images/testimonials/ashan_goonathilake.jpg"
  },
  {
    name: "Maheshika Indiwari",
    program: "Postgraduate Diploma Business Enterprise",
    university: "Southern Institute of Technology",
    year: "2013",
    country: "New Zealand",
    text: "Pursuing Business studies at a Postgraduate Level in a developed country was a dream I nurtured. My husband and I were laden with various options and we finally reached STUDY ABROAD at an Educational exhibition. It is vital to mention that thousands of our questions were clarified by her incredibly and logically which made us take the decision to apply through Study Abroad, very easy. Currently we are in New Zealand and STUDY ABROAD is very much in our hearts. They have not only fulfilled our dreams, of studying abroad, but also have become a part of our lives as friends in need. We highly admire their knowledge in education and expertise in all related work. Their commitment and dependability are the best parts we saw in them. We whole heartedly recommend STUDY ABROAD without hesitation to any parent / student. We wish them all the success in every endeavour!",
    image: "/images/testimonials/maheshika_indiwari.jpg"
  },
  {
    name: "Dhanushka Abeysinghe",
    program: "Bachelor of Business Administration",
    year: "2007",
    country: "United Kingdom",
    text: "I am the very FIRST student of STUDY ABROAD. Coming to the UK and getting the right and dignified education from a highly recognized awarding body wouldn’t have been a reality without the confidence built in me by Study Abroad (Pvt) Ltd. They provided me the most efficient and reliable services beyond words. So I or my family never had the doubt of being the first applicant at STUDY ABROAD in 2007. I was very comfortable and satisfied with the services they provided me at the time I opted to pursue my higher studies in the UK.",
    image: "/images/testimonials/dhanushka_abeysinghe.jpg"
  },
  {
    name: "Malintha Abeysiri",
    program: "Bachelors in Cell Biology",
    university: "University of Mary Hardin–Baylor",
    year: "2009",
    country: "USA",
    text: "Studying in the USA may be the biggest challenge that you may have to face when you are going through your higher education endeavors. Applying for a visa and getting it is much harder than getting a visa from any other country. I recommend STUDY ABROAD to anyone who wants to go to the USA for higher education. They help you with your college as well as the visa application and every other aspect of the process. The best value I got from Study Abroad was the mock interview which is professional, accurate and reliable. I had so much confidence when I faced the interview for my visa because of STUDY ABROAD. They made my dream come true. If you want to study in the USA, STUDY ABROAD is the best place to go!",
    image: "/images/testimonials/malintha_abeysiri.jpg"
  },
  {
    name: "Chanaka & Ransala",
    program: "Postgraduate Studies",
    university: "Southern Institute of Technology",
    year: "2011",
    country: "New Zealand",
    text: "I am indeed grateful to Study Abroad (Pvt) Ltd for making our dreams come true. Pursuing higher studies in New Zealand would have been just a distant dream without the excellent service and guidance provided by STUDY ABROAD. I truly appreciate the confidence they showed us throughout the whole process and they have been right there wherever needed. The generosity they gave me and my husband is amazing. One of the most important things that we observed in their service is the remarkable dedication which is beyond words. STUDY ABROAD has become a part of our lives now and the relationship we built with them will last forever. I have no hesitation in recommending STUDY ABROAD as the most reliable foreign education consultants in Sri Lanka to anybody who intends to pursue their higher education overseas.",
    image: "/images/testimonials/chanaka_ransala.jpg"
  },
  {
    name: "Tirantha Dissanayake",
    program: "Master of Business Administration",
    university: "University Canada West",
    year: "2023",
    country: "Canada",
    text: "If you want to achieve your study-abroad dream without wasting any time, I highly recommend Study Abroad (Pvt) Ltd. I obtained my student visa to Canada without meeting anyone from Study Abroad (Pvt) Ltd in person. The entire team contacted me online, which was incredibly helpful since I had a busy schedule. If you’re from out of town or have a tight schedule and can’t spare time to visit, Study Abroad (Pvt) Ltd is the one and only place to go for your student visa. Believe me, I never visited their office or met anyone in person, yet they fulfilled my Canada dream. Thank you, Team Study Abroad",
    image: "/images/testimonials/tirantha_dissanayake.jpg"
  },
  {
    name: "Praveen Perera",
    program: "Graphic Designing",
    university: "Durham College",
    year: "2024",
    country: "Canada",
    text: "At a time, 60% of Canada visas were getting capped with high refusals STUDY ABROAD still managed everything and special thanks to the Visa Department. They were in touch with us 24/7 and Documentation was clearly done.. Great effort by the whole team. And the Management was so friendly! Highly recommended !!!!",
    image: "/images/testimonials/praveen_perera.jpg"
  },
  {
    name: "Pubudu Wanasinghe",
    program: "Master of Kinesiology",
    university: "University of Calgary",
    year: "2022",
    country: "Canada",
    text: "So grateful for this awesome place to achieve my educational dream in the United States where i pursued Bachelors in Kinesiology at University of California - Bakersfield. I highly recommend and truly appreciate your great advice and support throughout the visa process. A great service. Thank you so much, Study Abroad (Pvt) Ltd.",
    image: "/images/testimonials/pubudu_wanasinghe.jpg"
  },
  {
    name: "Akila Jayawardena",
    program: "Master of Business Administration (MBA)",
    university: "Dallas Baptist University",
    country: "USA",
    text: "I am a graduate of the Colombo University, School of Computing. Before walking into STUDY ABROAD, I went to almost every agency in Sri Lanka to reach my dream of pursuing studies in the USA. Finally I ended up in STUDY ABROAD where I was convinced of the genuine services they offered and more than anything else, I was impressed about their knowledge on foreign education. The devotion and trustworthiness of Study Abroad were amazing. I also considered STUDY ABROAD to be my second home during the processing period of my case. In a nutshell, I would recommend STUDY ABROAD to any student / parent without any hesitation.",
    image: "/images/testimonials/akila_jayawardena.jpg"
  },
  {
    name: "Dr. Asoka Panadare",
    program: "Parent Testimonial",
    university: "Waikato University",
    country: "New Zealand",
    text: "I would like to thank the entire STUDY ABROAD team for their tremendous support in making my daughter Udeshini Panadare's dream of going to Waikato University, New Zealand, for her MSc in Applied Psychology a reality. The guidance and leadership provided by the Managing Director, in preparing the visa application, submitting it, and following it through to approval—and addressing matters that arose at the time of university reporting—were unmatched. All the supporting staff were kind and prompt at every stage, including air-ticket booking. I have no hesitation in recommending STUDY ABROAD for student visas to New Zealand.",
    image: "/images/testimonials/asoka_panadare.jpg"
  },
  {
    name: "Majitha Peramuna",
    program: "Higher Diploma",
    university: "NTEC",
    year: "2012",
    country: "New Zealand",
    text: "Study Abroad has really been a helping aid to many students who wish to study abroad in countries like New Zealand, USA, Canada and the UK, enhancing their future opportunities. The team at Study Abroad is very friendly and they understand you well. They can understand the students’ problems and situations very well and work according to it. The STUDY ABROAD team have been very instrumental in helping me walk the path where I have had a chance to be really successful and achieve my dreams, ambitions and goals in life. Still I remember when I had to apply to New Zealand. I had seen many Consultants and did not find them helpful towards the students and never made it easy for the students. They lacked communication in many ways and then one of my friends suggested STUDY ABROAD. That is when I walked into STUDY ABROAD office and everything was on a positive vibe. The staff were friendly and helpful — very easy to work with, really nice and understanding. I am glad I walked into STUDY ABROAD and I am thankful even today for making it easier for me to walk my way to success.",
    image: "/images/testimonials/majitha_peramuna.jpg"
  },
  {
    name: "Mr & Mrs Amaratunga",
    program: "Parent Testimonial",
    university: "Southern Institute of Technology",
    country: "New Zealand",
    text: "I am writing this to give my highest possible recommendation for Study Abroad (Pvt) Ltd as well as the Directors. Two years back, when my son told me that he wanted to continue his studies abroad, I had no idea about the whole subject and I consulted many agents, but did not receive a proper direction as to how to get on with it. When I first approached Study Abroad, they seriously listened to my son’s situation and gave excellent advice on how he should start his career based on his skills. As of today, my son is completing his second year of his Art and Graphic Designing degree at the Southern Institute of Technology in New Zealand and he was successful in completing all the due processes during this period. All this was possible because of the team’s hard work and enthusiasm which helped us immensely. I am much grateful to STUDY ABROAD and in summary I should say that they are an excellent agent with a lot of experience. Without any hesitation, I give my highest recommendation to any parent / student who wishes to get their consultation on their higher education overseas. I wish STUDY ABROAD all the best in their future endeavors.",
    image: "/images/testimonials/oscar_amaratunga.jpg"
  },
  {
    name: "Samitha Saddha Malinga Bandara Herath",
    program: "Master of Business Management",
    university: "Southern Institute of Technology",
    year: "2024",
    country: "New Zealand",
    featured: true,
    text: "I am incredibly grateful to Study Abroad (Pvt) Ltd for being a reliable and professional guide throughout my international education journey. Their expertise and commitment helped me secure a student visa for the UK back in 2010, and once again in 2024, they played a crucial role in assisting me and my family in successfully obtaining visas for New Zealand. After completing my postgraduate studies in the UK, I had the privilege of working with Study Abroad (Pvt) Ltd as a Manager. This experience gave me deeper insight into the organisation’s integrity, work ethic, and student-first approach. I witnessed firsthand how dedicated the team is to helping students find the best opportunities abroad and guiding them with transparency and care. Their team has always demonstrated a high level of responsibility and professionalism. From the initial consultation to the final visa approval, they ensured every step was handled with care, clarity, and efficiency. What sets Study Abroad apart is their genuine dedication to helping students not just with admissions and visas, but with long-term planning and success. Even after all these years, I continue to receive valuable advice and guidance from them. They are not just consultants; they are long-term partners in your journey toward global success. I wholeheartedly recommend Study Abroad (Pvt) Ltd to anyone looking for a trusted and quality overseas education consultancy. They truly make dreams come true. Thank You, Priyanka and the team.",
    image: "/images/testimonials/samitha_saddha_malinga_bandara_herath.jpg"
  },
  {
    name: "Zaharan Maharoof",
    program: "Mechanical Engineering",
    university: "State University of New York at Buffalo",
    year: "2011",
    country: "USA",
    text: "Hey!! I am Zaharan Maharoof. I was a student of STUDY ABROAD. Now I am studying Mechanical Engineering at the State University of New York in Buffalo. It was always a dream for me to come here and be a part of UB. STUDY ABROAD made my dreams come true. I don’t want to say that STUDY ABROAD is just a good place; but it is the BEST place that can make your higher education dreams come true. The systems they follow and the training arrangements are just incredible. They don’t only help you to get visas, but they provide you with ideas to create a path for a bright future. Before they start your training, they do a thorough research on your program, in order to ensure your success. One day I will design a super car and STUDY ABROAD is the place that helped and inspired me! STUDY ABROAD is the most loved and trusted student recruitment service in Sri Lanka!",
    image: "/images/testimonials/zaharan_maharoof.jpg"
  }
];

/**
 * Testimonials in display order: featured entries first (client-pinned),
 * then newest → oldest by year; undated entries last.
 */
export const testimonials: Testimonial[] = [...allTestimonials].sort(
  (a, b) =>
    Number(b.featured ?? false) - Number(a.featured ?? false) ||
    (Number(b.year) || 0) - (Number(a.year) || 0)
);
