import { useState } from 'react';
import { Menu, X, Mail, GraduationCap, BookOpen, Award, Users, Globe, Building, Languages, Mic } from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { ResearchSection } from './components/ResearchSection';
import profileImage from "figma:asset/5ac623c700bffa99dd4fd83df32f637fe8e60b72.png";

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
      title: 'Hak Kekayaan Intelektual (HAKI)',
      type: 'Jenis',
      number: 'Nomor'
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
      title: 'Intellectual Property Rights',
      type: 'Type',
      number: 'Number'
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

const speakersData = [
  { year: 2026, title: 'Workshop Peningkatan Kualitas dan Peran AI dalam Penyusunan Kerja UKM', organizer: 'Kemahasiswaan UB' },
  { year: 2025, title: 'Diskusi Pemenuhan Capaian Bidang Kemahasiswaan: Prestasi, Karya, dan Sertifikasi Kompetensi Internasional', organizer: 'Kemahasiswaan FISIP UB' },
  { year: 2025, title: 'Bootcamp MIC (Topik AI untuk mendukung Bisnis Berorientasi SDGs)', organizer: 'SMK Telkom Malang' },
  { year: 2025, title: 'Workshop Peningkatan Kualitas dan Peran AI dalam Penyusunan Kerja UKM', organizer: 'Kemahasiswaan UB' },
  { year: 2025, title: 'Strategi Sukses menuju PIMNAS', organizer: 'Universitas Machung' },
  { year: 2025, title: 'Diklat K-RISMA (Dasar Penulisan Karya Ilmiah)', organizer: 'K-RISMA FILKOM UB' },
  { year: 2025, title: 'Research.id Academy', organizer: 'Research.id Indonesia' },
  { year: 2025, title: 'Kegiatan Mawapres FILKOM UB (Memahami Landasan Teori dan Strategi Penulisan dalam Pengembangan Karya Tulis Ilmiah)', organizer: 'BEM FILKOM UB' },
  { year: 2025, title: 'LKMM-TM (Perkembangan Teknologi Informasi dan Komunikasi)', organizer: 'FTP UB' },
  { year: 2025, title: 'K-RISMA XIII BOOTCAMP (Journal Journey: Membangun Struktur Ilmiah, Mencetak Blueprint Juara)', organizer: 'K-RISMA FILKOM UB' },
  { year: 2024, title: 'K-RISMA XII BOOTCAMP (Crafting Extended Abstracts for Visionary Sustainable Innovation)', organizer: 'K-RISMA FILKOM UB' },
  { year: 2024, title: 'LPPM: Menumbuhkan Kolaborasi Riset', organizer: 'Politeknik Perkapalan Negeri Surabaya' },
  { year: 2024, title: 'Kegiatan Mawapres FILKOM UB (Kiat Menulis Artikel Ilmiah sesuai SDGs)', organizer: 'BEM FILKOM UB' },
  { year: 2024, title: 'Transformasi Digital Manufaktur', organizer: 'Institut Teknologi Adhi Tama Surabaya' },
  { year: 2024, title: 'PKKMB & Startup Academy (Mengatasi Tantangan Global Melalui SDGs untuk Menuju Indonesia Emas 2045)', organizer: 'FILKOM UB' },
  { year: 2024, title: 'AI untuk Journalistik', organizer: 'DISPLAY FILKOM UB' },
  { year: 2023, title: 'Workshop Penelitian dan Publikasi Ilmiah', organizer: 'FILKOM UB' },
  { year: 2023, title: 'Seminar Nasional AI dan Machine Learning', organizer: 'Universitas Brawijaya' },
  { year: 2022, title: 'Pelatihan Pengembangan Sistem Berbasis AI', organizer: 'FILKOM UB' },
  { year: 2022, title: 'Workshop Optimasi Sistem', organizer: 'Fakultas Teknik UB' },
  { year: 2022, title: 'Seminar Teknologi Informasi', organizer: 'HMTC FILKOM UB' },
  { year: 2022, title: 'Workshop Data Science', organizer: 'FILKOM UB' },
  { year: 2022, title: 'Pelatihan Machine Learning untuk Pemula', organizer: 'K-RISMA FILKOM UB' },
  { year: 2022, title: 'Webinar Kecerdasan Buatan', organizer: 'BEM FILKOM UB' },
  { year: 2022, title: 'Workshop Basis Data', organizer: 'FILKOM UB' },
  { year: 2022, title: 'Seminar Sistem Informasi', organizer: 'HMSI FILKOM UB' },
  { year: 2021, title: 'Workshop Penelitian untuk Mahasiswa S3', organizer: 'Institut Teknologi Sepuluh Nopember' },
  { year: 2021, title: 'Seminar Optimasi dan AI', organizer: 'ITS Surabaya' },
  { year: 2021, title: 'Workshop Metodologi Penelitian', organizer: 'Pascasarjana ITS' }
];

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
              <motion.div {...fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">2025 - {t.teaching.graduation}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <Badge className="bg-purple-600 text-white text-xs">{t.teaching.advisor1}</Badge>
                          <Badge variant="outline" className="text-xs">13 {t.teaching.students}</Badge>
                        </div>
                        <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'S1 Teknik Informatika' : 'Bachelor of Informatics'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Topik: Machine Learning, Optimasi, Sentiment Analysis' : 'Topics: Machine Learning, Optimization, Sentiment Analysis'}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <Badge className="bg-pink-600 text-white text-xs">{t.teaching.advisor1}</Badge>
                          <Badge variant="outline" className="text-xs">1 {t.teaching.students}</Badge>
                        </div>
                        <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'S1 Sistem Informasi' : 'Bachelor of Information Systems'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Topik: Optimasi' : 'Topic: Optimization'}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <Badge className="bg-purple-500 text-white text-xs">{t.teaching.advisor2}</Badge>
                          <Badge variant="outline" className="text-xs">19 {t.teaching.students} {t.teaching.total}</Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? '5 S1 Teknik Informatika, 1 S1 Teknik Komputer, 1 S1 Teknologi Informasi, 11 S1 Sistem Informasi' : '5 Bachelor of Informatics, 1 Bachelor of Computer Engineering, 1 Bachelor of Information Technology, 11 Bachelor of Information Systems'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Topik: Machine Learning, AI Problem' : 'Topics: Machine Learning, AI Problem'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">2024 - {t.teaching.graduation}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <Badge className="bg-purple-600 text-white text-xs">{t.teaching.advisor1}</Badge>
                          <Badge variant="outline" className="text-xs">4 {t.teaching.students}</Badge>
                        </div>
                        <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'S1 Teknik Informatika' : 'Bachelor of Informatics'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Topik: Optimasi, Computer Vision' : 'Topics: Optimization, Computer Vision'}</p>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                          <Badge className="bg-pink-500 text-white text-xs">{t.teaching.advisor2}</Badge>
                          <Badge variant="outline" className="text-xs">3 {t.teaching.students}</Badge>
                        </div>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? '2 S1 Teknik Informatika, 1 S1 Teknologi Informasi' : '2 Bachelor of Informatics, 1 Bachelor of Information Technology'}</p>
                        <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Topik: Computer Vision, Sentiment Analysis, Factor Analysis' : 'Topics: Computer Vision, Sentiment Analysis, Factor Analysis'}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">2023 - {t.teaching.graduation}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 mb-2">
                        <Badge className="bg-purple-500 text-white text-xs">{t.teaching.advisor2}</Badge>
                        <Badge variant="outline" className="text-xs">2 {t.teaching.students}</Badge>
                      </div>
                      <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'S1 Teknik Informatika' : 'Bachelor of Informatics'}</p>
                      <p className="text-xs sm:text-sm text-gray-600">{language === 'id' ? 'Topik: Gen AI, Sentiment Analysis' : 'Topics: Gen AI, Sentiment Analysis'}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div {...fadeInUp}>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base sm:text-lg">{t.teaching.grants}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div>
                            <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'Hibah Bantuan Pembelajaran BRONE Kategori VR' : 'BRONE Learning Support Grant VR Category'}</p>
                            <p className="text-xs sm:text-sm text-gray-600">2025 - {language === 'id' ? 'Universitas Brawijaya' : 'Brawijaya University'}</p>
                          </div>
                          <Badge className="bg-purple-600 text-white shrink-0 text-xs">50 {language === 'id' ? 'jt' : 'million'}</Badge>
                        </div>
                      </div>
                      <div className="p-3 bg-pink-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div>
                            <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'Hibah Program Visiting Professor dan Dosen Praktisi 3in1' : 'Visiting Professor and Practitioner Lecturer 3in1 Program Grant'}</p>
                            <p className="text-xs sm:text-sm text-gray-600">2025 - {language === 'id' ? 'Universitas Brawijaya' : 'Brawijaya University'}</p>
                          </div>
                          <Badge className="bg-pink-600 text-white shrink-0 text-xs">40 {language === 'id' ? 'jt' : 'million'}</Badge>
                        </div>
                      </div>
                      <div className="p-3 bg-purple-50 rounded-lg">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                          <div>
                            <p className="text-sm sm:text-base font-semibold">{language === 'id' ? 'Hibah Program Visiting Professor dan Dosen Praktisi 3in1' : 'Visiting Professor and Practitioner Lecturer 3in1 Program Grant'}</p>
                            <p className="text-xs sm:text-sm text-gray-600">2024 - {language === 'id' ? 'Universitas Brawijaya' : 'Brawijaya University'}</p>
                          </div>
                          <Badge className="bg-purple-600 text-white shrink-0 text-xs">40 {language === 'id' ? 'jt' : 'million'}</Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
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
            <motion.div {...fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-base sm:text-lg">UB Stars Program - Student Exchange</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl sm:text-2xl">🇲🇾</span>
                        <p className="text-sm sm:text-base font-semibold">Universiti Teknikal Malaysia Melaka (UTeM)</p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">3 {t.international.totalStudents} - 2025</p>
                      <p className="text-xs sm:text-sm text-gray-500">Beby Ayu Wulandari, Abiyyu Kumara Nayottama, Ghatfan Emery Razan</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xl sm:text-2xl">🇲🇾</span>
                        <p className="text-sm sm:text-base font-semibold">Universiti Malaya, Malaysia</p>
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600">7 {t.international.totalStudents} - 2025</p>
                      <p className="text-xs sm:text-sm text-gray-500">{language === 'id' ? 'Berbagai program termasuk mahasiswa S1 dan pascasarjana' : 'Multiple programs including undergraduate and graduate students'}</p>
                    </div>

                    <div className="grid sm:grid-cols-3 gap-4 mt-4">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 bg-purple-50 rounded-lg"
                      >
                        <p className="text-2xl sm:text-3xl font-bold text-purple-600">15+</p>
                        <p className="text-xs sm:text-sm text-gray-600">{t.international.totalStudents}</p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 bg-pink-50 rounded-lg"
                      >
                        <p className="text-2xl sm:text-3xl font-bold text-pink-600">5</p>
                        <p className="text-xs sm:text-sm text-gray-600">{t.international.partnerUniversities}</p>
                      </motion.div>
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="text-center p-4 bg-purple-50 rounded-lg"
                      >
                        <p className="text-2xl sm:text-3xl font-bold text-purple-600">4</p>
                        <p className="text-xs sm:text-sm text-gray-600">{t.international.countries}</p>
                      </motion.div>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {speakersData.map((speaker, idx) => (
              <motion.div key={idx} variants={fadeInUp}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                      <CardTitle className="text-sm sm:text-base line-clamp-2">{speaker.title}</CardTitle>
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shrink-0 text-xs">{speaker.year}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs sm:text-sm text-gray-600">{t.speakers.organizer}: {speaker.organizer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
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

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <CardTitle className="text-sm sm:text-base">{language === 'id' ? 'Pembangunan Sistem Informasi Manajemen Administrasi Desa/Kelurahan (SIMDEK)' : 'Development of Village/Sub-district Administration Management Information System (SIMDEK)'}</CardTitle>
                    <Badge className="bg-purple-600 text-white shrink-0 text-xs">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{language === 'id' ? 'DRPM: Hibah Pengabdian Kepada Masyarakat Strategis' : 'DRPM: Strategic Community Service Grant'}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">Arief Andy Soebroto, Agi Putra Kharisma, Diva Kurnianingtyas, Nurul Hidayat</p>
                  <Badge variant="outline" className="text-xs">25 {language === 'id' ? 'juta' : 'million'}</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <CardTitle className="text-sm sm:text-base">{language === 'id' ? 'Penguatan Budaya Literasi Digital Pada Remaja Sejak Dini Melalui Kelompok Posyandu Integrasi Layanan Primer' : 'Strengthening Digital Literacy Culture in Early Adolescents Through Integrated Primary Service Posyandu Groups'}</CardTitle>
                    <Badge className="bg-pink-600 text-white shrink-0 text-xs">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{language === 'id' ? 'DRPM: Hibah Doktor Mengabdi' : 'DRPM: Doctorate Community Service Grant'}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">{language === 'id' ? 'Desa Dono, Kecamatan Sendang, Kabupaten Tulungagung' : 'Dono Village, Sendang District, Tulungagung Regency'}</p>
                  <Badge variant="outline" className="text-xs">40 {language === 'id' ? 'juta' : 'million'}</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <CardTitle className="text-sm sm:text-base">{language === 'id' ? 'Pemanfaatan Digitalisasi dalam Peningkatan Produktivitas Kader Posyandu melalui Google Workspace' : 'Utilizing Digitalization to Improve Posyandu Cadre Productivity through Google Workspace'}</CardTitle>
                    <Badge className="bg-purple-600 text-white shrink-0 text-xs">2025</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{language === 'id' ? 'FILKOM UB: Hibah DIPA Pengabdian' : 'FILKOM UB: DIPA Community Service Grant'}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">Diva Kurnianingtyas, Prima Zulvarina, Wayan Firdaus Mahmudy</p>
                  <Badge variant="outline" className="text-xs">10 {language === 'id' ? 'juta' : 'million'}</Badge>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="border-l-4 border-l-pink-500">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                    <CardTitle className="text-sm sm:text-base">{language === 'id' ? 'Diseminasi Riset untuk Peningkatan Kompetensi Manajemen Pesantren Berbasis Artificial Intelligence' : 'Research Dissemination for Improving Pesantren Management Competence Based on Artificial Intelligence'}</CardTitle>
                    <Badge className="bg-pink-600 text-white shrink-0 text-xs">2024</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2">{language === 'id' ? 'FILKOM UB: Hibah DIPA Pengabdian' : 'FILKOM UB: DIPA Community Service Grant'}</p>
                  <p className="text-xs sm:text-sm text-gray-500 mb-3">Agus Wahyu Widodo, Diva Kurnianingtyas, Lailil Muflikhah, Novanto Yudistira</p>
                  <Badge variant="outline" className="text-xs">10 {language === 'id' ? 'juta' : 'million'}</Badge>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
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
