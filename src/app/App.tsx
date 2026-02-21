import { useState } from 'react';
import { Menu, X, Mail, GraduationCap, BookOpen, Award, Users, Globe, Building, Languages, Mic, Trophy, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { ResearchSection } from './components/ResearchSection';
import profileImage from "@/assets/profile.jpg";

// Translation object
const translations = {
  id: {
    nav: {
      home: 'Beranda',
      about: 'Profil',
      education: 'Pendidikan',
      positions: 'Jabatan',
      teaching: 'Pengajaran',
      research: 'Penelitian',
      publications: 'Publikasi',
      international: 'Internasional',
      speakers: 'Narasumber',
      service: 'Pengabdian'
    },
    hero: {
      position: 'Dosen Tetap Non PNS',
      faculty: 'Fakultas Ilmu Komputer, Universitas Brawijaya',
      contact: 'Hubungi Saya',
      downloadCV: 'Unduh CV'
    },
    profileDetail: {
      title: 'Profil Detail'
    },
    education: {
      title: 'Riwayat Pendidikan',
      fastrack: 'Fastrack PMDSU'
    },
    positions: {
      title: 'Riwayat Jabatan',
      current: 'Saat Ini'
    },
    teaching: {
      title: 'Pengajaran dan Bimbingan',
      experience: 'Pengalaman Mengajar',
      supervision: 'Bimbingan Mahasiswa',
      grants: 'Hibah Pengajaran',
      advisor1: 'Pembimbing Pertama',
      advisor2: 'Pembimbing Kedua',
      students: 'Mahasiswa',
      graduation: 'Data Kelulusan',
      total: 'Total'
    },
    research: {
      title: 'Penelitian dan Publikasi',
      grants: 'Hibah Penelitian',
      books: 'Publikasi Buku'
    },
    publications: {
      title: 'Publikasi Ilmiah',
      journals: 'Jurnal',
      proceedings: 'Prosiding'
    },
    international: {
      title: 'Kolaborasi Internasional',
      cooperation: 'Kerjasama Akademik',
      mobility: 'Mobilitas Mahasiswa Internasional',
      totalStudents: 'Total Mahasiswa',
      partnerUniversities: 'Universitas Mitra',
      countries: 'Negara'
    },
    speakers: {
      title: 'Pengalaman Sebagai Narasumber',
      organizer: 'Penyelenggara',
      activity: 'Kegiatan'
    },
    haki: {
      title: 'Hak Cipta (HAKI)',
      id: 'Nomor',
      type: 'Jenis',
      awardsTitle: 'Penghargaan dan Organisasi Profesi'
    },
    service: {
      title: 'Pengabdian Masyarakat',
      source: 'Sumber'
    },
    footer: {
      contact: 'Kontak',
      quickLinks: 'Tautan Cepat',
      rights: 'Hak Cipta Dilindungi'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'Profile',
      education: 'Education',
      positions: 'Positions',
      teaching: 'Teaching',
      research: 'Research',
      publications: 'Publications',
      international: 'International',
      speakers: 'Speakers',
      service: 'Community Service'
    },
    hero: {
      position: 'Permanent Lecturer (Non Civil Servant)',
      faculty: 'Faculty of Computer Science, Brawijaya University',
      contact: 'Contact Me',
      downloadCV: 'Download CV'
    },
    profileDetail: {
      title: 'Profile Details'
    },
    education: {
      title: 'Educational Background',
      fastrack: 'Fastrack PMDSU'
    },
    positions: {
      title: 'Position History',
      current: 'Current'
    },
    teaching: {
      title: 'Teaching and Supervision',
      experience: 'Teaching Experience',
      supervision: 'Student Supervision',
      grants: 'Teaching Grants',
      advisor1: 'First Advisor',
      advisor2: 'Second Advisor',
      students: 'Students',
      graduation: 'Graduation Data',
      total: 'Total'
    },
    research: {
      title: 'Research and Publications',
      grants: 'Research Grants',
      books: 'Published Books'
    },
    publications: {
      title: 'Scientific Publications',
      journals: 'Journals',
      proceedings: 'Proceedings'
    },
    international: {
      title: 'International Collaboration',
      cooperation: 'Academic Cooperation',
      mobility: 'International Student Mobility',
      totalStudents: 'Total Students',
      partnerUniversities: 'Partner Universities',
      countries: 'Countries'
    },
    speakers: {
      title: 'Experience as Speaker',
      organizer: 'Organizer',
      activity: 'Activity'
    },
    haki: {
      title: 'Intellectual Property Rights (HAKI)',
      id: 'Number',
      type: 'Type',
      awardsTitle: 'Awards and Professional Organizations'
    },
    service: {
      title: 'Community Service',
      source: 'Source'
    },
    footer: {
      contact: 'Contact',
      quickLinks: 'Quick Links',
      rights: 'All Rights Reserved'
    }
  }
};

const hakiData: Record<string, Array<{ title: string; type: string; id: string }>> = {
  '2025': [
    { title: 'Aplikasi Android Penjadwalan Makanan Harian Ibu Hamil', type: 'Program Komputer', id: 'EC002025170587' },
    { title: 'Alat Deteksi Stunting Bayi dengan AIoT', type: 'Program Komputer', id: 'EC002025167200' },
    { title: 'Alat Pengukur Panjang dan Berat Badan Bayi dengan IoT', type: 'Program Komputer', id: 'EC002025171886' },
    { title: 'Video Edukasi Penggunaan AI Pendukung Literasi Digital Pada Remaja Dini', type: 'Karya Rekaman Video', id: '2.01.02.02-.007395/2025' },
    { title: 'Dunia Digital Anak', type: 'Karya Rekaman Video', id: 'EC002025168825' },
    { title: 'Orang Tua Sebagai Cahaya Dunia Digital Anak', type: 'Cerita Bergambar', id: 'EC002025168826' },
    { title: 'Video Edukasi Penggunaan AI Pendukung Literasi Digital Pada Remaja Dini', type: 'Karya Rekaman Video', id: 'EC002025168444' }
  ],
  '2023': [
    { title: 'MITA: Metaverse Advisor Ide Support Mascot', type: 'Desain', id: 'EC002023108418' },
    { title: 'Video Ideas for Constructive Social Rehabilitation fo Victims of Sexual Abuse with Metaverse-Based Virtual Support Group to Improve Post Traumatic Stress Disorder Recovery', type: 'Video', id: 'EC002023108418' },
    { title: 'Skin Clinics Ver 2', type: 'Program Komputer', id: 'EC00202391670' },
    { title: 'Skin Clinics', type: 'Prototype', id: 'EC00202376386' }
  ],
  '2022': [
    { title: 'Chatbot FAQ UB V1.0', type: 'Program Komputer', id: 'EC00202293488' }
  ]
};

const serviceData: Record<string, Array<{
  title: string;
  titleEn: string;
  year: number;
  source: string;
  sourceEn: string;
  team?: string;
  location?: string;
  locationEn?: string;
  amount: string;
  amountEn: string;
}>> = {
  '2025': [
    {
      title: 'Pembangunan Sistem Informasi Manajemen Administrasi Desa/Kelurahan (SIMDEK)',
      titleEn: 'Development of Village/Sub-district Administration Management Information System (SIMDEK)',
      year: 2025,
      source: 'DRPM: Hibah Pengabdian Kepada Masyarakat Strategis',
      sourceEn: 'DRPM: Strategic Community Service Grant',
      team: 'Arief Andy Soebroto, Agi Putra Kharisma, Diva Kurnianingtyas, Nurul Hidayat',
      amount: '25 jt',
      amountEn: '25 million'
    },
    {
      title: 'Penguatan Budaya Literasi Digital Pada Remaja Sejak Dini Melalui Kelompok Posyandu Integrasi Layanan Primer',
      titleEn: 'Strengthening Digital Literacy Culture in Early Adolescents Through Integrated Primary Service Posyandu Groups',
      year: 2025,
      source: 'DRPM: Hibah Doktor Mengabdi',
      sourceEn: 'DRPM: Doctorate Community Service Grant',
      location: 'Desa Dono, Kecamatan Sendang, Kabupaten Tulungagung',
      locationEn: 'Dono Village, Sendang District, Tulungagung Regency',
      amount: '40 jt',
      amountEn: '40 million'
    },
    {
      title: 'Pemanfaatan Digitalisasi dalam Peningkatan Produktivitas Kader Posyandu melalui Google Workspace',
      titleEn: 'Utilizing Digitalization to Improve Posyandu Cadre Productivity through Google Workspace',
      year: 2025,
      source: 'FILKOM UB: Hibah DIPA Pengabdian',
      sourceEn: 'FILKOM UB: DIPA Community Service Grant',
      team: 'Diva Kurnianingtyas, Prima Zulvarina, Wayan Firdaus Mahmudy',
      amount: '10 jt',
      amountEn: '10 million'
    }
  ],
  '2024': [
    {
      title: 'Diseminasi Riset untuk Peningkatan Kompetensi Manajemen Pesantren Berbasis Artificial Intelligence',
      titleEn: 'Research Dissemination for Improving Pesantren Management Competence Based on Artificial Intelligence',
      year: 2024,
      source: 'FILKOM UB: Hibah DIPA Pengabdian',
      sourceEn: 'FILKOM UB: DIPA Community Service Grant',
      team: 'Agus Wahyu Widodo, Diva Kurnianingtyas, Lailil Muflikhah, Novanto Yudistira',
      amount: '10 jt',
      amountEn: '10 million'
    }
  ]
};

const speakersData: Record<string, Array<{ year: number; title: string; organizer: string }>> = {
  '2026': [
    { year: 2026, title: 'Workshop Peningkatan Kualitas dan Peran AI dalam Penyusunan Kerja UKM', organizer: 'Kemahasiswaan UB' }
  ],
  '2025': [
    { year: 2025, title: 'Diskusi Pemenuhan Capaian Bidang Kemahasiswaan: Prestasi, Karya, dan Sertifikasi Kompetensi Internasional', organizer: 'Kemahasiswaan FISIP UB' },
    { year: 2025, title: 'Bootcamp MIC (Topik AI untuk mendukung Bisnis Berorientasi SDGs)', organizer: 'SMK Telkom Malang' },
    { year: 2025, title: 'Workshop Peningkatan Kualitas dan Peran AI dalam Penyusunan Kerja UKM', organizer: 'Kemahasiswaan UB' },
    { year: 2025, title: 'Strategi Sukses menuju PIMNAS', organizer: 'Universitas Machung' },
    { year: 2025, title: 'Diklat K-RISMA (Dasar Penulisan Karya Ilmiah)', organizer: 'K-RISMA FILKOM UB' },
    { year: 2025, title: 'Research.id Academy', organizer: 'Research.id Indonesia' },
    { year: 2025, title: 'Kegiatan Mawapres FILKOM UB (Memahami Landasan Teori dan Strategi Penulisan dalam Pengembangan Karya Tulis Ilmiah)', organizer: 'BEM FILKOM UB' },
    { year: 2025, title: 'LKMM-TM (Perkembangan Teknologi Informasi dan Komunikasi)', organizer: 'FTP UB' },
    { year: 2025, title: 'K-RISMA XIII BOOTCAMP (Journal Journey: Membangun Struktur Ilmiah, Mencetak Blueprint Juara)', organizer: 'K-RISMA FILKOM UB' }
  ],
  '2024': [
    { year: 2024, title: 'K-RISMA XII BOOTCAMP (Crafting Extended Abstracts for Visionary Sustainable Innovation)', organizer: 'K-RISMA FILKOM UB' },
    { year: 2024, title: 'LPPM: Menumbuhkan Kolaborasi Riset', organizer: 'Politeknik Perkapalan Negeri Surabaya' },
    { year: 2024, title: 'Kegiatan Mawapres FILKOM UB (Kiat Menulis Artikel Ilmiah sesuai SDGs)', organizer: 'BEM FILKOM UB' },
    { year: 2024, title: 'Transformasi Digital Manufaktur', organizer: 'Institut Teknologi Adhi Tama Surabaya' },
    { year: 2024, title: 'PKKMB & Startup Academy (Mengatasi Tantangan Global Melalui SDGs untuk Menuju Indonesia Emas 2045)', organizer: 'FILKOM UB' },
    { year: 2024, title: 'AI untuk Journalistik', organizer: 'DISPLAY FILKOM UB' }
  ],
  '2023': [
    { year: 2023, title: 'Workshop Penelitian dan Publikasi Ilmiah', organizer: 'FILKOM UB' },
    { year: 2023, title: 'Seminar Nasional AI dan Machine Learning', organizer: 'Universitas Brawijaya' }
  ],
  '2022': [
    { year: 2022, title: 'Pelatihan Pengembangan Sistem Berbasis AI', organizer: 'FILKOM UB' },
    { year: 2022, title: 'Workshop Optimasi Sistem', organizer: 'Fakultas Teknik UB' },
    { year: 2022, title: 'Seminar Teknologi Informasi', organizer: 'HMTC FILKOM UB' },
    { year: 2022, title: 'Workshop Data Science', organizer: 'FILKOM UB' },
    { year: 2022, title: 'Pelatihan Machine Learning untuk Pemula', organizer: 'K-RISMA FILKOM UB' },
    { year: 2022, title: 'Webinar Kecerdasan Buatan', organizer: 'BEM FILKOM UB' },
    { year: 2022, title: 'Workshop Basis Data', organizer: 'FILKOM UB' },
    { year: 2022, title: 'Seminar Sistem Informasi', organizer: 'HMSI FILKOM UB' }
  ]
};

// Teaching data organized by semester
const teachingData = {
  '2025/2026 Genap': [
    { name: 'Basis Data', nameEn: 'Database', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Teknik dan Algoritma Optimasi', nameEn: 'Optimization Techniques and Algorithms', program: 'S2 Ilmu Komputer', programEn: 'Master of Computer Science', sks: 3 },
    { name: 'Pengantar Sains Data', nameEn: 'Introduction to Data Science', program: 'S1 Sistem Informasi (Internasional)', programEn: 'Bachelor of Information Systems (International)', sks: 2 },
    { name: 'Manajemen Rantai Suplai', nameEn: 'Supply Chain Management', program: 'S1 Sistem Informasi', programEn: 'Bachelor of Information Systems', sks: 2 },
    { name: 'Kecerdasan Artifisial', nameEn: 'Artificial Intelligence', program: 'S1 Pendidikan Teknologi Informasi', programEn: 'Bachelor of Information Technology Education', sks: 3 },
    { name: 'Penambangan Data', nameEn: 'Data Mining', program: 'S1 Teknologi Informasi', programEn: 'Bachelor of Information Technology', sks: 3 },
  ],
  '2025/2026 Ganjil': [
    { name: 'Komputasi Numerik', nameEn: 'Numerical Computing', program: 'S1 Teknik Komputer', programEn: 'Bachelor of Computer Engineering', sks: 2 },
    { name: 'Kecerdasan Artifisial', nameEn: 'Artificial Intelligence', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 2 },
    { name: 'Metode Numerik', nameEn: 'Numerical Methods', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Metodologi Penelitian dan Penulisan Ilmiah', nameEn: 'Research Methodology and Scientific Writing', program: 'S1 Sistem Informasi', programEn: 'Bachelor of Information Systems', sks: 3 },
    { name: 'Pengantar Artificial Intelligence', nameEn: 'Introduction to Artificial Intelligence', program: 'S1 Seni Rupa', programEn: 'Bachelor of Fine Arts', sks: 2 },
    { name: 'AI Manajemen Rumah Sakit', nameEn: 'AI for Hospital Management', program: 'S2 Manajemen Rumah Sakit', programEn: 'Master of Hospital Management', sks: 2 },
  ],
  '2024/2025 Genap': [
    { name: 'Desain Basis Data', nameEn: 'Database Design', program: 'S1 Teknologi Informasi', programEn: 'Bachelor of Information Technology', sks: 2 },
    { name: 'Basis Data', nameEn: 'Database', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Sistem Basis Data', nameEn: 'Database Systems', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 2 },
    { name: 'Sistem Pendukung Keputusan', nameEn: 'Decision Support Systems', program: 'S1 Sistem Informasi', programEn: 'Bachelor of Information Systems', sks: 3 },
    { name: 'MB Komunikasi Publik', nameEn: 'Public Communication', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
  ],
  '2024/2025 Ganjil': [
    { name: 'Kecerdasan Buatan dan Pembelajaran Mesin', nameEn: 'Artificial Intelligence and Machine Learning', program: 'S1 Teknologi Informasi', programEn: 'Bachelor of Information Technology', sks: 3 },
    { name: 'Basis Data', nameEn: 'Database', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Metodologi Penelitian dan Penulisan Ilmiah', nameEn: 'Research Methodology and Scientific Writing', program: 'S1 Sistem Informasi', programEn: 'Bachelor of Information Systems', sks: 3 },
    { name: 'Kecerdasan Artifisial', nameEn: 'Artificial Intelligence', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 2 },
  ],
  '2023/2024 Genap': [
    { name: 'Data Mining', nameEn: 'Data Mining', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Basis Data Terapan', nameEn: 'Applied Database', program: 'S1 Teknik Komputer', programEn: 'Bachelor of Computer Engineering', sks: 3 },
    { name: 'Pemrosesan Bahasa Alami', nameEn: 'Natural Language Processing', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Sistem Pendukung Keputusan', nameEn: 'Decision Support Systems', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Pemasaran Digital', nameEn: 'Digital Marketing', program: 'S2 Manajemen Rumah Sakit', programEn: 'Master of Hospital Management', sks: 2 },
  ],
  '2023/2024 Ganjil': [
    { name: 'Basis Data', nameEn: 'Database', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 4 },
    { name: 'Pemrograman Dasar', nameEn: 'Basic Programming', program: 'S1 Teknik Komputer', programEn: 'Bachelor of Computer Engineering', sks: 4 },
    { name: 'Kecerdasan Buatan', nameEn: 'Artificial Intelligence', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
  ],
  '2022/2023 Genap': [
    { name: 'Sistem Pendukung Keputusan', nameEn: 'Decision Support Systems', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Matematika Komputasi Lanjut', nameEn: 'Advanced Computational Mathematics', program: 'S1 Teknik Komputer', programEn: 'Bachelor of Computer Engineering', sks: 4 },
    { name: 'Pemrosesan Bahasa Alami', nameEn: 'Natural Language Processing', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Basis Data Terapan', nameEn: 'Applied Database', program: 'S1 Teknik Komputer', programEn: 'Bachelor of Computer Engineering', sks: 3 },
    { name: 'Pemasaran Digital', nameEn: 'Digital Marketing', program: 'S2 Manajemen Rumah Sakit', programEn: 'Master of Hospital Management', sks: 2 },
  ],
  '2022/2023 Ganjil': [
    { name: 'Basis Data', nameEn: 'Database', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 4 },
    { name: 'Pemrograman Dasar', nameEn: 'Basic Programming', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 4 },
    { name: 'Kecerdasan Buatan', nameEn: 'Artificial Intelligence', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
  ],
  '2021/2022 Genap': [
    { name: 'Sistem Basis Data', nameEn: 'Database Systems', program: 'S1 Teknologi Informasi', programEn: 'Bachelor of Information Technology', sks: 4 },
    { name: 'Pemerolehan Informasi', nameEn: 'Information Retrieval', program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', sks: 3 },
    { name: 'Data Warehouse', nameEn: 'Data Warehouse', program: 'S1 Sistem Informasi', programEn: 'Bachelor of Information Systems', sks: 3 },
  ],
};

interface SupervisionItem {
  type: 'advisor1' | 'advisor2';
  count: number;
  program: string;
  programEn: string;
  topics: string;
  topicsEn: string;
  isTotal?: boolean;
}

const supervisionData: Record<string, SupervisionItem[]> = {
  '2025': [
    { type: 'advisor1', count: 13, program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', topics: 'Machine Learning, Optimasi, Sentiment Analysis', topicsEn: 'Machine Learning, Optimization, Sentiment Analysis' },
    { type: 'advisor1', count: 1, program: 'S1 Sistem Informasi', programEn: 'Bachelor of Information Systems', topics: 'Optimasi', topicsEn: 'Optimization' },
    { type: 'advisor2', count: 19, program: '5 S1 Teknik Informatika, 1 S1 Teknik Komputer, 1 S1 Teknologi Informasi, 11 S1 Sistem Informasi', programEn: '5 Bachelor of Informatics, 1 Bachelor of Computer Engineering, 1 Bachelor of Information Technology, 11 Bachelor of Information Systems', topics: 'Machine Learning, AI Problem', topicsEn: 'Machine Learning, AI Problem', isTotal: true }
  ],
  '2024': [
    { type: 'advisor1', count: 4, program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', topics: 'Optimasi, Computer Vision', topicsEn: 'Optimization, Computer Vision' },
    { type: 'advisor2', count: 3, program: '2 S1 Teknik Informatika, 1 S1 Teknologi Informasi', programEn: '2 Bachelor of Informatics, 1 Bachelor of Information Technology', topics: 'Computer Vision, Sentiment Analysis, Factor Analysis', topicsEn: 'Computer Vision, Sentiment Analysis, Factor Analysis' }
  ],
  '2023': [
    { type: 'advisor2', count: 2, program: 'S1 Teknik Informatika', programEn: 'Bachelor of Informatics', topics: 'Gen AI, Sentiment Analysis', topicsEn: 'Gen AI, Sentiment Analysis' }
  ]
};

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'id' | 'en'>('id');

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  const handleDownloadCV = () => {
    window.open('https://drive.google.com/uc?export=download&id=135lhGPQSSnTJ18zaeNGbT3YGsKR3-F0q', '_blank');
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-50">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-purple-100"
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex justify-between items-center h-16">
            <div className="font-bold text-xl bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Dr. Diva Kurnianingtyas
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-6 items-center text-sm">
              <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.about}</button>
              <button onClick={() => scrollToSection('education')} className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.education}</button>
              <button onClick={() => scrollToSection('positions')} className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.positions}</button>
              <button onClick={() => scrollToSection('teaching')} className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.teaching}</button>
              <button onClick={() => scrollToSection('research')} className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.research}</button>
              <button onClick={() => scrollToSection('international')} className="text-gray-700 hover:text-purple-600 transition-colors">{t.nav.international}</button>

              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 hover:from-pink-200 hover:to-purple-200 transition-all"
              >
                <Languages size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-purple-700">{language === 'id' ? 'EN' : 'ID'}</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded-full bg-gradient-to-r from-pink-100 to-purple-100"
              >
                <Languages size={14} className="text-purple-600" />
                <span className="text-xs font-medium text-purple-700">{language === 'id' ? 'EN' : 'ID'}</span>
              </button>
              <button
                className="p-2"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden py-4 space-y-2"
            >
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">{t.nav.home}</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">{t.nav.about}</button>
              <button onClick={() => scrollToSection('education')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">{t.nav.education}</button>
              <button onClick={() => scrollToSection('positions')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">{t.nav.positions}</button>
              <button onClick={() => scrollToSection('teaching')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">{t.nav.teaching}</button>
              <button onClick={() => scrollToSection('research')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">{t.nav.research}</button>
              <button onClick={() => scrollToSection('international')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">{t.nav.international}</button>
              <button onClick={() => scrollToSection('speakers')} className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-lg">{t.nav.speakers}</button>
            </motion.div>
          )}
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-4 sm:space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full"
              >
                <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {t.hero.position}
                </span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              >
                Dr. Ir. Diva Kurnianingtyas, S.Kom.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-gray-600"
              >
                {t.hero.faculty}
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white">Lektor</Badge>
                <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">Penata III/c</Badge>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="flex items-center space-x-2 text-gray-600"
              >
                <Mail size={20} className="text-purple-600" />
                <a href="mailto:divaku@ub.ac.id" className="hover:text-purple-600 transition-colors text-sm sm:text-base">divaku@ub.ac.id</a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="flex flex-wrap gap-3 pt-4"
              >
                <Button
                  onClick={() => window.location.href = 'mailto:divaku@ub.ac.id'}
                  className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white"
                >
                  {t.hero.contact}
                </Button>
                <Button
                  onClick={handleDownloadCV}
                  variant="outline"
                  className="border-purple-300 text-purple-600 hover:bg-purple-50"
                >
                  {t.hero.downloadCV}
                </Button>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex justify-center"
            >
              <div className="relative w-full max-w-sm sm:max-w-md">
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 to-purple-400 rounded-3xl blur-2xl opacity-30"
                ></motion.div>
                <img
                  src={profileImage}
                  alt="Dr. Diva Kurnianingtyas"
                  className="relative rounded-3xl shadow-2xl w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Profile Details Section */}
      <section id="about" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            {...fadeInUp}
            className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent"
          >
            {t.profileDetail.title}
          </motion.h2>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-purple-100 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">NIDN:</span>
                      <span className="font-semibold">0013129602</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">NIK:</span>
                      <span className="font-semibold">2022019612132001</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-purple-100 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">SINTA ID:</span>
                      <a href="https://sinta.kemdikbud.go.id/authors/profile/6818249" className="font-semibold text-purple-600 hover:underline">6818249</a>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Scopus ID:</span>
                      <span className="font-semibold">57208510469</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-purple-100 hover:shadow-lg transition-shadow h-full">
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Google Scholar:</span>
                      <a href="https://scholar.google.com/citations?user=_tSzQnkAAAAJ&hl" className="font-semibold text-purple-600 hover:underline">Profile</a>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">WOS ID:</span>
                      <span className="font-semibold">NGR-8490-2025</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
          >
            <GraduationCap className="text-purple-600" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.education.title}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg">{language === 'id' ? 'S3 - Teknik Industri (Optimasi Sistem Industri)' : 'Doctoral - Industrial Engineering (Industrial System Optimization)'}</CardTitle>
                      <p className="text-sm sm:text-base text-gray-600 mt-2">{language === 'id' ? 'Institut Teknologi Sepuluh Nopember, Surabaya, Indonesia' : 'Institut Teknologi Sepuluh Nopember, Surabaya, Indonesia'}</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{language === 'id' ? 'Fakultas Teknologi Industri dan Rekayasa Sistem' : 'Faculty of Industrial Technology and System Engineering'}</p>
                    </div>
                    <Badge className="bg-purple-500 text-white shrink-0 text-xs">2018-2021 (3 {language === 'id' ? 'tahun' : 'years'})</Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-pink-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg">{language === 'id' ? 'S2 - Teknik Industri (Optimasi Sistem Industri)' : 'Master - Industrial Engineering (Industrial System Optimization)'}</CardTitle>
                      <p className="text-sm sm:text-base text-gray-600 mt-2">{language === 'id' ? 'Institut Teknologi Sepuluh Nopember, Surabaya, Indonesia' : 'Institut Teknologi Sepuluh Nopember, Surabaya, Indonesia'}</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{language === 'id' ? 'Fakultas Teknologi Industri dan Rekayasa Sistem' : 'Faculty of Industrial Technology and System Engineering'}</p>
                      <Badge className="bg-pink-100 text-pink-700 mt-2 text-xs">{t.education.fastrack}</Badge>
                    </div>
                    <Badge className="bg-pink-500 text-white shrink-0 text-xs">2017-2018 (1 {language === 'id' ? 'tahun' : 'year'})</Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-purple-500 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg">{language === 'id' ? 'S1 - Teknik Informatika (Kecerdasan Buatan)' : 'Bachelor - Informatics (Artificial Intelligence)'}</CardTitle>
                      <p className="text-sm sm:text-base text-gray-600 mt-2">{language === 'id' ? 'Universitas Brawijaya, Malang, Indonesia' : 'Brawijaya University, Malang, Indonesia'}</p>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">{language === 'id' ? 'Fakultas Ilmu Komputer' : 'Faculty of Computer Science'}</p>
                    </div>
                    <Badge className="bg-purple-500 text-white shrink-0 text-xs">2013-2017 (3.5 {language === 'id' ? 'tahun' : 'years'})</Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Positions Section */}
      <section id="positions" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
          >
            <Building className="text-purple-600" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.positions.title}
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-base sm:text-lg">2026</CardTitle>
                    <Badge className="bg-gradient-to-r from-pink-500 to-purple-500 text-white text-xs">{t.positions.current}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm sm:text-base font-semibold text-purple-700">{language === 'id' ? 'Kepala Bidang Konten Digital dan Kehumasan' : 'Head of Digital Content and Public Relations'}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{language === 'id' ? 'Fakultas Ilmu Komputer Universitas Brawijaya' : 'Faculty of Computer Science, Brawijaya University'}</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">2025</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-purple-700">{language === 'id' ? 'Sekretaris International Relation Office (IRO)' : 'Secretary of International Relation Office (IRO)'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Fakultas Ilmu Komputer Universitas Brawijaya' : 'Faculty of Computer Science, Brawijaya University'}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold text-pink-700">{language === 'id' ? 'Ketua Unit Pengembangan Prestasi dan Kewirausahaan' : 'Head of Achievement and Entrepreneurship Development Unit'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Fakultas Ilmu Komputer Universitas Brawijaya' : 'Faculty of Computer Science, Brawijaya University'}</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">2024</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'Staf Dekan Bidang Kemahasiswaan, Alumni, dan Kewirausahaan' : 'Dean Staff for Student Affairs, Alumni, and Entrepreneurship'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Fakultas Ilmu Komputer Universitas Brawijaya' : 'Faculty of Computer Science, Brawijaya University'}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'Anggota Unit Jaminan Mutu (UJM) Departemen Teknik Informatika' : 'Member of Quality Assurance Unit (QAU), Informatics Department'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Fakultas Ilmu Komputer Universitas Brawijaya' : 'Faculty of Computer Science, Brawijaya University'}</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">2023</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'Staf Dekan Bidang Kemahasiswaan, Alumni, dan Kewirausahaan' : 'Dean Staff for Student Affairs, Alumni, and Entrepreneurship'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Fakultas Ilmu Komputer Universitas Brawijaya' : 'Faculty of Computer Science, Brawijaya University'}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'Anggota Unit Jaminan Mutu (UJM) Departemen Teknik Informatika' : 'Member of Quality Assurance Unit (QAU), Informatics Department'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Fakultas Ilmu Komputer Universitas Brawijaya' : 'Faculty of Computer Science, Brawijaya University'}</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">2022</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'Anggota Unit Jaminan Mutu (UJM) Departemen Teknik Informatika' : 'Member of Quality Assurance Unit (QAU), Informatics Department'}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Fakultas Ilmu Komputer Universitas Brawijaya' : 'Faculty of Computer Science, Brawijaya University'}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Teaching Section with Multiple Semester Tabs */}
      <section id="teaching" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
          >
            <BookOpen className="text-purple-600" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.teaching.title}
            </h2>
          </motion.div>

          <Tabs defaultValue="teaching" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
              <TabsTrigger value="teaching">{t.teaching.experience}</TabsTrigger>
              <TabsTrigger value="supervision">{t.teaching.supervision}</TabsTrigger>
            </TabsList>

            <TabsContent value="teaching" className="space-y-6">
              <Tabs defaultValue="2025/2026 Genap" className="space-y-4">
                <TabsList className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 h-auto bg-transparent">
                  {Object.keys(teachingData).map((semester) => (
                    <TabsTrigger
                      key={semester}
                      value={semester}
                      className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                    >
                      {semester}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(teachingData).map(([semester, courses]) => (
                  <TabsContent key={semester} value={semester}>
                    <motion.div {...fadeInUp}>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base sm:text-lg">{semester}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            {courses.map((course, idx) => (
                              <div key={idx} className={`p-3 ${idx % 2 === 0 ? 'bg-purple-50' : 'bg-pink-50'} rounded-lg`}>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                  <div>
                                    <p className="text-sm sm:text-base font-semibold">{language === 'id' ? course.name : course.nameEn}</p>
                                    <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? course.program : course.programEn}</p>
                                  </div>
                                  <Badge className="shrink-0 text-xs">{course.sks} SKS</Badge>
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>
            </TabsContent>

            <TabsContent value="supervision" className="space-y-6">
              <Tabs defaultValue="2025" className="space-y-4">
                <TabsList className="w-full grid grid-cols-3 gap-2 h-auto bg-transparent">
                  {Object.keys(supervisionData).map((year) => (
                    <TabsTrigger
                      key={year}
                      value={year}
                      className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                    >
                      {year}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(supervisionData).map(([year, items]) => (
                  <TabsContent key={year} value={year}>
                    <motion.div {...fadeInUp}>
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-base sm:text-lg">{year} - {t.teaching.graduation}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            {items.map((item, idx) => (
                              <div key={idx} className={`p-4 bg-gradient-to-r ${idx % 2 === 0 ? 'from-purple-50 to-pink-50' : 'from-pink-50 to-purple-50'} rounded-lg`}>
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                                  <Badge className={`${item.type === 'advisor1' ? 'bg-purple-600' : 'bg-purple-500'} text-white text-xs`}>
                                    {item.type === 'advisor1' ? t.teaching.advisor1 : t.teaching.advisor2}
                                  </Badge>
                                  <Badge variant="outline" className="text-xs">
                                    {item.count} {t.teaching.students} {item.isTotal ? t.teaching.total : ''}
                                  </Badge>
                                </div>
                                <p className="text-sm sm:text-base font-semibold">
                                  {language === 'id' ? item.program : item.programEn}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-600">
                                  {language === 'id' ? `Topik: ${item.topics}` : `Topics: ${item.topicsEn}`}
                                </p>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </TabsContent>
                ))}
              </Tabs>

            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Research Section */}
      <ResearchSection language={language} />

      {/* International Collaboration Section */}
      <section id="international" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
          >
            <Globe className="text-purple-600" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.international.title}
            </h2>
          </motion.div>

          {/* Countries Grid */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 mb-8 sm:mb-12"
          >
            {[
              { flag: '🇮🇩', name: 'Indonesia' },
              { flag: '🇲🇾', name: 'Malaysia' },
              { flag: '🇸🇬', name: 'Singapore' },
              { flag: '🇯🇵', name: 'Japan' },
              { flag: '🇵🇭', name: 'Philippines' },
            ].map((country, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 pb-6">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="text-4xl sm:text-6xl mb-3"
                    >
                      {country.flag}
                    </motion.div>
                    <p className="font-semibold text-sm sm:text-base">{country.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Academic Cooperation */}
          <div className="space-y-4 sm:space-y-6">
            <motion.h3
              {...fadeInUp}
              className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8"
            >
              {t.international.cooperation}
            </motion.h3>

            <motion.div {...fadeInUp}>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg">Mapua University, Philippines 🇵🇭</CardTitle>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Assoc. Prof. Ardvin Kester Ong</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">2026</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{language === 'id' ? 'Equity Program Visiting Top Professor' : 'Equity Program Visiting Top Professor'}</p>
                  <Badge variant="outline" className="text-xs">70 {language === 'id' ? 'juta - Program Equity UB' : 'million - UB Equity Program'}</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg">Universiti Malaya, Malaysia 🇲🇾</CardTitle>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Assoc. Prof. Maizatul Akmar Ismail</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">Adjunct Professor Batch 4</p>
                  <Badge variant="outline" className="text-xs">90 {language === 'id' ? 'juta - Program Prioritas Rektor UB' : 'million - UB Rector Priority Program'}</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg">Universiti Teknologi MARA (UiTM), Malaysia 🇲🇾</CardTitle>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Assoc. Prof. Marina Yusoff</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">Adjunct Professor Batch 4</p>
                  <Badge variant="outline" className="text-xs">70 {language === 'id' ? 'juta - Program Prioritas Rektor UB' : 'million - UB Rector Priority Program'}</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg">Singapore University of Social Sciences, Singapore 🇸🇬</CardTitle>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Assoc. Prof. James Tan Swee Chuan</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">Visiting Lecturer Batch 3</p>
                  <Badge variant="outline" className="text-xs">25 {language === 'id' ? 'juta - Program Prioritas Rektor UB' : 'million - UB Rector Priority Program'}</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div {...fadeInUp}>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <div>
                      <CardTitle className="text-base sm:text-lg">Saga University, Japan 🇯🇵</CardTitle>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1">Prof. Kohei Arai</p>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">Visiting Lecturer Batch 6</p>
                  <Badge variant="outline" className="text-xs">25 {language === 'id' ? 'juta - Program Prioritas Rektor UB' : 'million - UB Rector Priority Program'}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Student Mobility */}
          <div className="mt-8 sm:mt-12">
            <motion.h3
              {...fadeInUp}
              className="text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-8"
            >
              {t.international.mobility}
            </motion.h3>

            {/* Stats summary */}
            <motion.div {...fadeInUp} className="grid grid-cols-3 gap-4 mb-8">
              {[
                { value: '15', label: t.international.totalStudents, color: 'text-purple-600', bg: 'bg-purple-50' },
                { value: '4', label: t.international.partnerUniversities, color: 'text-pink-600', bg: 'bg-pink-50' },
                { value: '1', label: t.international.countries, color: 'text-purple-600', bg: 'bg-purple-50' }
              ].map((stat, i) => (
                <motion.div key={i} whileHover={{ scale: 1.05 }} className={`text-center p-4 ${stat.bg} rounded-xl`}>
                  <p className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div {...fadeInUp}>
              <Tabs defaultValue="2025" className="space-y-6">
                <TabsList className="w-full grid grid-cols-2 gap-2 h-auto bg-transparent">
                  {['2025', '2024'].map((year) => (
                    <TabsTrigger
                      key={year}
                      value={year}
                      className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                    >
                      {year}
                    </TabsTrigger>
                  ))}
                </TabsList>

                <TabsContent value="2025">
                  <div className="space-y-3">
                    {[
                      { no: 1, program: 'UB Stars Batch 4', student: 'Beby Ayu Wulandari', degree: 'S1 Sistem Informasi', institution: 'Universiti Teknikal Malaysia Melaka (UTeM)', advisor: 'Assoc. Prof. Sharifah Sakinah Syed Ahmad', flag: '🇲🇾' },
                      { no: 2, program: 'UB Stars Batch 4', student: 'Abiyyu Kumara Nayottama', degree: 'S1 Teknik Informatika', institution: 'Universiti Teknikal Malaysia Melaka (UTeM)', advisor: 'Assoc. Prof. Sharifah Sakinah Syed Ahmad', flag: '🇲🇾' },
                      { no: 3, program: 'UB Stars Batch 3', student: 'Ghatfan Emery Razan', degree: 'S1 Teknologi Informasi', institution: 'Universiti Teknikal Malaysia Melaka (UTeM)', advisor: 'Assoc. Prof. Sharifah Sakinah Syed Ahmad', flag: '🇲🇾' },
                      { no: 4, program: 'UB Stars Batch 3', student: 'Noval Raihan Ramadhan', degree: 'S1 Sistem Informasi', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Maizatul Akmar Ismail', flag: '🇲🇾' },
                      { no: 5, program: 'UB Stars Batch 3', student: 'Steven Hansel Abilo', degree: 'S1 Sistem Informasi', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Maizatul Akmar Ismail', flag: '🇲🇾' },
                      { no: 6, program: 'UB Stars Batch 3', student: 'Aditya Rizki Pratama', degree: 'S1 Sistem Informasi', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Maizatul Akmar Ismail', flag: '🇲🇾' },
                      { no: 7, program: 'UB Stars Batch 3', student: 'Daniel Geoffrey Manurung', degree: 'S1 Sistem Informasi', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Maizatul Akmar Ismail', flag: '🇲🇾' },
                      { no: 8, program: 'UB Stars Batch 3', student: 'Daniel Gifted Karsanto', degree: 'S1 Sistem Informasi', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Maizatul Akmar Ismail', flag: '🇲🇾' },
                      { no: 9, program: 'UB Stars Batch 3', student: 'Mohammad Haikal Ramadhan', degree: 'S1 Sistem Informasi', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Maizatul Akmar Ismail', flag: '🇲🇾' },
                      { no: 10, program: 'UB Stars Batch 2', student: 'Muhammad Irtada Al Fawwaz', degree: 'S1 Teknologi Informasi', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Norjihan', flag: '🇲🇾' },
                      { no: 11, program: 'UB Stars Batch 1', student: "Fath' Hani Sarli Bajsair", degree: 'S1 Teknik Informatika', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Suraya Hamid', flag: '🇲🇾' },
                      { no: 12, program: 'UB Stars Batch 1', student: 'Lintang Cahyaning Sukma', degree: 'S1 Teknik Informatika', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Suraya Hamid', flag: '🇲🇾' },
                    ].map((item) => (
                      <motion.div
                        key={item.no}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.no * 0.05 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50/60 to-pink-50/60 hover:from-purple-50 hover:to-pink-50 transition-colors border border-purple-100/50"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs font-bold text-purple-600 shadow-sm border border-purple-100">
                          {item.no}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-1">
                            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">{item.program}</Badge>
                          </div>
                          <p className="text-sm font-semibold text-gray-900">{item.student}</p>
                          <p className="text-xs text-gray-500 italic mb-1">{item.degree}</p>
                          <p className="text-xs text-gray-600">{item.flag} {item.institution}</p>
                          <p className="text-xs text-gray-500">Supervisor: {item.advisor}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="2024">
                  <div className="space-y-3">
                    {[
                      { no: 1, program: 'UB Stars Regular', student: 'Putri Shanty Yanunta Yulista', degree: 'S1 Teknik Komputer', institution: 'Universiti Teknologi MARA (UiTM), Malaysia', advisor: 'Prof. Jasni Mohamad Zain', flag: '🇲🇾' },
                      { no: 2, program: 'UB Stars Pilot', student: 'Nathan Daud', degree: 'S1 Teknik Informatika', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Tutut Herawan', flag: '🇲🇾' },
                      { no: 3, program: 'UB Stars Pilot', student: 'Haidar Hanif', degree: 'S1 Teknik Informatika', institution: 'Universiti Malaya, Malaysia', advisor: 'Assoc. Prof. Tutut Herawan', flag: '🇲🇾' },
                    ].map((item) => (
                      <motion.div
                        key={item.no}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: item.no * 0.1 }}
                        className="flex items-start gap-3 p-4 rounded-xl bg-gradient-to-r from-purple-50/60 to-pink-50/60 hover:from-purple-50 hover:to-pink-50 transition-colors border border-purple-100/50"
                      >
                        <div className="flex-shrink-0 w-7 h-7 rounded-full bg-white flex items-center justify-center text-xs font-bold text-purple-600 shadow-sm border border-purple-100">
                          {item.no}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-wrap gap-2 mb-1">
                            <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs">{item.program}</Badge>
                          </div>
                          <p className="text-sm font-semibold text-gray-900">{item.student}</p>
                          <p className="text-xs text-gray-500 italic mb-1">{item.degree}</p>
                          <p className="text-xs text-gray-600">{item.flag} {item.institution}</p>
                          <p className="text-xs text-gray-500">Supervisor: {item.advisor}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speakers Experience Section */}
      <section id="speakers" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
          >
            <Mic className="text-purple-600" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.speakers.title}
            </h2>
          </motion.div>

          <Tabs defaultValue="2026" className="space-y-6">
            <TabsList className="w-full grid grid-cols-2 sm:grid-cols-5 gap-2 h-auto bg-transparent">
              {Object.keys(speakersData).sort((a, b) => b.localeCompare(a)).map((year) => (
                <TabsTrigger
                  key={year}
                  value={year}
                  className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                >
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(speakersData).map(([year, speakers]) => (
              <TabsContent key={year} value={year}>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="grid sm:grid-cols-2 gap-4 sm:gap-6"
                >
                  {speakers.map((speaker, idx) => (
                    <motion.div key={idx} variants={fadeInUp}>
                      <Card className="hover:shadow-lg transition-shadow h-full border-l-4 border-l-purple-500">
                        <CardHeader>
                          <CardTitle className="text-sm sm:text-base line-clamp-2">{speaker.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs sm:text-sm text-gray-600">{t.speakers.organizer}: {speaker.organizer}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Awards & Professional Organization Section */}
      <section id="awards" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
          >
            <Trophy className="text-purple-600" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.haki.awardsTitle}
            </h2>
          </motion.div>

          <div className="space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-purple-100">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <ShieldCheck className="text-pink-500" size={24} />
                {t.haki.title}
              </h3>

              <Tabs defaultValue="2025" className="space-y-6">
                <TabsList className="w-full grid grid-cols-3 gap-2 h-auto bg-transparent mb-8">
                  {Object.keys(hakiData).sort((a, b) => b.localeCompare(a)).map((year) => (
                    <TabsTrigger
                      key={year}
                      value={year}
                      className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                    >
                      {year}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(hakiData).map(([year, items]) => (
                  <TabsContent key={year} value={year}>
                    <div className="grid gap-4">
                      {items.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-purple-50/50 to-pink-50/50 hover:from-purple-50 hover:to-pink-50 transition-colors border border-purple-100/50"
                        >
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white flex items-center justify-center text-xs font-bold text-purple-600 shadow-sm border border-purple-100">
                            {idx + 1}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                              {item.title}
                            </h4>
                            <div className="flex flex-wrap gap-3">
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <span className="font-medium text-pink-600">{t.haki.type}:</span> {item.type}
                              </span>
                              <span className="text-xs text-gray-500 flex items-center gap-1">
                                <span className="font-medium text-purple-600">ID:</span> {item.id}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </div>
      </section>

      {/* Community Service Section */}
      <section id="service" className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="flex items-center justify-center gap-3 mb-8 sm:mb-12"
          >
            <Users className="text-purple-600" size={32} />
            <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              {t.service.title}
            </h2>
          </motion.div>

          <Tabs defaultValue="2025" className="space-y-6">
            <TabsList className="w-full grid grid-cols-2 sm:grid-cols-4 gap-2 h-auto bg-transparent">
              {Object.keys(serviceData).sort((a, b) => b.localeCompare(a)).map((year) => (
                <TabsTrigger
                  key={year}
                  value={year}
                  className="text-xs sm:text-sm px-2 py-2 data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white"
                >
                  {year}
                </TabsTrigger>
              ))}
            </TabsList>

            {Object.entries(serviceData).map(([year, services]) => (
              <TabsContent key={year} value={year}>
                <motion.div
                  variants={staggerContainer}
                  initial="initial"
                  whileInView="whileInView"
                  viewport={{ once: true }}
                  className="space-y-4 sm:space-y-6"
                >
                  {services.map((service, idx) => (
                    <motion.div key={idx} variants={fadeInUp}>
                      <Card className={`border-l-4 ${idx % 2 === 0 ? 'border-l-purple-500' : 'border-l-pink-500'}`}>
                        <CardHeader>
                          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                            <CardTitle className="text-sm sm:text-base">{language === 'id' ? service.title : service.titleEn}</CardTitle>
                            <Badge variant="outline" className="shrink-0 text-xs">
                              {language === 'id' ? service.amount : service.amountEn}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-xs sm:text-sm text-gray-600 mb-2">{language === 'id' ? service.source : service.sourceEn}</p>
                          {service.location && (
                            <p className="text-xs sm:text-sm text-gray-500 mb-2 italic">
                              {language === 'id' ? service.location : service.locationEn}
                            </p>
                          )}
                          {service.team && (
                            <p className="text-xs sm:text-sm text-gray-500 mb-3">{service.team}</p>
                          )}
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </motion.div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-purple-900 to-pink-900 text-white py-8 sm:py-12 px-6 sm:px-8 lg:px-12"
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">Dr. Ir. Diva Kurnianingtyas, S.Kom.</h3>
              <p className="text-sm text-purple-200">{language === 'id' ? 'Fakultas Ilmu Komputer' : 'Faculty of Computer Science'}</p>
              <p className="text-sm text-purple-200">{language === 'id' ? 'Universitas Brawijaya' : 'Brawijaya University'}</p>
              <p className="text-sm text-purple-200">Malang 65154, Indonesia</p>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">{t.footer.contact}</h3>
              <p className="text-sm text-purple-200 mb-2">Email: divaku@ub.ac.id</p>
              <div className="space-y-2">
                <p className="text-sm text-purple-200">SINTA ID: 6818249</p>
                <p className="text-sm text-purple-200">Scopus ID: 57208510469</p>
              </div>
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">{t.footer.quickLinks}</h3>
              <div className="space-y-2">
                <a href="https://scholar.google.com/citations?user=_tSzQnkAAAAJ&hl" className="block text-sm text-purple-200 hover:text-white transition-colors">Google Scholar</a>
                <a href="https://orcid.org/0000-0002-0865-7790" className="block text-sm text-purple-200 hover:text-white transition-colors">ORCID</a>
                <a href="https://sinta.kemdikbud.go.id/authors/profile/6818249" className="block text-sm text-purple-200 hover:text-white transition-colors">SINTA Profile</a>
              </div>
            </div>
          </div>
          <Separator className="my-6 sm:my-8 bg-purple-700" />
          <p className="text-center text-sm text-purple-200">© 2026 Dr. Diva Kurnianingtyas. {t.footer.rights}.</p>
        </div>
      </motion.footer>
    </div>
  );
}
