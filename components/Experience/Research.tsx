import React from 'react';
import MetaCards from './MetaCards';
import { researchData } from '../../constants/experience';

export default function Research() {
  return <MetaCards heading="Research Experience" entries={researchData} />;
}
