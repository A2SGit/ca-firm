import { Calculator, FileText, FileCheck, Briefcase, FileSearch, CheckCircle, Shield, Landmark, CircleDollarSign, Scale } from 'lucide-react';

export const servicesData = [
  {
    id: 'taxation',
    icon: <Calculator size={24} />,
    title: 'Taxation',
    shortDesc: 'Comprehensive tax planning, filing, and advisory for individuals and businesses.',
    fullDesc: 'Our taxation services are designed to minimize your tax liability while ensuring full compliance with the latest regulations. We handle everything from GST filing to income tax planning and international tax advisory.',
    features: ['GST Registration & Filing', 'Income Tax Planning', 'Tax Audits', 'TDS Compliance', 'Tax Appeals & Representations']
  },
  {
    id: 'accounting',
    icon: <FileText size={24} />,
    title: 'Accounting',
    shortDesc: 'Accurate and timely accounting services to keep your financials organized.',
    fullDesc: 'We provide end-to-end accounting solutions that give you a clear picture of your financial health. Our team ensures that your books are always up-to-date and audit-ready.',
    features: ['Bookkeeping', 'Financial Statement Preparation', 'MIS Reporting', 'Budgeting & Forecasting', 'Inventory Management']
  },
  {
    id: 'auditing',
    icon: <FileCheck size={24} />,
    title: 'Auditing',
    shortDesc: 'Thorough statutory, internal, and concurrent audit services.',
    fullDesc: 'Our auditing services go beyond compliance. We provide valuable insights into your business processes and risk management, helping you strengthen your internal controls.',
    features: ['Statutory Audits', 'Internal Audits', 'Tax Audits', 'Concurrent Audits', 'Management Audits']
  },
  {
    id: 'company-secretarial',
    icon: <Briefcase size={24} />,
    title: 'Company & Secretarial',
    shortDesc: 'End-to-end company formation and ROC compliance management.',
    fullDesc: 'Starting and maintaining a company involves complex legal requirements. We handle all your ROC filings, board meetings, and statutory record maintenance so you can focus on growth.',
    features: ['Company Incorporation', 'LLP Registration', 'ROC Annual Filings', 'Maintenance of Statutory Registers', 'Drafting of Resolutions']
  },
  {
    id: 'due-diligence',
    icon: <FileSearch size={24} />,
    title: 'Due Diligence',
    shortDesc: 'Detailed financial and legal due diligence for mergers and acquisitions.',
    fullDesc: 'Before you make a major business decision, you need all the facts. Our due diligence services provide a thorough analysis of financial, legal, and operational risks.',
    features: ['Financial Due Diligence', 'Legal Due Diligence', 'Operational Review', 'Compliance Check', 'Risk Assessment Reports']
  },
  {
    id: 'business-advisory',
    icon: <Shield size={24} />,
    title: 'Business Advisory',
    shortDesc: 'Strategic insights and financial modeling for business growth.',
    fullDesc: 'We act as strategic partners to your business. Our advisory services help you optimize your capital structure, improve profitability, and plan for long-term expansion.',
    features: ['Financial Modeling', 'Virtual CFO Services', 'Business Process Re-engineering', 'Valuation Services', 'Project Financing Support']
  }
];
