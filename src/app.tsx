import React from 'react';
import LogoURL from '@/assets/images/logo.svg';
import CheckOutLanguage from '@/components/CheckOutLanguage';

export const layout = () => ({
  logo: () => <img src={LogoURL} alt="logo" />,
  rightContentRender: () => (
    <div>
      <CheckOutLanguage />
    </div>
  ),
  footerRender: () => 'MapleStory Calculator',
});
