import lichenCover from '../../assets/customer/lichen_cardbg.jpg';
import hpsfCover from '../../assets/customer/hpsf_cardbg.jpg';
import tripodCover from '../../assets/customer/tripod_cardbg.jpg';
import saigonwickerCover from '../../assets/customer/saigonwicker_cardbg.jpg';
import vietucCover from '../../assets/customer/vietuc_cardbg.jpg';

// Card-only media. Lotte retains a neutral background until photography is supplied.
// Customer logos remain available to the case-study reader, never used as covers.
const paradise = { product: 'Paradise HR', logo: 'ParadiseOfficallLogo.svg' };
const vaoca = { product: 'Vào Ca', logo: 'LogoVaoCa_Full.svg' };
const asoft = { product: 'ASOFT ERP', logo: 'asoft_logo.png' };
export const projectCoverMedia = [
  { ...paradise, background: 'existing', position: 'center' },
  { ...paradise, background: 'existing', position: 'center 30%' },
  { ...vaoca, background: 'existing', position: 'center' },
  { ...vaoca, background: 'existing', position: 'center top' },
  { ...paradise, background: 'existing', position: 'center' },
  { ...paradise, background: 'existing', position: 'center top' },
  { ...paradise, background: lichenCover, position: 'center' },
  { ...paradise, background: hpsfCover, position: 'center' },
  { ...paradise, background: tripodCover, position: 'center' },
  { ...asoft, background: saigonwickerCover, position: 'center' },
  { ...asoft, background: vietucCover, position: 'center' },
  { ...paradise, background: null },
];
