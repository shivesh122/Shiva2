import React, { useState } from 'react';
import { FileDown, Printer } from 'lucide-react';
import ResumeForm from './components/ResumeForm';
import Resume from './components/Resume';
import { WorkExperience, Education, Skill, PersonalInfo } from './types';

const initialPersonalInfo: PersonalInfo = {
  fullName: '',
  title: '',
  email: '',
  phone: '',
  location: '',
  summary: '',
};

export default function App() {
  const [personalInfo, setPersonalInfo] = useState<PersonalInfo>(initialPersonalInfo);
  const [workExperience, setWorkExperience] = useState<WorkExperience[]>([]);
  const [education, setEducation] = useState<Education[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const [isEditing, setIsEditing] = useState(true);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-xl font-bold text-gray-800">Resume Builder</h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
              >
                {isEditing ? 'Preview' : 'Edit'}
              </button>
              {!isEditing && (
                <div className="flex items-center gap-2 resume-controls">
                  <button
                    onClick={handlePrint}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
                  >
                    <Printer size={16} />
                    Print
                  </button>
                  <button
                    onClick={handleDownloadPDF}
                    className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    <FileDown size={16} />
                    Download PDF
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {isEditing ? (
          <ResumeForm
            personalInfo={personalInfo}
            workExperience={workExperience}
            education={education}
            skills={skills}
            setPersonalInfo={setPersonalInfo}
            setWorkExperience={setWorkExperience}
            setEducation={setEducation}
            setSkills={setSkills}
          />
        ) : (
          <Resume
            personalInfo={personalInfo}
            workExperience={workExperience}
            education={education}
            skills={skills}
          />
        )}
      </main>
    </div>
  );
}