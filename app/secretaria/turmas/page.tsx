"use client"
import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import { NavbarSec } from '@/app/components/navbarsec';
import Image from 'next/image'; // Importe o componente Image do 'next/image'
import alunopng from '@/public/aluno.png';
import axios from 'axios';

type Turma = {
  map(arg0: (Aluno: any) => React.JSX.Element): React.ReactNode;
  id: string;
  name: string;
  curso: string;
};

function Turma() {
  const { id } = useParams();
  const [turma, setTurma] = React.useState<Turma | null>(null);

  axios.interceptors.request.use((config) => {
    // Loga uma mensagem antes da requisição HTTP ser enviada
    console.log('A requisição foi enviada');
    return config;
  });

  useEffect(() => {
    axios.get('http://10.5.9.9:38000/app/turma/list/')
      .then((response) => {
        setTurma(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <NavbarSec />
      <main className="w-full flex-col justify-center h-full">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
       
          <Image src={alunopng} alt="" width={300} height={300} /> 

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>
      </main>
    </>
  );
}

export default Turma;
