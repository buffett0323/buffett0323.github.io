import Image from 'next/image';
import CPP from '../public/static/tech/cpp-logo.png';
import CSS from '../public/static/tech/css-logo.png';
import Docker from '../public/static/tech/docker-logo.png';
import Git from '../public/static/tech/git-logo.png';
import HTML from '../public/static/tech/html-logo.png';
import JS from '../public/static/tech/js-logo.png';
import Node from '../public/static/tech/node-logo.png';
import Next from '../public/static/tech/next-logo.png';
import Python from '../public/static/tech/python-logo.png';
import Pytorch from '../public/static/tech/pytorch-logo.png';
import React from '../public/static/tech/react-logo.png';
import TS from '../public/static/tech/ts-logo.png';
import Mongo from '../public/static/tech/mongodb_original_wordmark_logo_icon_146425.png';
import Flask from '../public/static/tech/icons8-flask-500.png';
import postgres from '../public/static/tech/postgresql.png';
import google from '../public/static/tech/google.png';
import openCV from '../public/static/tech/opencv.png';
import CSharp from '../public/static/tech/c-sharp.png';
import tensorflow from '../public/static/tech/tensorflow.png';
import huggingface from '../public/static/tech/hf-logo.png';
import mysql from '../public/static/tech/mysql.png';
import golang from '../public/static/tech/go-logo.png';
import netlogo from '../public/static/tech/netlogo.png';
import openai from '../public/static/tech/openai.png';

export const techs: TechDictType[] = [
  'C/C++',
  'Python',
  'Javascript',
  'Typescript',
  'C#',
  'Golang',
  'HTML',
  'CSS',
  'PyTorch',
  'Tensorflow',
  'HuggingFace',
  'OpenCV',
  'Flask',
  'React',
  'Next.js',
  'NodeJS',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'GoogleAPI',
  'Docker',
  'Git',
  'NetLogo',
];


export const techDict = {
  'C/C++': CPP,
  Python: Python,
  HTML: HTML,
  CSS: CSS,
  Javascript: JS,
  Typescript: TS,
  PyTorch: Pytorch,
  Flask: Flask,
  React: React,
  'Next.js': Next,
  NodeJS: Node,
  MongoDB: Mongo,
  Docker: Docker,
  Git: Git,
  PostgreSQL: postgres,
  OpenAIAPI: openai,
  GoogleAPI: google,
  OpenCV: openCV,
  'C#': CSharp,
  Tensorflow: tensorflow,
  HuggingFace: huggingface,
  MySQL: mysql,
  Golang: golang,
  NetLogo: netlogo,
};

// export techDict key type
export type TechDictType = keyof typeof techDict;

export default function TechBox({
  tech,
  bgColor = 'bg-gray-200 dark:bg-gray-600',
}: {
  tech: TechDictType;
  bgColor?: string;
}) {
  return (
    <div className="flex flex-col items-center">
      <div className={`h-fit w-full rounded-lg p-3 sm:p-4 ${bgColor}`}>
        <Image
          src={techDict[tech]}
          alt={tech}
          className="aspect-square w-full object-contain"
          sizes="30vw"
        />
      </div>
      <p className="pb-4 pt-1 text-center text-sm font-semibold md:text-base">{tech}</p>
    </div>
  );
}