import React from 'react';
import { Plus, Trash2 } from 'lucide-react';
import { WorkExperience, Education, Skill, PersonalInfo } from '../types';

interface ResumeFormProps {
  personalInfo: PersonalInfo;
  workExperience: WorkExperience[];
  education: Education[];
  skills: Skill[];
  setPersonalInfo: (info: PersonalInfo) => void;
  setWorkExperience: (exp: WorkExperience[]) => void;
  setEducation: (edu: Education[]) => void;
  setSkills: (skills: Skill[]) => void;
}

export default function ResumeForm({
  personalInfo,
  workExperience,
  education,
  skills,
  setPersonalInfo,
  setWorkExperience,
  setEducation,
  setSkills,
}: ResumeFormProps) {
  const addWorkExperience = () => {
    setWorkExperience([
      ...workExperience,
      {
        id: crypto.randomUUID(),
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        id: crypto.randomUUID(),
        school: '',
        degree: '',
        field: '',
        graduationDate: '',
      },
    ]);
  };

  const addSkill = () => {
    setSkills([
      ...skills,
      {
        id: crypto.randomUUID(),
        name: '',
        level: 3,
      },
    ]);
  };

  return (
    <div className="space-y-8 max-w-2xl mx-auto p-6">
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">Personal Information</h2>
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Full Name"
            className="input-field col-span-2"
            value={personalInfo.fullName}
            onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
          />
          <input
            type="text"
            placeholder="Professional Title"
            className="input-field col-span-2"
            value={personalInfo.title}
            onChange={(e) => setPersonalInfo({ ...personalInfo, title: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="input-field"
            value={personalInfo.email}
            onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
          />
          <input
            type="tel"
            placeholder="Phone"
            className="input-field"
            value={personalInfo.phone}
            onChange={(e) => setPersonalInfo({ ...personalInfo, phone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Location"
            className="input-field col-span-2"
            value={personalInfo.location}
            onChange={(e) => setPersonalInfo({ ...personalInfo, location: e.target.value })}
          />
          <textarea
            placeholder="Professional Summary"
            className="input-field col-span-2 h-24"
            value={personalInfo.summary}
            onChange={(e) => setPersonalInfo({ ...personalInfo, summary: e.target.value })}
          />
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
          <button
            onClick={addWorkExperience}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            <Plus size={16} /> Add Experience
          </button>
        </div>
        {workExperience.map((exp, index) => (
          <div key={exp.id} className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Company"
                className="input-field"
                value={exp.company}
                onChange={(e) =>
                  setWorkExperience(
                    workExperience.map((w) =>
                      w.id === exp.id ? { ...w, company: e.target.value } : w
                    )
                  )
                }
              />
              <input
                type="text"
                placeholder="Position"
                className="input-field"
                value={exp.position}
                onChange={(e) =>
                  setWorkExperience(
                    workExperience.map((w) =>
                      w.id === exp.id ? { ...w, position: e.target.value } : w
                    )
                  )
                }
              />
              <input
                type="month"
                placeholder="Start Date"
                className="input-field"
                value={exp.startDate}
                onChange={(e) =>
                  setWorkExperience(
                    workExperience.map((w) =>
                      w.id === exp.id ? { ...w, startDate: e.target.value } : w
                    )
                  )
                }
              />
              <input
                type="month"
                placeholder="End Date"
                className="input-field"
                value={exp.endDate}
                onChange={(e) =>
                  setWorkExperience(
                    workExperience.map((w) =>
                      w.id === exp.id ? { ...w, endDate: e.target.value } : w
                    )
                  )
                }
              />
              <textarea
                placeholder="Description"
                className="input-field col-span-2 h-24"
                value={exp.description}
                onChange={(e) =>
                  setWorkExperience(
                    workExperience.map((w) =>
                      w.id === exp.id ? { ...w, description: e.target.value } : w
                    )
                  )
                }
              />
            </div>
            <button
              onClick={() => setWorkExperience(workExperience.filter((w) => w.id !== exp.id))}
              className="flex items-center gap-2 px-3 py-1 text-sm text-red-500 hover:text-red-600 transition"
            >
              <Trash2 size={16} /> Remove
            </button>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Education</h2>
          <button
            onClick={addEducation}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            <Plus size={16} /> Add Education
          </button>
        </div>
        {education.map((edu) => (
          <div key={edu.id} className="space-y-4 p-4 bg-gray-50 rounded-lg">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="School"
                className="input-field"
                value={edu.school}
                onChange={(e) =>
                  setEducation(
                    education.map((ed) =>
                      ed.id === edu.id ? { ...ed, school: e.target.value } : ed
                    )
                  )
                }
              />
              <input
                type="text"
                placeholder="Degree"
                className="input-field"
                value={edu.degree}
                onChange={(e) =>
                  setEducation(
                    education.map((ed) =>
                      ed.id === edu.id ? { ...ed, degree: e.target.value } : ed
                    )
                  )
                }
              />
              <input
                type="text"
                placeholder="Field of Study"
                className="input-field"
                value={edu.field}
                onChange={(e) =>
                  setEducation(
                    education.map((ed) =>
                      ed.id === edu.id ? { ...ed, field: e.target.value } : ed
                    )
                  )
                }
              />
              <input
                type="month"
                placeholder="Graduation Date"
                className="input-field"
                value={edu.graduationDate}
                onChange={(e) =>
                  setEducation(
                    education.map((ed) =>
                      ed.id === edu.id ? { ...ed, graduationDate: e.target.value } : ed
                    )
                  )
                }
              />
            </div>
            <button
              onClick={() => setEducation(education.filter((e) => e.id !== edu.id))}
              className="flex items-center gap-2 px-3 py-1 text-sm text-red-500 hover:text-red-600 transition"
            >
              <Trash2 size={16} /> Remove
            </button>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Skills</h2>
          <button
            onClick={addSkill}
            className="flex items-center gap-2 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          >
            <Plus size={16} /> Add Skill
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Skill"
                className="input-field flex-1"
                value={skill.name}
                onChange={(e) =>
                  setSkills(
                    skills.map((s) =>
                      s.id === skill.id ? { ...s, name: e.target.value } : s
                    )
                  )
                }
              />
              <input
                type="range"
                min="1"
                max="5"
                className="w-24"
                value={skill.level}
                onChange={(e) =>
                  setSkills(
                    skills.map((s) =>
                      s.id === skill.id ? { ...s, level: parseInt(e.target.value) } : s
                    )
                  )
                }
              />
              <button
                onClick={() => setSkills(skills.filter((s) => s.id !== skill.id))}
                className="text-red-500 hover:text-red-600 transition"
              >
                <Trash2 size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}