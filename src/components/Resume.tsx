import React from 'react';
import { WorkExperience, Education, Skill, PersonalInfo } from '../types';
import { Mail, Phone, MapPin, Star } from 'lucide-react';

interface ResumeProps {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
}

export default function Resume({ personalInfo, workExperience, education, skills }: ResumeProps) {
  return (
    <div className="max-w-[21cm] mx-auto bg-white shadow-lg">
      <header className="bg-gray-800 text-white px-8 py-6">
        <h1 className="text-3xl font-bold">{personalInfo.fullName}</h1>
        <p className="text-xl text-gray-300 mt-1">{personalInfo.title}</p>
        <div className="flex gap-4 mt-4 text-sm">
          {personalInfo.email && (
            <div className="flex items-center gap-1">
              <Mail size={16} />
              <span>{personalInfo.email}</span>
            </div>
          )}
          {personalInfo.phone && (
            <div className="flex items-center gap-1">
              <Phone size={16} />
              <span>{personalInfo.phone}</span>
            </div>
          )}
          {personalInfo.location && (
            <div className="flex items-center gap-1">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          )}
        </div>
      </header>

      <main className="p-8 space-y-6">
        {personalInfo.summary && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Professional Summary</h2>
            <p className="text-gray-600">{personalInfo.summary}</p>
          </section>
        )}

        {workExperience.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Work Experience</h2>
            <div className="space-y-4">
              {workExperience.map((exp) => (
                <div key={exp.id} className="border-l-2 border-gray-200 pl-4">
                  <h3 className="font-semibold text-gray-800">{exp.position}</h3>
                  <p className="text-gray-600">{exp.company}</p>
                  <p className="text-sm text-gray-500">
                    {exp.startDate} - {exp.endDate || 'Present'}
                  </p>
                  <p className="mt-2 text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {education.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Education</h2>
            <div className="space-y-4">
              {education.map((edu) => (
                <div key={edu.id} className="border-l-2 border-gray-200 pl-4">
                  <h3 className="font-semibold text-gray-800">{edu.school}</h3>
                  <p className="text-gray-600">
                    {edu.degree} in {edu.field}
                  </p>
                  <p className="text-sm text-gray-500">Graduated: {edu.graduationDate}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {skills.length > 0 && (
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Skills</h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill) => (
                <div key={skill.id} className="flex items-center gap-2">
                  <span className="text-gray-700">{skill.name}</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < skill.level ? 'fill-yellow-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}