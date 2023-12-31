import React from 'react';
import { Image } from 'antd';

const FlexGallery = ({art}) => {
  return (
    <div className={'art-content'}>
      <Image.PreviewGroup>
                {art?.map(work =>  (
                <Image visible={false} className={'artwork'} src={work.path} alt={work.alt}/> ))}
        </Image.PreviewGroup>
    </div> 
    
  )
}

export default FlexGallery