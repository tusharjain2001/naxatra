import motorRF15 from '../assets/images/product-motor-rf15.png';
import motorRF22 from '../assets/images/product-motor-rf22.png';
import motorRF33 from '../assets/images/product-motor-rf33.png';
import motorRF55 from '../assets/images/product-motor-rf55.png';
import motorRF66 from '../assets/images/product-motor-rf66.png';
import motorAF58 from '../assets/images/product-motor-af58.png';
import motorPT500 from '../assets/images/product-motor-pt500.png';
import appAgriBot from '../assets/vehicle/agri-bot.png';
import appBike from '../assets/vehicle/bikes.png';
import appTiller from '../assets/vehicle/electric-triller.png';
import appErickshaw from '../assets/vehicle/erickshw.png';
import appForklift from '../assets/vehicle/forklift.png';
import appLoader from '../assets/vehicle/loader-vehicle.png';
import appWeeder from '../assets/vehicle/power-weeder.png';
import appScooter from '../assets/vehicle/scooters.png';
import appSweeper from '../assets/vehicle/sweepers.png';

export const APPLICATIONS = [
  { id: 'scooters',           label: 'Scooters',              icon: appScooter },
  { id: 'bikes',              label: 'Bikes',                 icon: appBike },
  { id: 'sweepers',           label: 'Sweepers',              icon: appSweeper },
  { id: 'agribot',            label: 'Agri-Bot',              icon: appAgriBot },
  { id: 'weeder',             label: 'Power Weeder',          icon: appWeeder },
  { id: 'loader',             label: 'Loader Vehicle',        icon: appLoader },
  { id: 'forklift',           label: 'Forklift',              icon: appForklift },
  { id: 'erickshaw',          label: 'E-Rickshaw',            icon: appErickshaw },
  { id: 'tiller',             label: 'Electric Tiller',       icon: appTiller },
  { id: 'high-performance-2w',label: 'High-Performance 2W',   icon: appBike },
  { id: 'performance-3w',     label: 'Performance 3W',        icon: appErickshaw },
  { id: 'specialty-ev',       label: 'Specialty EV',          icon: appForklift },
  { id: 'grinder',            label: 'Grinder',               icon: appWeeder },
  { id: 'electric-drill',     label: 'Electric Drill',        icon: appLoader },
  { id: 'industrial-tools',   label: 'Industrial Tools',      icon: appForklift },
];

export const SPEC_ROWS = [
  { key: 'voltage',     label: 'Rated Voltage (V DC)' },
  { key: 'ratedPower',  label: 'Rated Power (kW)' },
  { key: 'peakPower',   label: 'Peak Power (kW)' },
  { key: 'peakSpeed',   label: 'Peak Speed (RPM)' },
  { key: 'ratedTorque', label: 'Rated Torque (Nm)' },
  { key: 'peakTorque',  label: 'Peak Torque (Nm)' },
  { key: 'efficiency',  label: 'Peak Efficiency' },
  { key: 'cooling',     label: 'Cooling Method' },
  { key: 'mass',        label: 'Mass' },
  { key: 'insulation',  label: 'Insulation class' },
  { key: 'sensor',      label: 'Sensor Type' },
  { key: 'ip',          label: 'IP Rating' },
  { key: 'comm',        label: 'Communication Mode' },
];

export const SINGLE_SPEC_ROWS = [
  { key: 'motorTypeFull', label: 'Motor type' },
  { key: 'voltage',       label: 'Rated Voltage' },
  { key: 'ratedPower',    label: 'Rated Power' },
  { key: 'peakPower',     label: 'Peak Power' },
  { key: 'peakSpeed',     label: 'Max Speed' },
  { key: 'ratedTorque',   label: 'Rated Torque' },
  { key: 'peakTorque',    label: 'Peak Torque' },
  { key: 'efficiency',    label: 'Peak Efficiency' },
  { key: 'cooling',       label: 'Cooling method' },
  { key: 'mass',          label: 'Mass' },
  { key: 'insulation',    label: 'Insulation' },
  { key: 'sensor',        label: 'Sensor Type' },
  { key: 'ip',            label: 'IP rating' },
  { key: 'comm',          label: 'Communication mode' },
];

export const PRODUCTS = [
  {
    id: 'rf15',
    name: 'Antarix RF 15',
    shortName: 'RF15',
    description: 'Lightweight IPMSM radial flux motor for two-wheelers and light mobility applications.',
    heroVoltage: '48-72 V',
    heroTorque: '25-28 Nm',
    motorType: 'IPMSM Radial Flux',
    coolingType: 'Air Cooled',
    image: motorRF15,
    applications: ['scooters', 'sweepers', 'agribot', 'weeder', 'forklift', 'erickshaw'],
    variants: [
      {
        voltage: 48, ratedPower: 1.5, peakPower: 3.5, peakSpeed: 4500, ratedTorque: 5,
        peakTorque: 25, efficiency: '>90%', cooling: 'Air Cooled', mass: '6.5 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 72, ratedPower: 1.5, peakPower: 3.5, peakSpeed: 5500, ratedTorque: 6,
        peakTorque: 28, efficiency: '>92%', cooling: 'Air Cooled', mass: '6.5 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
    ],
  },
  {
    id: 'rf22',
    name: 'Antarix RF 22',
    shortName: 'RF22',
    description: 'Versatile radial flux motor for scooters, bikes, and light commercial EVs.',
    heroVoltage: '48-96 V',
    heroTorque: '30-32 Nm',
    motorType: 'IPMSM Radial Flux',
    coolingType: 'Air Cooled',
    image: motorRF22,
    applications: ['scooters', 'bikes', 'sweepers', 'agribot', 'weeder', 'loader', 'forklift', 'erickshaw'],
    variants: [
      {
        voltage: 48, ratedPower: 2.2, peakPower: 3.5, peakSpeed: 3600, ratedTorque: 9,
        peakTorque: 32, efficiency: '>90%', cooling: 'Air Cooled', mass: '6.5 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 72, ratedPower: 2.2, peakPower: 3.5, peakSpeed: 3600, ratedTorque: 10.5,
        peakTorque: 30, efficiency: '>92%', cooling: 'Air Cooled', mass: '6.5 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 96, ratedPower: 2.5, peakPower: 4.5, peakSpeed: 5000, ratedTorque: 9,
        peakTorque: 32, efficiency: '>92%', cooling: 'Air Cooled', mass: '6.5 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
    ],
  },
  {
    id: 'rf33',
    name: 'Antarix RF 33',
    shortName: 'RF33',
    description: 'Mid-range radial flux motor for high-performance scooters and commercial EVs.',
    heroVoltage: '48-96 V',
    heroTorque: '45-50 Nm',
    motorType: 'IPMSM Radial Flux',
    coolingType: 'Air Cooled',
    image: motorRF33,
    applications: ['scooters', 'sweepers', 'agribot', 'weeder', 'forklift', 'loader'],
    variants: [
      {
        voltage: 48, ratedPower: 3.3, peakPower: 4.5, peakSpeed: 3600, ratedTorque: 14.5,
        peakTorque: 45, efficiency: '>92%', cooling: 'Air Cooled', mass: '7.7 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 72, ratedPower: 3.3, peakPower: 4.8, peakSpeed: 5000, ratedTorque: 14.5,
        peakTorque: 45, efficiency: '>92%', cooling: 'Air Cooled', mass: '7.7 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 96, ratedPower: 3, peakPower: 4.8, peakSpeed: 5000, ratedTorque: 14.5,
        peakTorque: 50, efficiency: '>90%', cooling: 'Air Cooled', mass: '7.7 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
    ],
  },
  {
    id: 'rf55',
    name: 'Antarix RF 55',
    shortName: 'RF55',
    description: 'High-torque radial flux motor for heavy-duty two-wheelers and agricultural equipment.',
    heroVoltage: '48-96 V',
    heroTorque: '55-65 Nm',
    motorType: 'IPMSM Radial Flux',
    coolingType: 'Air Cooled',
    image: motorRF55,
    applications: ['scooters', 'sweepers', 'agribot', 'tiller', 'forklift', 'loader'],
    variants: [
      {
        voltage: 48, ratedPower: 5.5, peakPower: 8, peakSpeed: 4000, ratedTorque: 19.5,
        peakTorque: 55, efficiency: '>92%', cooling: 'Air Cooled', mass: '10.5 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 72, ratedPower: 5.5, peakPower: 8, peakSpeed: 4000, ratedTorque: 19.5,
        peakTorque: 65, efficiency: '>92%', cooling: 'Air Cooled', mass: '10.5 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 96, ratedPower: 5.5, peakPower: 9, peakSpeed: 5500, ratedTorque: 19.5,
        peakTorque: 65, efficiency: '>92%', cooling: 'Air Cooled', mass: '10.5 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
    ],
  },
  {
    id: 'rf66',
    name: 'Antarix RF 66',
    shortName: 'RF66',
    description: 'High-performance radial flux motor for commercial EVs and industrial applications.',
    heroVoltage: '48-96 V',
    heroTorque: '62-80 Nm',
    motorType: 'IPMSM Radial Flux',
    coolingType: 'Air Cooled',
    image: motorRF66,
    applications: ['scooters', 'sweepers', 'agribot', 'weeder', 'loader', 'forklift', 'erickshaw'],
    variants: [
      {
        voltage: 48, ratedPower: 6.5, peakPower: 12.5, peakSpeed: 6500, ratedTorque: 20,
        peakTorque: 62, efficiency: '>93%', cooling: 'Air Cooled', mass: '15 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 72, ratedPower: 6.5, peakPower: 13, peakSpeed: 6500, ratedTorque: 20,
        peakTorque: 62, efficiency: '>94%', cooling: 'Air Cooled', mass: '15 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
      {
        voltage: 96, ratedPower: 6.5, peakPower: 15.5, peakSpeed: 6500, ratedTorque: 20,
        peakTorque: 80, efficiency: '>94%', cooling: 'Air Cooled', mass: '15 kg',
        insulation: 'F Class', sensor: 'Enc (hall signals)', ip: 'IP67', comm: 'CAN / one-line',
      },
    ],
  },
  {
    id: 'af58',
    name: 'Antarix AF 58',
    shortName: 'AF58',
    description: 'Axial flux PMSM delivering compact, high-torque performance for premium EV applications.',
    heroVoltage: '72 V',
    heroTorque: '60 Nm',
    motorType: 'Axial Flux PMSM',
    coolingType: 'Forced Air Cooled',
    image: motorAF58,
    applications: ['high-performance-2w', 'performance-3w', 'specialty-ev'],
    singleSpec: {
      motorTypeFull: 'Axial Flux PMSM',
      voltage:    '72 V',
      ratedPower: '5.8 kW',
      peakPower:  '10.5 kW',
      peakSpeed:  '4400 RPM',
      ratedTorque:'25 Nm',
      peakTorque: '60 Nm',
      efficiency: '94%',
      cooling:    'Forced Air Cooled',
      mass:       '11 kg',
      insulation: '> 20 MOhm',
      sensor:     'Hall Sensor / Magnetic Encoder',
      ip:         'IP67',
      comm:       'CAN / one-line',
    },
  },
  {
    id: 'pt500',
    name: 'PT-500',
    shortName: 'PT500',
    description: 'Compact IPMSM radial flux motor engineered for power tools and industrial equipment.',
    heroVoltage: '18 V',
    heroTorque: '0.5 Nm',
    motorType: 'IPMSM Radial Flux',
    coolingType: 'Forced Air Cooled',
    image: motorPT500,
    applications: ['grinder', 'electric-drill', 'industrial-tools'],
    singleSpec: {
      motorTypeFull: 'IPMSM Radial Flux',
      voltage:    '18 V',
      ratedPower: '0.05 kW',
      peakPower:  '0.5 kW',
      peakSpeed:  '17500 RPM',
      ratedTorque:'0.32 Nm',
      peakTorque: '0.5 Nm',
      efficiency: '-',
      cooling:    'Forced Air Cooled',
      mass:       '-',
      insulation: 'Class F',
      sensor:     'Hall Sensor',
      ip:         '-',
      comm:       '-',
    },
  },
];
