import { JobOffer } from './types';

export const MOCK_JOBS: JobOffer[] = [
  {
    id: '1',
    title: 'Fachkrankenpfleger Intensivpflege (m/w/d)',
    hospital: 'Charité – Universitätsmedizin Berlin',
    location: 'Berlin',
    salary: '3.800€ - 4.600€',
    tags: ['Intensivstation', 'Beatmung'],
    description: 'Fachkrankenpfleger Intensivpflege (m/w/d)',
    postedDate: 'Vor 2 Tagen'
  },
  {
    id: '2',
    title: 'Fachkrankenpfleger Anästhesie (m/w/d)',
    hospital: 'Universitätsklinikum München',
    location: 'München',
    salary: '3.600€ - 4.400€',
    tags: ['Anästhesie', 'OP'],
    description: 'Fachkrankenpfleger Anästhesie (m/w/d)',
    postedDate: 'Neu'
  },
  {
    id: '3',
    title: 'Pflegefachkraft Intensivstation (m/w/d)',
    hospital: 'Universitätsklinikum Hamburg-Eppendorf',
    location: 'Hamburg',
    salary: '3.500€ - 4.200€',
    tags: ['Intensivpflege', 'Weiterbildung'],
    description: 'Pflegefachkraft Intensivstation (m/w/d)',
    postedDate: 'Vor 1 Woche'
  }
];
