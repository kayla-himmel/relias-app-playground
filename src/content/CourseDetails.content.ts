export interface CourseDetails {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  ceCredits: string;
  duration: string;
  level: string;
  objectives: string[];
  topics: string[];
  author: {
    name: string;
    credentials: string;
    bio: string;
  };
  accreditation: {
    provider: string;
    statement: string;
    moreInfo: string;
    moreInfoLinkURL: string;
    moreInfoLinkText: string;
  };
  targetAudience: string[];
  prerequisites: string[];
  additionalInfo: string;
  contentUrl?: string; // URL for the course content to be displayed in WebView
}

export const courseDetails: CourseDetails[] = [
  {
    id: '1',
    title: 'Fundamentals of Nursing',
    description:
      'Master the essential skills and knowledge required for nursing practice. This comprehensive course covers patient care, medical procedures, and healthcare ethics.',
    shortDescription: 'Essential nursing skills and knowledge for practice',
    ceCredits: '2.0 contact hours',
    duration: '2 hours',
    level: 'Beginner',
    objectives: [
      'Understand the core principles of nursing practice',
      'Apply evidence-based care techniques in clinical settings',
      'Develop effective patient communication strategies',
      'Implement proper documentation and reporting procedures',
      'Recognize and respond to common patient care challenges',
    ],
    topics: [
      'Nursing assessment and diagnosis',
      'Patient care planning and implementation',
      'Medical procedures and techniques',
      'Healthcare ethics and professional conduct',
      'Patient safety and infection control',
    ],
    author: {
      name: 'Dr. Sarah Johnson',
      credentials: 'PhD, RN, CNE',
      bio: 'Dr. Johnson has over 15 years of experience in nursing education and clinical practice. She specializes in nursing fundamentals and has published numerous articles on evidence-based nursing practices.',
    },
    accreditation: {
      provider: 'American Nurses Credentialing Center (ANCC)',
      statement:
        "This continuing nursing education activity was approved by the American Nurses Credentialing Center's Commission on Accreditation.",
      moreInfo: 'More information at ',
      moreInfoLinkURL: 'https://www.nurse.com/accreditation',
      moreInfoLinkText: 'nurse.com/accreditation',
    },
    targetAudience: [
      'New graduate nurses',
      'Nursing students',
      'Licensed practical nurses (LPNs)',
      'Healthcare professionals transitioning to nursing roles',
    ],
    prerequisites: [
      'Basic understanding of healthcare terminology',
      'Familiarity with medical documentation systems',
    ],
    additionalInfo:
      'This course provides a solid foundation for nursing practice and is recommended for those new to the field or seeking to refresh their knowledge of fundamental nursing concepts.',
    contentUrl: 'https://youtu.be/BkLjfGSXlyI?si=68y2OMEcX-5tFf3Z',
  },
  {
    id: '2',
    title: 'Advanced Clinical Practice',
    description:
      'Enhance your clinical skills with advanced nursing techniques and evidence-based practices. Perfect for experienced nurses looking to expand their expertise.',
    shortDescription:
      'Advanced nursing techniques and evidence-based practices',
    ceCredits: '3.0 contact hours',
    duration: '3 hours',
    level: 'Advanced',
    objectives: [
      'Apply advanced assessment techniques in complex patient scenarios',
      'Implement evidence-based interventions for specialized patient populations',
      'Analyze and interpret complex clinical data',
      'Develop comprehensive care plans for patients with multiple conditions',
      'Evaluate the effectiveness of advanced nursing interventions',
    ],
    topics: [
      'Advanced physical assessment techniques',
      'Complex patient care management',
      'Evidence-based practice implementation',
      'Specialized nursing interventions',
      'Clinical decision-making in complex scenarios',
    ],
    author: {
      name: 'Dr. Michael Rodriguez',
      credentials: 'DNP, RN, ACNP-BC',
      bio: 'Dr. Rodriguez is a board-certified acute care nurse practitioner with extensive experience in critical care and advanced practice nursing. He has led numerous research projects on improving patient outcomes through evidence-based practice.',
    },
    accreditation: {
      provider: 'American Nurses Credentialing Center (ANCC)',
      statement:
        "This continuing nursing education activity was approved by the American Nurses Credentialing Center's Commission on Accreditation.",
      moreInfo: 'More information at ',
      moreInfoLinkURL: 'https://www.nurse.com/accreditation',
      moreInfoLinkText: 'nurse.com/accreditation',
    },
    targetAudience: [
      'Registered nurses with 2+ years of experience',
      'Advanced practice registered nurses (APRNs)',
      'Nurse educators',
      'Clinical nurse specialists',
    ],
    prerequisites: [
      'Current RN license',
      'Basic understanding of evidence-based practice',
      'Experience with patient assessment and care planning',
    ],
    additionalInfo:
      'This course is designed for experienced nurses seeking to enhance their clinical skills and knowledge. It includes case studies and practical applications of advanced nursing concepts.',
    contentUrl: 'https://youtu.be/0mznL85jg-E?si=l3sDVpP7OyXmfyD0',
  },
  {
    id: '3',
    title: 'Healthcare Leadership',
    description:
      'Develop leadership skills specific to healthcare settings. Learn management strategies, team coordination, and effective communication in medical environments.',
    shortDescription: 'Leadership skills for healthcare professionals',
    ceCredits: '2.5 contact hours',
    duration: '2.5 hours',
    level: 'Intermediate',
    objectives: [
      'Apply effective leadership principles in healthcare settings',
      'Develop strategies for team building and conflict resolution',
      'Implement change management techniques in clinical environments',
      'Enhance communication skills for diverse healthcare teams',
      'Create and maintain high-performing healthcare teams',
    ],
    topics: [
      'Healthcare leadership theories and models',
      'Team dynamics and management',
      'Change management in healthcare',
      'Effective communication strategies',
      'Conflict resolution and negotiation',
    ],
    author: {
      name: 'Dr. Lisa Chen',
      credentials: 'PhD, RN, NEA-BC',
      bio: 'Dr. Chen is a board-certified nurse executive with over 20 years of experience in healthcare leadership. She has led numerous healthcare organizations through successful transformations and has published extensively on healthcare leadership.',
    },
    accreditation: {
      provider: 'American Nurses Credentialing Center (ANCC)',
      statement:
        "This continuing nursing education activity was approved by the American Nurses Credentialing Center's Commission on Accreditation.",
      moreInfo: 'More information at ',
      moreInfoLinkURL: 'https://www.nurse.com/accreditation',
      moreInfoLinkText: 'nurse.com/accreditation',
    },
    targetAudience: [
      'Nurse managers and supervisors',
      'Clinical nurse leaders',
      'Healthcare administrators',
      'Nurses aspiring to leadership roles',
    ],
    prerequisites: [
      'Basic understanding of healthcare systems',
      'Experience working in healthcare teams',
    ],
    additionalInfo:
      'This course provides practical leadership skills specifically tailored for healthcare environments. It includes real-world scenarios and interactive exercises to enhance learning.',
    contentUrl: 'https://youtu.be/S_txsxoRanA?si=T4GMbPTSlvBBqvKD',
  },
  {
    id: '4',
    title: 'Emergency Care Essentials',
    description:
      'Learn critical emergency response procedures and protocols. This course prepares nurses for high-pressure situations in emergency care settings.',
    shortDescription: 'Emergency response procedures for nurses',
    ceCredits: '3.5 contact hours',
    duration: '3.5 hours',
    level: 'Intermediate to Advanced',
    objectives: [
      'Apply systematic approaches to emergency patient assessment',
      'Implement appropriate interventions for various emergency conditions',
      'Prioritize care in mass casualty or multiple patient scenarios',
      'Communicate effectively in high-stress emergency situations',
      'Document emergency care accurately and efficiently',
    ],
    topics: [
      'Emergency assessment and triage',
      'Cardiac and respiratory emergencies',
      'Trauma care and stabilization',
      'Pediatric and geriatric emergencies',
      'Mass casualty incident management',
    ],
    author: {
      name: 'Dr. James Wilson',
      credentials: 'DNP, RN, CEN, TCRN',
      bio: 'Dr. Wilson is a certified emergency nurse and trauma certified registered nurse with extensive experience in emergency and trauma care. He has worked in various emergency departments and has served as a consultant for emergency preparedness.',
    },
    accreditation: {
      provider: 'American Nurses Credentialing Center (ANCC)',
      statement:
        "This continuing nursing education activity was approved by the American Nurses Credentialing Center's Commission on Accreditation.",
      moreInfo: 'More information at ',
      moreInfoLinkURL: 'https://www.nurse.com/accreditation',
      moreInfoLinkText: 'nurse.com/accreditation',
    },
    targetAudience: [
      'Emergency department nurses',
      'Critical care nurses',
      'Pre-hospital care providers',
      'Nurses working in high-acuity settings',
    ],
    prerequisites: [
      'Basic life support (BLS) certification',
      'Experience with acute care patients',
      'Familiarity with emergency protocols',
    ],
    additionalInfo:
      'This course provides essential knowledge and skills for nurses working in emergency care settings. It includes simulation scenarios and practical applications of emergency care principles.',
    contentUrl: 'https://youtu.be/9cqrORN4TQA?si=ogh_Hb0BFGuAgRRy',
  },
];
