import { ToolItem } from './types';

import bankRiskImg from '../assets/bankriskcreditttt2.png';
import cloudImg from '../assets/cloud12.png';
import crmImg from '../assets/crm4.png';
import cyberSecurityImg from '../assets/cybersecurity2.png';
import dashboardImg from '../assets/dashboard2.png';
import ecommerceImg from '../assets/ecommercemgmt2.png';
import feedManagerImg from '../assets/feed manaeger1.png';
import logisticImg from '../assets/logistic1.png';
import postVenditaImg from '../assets/postvendita2.png';
import synchOrderImg from '../assets/synchorder2.png';

// NOTE: In a real environment, you would place your images in a 'public/assets/loghi' folder
// and reference them directly. For this demo, we use placeholder images generated
// to look like icons/logos, but we keep the original filenames in the data structure
// so you can easily map them later.

export const TOOLS_DATA: ToolItem[] = [
  {
    id: 'bank-risk',
    title: 'Bank Risk Credit',
    filename: 'bank risk creditttt  2.png',
    placeholderUrl: bankRiskImg
  },
  {
    id: 'cloud',
    title: 'Cloud Computing',
    filename: 'cloud 1 2.png',
    placeholderUrl: cloudImg
  },
  {
    id: 'crm',
    title: 'CRM Management',
    filename: 'crm 4.png',
    placeholderUrl: crmImg
  },
  {
    id: 'cyber-security',
    title: 'Cyber Security',
    filename: 'cyber security 2.png',
    placeholderUrl: cyberSecurityImg
  },
  {
    id: 'dashboard',
    title: 'Dashboard',
    filename: 'dashboard  2.png',
    placeholderUrl: dashboardImg
  },
  {
    id: 'ecommerce',
    title: 'Ecommerce Mgmt',
    filename: 'ecommerce mgmt 2.png',
    placeholderUrl: ecommerceImg
  },
  {
    id: 'feed-manager',
    title: 'Feed Manager',
    filename: 'feed manaeger 1.png',
    placeholderUrl: feedManagerImg
  },
  {
    id: 'logistic',
    title: 'Logistics',
    filename: 'logistic 1.png',
    placeholderUrl: logisticImg
  },
  {
    id: 'post-vendita',
    title: 'Post Vendita',
    filename: 'post vendita 2.png',
    placeholderUrl: postVenditaImg
  },
  {
    id: 'synch-order',
    title: 'Synch Order',
    filename: 'synch order 2.png',
    placeholderUrl: synchOrderImg
  }
];