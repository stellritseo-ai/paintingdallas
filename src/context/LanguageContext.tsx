'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, Language, ServiceItem, ProjectItem } from '@/data/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (typeof translations)['en'];
  isEstimateOpen: boolean;
  openEstimateModal: () => void;
  closeEstimateModal: () => void;
  selectedService: ServiceItem | null;
  openServiceModal: (service: ServiceItem) => void;
  closeServiceModal: () => void;
  selectedProject: ProjectItem | null;
  openProjectModal: (project: ProjectItem) => void;
  closeProjectModal: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('en');
  const [isEstimateOpen, setIsEstimateOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('pd_language');
      if (saved === 'en' || saved === 'es') {
        setLanguageState(saved);
      }
    } catch {
      // localStorage may not be accessible in some environments
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('pd_language', lang);
    } catch {
      // ignore
    }
  };

  const openEstimateModal = () => setIsEstimateOpen(true);
  const closeEstimateModal = () => setIsEstimateOpen(false);

  const openServiceModal = (service: ServiceItem) => setSelectedService(service);
  const closeServiceModal = () => setSelectedService(null);

  const openProjectModal = (project: ProjectItem) => setSelectedProject(project);
  const closeProjectModal = () => setSelectedProject(null);

  const t = translations[language];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isEstimateOpen,
        openEstimateModal,
        closeEstimateModal,
        selectedService,
        openServiceModal,
        closeServiceModal,
        selectedProject,
        openProjectModal,
        closeProjectModal,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
