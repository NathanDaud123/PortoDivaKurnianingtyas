import { motion } from 'motion/react';
import { Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Badge } from './ui/badge';

interface ResearchSectionProps {
  language: 'id' | 'en';
}

const researchGrantsData: Record<string, Array<{
  title: string;
  titleEn: string;
  researchers: string;
  partner?: string;
  source: string;
  sourceEn: string;
  amount: string;
}>> = {
  '2025': [
    {
      title: 'Pengembangan Sistem Cerdas IoT-AI untuk Deteksi dan Monitoring Real-Time Status Gizi Bayi Sebagai Solusi Pencegahan Stunting',
      titleEn: 'Development of IoT-AI Smart System for Real-Time Detection and Monitoring of Infant Nutritional Status as Stunting Prevention Solution',
      researchers: 'Diva Kurnianingtyas, Gembong Edhi Setyawan, Widya Rahmawati, Dian Eka Ratnawati, Anis Rahmawati Amna',
      source: 'DIKST: Hibah Riset Terapan Artificial Intelligence',
      sourceEn: 'DIKST: Applied Artificial Intelligence Research Grant',
      amount: '50 juta'
    },
    {
      title: 'Sistem Rekomendasi Diet Personal Berbasis Machine Learning untuk Pasien dengan Multi-Komorbiditas, Alergi, dan Riwayat Medis Khusus',
      titleEn: 'Personalized Diet Recommendation System Based on Machine Learning for Patients with Multi-Comorbidities, Allergies, and Special Medical History',
      researchers: 'Dian Eka Ratnawati, Nurul Muslihah, Marji, Diva Kurnianingtyas',
      source: 'DIKST: Hibah Pendanaan Riset Inovasi Strategis',
      sourceEn: 'DIKST: Strategic Innovation Research Funding Grant',
      amount: '100 juta'
    },
    {
      title: 'Perbandingan penggunaan BERTopic dan Top2Vec pada Sentimen Analisis berbasis Aspek Terhadap Pembangunan Ibu Kota Nusantara',
      titleEn: 'Comparison of BERTopic and Top2Vec Usage in Aspect-Based Sentiment Analysis on Nusantara Capital Development',
      researchers: 'Indriati, Diva Kurnianingtyas, Achmad Ridok',
      source: 'FILKOM UB: Hibah DIPA Penelitian',
      sourceEn: 'FILKOM UB: DIPA Research Grant',
      amount: '10 juta'
    }
  ],
  '2024': [
    {
      title: 'Sentimen Analisis berbasis Aspek pada Review Aplikasi Mobile dengan menggunakan IndoBERT Fine Tuning',
      titleEn: 'Aspect-Based Sentiment Analysis on Mobile Application Reviews using IndoBERT Fine Tuning',
      researchers: 'Indriati, Diva Kurnianingtyas',
      source: 'FILKOM UB: Hibah DIPA Penelitian',
      sourceEn: 'FILKOM UB: DIPA Research Grant',
      amount: '10 juta'
    },
    {
      title: 'Rekomendasi Menu Harian Berdasarkan Kebutuhan Asupan Ibu Hamil Dengan Reinforcement Learning Sebagai Solusi Pencegahan Stunting',
      titleEn: 'Daily Menu Recommendation Based on Pregnant Women\'s Nutritional Needs Using Reinforcement Learning as Stunting Prevention Solution',
      researchers: 'Gembong Edhi Setyawan, Diva Kurnianingtyas, Rakhmadany Primananda',
      source: 'FILKOM UB: Hibah Doktor Non Lektor Kepala',
      sourceEn: 'FILKOM UB: Non-Associate Professor Doctorate Grant',
      amount: '25 juta'
    },
    {
      title: 'Rekomendasi Resep Makanan Berdasarkan Bahan Makanan Ibu Hamil dengan Natural Language Processing Sebagai Solusi Pencegahan Stunting Balita',
      titleEn: 'Food Recipe Recommendation Based on Pregnant Women\'s Ingredients with Natural Language Processing as Toddler Stunting Prevention Solution',
      researchers: 'Agus Wahyu Widodo, Diva Kurnianingtyas',
      source: 'FILKOM UB: Hibah FILKOM Berkarya',
      sourceEn: 'FILKOM UB: FILKOM Innovation Grant',
      amount: '35 juta'
    },
    {
      title: 'Penentuan Menu Harian Berdasarkan Kebutuhan Nutrisi Dengan Metaheuristik Sebagai Solusi Pencegahan Kekurangan Gizi Ibu Hamil',
      titleEn: 'Daily Menu Determination Based on Nutritional Needs Using Metaheuristics as Solution for Preventing Malnutrition in Pregnant Women',
      researchers: 'Indriati, Diva Kurnianingtyas, Marji',
      source: 'DRPM UB: Hibah Penelitian Dasar',
      sourceEn: 'DRPM UB: Basic Research Grant',
      amount: '42 juta'
    },
    {
      title: 'Tata Kelola Pelayanan Penyelesaian Sengketa Pada Pengadilan Dengan Pemodelan Dinamis Eksekusi Perdata Untuk Mendukung Business Enabling Environment',
      titleEn: 'Governance of Dispute Resolution Services in Courts with Dynamic Modeling of Civil Execution to Support Business Enabling Environment',
      researchers: 'Zulfia Hanum, Muh. Ridha Hakim, Diva Kurnianingtyas',
      partner: 'BRIN',
      source: 'BRIN: Rumah Program Tata Kelola Pemerintahan di Era Otonomi Daerah Ekonomi dan Kesejahteraan Masyarakat',
      sourceEn: 'BRIN: Government Governance Program House in Regional Autonomy Era Economy and Public Welfare',
      amount: '212.5 juta'
    },
    {
      title: 'Studi Peningkatan Kenyamanan dan Keselamatan pada Kapal Cepat di Perairan Bergelombang dengan Artificial Intelligent Trim Interceptor sebagai Fitur Kapal Listrik Cerdas',
      titleEn: 'Study on Improving Comfort and Safety of Fast Boats in Wavy Waters with Artificial Intelligent Trim Interceptor as Smart Electric Ship Feature',
      researchers: 'Muhammad Luqman Hakim, Dian Purnama Sari, Diva Kurnianingtyas',
      partner: 'Universitas Diponegoro, BRIN',
      source: 'BRIN: Riset dan Inovasi untuk Indonesia Maju (RIIM)',
      sourceEn: 'BRIN: Research and Innovation for Advanced Indonesia (RIIM)',
      amount: '114 juta'
    }
  ],
  '2023': [
    {
      title: 'Pemodelan Faktor Pengaruh Gizi Sebagai Penentu Solusi Penurunan Angka Kematian Ibu dan Bayi di Indonesia',
      titleEn: 'Modeling of Nutritional Influence Factors as Solution Determinant for Reducing Maternal and Infant Mortality Rates in Indonesia',
      researchers: 'Indriati, Diva Kurnianingtyas, Lailil Muflikhah',
      source: 'DRPM UB: Hibah Penelitian Dasar Pemula',
      sourceEn: 'DRPM UB: Basic Beginner Research Grant',
      amount: '25.5 juta'
    },
    {
      title: 'Studi Peningkatan Kenyamanan dan Keselamatan pada Kapal Cepat di Perairan Bergelombang dengan Artificial Intelligent Trim Interceptor sebagai Fitur Kapal Listrik Cerdas',
      titleEn: 'Study on Improving Comfort and Safety of Fast Boats in Wavy Waters with Artificial Intelligent Trim Interceptor as Smart Electric Ship Feature',
      researchers: 'Muhammad Luqman Hakim, Dian Purnama Sari, Diva Kurnianingtyas',
      partner: 'Universitas Diponegoro, BRIN',
      source: 'BRIN: Riset dan Inovasi untuk Indonesia Maju (RIIM)',
      sourceEn: 'BRIN: Research and Innovation for Advanced Indonesia (RIIM)',
      amount: '114 juta'
    },
    {
      title: 'Studi Kesiapan dan Dampak Implementasi Undang-Undang Perlindungan Data Pribadi pada Masyarakat, Korporasi dan Badan Publik',
      titleEn: 'Study of Readiness and Impact of Personal Data Protection Law Implementation on Society, Corporations and Public Bodies',
      researchers: 'Sri Gilang M. Sultah Rahma P., Diva Kurnianingtyas',
      partner: 'BRIN',
      source: 'BRIN: Rumah Program Keindonesiaan atau Kebangsaan Organisasi Riset Ilmu Pengetahuan Sosial dan Humaniora (IPSH)',
      sourceEn: 'BRIN: Indonesian Nationalism Program House, Social and Humanities Sciences Research Organization (IPSH)',
      amount: '92.7 juta'
    },
    {
      title: 'Sintesis Ragam Batik Baru Menggunakan Diffusion Generative Adversarial Network',
      titleEn: 'Synthesis of New Batik Patterns Using Diffusion Generative Adversarial Network',
      researchers: 'Novanto Yudistira, Diva Kurnianingtyas',
      source: 'FILKOM UB: Hibah Doktor Non Lektor Kepala',
      sourceEn: 'FILKOM UB: Non-Associate Professor Doctorate Grant',
      amount: '25 juta'
    }
  ],
  '2022': [
    {
      title: 'Identifikasi Penyakit Tanaman Kenaf Menggunakan Model Ensemble Metode Machine Learning',
      titleEn: 'Identification of Kenaf Plant Diseases Using Ensemble Model Machine Learning Methods',
      researchers: 'Wayan Firdaus Mahmudy, Agus Wahyu Widodo, Diva Kurnianingtyas',
      source: 'FILKOM UB: Hibah Profesor',
      sourceEn: 'FILKOM UB: Professor Grant',
      amount: '100 juta'
    }
  ],
  '2020': [
    {
      title: 'Analisis Premi Peserta BPJS Kesehatan',
      titleEn: 'Analysis of BPJS Health Insurance Participant Premiums',
      researchers: 'Budi Santosa, Nurhadi Siswanto, Diva Kurnianingtyas',
      source: 'Kemendikbud: Hibah PMDSU',
      sourceEn: 'Ministry of Education: PMDSU Grant',
      amount: '60 juta'
    }
  ],
  '2019': [
    {
      title: 'Analisis Premi Peserta BPJS Kesehatan',
      titleEn: 'Analysis of BPJS Health Insurance Participant Premiums',
      researchers: 'Budi Santosa, Nurhadi Siswanto, Diva Kurnianingtyas',
      source: 'Kemendikbud: Hibah PMDSU',
      sourceEn: 'Ministry of Education: PMDSU Grant',
      amount: '60 juta'
    }
  ],
  '2018': [
    {
      title: 'Analisis Premi Peserta BPJS Kesehatan',
      titleEn: 'Analysis of BPJS Health Insurance Participant Premiums',
      researchers: 'Budi Santosa, Nurhadi Siswanto, Diva Kurnianingtyas',
      source: 'Kemendikbud: Hibah PMDSU',
      sourceEn: 'Ministry of Education: PMDSU Grant',
      amount: '60 juta'
    }
  ]
};

const teachingGrantsData: Record<string, Array<{
  title: string;
  titleEn: string;
  year: number;
  source: string;
  sourceEn: string;
  amount: string;
  amountEn: string;
}>> = {
  '2025': [
    {
      title: 'Hibah Bantuan Pembelajaran BRONE Kategori VR',
      titleEn: 'BRONE Learning Support Grant VR Category',
      year: 2025,
      source: 'Universitas Brawijaya',
      sourceEn: 'Brawijaya University',
      amount: '50 jt',
      amountEn: '50 million'
    },
    {
      title: 'Hibah Program Visiting Professor dan Dosen Praktisi 3in1',
      titleEn: 'Visiting Professor and Practitioner Lecturer 3in1 Program Grant',
      year: 2025,
      source: 'Universitas Brawijaya',
      sourceEn: 'Brawijaya University',
      amount: '40 jt',
      amountEn: '40 million'
    }
  ],
  '2024': [
    {
      title: 'Hibah Program Visiting Professor dan Dosen Praktisi 3in1',
      titleEn: 'Visiting Professor and Practitioner Lecturer 3in1 Program Grant',
      year: 2024,
      source: 'Universitas Brawijaya',
      sourceEn: 'Brawijaya University',
      amount: '40 jt',
      amountEn: '40 million'
    }
  ]
};

// Publications data
const publicationsData: Record<string, Array<{
  year: number;
  title: string;
  authors: string;
  journal: string;
  quartile: string;
  role: string;
  link: string;
}>> = {
  '2025': [
    {
      year: 2025,
      title: 'Edge-Enabled Hybrid Encryption Framework for Secure Health Information Exchange in IoT-Based Smart Healthcare Systems',
      authors: 'Norjihan Abdul Ghani*, Bintang Annisa Bagustari, Muneer Ahmad, Herman Tolle, Diva Kurnianingtyas',
      journal: 'MDPI Sensor',
      quartile: 'Q1',
      role: 'co-author',
      link: ''
    },
    {
      year: 2025,
      title: 'Open-air maneuvering tests of a high-speed craft model: analysis of triangular and rectangular interceptor designs',
      authors: 'Muhammad Luqman Hakim, Muhammad Choirul Mahmud Saifulloh, Diva Kurnianingtyas, Totok Triputrastyo Murwatono, Irfan Eko Sandjaja',
      journal: 'T&F Ships and Offshore Structures',
      quartile: 'Q2',
      role: 'co-author',
      link: ''
    },
    {
      year: 2025,
      title: 'An examination of herding behavior among tech stock investors in ASEAN-6 countries: A BiLSTM machine learning approach',
      authors: 'Hussain Gulzar, Putu Karina Gayatri, Asfi Manzilati, Silvi Asna Prestinawati, Diva Kurnianingtyas, Nathan Daud, Abdurrahman Hakim, Muhammad Fawwaz',
      journal: 'Elsevier Sustainable Futures',
      quartile: 'Q1',
      role: 'co-author',
      link: ''
    },
    {
      year: 2025,
      title: 'The Vehicle Routing Problem with Time Windows Based on Agent Travel Time: An Exploration of Genetic Algorithm Reproduction Schemes',
      authors: 'Haidar Hanif, Yusuf Priyo Anggodo, Diva Kurnianingtyas*, Tutut Herawan',
      journal: 'ETASR',
      quartile: 'Q2',
      role: 'corresponding author',
      link: ''
    },
    {
      year: 2025,
      title: 'Automated menu planning for pregnancy based on nutrition and budget using population-based optimization method',
      authors: 'Diva Kurnianingtyas, Nathan Daud, Kohei Arai, Indriati Indriati*, Marji Marji',
      journal: 'IAES IJAI',
      quartile: 'Q2',
      role: 'first author',
      link: ''
    },
    {
      year: 2025,
      title: 'Comprehensive Review of Meta Learning Methods for Cold-Start Issue in Recommendation Systems',
      authors: 'Jamallah M. Zawia, Maizatul Akmar Binti Ismail*, Mohammad Imran, Buce Trias Hanggara, Diva Kurnianingtyas, Silvi Asna',
      journal: 'IEEE Access',
      quartile: 'Q1',
      role: 'co-author',
      link: ''
    },
    {
      year: 2025,
      title: 'Method for Maternal Health Risk Assessment with Smartwatch-Based Vital Sign Measurements',
      authors: 'Kohei Arai*, Diva Kurnianingtyas',
      journal: 'IJACSA',
      quartile: 'Q3',
      role: 'co-author',
      link: ''
    },
    {
      year: 2025,
      title: 'Advanced computational techniques for predicting 3D printing distortion in selective laser melting processes of Aluminium AlSi10Mg',
      authors: 'Moch Agus Choiron*, Anindito Purnowidodo, Achfas Zacoeb, Gembong Edhi Setyawan, Willy Artha Wirawan, Yudhi Ariadi, Allan EW Rennie, Diva Kurnianingtyas',
      journal: 'Mechanical Engineering for Society and Industry',
      quartile: 'Q2',
      role: 'co-author',
      link: ''
    },
    {
      year: 2025,
      title: 'Naïve Bayes Analysis for Nutritional Fulfillment Prediction in Children',
      authors: 'Satrio Agung Wicaksono*, Satrio Hadi Wijoyo, Tri Afirianto, Diva Kurnianingtyas, Mochammad Chandra Saputra',
      journal: 'JAEST',
      quartile: 'Q4',
      role: 'co-author',
      link: ''
    },
    {
      year: 2025,
      title: 'Performance Evaluation of Different Classification Algorithms Applied for Identifying Maternal Nutritional Status by Anthropometric Measurements',
      authors: 'Diva Kurnianingtyas, Nathan Daud, Agus Wahyu Widodo*, Tutut Herawan',
      journal: 'IJIE',
      quartile: 'Q3',
      role: 'first author',
      link: ''
    },
    {
      year: 2025,
      title: 'Synthesis of Batik Motifs using a Diffusion-Generative Adversarial Network',
      authors: 'One Octadion, Novanto Yudistira*, Diva Kurnianingtyas',
      journal: 'SN Multimedia Tools and Application',
      quartile: 'Q1',
      role: 'co-author',
      link: ''
    }
  ],
  '2024': [
    {
      year: 2024,
      title: 'A review of machine learning methods to build predictive models for male reproductive health',
      authors: 'Ariawan Adimoelja, Wayan Firdaus Mahmudy*, Diva Kurnianingtyas',
      journal: 'IAES IJAI',
      quartile: 'Q2',
      role: 'co-author',
      link: ''
    },
    {
      year: 2024,
      title: 'Optimizing Sensitive Weight Configurations on a Fast-Planing Vessel to Reduce Drag',
      authors: 'Muhammad Luqman Hakim*, Dian Purnamasari, Mohammad Luthfasyah, Patricia Evericho Mountaines, Diva Kurnianingtyas, Dendy Satrio, Muhammad Hafiz Nurwahyu Aliffrananda',
      journal: 'Transdisiplinary Research and Education Center for Green Technologies',
      quartile: 'Q2',
      role: 'co-author',
      link: ''
    },
    {
      year: 2024,
      title: 'A Deep Learning Approach to Plastic Bottle Waste Detection on the Water Surface using YOLOv6 and YOLOv7',
      authors: 'Naufal Laksana Kirana, Diva Kurnianingtyas*, Indriati',
      journal: 'ETASR',
      quartile: 'Q2',
      role: 'corresponding author',
      link: ''
    },
    {
      year: 2024,
      title: 'Improving Green Practice Readiness in Indonesian Beef Value Chain',
      authors: 'Hana Catur Wahyuni*, Inggit Marodiyah, Marimin Marimin, Ivan Gunawan, Diva Kurnianingtyas',
      journal: 'IEMS',
      quartile: 'Q2',
      role: 'co-author',
      link: ''
    },
    {
      year: 2024,
      title: 'FMEA for blockchain design for food safety and halal risk mitigation in meat supply chain',
      authors: 'Hana Catur Wahyuni*, Rahmania Sri Untari, Rima Azzara, Diva Kurnianingtyas, Marco Tieman',
      journal: 'IJIE',
      quartile: 'Q2',
      role: 'co-author',
      link: ''
    }
  ],
  '2022': [
    {
      year: 2022,
      title: 'A system dynamic to reforming of the healthcare sector in the Indonesian National Health Insurance System Program',
      authors: 'Diva Kurnianingtyas, Budi Santosa, Nurhadi Siswanto*',
      journal: 'Inderscience',
      quartile: 'Q2',
      role: 'first author',
      link: ''
    }
  ],
  '2021': [
    {
      year: 2021,
      title: 'Reforming premium amount in the Indonesian National Health Insurance System program using system dynamics',
      authors: 'Diva Kurnianingtyas, Budi Santosa, Nurhadi Siswanto*',
      journal: 'T&F Cogent Engineering',
      quartile: 'Q2',
      role: 'first author',
      link: ''
    }
  ]
};

// Proceedings data
const proceedingsData: Record<string, Array<{
  year: number;
  title: string;
  authors: string;
  conference: string;
  category: string;
  link: string;
}>> = {
  '2025': [
    {
      year: 2025,
      title: 'Enhancing Logistics Efficiency Through Metaheuristics on the Capacity Vehicle',
      authors: 'Diva Kurnianingtyas*, Sza Sza Amulya Larasati, Agus Wahyu Widodo',
      conference: 'Prosiding ISMSI 2025',
      category: 'Scopus',
      link: ''
    }
  ],
  '2024': [
    {
      year: 2024,
      title: 'Food Image Classification for Maternal Nutritional Fulfillment Using MobileNet',
      authors: 'Nathan Daud, Diva Kurnianingtyas*',
      conference: 'Prosiding COMNETSAT 2024',
      category: 'Scopus',
      link: ''
    },
    {
      year: 2024,
      title: 'Cost-Effective Job Sequence Optimization for Minimizing Downtime in Flexographic Printing With Puma Optimizer Algorithm',
      authors: 'Haidar Hanif, Nathan Daud, Diva Kurnianingtyas*, Ivan Keane Hutomo, Ivan Gunawan',
      conference: 'Prosiding COMNETSAT 2024',
      category: 'Scopus',
      link: ''
    },
    {
      year: 2024,
      title: 'Leveraging AI Models for Enhanced Urine Analysis: Evaluating YOLOv8 and MobileNet-v2 in Dehydration Detection Post-COVID-19',
      authors: 'Nathan Daud, Alexander Imanuel Widjanarko, Diva Kurnianingtyas*',
      conference: 'Prosiding COMNETSAT 2024',
      category: 'Scopus',
      link: ''
    },
    {
      year: 2024,
      title: 'Face Expression Recognition on Ojek Online for Safety Improvement Using Deep Learning',
      authors: 'Nathan Daud, Alexander Imanuel Widjanarko, Naomi Sitanggang, Diva Kurnianingtyas*',
      conference: 'Prosiding ISCMI 2024',
      category: 'Scopus',
      link: ''
    }
  ],
  '2023': [
    {
      year: 2023,
      title: 'Application of Artificial Intelligence for Maternal and Child Disorders in Indonesia: A Review',
      authors: 'Diva Kurnianingtyas, Indriati, Lailil Muflikhah*',
      conference: 'Prosiding ASIASIM 2023',
      category: 'Scopus',
      link: ''
    },
    {
      year: 2023,
      title: 'Application of Data Augmentation on SSD Mobilenet for Detection of Kenaf Plant Disease and Pest',
      authors: 'Agus Wahyu Widodo, Alfita Rakhmandasari, Wayan Firdaus Mahmudy*, Muh Arif Rahman, Diva Kurnianingtyas',
      conference: 'Prosiding SIET 2023',
      category: 'Scopus',
      link: ''
    }
  ],
  '2022': [
    {
      year: 2022,
      title: 'Sentiment Analysis Model for KlikIndomaret Android App During Pandemic Using Vader and Transformers NLTK Library',
      authors: 'Akhmad Ghiffary Budianto*, Budisantoso Wirjodirdjo, Iffan Maflahah, Diva Kurnianingtyas',
      conference: 'Prosiding IEEM 2022',
      category: 'Scopus',
      link: ''
    },
    {
      year: 2022,
      title: 'Optimization of healthcare problems using swarm intelligence: a review',
      authors: 'Agus Wahyu Widodo, Diva Kurnianingtyas*, Wayan Firdaus Mahmudy',
      conference: 'Prosiding IEEM 2022',
      category: 'Scopus',
      link: ''
    }
  ],
  '2020': [
    {
      year: 2020,
      title: 'Structural and Behavioral Validity using a System Dynamic Simulation Approach: The Indonesian National Health Insurance System Problem',
      authors: 'Diva Kurnianingtyas, Budi Santosa*, Nurhadi Siswanto',
      conference: 'Prosiding ICONIT 2020',
      category: 'Scopus',
      link: ''
    },
    {
      year: 2020,
      title: 'A System Dynamics for Financial Strategy Model Assessment in National Health Insurance System',
      authors: 'Diva Kurnianingtyas, Budi Santosa*, Nurhadi Siswanto',
      conference: 'Prosiding MSIE 2020',
      category: 'Scopus',
      link: ''
    }
  ],
  '2019': [
    {
      year: 2019,
      title: 'Solving Deficit Funding Issues in Indonesian Health Insurance Systems',
      authors: 'Diva Kurnianingtyas, Budi Santosa*, Nurhadi Siswanto',
      conference: 'Prosiding IEEM 2019',
      category: 'Scopus',
      link: ''
    },
    {
      year: 2019,
      title: 'System dynamics simulation to determine financial strategy for social health insurance in Indonesia',
      authors: 'Diva Kurnianingtyas, Budi Santosa*, Nurhadi Siswanto',
      conference: 'Prosiding MECIT 2019',
      category: 'Scopus',
      link: ''
    }
  ]
};

const booksData: Record<string, Array<{
  title: string;
  source: string;
  sourceEn: string;
  year: number;
}>> = {
  '2023': [
    {
      title: 'Machine Learning',
      source: 'Universitas Brawijaya Press',
      sourceEn: 'Brawijaya University Press',
      year: 2023
    }
  ],
  '2017': [
    {
      title: 'Sistem Basis Data',
      source: 'Universitas Brawijaya Press',
      sourceEn: 'Brawijaya University Press',
      year: 2017
    }
  ]
};

export function ResearchSection({ language }: ResearchSectionProps) {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const t = {
    title: language === 'id' ? 'Penelitian dan Publikasi' : 'Research and Publications',
    grants: language === 'id' ? 'Hibah Penelitian' : 'Research Grants',
    books: language === 'id' ? 'Publikasi Buku' : 'Published Books',
    publications: language === 'id' ? 'Publikasi Ilmiah' : 'Scientific Publications',
    proceedings: language === 'id' ? 'Prosiding' : 'Proceedings',
    teachingGrants: language === 'id' ? 'Hibah Pengajaran' : 'Teaching Grants',
    researchers: language === 'id' ? 'Peneliti' : 'Researchers',
    partner: language === 'id' ? 'Mitra' : 'Partner',
    authors: language === 'id' ? 'Penulis' : 'Authors',
    journal: language === 'id' ? 'Jurnal' : 'Journal',
    conference: language === 'id' ? 'Konferensi' : 'Conference'
  };

  return (
    <section id="research" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-white/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          {...fadeInUp}
          className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
        >
          <Award className="text-purple-600" size={32} />
          <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            {t.title}
          </h2>
        </motion.div>

        <Tabs defaultValue="grants" className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-5 max-w-5xl mx-auto">
            <TabsTrigger value="grants">{t.grants}</TabsTrigger>
            <TabsTrigger value="teachingGrants">{t.teachingGrants}</TabsTrigger>
            <TabsTrigger value="publications">{t.publications}</TabsTrigger>
            <TabsTrigger value="proceedings">{t.proceedings}</TabsTrigger>
            <TabsTrigger value="books">{t.books}</TabsTrigger>
          </TabsList>

          {/* Research Grants Tab */}
          <TabsContent value="grants" className="space-y-6">
            <Tabs defaultValue="2025" className="space-y-4">
              <TabsList className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 h-auto bg-transparent">
                {Object.keys(researchGrantsData).map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(researchGrantsData).map(([year, grants]) => (
                <TabsContent key={year} value={year}>
                  <motion.div {...fadeInUp}>
                    <div className="space-y-4">
                      {grants.map((grant, idx) => (
                        <Card key={idx} className={`border-l-4 ${idx % 2 === 0 ? 'border-l-purple-500' : 'border-l-pink-500'}`}>
                          <CardHeader>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                              <CardTitle className="text-sm sm:text-base">
                                {language === 'id' ? grant.title : grant.titleEn}
                              </CardTitle>
                              <Badge
                                variant="outline"
                                className="shrink-0 text-xs"
                              >
                                {grant.amount.replace('juta', language === 'id' ? 'juta' : 'million')}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-xs sm:text-sm text-gray-600">
                              {language === 'id' ? grant.source : grant.sourceEn}
                            </p>
                            {grant.partner && (
                              <p className="text-xs sm:text-sm text-gray-500">
                                {t.partner}: {grant.partner}
                              </p>
                            )}
                            <p className="text-xs sm:text-sm text-gray-500">
                              {t.researchers}: {grant.researchers}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          {/* Teaching Grants Tab */}
          <TabsContent value="teachingGrants">
            <Tabs defaultValue="2025" className="space-y-4">
              <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 h-auto bg-transparent">
                {Object.keys(teachingGrantsData).sort((a, b) => b.localeCompare(a)).map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(teachingGrantsData).map(([year, grants]) => (
                <TabsContent key={year} value={year}>
                  <motion.div {...fadeInUp}>
                    <div className="space-y-4">
                      {grants.map((grant, idx) => (
                        <Card key={idx} className={`border-l-4 ${idx % 2 === 0 ? 'border-l-purple-500' : 'border-l-pink-500'}`}>
                          <CardHeader>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                              <div className="flex-1">
                                <CardTitle className="text-sm sm:text-base">
                                  {language === 'id' ? grant.title : grant.titleEn}
                                </CardTitle>
                              </div>
                              <Badge
                                variant="outline"
                                className="shrink-0 text-xs"
                              >
                                {language === 'id' ? grant.amount : grant.amountEn}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-xs sm:text-sm text-gray-600">
                              {language === 'id' ? grant.source : grant.sourceEn}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          {/* Publications Tab */}
          <TabsContent value="publications">
            <Tabs defaultValue="2025" className="space-y-4">
              <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 h-auto bg-transparent">
                {Object.keys(publicationsData).sort((a, b) => b.localeCompare(a)).map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(publicationsData).map(([year, pubs]) => (
                <TabsContent key={year} value={year}>
                  <motion.div {...fadeInUp}>
                    <div className="space-y-4">
                      {pubs.map((pub, idx) => (
                        <Card key={idx} className={`border-l-4 ${idx % 2 === 0 ? 'border-l-purple-500' : 'border-l-pink-500'}`}>
                          <CardHeader>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <Badge variant="outline" className="text-xs">{pub.quartile}</Badge>
                                  <Badge variant="secondary" className="text-xs">{pub.role}</Badge>
                                </div>
                                <CardTitle className="text-sm sm:text-base">{pub.title}</CardTitle>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-xs sm:text-sm text-gray-600">
                              {t.journal}: {pub.journal}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500">
                              {t.authors}: {pub.authors}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          {/* Proceedings Tab */}
          <TabsContent value="proceedings">
            <Tabs defaultValue="2025" className="space-y-4">
              <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 h-auto bg-transparent">
                {Object.keys(proceedingsData).sort((a, b) => b.localeCompare(a)).map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(proceedingsData).map(([year, procs]) => (
                <TabsContent key={year} value={year}>
                  <motion.div {...fadeInUp}>
                    <div className="space-y-4">
                      {procs.map((proc, idx) => (
                        <Card key={idx} className={`border-l-4 ${idx % 2 === 0 ? 'border-l-purple-500' : 'border-l-pink-500'}`}>
                          <CardHeader>
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                              <div className="flex-1">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                  <Badge variant="outline" className="text-xs">{proc.category}</Badge>
                                </div>
                                <CardTitle className="text-sm sm:text-base">{proc.title}</CardTitle>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent className="space-y-2">
                            <p className="text-xs sm:text-sm text-gray-600">
                              {t.conference}: {proc.conference}
                            </p>
                            <p className="text-xs sm:text-sm text-gray-500">
                              {t.authors}: {proc.authors}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>

          {/* Books Tab */}
          <TabsContent value="books">
            <Tabs defaultValue="2023" className="space-y-4">
              <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 h-auto bg-transparent">
                {Object.keys(booksData).sort((a, b) => b.localeCompare(a)).map((year) => (
                  <TabsTrigger
                    key={year}
                    value={year}
                    className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                  >
                    {year}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(booksData).map(([year, books]) => (
                <TabsContent key={year} value={year}>
                  <motion.div {...fadeInUp}>
                    <div className="space-y-4">
                      {books.map((book, idx) => (
                        <Card key={idx} className={`border-l-4 ${idx % 2 === 0 ? 'border-l-purple-500' : 'border-l-pink-500'}`}>
                          <CardContent className="pt-6">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                              <div>
                                <p className="text-sm sm:text-base font-semibold">{book.title}</p>
                                <p className="text-xs sm:text-sm text-gray-600">
                                  {language === 'id' ? book.source : book.sourceEn}
                                </p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
