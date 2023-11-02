"use client"
import { useState } from "react";
import React from 'react';

type Teacher = {
  id: number;
  name: string;
};

type Subject = {
  id: number;
  name: string;
  teacherId: number;
};

const professors: Teacher[] = [
  { id: 1, name: 'Professor A' },
  { id: 2, name: 'Professor B' },
  { id: 3, name: 'Professor C' },
];

const subjects: Subject[] = [
  { id: 1, name: 'Matéria 1', teacherId: 1 },
  { id: 2, name: 'Matéria 2', teacherId: 1 },
  { id: 3, name: 'Matéria 3', teacherId: 2 },
  { id: 4, name: 'Matéria 4', teacherId: 3 },
];

const MyForm: React.FC = () => {
  const [selectedTeacher, setSelectedTeacher] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<number | null>(null);
  const [description, setDescription] = useState('');

  return (
    <div>
      <h1>Formulário</h1>
      <label htmlFor="teacher">Selecione o Professor:</label>
      <select
        id="teacher"
        value={selectedTeacher || ''}
        onChange={(e) => setSelectedTeacher(Number(e.target.value) || null)}
      >
        <option value="">Selecione um professor</option>
        {professors.map((teacher) => (
          <option key={teacher.id} value={teacher.id}>
            {teacher.name}
          </option>
        ))}
      </select>

      <label htmlFor="subject">Selecione a Matéria:</label>
      <select
        id="subject"
        value={selectedSubject || ''}
        onChange={(e) => setSelectedSubject(Number(e.target.value) || null)}>
        <option value="">Selecione uma matéria</option>
        {subjects
          .filter((subject) => !selectedTeacher || subject.teacherId === selectedTeacher)
          .map((subject) => (
            <option key={subject.id} value={subject.id}>
              {subject.name}
            </option>
          ))}
      </select>

      <label htmlFor="description">Descrição:</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
    </div>
  );
};

export default MyForm;
