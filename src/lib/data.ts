import type { LucideIcon } from "lucide-react";
import { TestTube2, Scale, Droplets, Stethoscope, MonitorSmartphone, Home, CheckCircle2 } from "lucide-react";
import { icons } from '@/components/icons';

export type Service = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  alt: string;
  imageHint: string;
  icon: keyof typeof icons;
  benefits: string[];
  faq: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "testosterone-therapy",
    title: "Testosterone Therapy",
    description: "Restore balance, energy, and men’s health with expert testosterone replacement therapy, especially for men looking to improve performance.",
    longDescription: "Our Testosterone Replacement Therapy (TRT) is designed to help men restore optimal hormone levels, boosting energy, improving mood, and enhancing overall vitality, especially for men looking to improve performance. After a comprehensive evaluation at your home, our licensed providers create a personalized treatment plan tailored to your specific needs.",
    image: "https://static.wixstatic.com/media/c5947c_5b3c0dd744d14d74897081c0eb531bc0~mv2.jpg",
    alt: "testosterone therapy Houston men’s health Noble Health",
    imageHint: "testosterone therapy men's health",
    icon: "TestTube2",
    benefits: [
      "Combat decreased energy and low motivation",
      "Address symptoms like 'Dad Bod' and erectile dysfunction (e.g., lack of morning wood)",
      "Increased muscle mass and strength",
      "Enhanced mood, focus, and cognitive function",
      "Revitalized libido and sexual performance"
    ],
    faq: [
      { question: "How do I know if I need TRT?", answer: "Common symptoms of low testosterone include fatigue, low libido, and difficulty concentrating. Our initial consultation includes a comprehensive lab analysis to determine if TRT is right for you." },
      { question: "What does the treatment process involve?", answer: "Treatment involves an initial consultation and lab work, followed by regular, personalized testosterone administration and monitoring, all conducted in the privacy of your home." },
      { question: "Is testosterone therapy safe?", answer: "When monitored by a qualified Healthcare Provider, TRT is a safe and effective treatment for men with clinically low testosterone levels." },
      { question: "Do you take insurance for TRT?", answer: "If you qualify for testosterone or weight loss we try to go through your insurance first. But we do have great cash pay prices available." }
    ]
  },
  {
    slug: "weight-loss",
    title: "Medical Weight Loss Programs",
    description: "We have multiple options including Trizepitide, Weightloss pills and more for safe, lasting results.",
    longDescription: "With a no-judgement approach, we help you achieve your weight loss goals with our medically supervised programs. We combine powerful GLP-1 medications like Ozempic, Trizeptide, metformin, phentermine and more with personalized nutrition and lifestyle coaching to ensure sustainable, long-term success.",
    image: "https://static.wixstatic.com/media/c5947c_a64e9bef21834853add76e6071dfdb42~mv2.png",
    alt: "weight loss doctor Semaglutide Houston Noble Health",
    imageHint: "weight loss semaglutide",
    icon: "Scale",
    benefits: [
      "Access to effective prescription medications",
      "Personalized plans that fit your lifestyle",
      "Ongoing medical supervision to ensure safety and progress",
      "Holistic approach combining medication with nutrition and lifestyle guidance"
    ],
    faq: [
      { question: "Do you prescribe Wegovy® and Ozempic®?", answer: "Yes, our licensed providers can prescribe GLP-1 medications such as Wegovy®, Ozempic®, and Trizepitide after a thorough medical evaluation to determine if they are appropriate for you." },
      { question: "What are my options?", answer: "We have multiple options including Trizepitide, Weightloss pills and more. We believe the most effective approach combines medical treatment with personalized nutrition and lifestyle strategies." },
      { question: "How often are follow-up appointments?", answer: "Follow-up frequency is personalized but typically occurs monthly to monitor your progress, adjust your plan, and provide ongoing support." }
    ]
  },
  {
    slug: "iv-therapy",
    title: "IV Therapy",
    description: "Hydration, immunity, and recovery — IV drips customized to your body’s needs.",
    longDescription: "Bypass the digestive system and deliver essential vitamins, minerals, and hydration directly into your bloodstream for 100% absorption. Our in-clinic IV therapy services are perfect for boosting immunity, recovering from illness, enhancing athletic performance, or rehydrating. We offer specialized drips, including for weight loss. Menu with pricing coming soon!",
    image: "https://static.wixstatic.com/media/c5947c_53c3152322484aba8c3a8e312a5b0488~mv2.jpg",
    alt: "IV therapy in clinic in Katy, TX",
    imageHint: "IV therapy at home",
    icon: "Droplets",
    benefits: [
      "Rapid rehydration and electrolyte replenishment",
      "Boosted immune system and energy levels",
      "Customized formulas for wellness, recovery, and beauty",
      "Fast and effective relief administered by registered nurses"
    ],
    faq: [
      { question: "What types of IV drips do you offer?", answer: "We offer a wide range of drips, including immunity boosts (Vitamin C, Zinc), energy formulas (B-Vitamins), athletic recovery, and weight loss drips. We can also customize formulas." },
      { question: "How long does a session take?", answer: "Most IV therapy sessions last between 45 to 60 minutes, allowing you to relax while you replenish your body." },
    ]
  },
  {
    slug: "primary-care",
    title: "Primary Care",
    description: "Whether at our Katy clinic or through in-home visits, we provide complete primary care tailored to your needs.",
    longDescription: "Experience primary care that's built around you. When you call, you speak to a real person. We have immediate appointments available, often within 24-48 hours. We offer comprehensive services, from annual physicals and sick visits to chronic disease management, all without the need to visit a clinic. We focus on preventive care and building a long-term relationship with you.",
    image: "https://static.wixstatic.com/media/c5947c_5ede21d3afb945b88f11590de8f8ea3f~mv2.png",
    alt: "primary care doctor at home Houston Noble Health",
    imageHint: "primary care at home",
    icon: "Stethoscope",
    benefits: [
      "Build a lasting relationship with a dedicated provider",
      "Convenient access to care for acute illnesses and injuries",
      "Proactive management of chronic conditions like hypertension and diabetes",
      "Personalized preventive care and wellness planning"
    ],
    faq: [
      { question: "Can you be my PCP?", answer: "Yes, we can act as your primary care provider, offering continuity of care for all your health needs." },
      { question: "What if I need lab work or imaging?", answer: "We can perform many lab draws at your home and can coordinate in-home X-rays and Ultrasounds. We coordinate other imaging studies as needed." },
      { question: "Can you make a home health referral?", answer: "Yes, we work with several home health agencies." },
      { question: "Can you refer me to a specialist?", answer: "Yes, we can refer you to a specialist as needed." },
      { question: "Can you order my medications or refill them?", answer: "Yes, we can handle prescriptions and refills, often over the phone." },
      { question: "Can I get a same-day appointment?", answer: "Yes, most of the time we can accommodate same-day appointments. If not, we can usually be there within 24-48 hours." }
    ]
  },
  {
    slug: "telehealth",
    title: "Telehealth / Virtual Visits",
    description: "Convenient video consultations with experienced providers.",
    longDescription: "For ultimate convenience, our telehealth services connect you with our expert providers via secure video call. Telemedicine is perfect for follow-up appointments, medication management, reviewing lab results, or addressing health concerns that don't require a physical exam.",
    image: "https://static.wixstatic.com/media/c5947c_5dd1f026b97d4fe591fcc57e8dab7122~mv2.jpg",
    alt: "telehealth doctor Houston Noble Health virtual visits",
    imageHint: "telehealth virtual visit",
    icon: "MonitorSmartphone",
    benefits: [
      "Access medical advice from the comfort of your home or office",
      "Save time with no travel or waiting rooms",
      "Ideal for prescription refills and managing ongoing conditions",
      "Secure and private consultations"
    ],
    faq: [
      { question: "Is telehealth secure?", answer: "Yes, we use a HIPAA-compliant platform to ensure your personal health information is always protected and confidential." },
      { question: "What kind of conditions can be treated via telehealth?", answer: "Telehealth is suitable for many conditions, including minor illnesses like colds and rashes, mental health consultations, prescription management, and follow-up care." },
      { question: "Do I need health insurance?", answer: "We do take most insurances but we also have cash payment plans as well." }
    ]
  },
  {
    slug: "transitional-care",
    title: "Home Health Coordination of Care",
    description: "We work with home health agencies to ensure orders are completed accurately and in a timely manner.",
    longDescription: "We work with over 40 reputable home health companies in Houston. If you are a home health agency we can work with your patients to ensure home health orders are completed accurately and in a timely manner. If you are a patient we can work with connecting you to the right agency, helping you keep your home health benefits.Seamless Support for Patients and Home Health Agencies",
    image: "https://static.wixstatic.com/media/c5947c_9a347676f24749f9be796ec5c595ae2b~mv2.png",
    alt: "transitional medical care Houston Noble Health",
    imageHint: "transitional medical care",
    icon: "Home",
    benefits: [
      "Accurate & Timely Order Completion",
      "Connections to Trusted Home Health Agencies",
      "Helping Patients Maintain Their Home Health Benefits"
    ],
    faq: [
      { question: "When should I schedule a Home Health Coordination of Care?", answer: "We recommend scheduling your first visit within 48-72 hours of being discharged from the hospital for the best outcomes." },
      { question: "Do you communicate with my hospital doctor?", answer: "Yes, a key part of our service is communicating with your hospital care team to ensure a seamless continuation of your care plan at home." },
    ]
  },
];

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  imageHint: string;
  author: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "benefits-of-testosterone-therapy",
    title: "Top 5 Benefits of Testosterone Therapy for Men Over 40",
    excerpt: "Testosterone therapy can offer significant benefits by addressing the natural decline in hormone levels. The primary advantages include increased energy, improved mood, and enhanced physical strength.",
    content: "<p>For men over 40, a decline in testosterone is a natural part of aging, but that doesn't mean you have to live with the symptoms. Testosterone Replacement Therapy (TRT) is a safe and effective way to restore vitality. Here are the top five benefits our patients in Houston experience.</p><h3>1. Increased Energy and Stamina</h3><p>One of the first things men notice is a significant boost in their daily energy levels, helping to combat the fatigue that often accompanies low testosterone.</p><h3>2. Improved Mood and Mental Focus</h3><p>TRT can help alleviate symptoms of irritability and depression while sharpening mental clarity and focus, allowing you to perform your best at work and at home.</p><h3>3. Enhanced Libido and Sexual Function</h3><p>Restoring testosterone levels can directly improve libido and sexual performance, revitalizing an important aspect of your life and relationships.</p><h3>4. Increased Muscle Mass and Decreased Body Fat</h3><p>Testosterone plays a key role in body composition. Therapy often leads to an increase in lean muscle mass and a reduction in stubborn body fat, especially when combined with a healthy lifestyle.</p><h3>5. Stronger Bones</h3><p>Testosterone is crucial for bone density. TRT can help strengthen bones and reduce the risk of osteoporosis later in life.</p>",
    image: "https://static.wixstatic.com/media/c5947c_304b5eca006a42c093d564107bcf5bd3~mv2.jpg",
    imageHint: "fit man over 40",
    author: "Dr. David Chen",
    date: "2024-07-18"
  },
  {
    slug: "telemedicine-for-busy-professionals",
    title: "How Telemedicine Saves Time for Busy Professionals",
    excerpt: "Telemedicine saves time for busy professionals by eliminating travel and wait times for medical appointments. This allows for efficient consultations that fit seamlessly into a packed schedule.",
    content: "<p>In a bustling city like Houston, time is a valuable commodity, especially for busy professionals. Juggling a demanding career, family, and personal wellness can be challenging. This is where telemedicine, offered by services like Noble Health House Calls, becomes a game-changer.</p><h3>Zero Commute Time</h3><p>The most obvious benefit is the elimination of travel. You no longer need to battle Houston traffic or search for parking for a medical appointment. Your consultation is just a click away.</p><h3>No More Waiting Rooms</h3><p>Telemedicine appointments start on time. You can say goodbye to sitting in a waiting room, saving you anywhere from 30 minutes to over an hour per visit.</p><h3>Ultimate Flexibility</h3><p>Schedule appointments between meetings, during your lunch break, or from your home office. This flexibility ensures you can prioritize your health without disrupting your productivity.</p>",
    image: "https://static.wixstatic.com/media/c5947c_2364af4b09b14c4b8a7a53cf1f4fffb2~mv2.jpg",
    imageHint: "professional on laptop",
    author: "Dr. Sarah Miller",
    date: "2024-07-12"
  },
  {
    slug: "what-to-expect-from-house-call",
    title: "What to Expect from a Medical House Call Visit",
    excerpt: "During a medical house call, a licensed provider arrives at your home with the necessary equipment to conduct a thorough consultation. Expect a personalized, un-rushed appointment that focuses entirely on your health needs in your own comfortable environment.",
    content: "<p>If you've never had a medical house call, you might be wondering what the experience is like. It blends the best of traditional medicine with modern convenience. Here's what you can expect when you book a visit with Noble Health House Calls.</p><h3>The Arrival</h3><p>Our medical provider will arrive at your scheduled time, professionally dressed and with a medical bag containing the necessary tools for your examination, such as a stethoscope, blood pressure cuff, and diagnostic kits.</p><h3>The Consultation</h3><p>The appointment takes place wherever you are most comfortable—your living room, your office, etc. The visit is un-rushed, allowing ample time to discuss your health concerns in detail. The provider will conduct a physical exam, just as they would in a clinic.</p><h3>Treatment and Planning</h3><p>Based on the consultation, the provider can diagnose conditions, prescribe medications, administer treatments like IV therapy, and draw labs on-site. They will work with you to create a personalized care plan for your long-term health.</p>",
    image: "https://static.wixstatic.com/media/c5947c_691418f724a843f4a79e2337f7506c6b~mv2.jpg",
    imageHint: "doctor medical bag",
    author: "Dr. David Chen",
    date: "2024-07-05"
  }
];

export const generalFaq = [
  {
    question: "What areas in Texas do you serve?",
    answer: "We proudly serve patients in Houston, Katy, Sugar Land, The Woodlands, Pearland, and surrounding Greater Houston areas."
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept most major insurance plans. If you don’t have insurance, we also offer excellent private-pay rates to make care affordable."
  },
  {
    question: "What are your hours of operation?",
    answer: "We offer flexible scheduling with same-day or next-day appointments available to accommodate your busy life. Our goal is to be there when you need us."
  },
  {
    question: "How do I book a house call?",
    answer: "Booking is easy. You can fill out the contact form on our website or call us directly at (832) 263-1582 to speak with our care coordinator and schedule your appointment."
  },
  {
    question: "What types of medical providers are on your team?",
    answer: "Our team consists of highly qualified and licensed physicians, nurse practitioners, and registered nurses who specialize in concierge medicine, men's health, and chronic care."
  },
  {
    question: "Is this service for medical emergencies?",
    answer: "No. For any life-threatening emergencies, such as chest pain, difficulty breathing, or severe injury, you should call 911 or go to the nearest emergency room immediately."
  },
  {
    question: "Who are your services designed for?",
    answer: "Our services are ideal for busy professionals, families seeking convenience, individuals focused on men's health or weight management, and seniors with limited mobility who prefer care at home."
  },
  {
    question: "What is testosterone replacement therapy (TRT)?",
    answer: "TRT is a medical treatment for men with low testosterone levels. It involves administering testosterone to restore hormonal balance, which can improve energy, mood, muscle mass, and libido."
  },
  {
    question: "Which weight loss medications do you prescribe?",
    answer: "After a medical evaluation, our providers can prescribe GLP-1 medications such as Wegovy® and Ozempic® as part of a comprehensive, medically supervised weight-loss program."
  },
  {
    question: "Do I need to be present for a telehealth visit?",
    answer: "Yes, a telehealth visit is a live, secure video consultation with one of our providers. You will need to be present and have access to a device with a camera and internet connection."
  }
];
