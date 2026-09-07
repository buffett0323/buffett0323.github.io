import React from 'react';
import MetaCards from './MetaCards';
import { taData } from '../../constants/experience';

export default function Teaching_Experience() {
  return <MetaCards heading="Teaching Assistant Experience" entries={taData} />;
}
