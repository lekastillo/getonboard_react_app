import React from 'react';
import ContentLoader from 'react-content-loader';

const JobLoading = () => (
  <ContentLoader
    height={120}
    primaryColor="#dedddf"
    secondaryColor="#ecebeb"
    speed={1}
    width={800}
  >
    <rect x="122" y="15" rx="5" ry="5" width="220" height="10" />
    <rect x="120" y="36" rx="5" ry="5" width="480" height="22" />
    <rect x="123" y="68" rx="5" ry="5" width="260" height="15" />
    <rect x="6" y="13" rx="0" ry="0" width="90" height="77" />
    <rect x="163" y="91" rx="0" ry="0" width="0" height="0" />
    <rect x="730" y="33" rx="0" ry="0" width="52" height="46" />
  </ContentLoader>
);

export default JobLoading;
