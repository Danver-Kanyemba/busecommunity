import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HousesListService {
  clustersAndTownCenter: any = [

    {
      location: 'Clusters',
      nameOfOwner: 'Mr Kokerai',
      contact:'774022224',
      noOfPeople: '8',
      sex: 'Both',
      charge: 'TBA'
    },
    {
      location: 'Matombomanyoro Business Park (Town Cntre)',
      nameOfOwner: 'Mrs Mupoperi',
      contact:'774648266',
      noOfPeople: '24',
      sex: 'Both',
      charge: 'TBA'
    },
  ];

  aerodrome: any = [

    {
      location: 'Aerodrome Infill',
      nameOfOwner: 'Pastor Nhumbudzi',
      contact:'0775 441 086/0772 913 904',
      noOfPeople: '8',
      sex: 'Both',
      charge: '$45/month'
    },
    {
      location: 'Aerodrome ',
      nameOfOwner: 'Mrs Kanyemba',
      contact:'775612018',
      noOfPeople: '2',
      sex: 'M',
      charge: '$50/month'
    },
    {
      location: 'Aerodrome ',
      nameOfOwner: 'Mrs Mapakame',
      contact:'772414887',
      noOfPeople: '3',
      sex: 'F',
      charge: 'RESERVED'
    },
    {
      location: 'Nohwedza Chando Aerodrome',
      nameOfOwner: 'Mr Kanhenga C',
      contact:'774182296',
      noOfPeople: '2',
      sex: 'F',
      charge: '$60/month'
    },
    {
      location: 'Benson Mangirazi Aerodrome ',
      nameOfOwner: 'Mrs Dandaro',
      contact:'773115382',
      noOfPeople: '4',
      sex: 'F',
      charge: '$270/semester'
    },
    {
      location: 'Magamba Way Aerodrome ',
      nameOfOwner: 'Mr P Gombera',
      contact:'772932302',
      noOfPeople: '25',
      sex: 'Both',
      charge: '$230/semester'
    },

  ];
  chiwaridzo: any = [

    {
      location: 'Mubveve St Chiwaridzo',
      nameOfOwner: 'Makuwa D',
      contact:'775050242',
      noOfPeople: '6',
      sex: 'F',
      charge: '$60/month'
    },
    {
      location: 'Chiwaridzo',
      nameOfOwner: 'Muzhanje L',
      contact:'777807388',
      noOfPeople: '6',
      sex: 'Both',
      charge: '$50/month'
    },
    {
      location: 'Chiwaridzo',
      nameOfOwner: 'Mr Zvapano',
      contact:'772247545',
      noOfPeople: '10',
      sex: 'M',
      charge: 'TBA'
    },
    {
      location: 'Mutsonzowa St Chiwaridzo',
      nameOfOwner: 'Mr Mashatise',
      contact:'771802974',
      noOfPeople: '6',
      sex: 'M',
      charge: 'TBA'
    },
    {
      location: 'Chiwaridzo Phase 2',
      nameOfOwner: 'Mr T Chando',
      contact:'777626327',
      noOfPeople: '6',
      sex: 'F',
      charge: '$30/month'
    },
    {
      location: 'Chiwaridzo Phase 2',
      nameOfOwner: 'Mr Gosa P',
      contact:'772733679',
      noOfPeople: '15',
      sex: 'Both',
      charge: '$200/month'
    },
    {
      location: 'Chiwaridzo Phase 2',
      nameOfOwner: 'Mrs Chimombe',
      contact:'772584835',
      noOfPeople: '2',
      sex: 'F',
      charge: 'TBA'
    },
    {
      location: 'Chiwaridzo Phase 2',
      nameOfOwner: 'Mr Nyamapfene',
      contact:'779006557',
      noOfPeople: '9',
      sex: 'F',
      charge: '$60/month'
    },
    {
      location: 'Chiwaridzo Phase 2',
      nameOfOwner: 'Mrs P Nyakazaya',
      contact:'772988666',
      noOfPeople: '15',
      sex: 'Both',
      charge: '$50/month'
    },
    {
      location: 'Chiwaridzo Phase 2',
      nameOfOwner: 'Mr Manyati',
      contact:'774351076',
      noOfPeople: '15',
      sex: 'Both',
      charge: '$50/month'
    },
  ];

  shashiView: any = [

    {
      location: 'Hagalthorne Avenue Shashi',
      nameOfOwner: 'Mrs Rusike Ruth Falala',
      contact:'772721917',
      noOfPeople: '25',
      sex: 'Both',
      charge: '$70-$100/month'
    },
    {
      location: 'HCoventry Rd Near Hospital Shashi View',
      nameOfOwner: 'Mrs Mandioma E',
      contact:'734823323',
      noOfPeople: '23',
      sex: 'F',
      charge: '$75/month'
    },
    {
      location: 'Malula Crescent Shashi View',
      nameOfOwner: 'Mr Kuleya',
      contact:'772920152',
      noOfPeople: '42',
      sex: 'F',
      charge: 'TBA'
    },
    {
      location: 'Tumazos Road Near ZRP Shashi View',
      nameOfOwner: 'Mr Nyakuridyisa',
      contact:'772428467',
      noOfPeople: '4',
      sex: 'F',
      charge: '$80/month'
    },
    {
      location: 'Cactus Road Shashi View',
      nameOfOwner: 'Mrs Mupoperi',
      contact:'775648266',
      noOfPeople: '11',
      sex: 'Both',
      charge: '$85/month'
    },
    {
      location: 'Wattle Crescent White House Shashi View',
      nameOfOwner: 'Mrs Ngoshi',
      contact:'0773979745/0772404976',
      noOfPeople: '24',
      sex: 'Both',
      charge: '$75/month'
    },
    {
      location: 'Wattle Crescent Shashi View',
      nameOfOwner: 'Mrs Rusike Ruth Falala',
      contact:'0774 149 520/0782894641',
      noOfPeople: '15',
      sex: 'F',
      charge: '$300/semester'
    },
    {
      location: 'WATTLE CRESCENT SHASHI VIEW',
      nameOfOwner: 'Mr S Sekerere',
      contact:'782305631',
      noOfPeople: '35',
      sex: 'Both',
      charge: '$250-$275/semester'
    },
    {
      location: 'SHASHI RED ROOF SHASHI VIEW',
      nameOfOwner: 'Mr T Mututuvari',
      contact:'0773870106/0772757118',
      noOfPeople: '12',
      sex: 'M',
      charge: '$300/semester'
    },
    {
      location: 'Blackwood Avenue Shashi View',
      nameOfOwner: 'Mr Mukungurutse',
      contact:'772737915',
      noOfPeople: '15',
      sex: 'Both',
      charge: 'TBA'
    },
    {
      location: 'Blackwood Avenue Shashi View',
      nameOfOwner: 'Mrs Madombwe',
      contact:'775790732',
      noOfPeople: '10',
      sex: 'Both',
      charge: 'TBA'
    },
    {
      location: 'Blackwood Avenue Shashi View',
      nameOfOwner: 'Mrs Nyakudya',
      contact:'0772 787 518/0779 747328',
      noOfPeople: '22',
      sex: 'F',
      charge: 'TBA'
    },
    {
      location: 'Blackwood Avenue Shashi View',
      nameOfOwner: 'Mrs Mucheche',
      contact:'772746996',
      noOfPeople: '30',
      sex: 'Both',
      charge: 'TBA'
    },
    {
      location: 'Blackwood Avenue Shashi View',
      nameOfOwner: 'Mr E Baru',
      contact:'779182298',
      noOfPeople: '22',
      sex: 'Both',
      charge: '$300/semester'
    },
    {
      location: 'Shashi View',
      nameOfOwner: 'Admire',
      contact:'777052846',
      noOfPeople: '23',
      sex: 'Both',
      charge: '$70/month'
    },
    {
      location: 'SHASHI VIEW',
      nameOfOwner: 'Mrs S Kambarami',
      contact:'772355856',
      noOfPeople: '16',
      sex: 'F',
      charge: '$420/semester Laundry & Meals'
    },
    {
      location: 'Oak St Shashi View',
      nameOfOwner: 'Mr L Sithole',
      contact:'772757938',
      noOfPeople: '11',
      sex: 'F',
      charge: '$300-00/semester'
    },
    {
      location: 'Shashi View',
      nameOfOwner: 'Ms A Chiripamberi',
      contact:'772904421',
      noOfPeople: '4',
      sex: 'M',
      charge: '$50/month'
    },
    {
      location: 'Greenheart Lane Shashi view',
      nameOfOwner: 'Mr FD Gondongwe',
      contact:'774631792',
      noOfPeople: '50',
      sex: 'Both',
      charge: '$300/semester'
    },
    {
      location: 'Wingpod Close Shashi View',
      nameOfOwner: 'Mrs June',
      contact:'772309710',
      noOfPeople: '20',
      sex: 'F',
      charge: '$300/semester'
    },
    {
      location: 'Hay Rd East shashi',
      nameOfOwner: 'Mr Godwell Chikazhe',
      contact:'772107750',
      noOfPeople: '17',
      sex: 'Both',
      charge: '$65/month'
    },
    {
      location: 'Waterbury shashi',
      nameOfOwner: 'Mr D Mposhi',
      contact:'772266888',
      noOfPeople: '14',
      sex: 'Both',
      charge: '$85/month'
    },
    {
      location: 'Waterberry shashi',
      nameOfOwner: 'Mrs A Usada',
      contact:'772397200',
      noOfPeople: '4',
      sex: 'F',
      charge: '$280/semester'
    },
    {
      location: 'centenary Avenue shashi',
      nameOfOwner: 'Mrs P. M. Muhita',
      contact:'772429361',
      noOfPeople: '6',
      sex: 'F',
      charge: '$70/month'
    },
    {
      location: 'Shashi View Near Shashi Pry',
      nameOfOwner: 'Dr G Nyamadzawo',
      contact:'777895395',
      noOfPeople: '12',
      sex: 'Both',
      charge: '290/semester'
    }
  ];

  lightIndustry: any = [

    {
      location: 'FATCHG TRUST 5808 Athurstone Rd Light Industry',
      nameOfOwner: 'Mr Choga Joseph',
      contact:'775789773',
      noOfPeople: '26',
      sex: 'F',
      charge: '$250/semester'
    },
    {
      location: '2155 CHAMINUKA St Light Industry',
      nameOfOwner: 'Mr Madzivadondo James',
      contact:'775846408',
      noOfPeople: '14',
      sex: 'Both',
      charge: '$200/semester'
    },
    {
      location: '2139 CHAMINUKA St Light Indusrty',
      nameOfOwner: 'Mr Mutonhori Saviours',
      contact:'773062780',
      noOfPeople: '22',
      sex: 'Both',
      charge: '$250/semester'
    },
    {
      location: '2157 Chaminuka St Light Industry',
      nameOfOwner: 'Mr F Chamba',
      contact:'0772354941/0772626900',
      noOfPeople: '8',
      sex: 'Both',
      charge: '$250/semester'
    },
    {
      location: '2100 Chaminuka Street Light Industry',
      nameOfOwner: 'Mrs Rangarira',
      contact:'777967478',
      noOfPeople: '5',
      sex: 'Both',
      charge: 'TBA'
    },
    {
      location: '5806 Athurstone Road Light industry',
      nameOfOwner: 'Mr M Nyazema',
      contact:'772715868',
      noOfPeople: '20',
      sex: 'Both',
      charge: '$40/semester'
    },
    {
      location: '2115 Athurstone Rd Light Industry',
      nameOfOwner: 'Mr Chidavaenzi',
      contact:'774533600',
      noOfPeople: '25 ZRP only',
      sex: 'M',
      charge: 'ZRP PAYS'
    },
    {
      location: '84 Dipdale Plot Trojan Rd',
      nameOfOwner: 'Mr B Nyawasha',
      contact:'777977020',
      noOfPeople: '60',
      sex: 'Both',
      charge: '$320/semester'
    },
    {
      location: '832 Mash- Winders (Heavy Industry) Trojan Rd',
      nameOfOwner: 'Ms Zhuwawo F',
      contact:'0773244978/0772 412271',
      noOfPeople: '9',
      sex: 'M',
      charge: '$60/Month'
    },
    {
      location: '827 Trojan Rd (PaDandaro)',
      nameOfOwner: 'M rs Dandaro',
      contact:'773115382',
      noOfPeople: '15',
      sex: 'Both',
      charge: '$270/semester'
    },
    {
      location: '460 Luton Rd Off Trojan Rd (Bindura Engineering)',
      nameOfOwner: 'Mr Kasoro V',
      contact:'783332780',
      noOfPeople: '25',
      sex: 'Both',
      charge: '$270/semester'
    },
  ];
  constructor() { }

}
