import React from 'react';

class AdComponent extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <ins className='adsbygoogle'
              style={{ display: 'block' }}
              data-ad-layout="in-article"
              data-ad-client="ca-pub-7531037282217434"
              data-ad-slot="6084252145"
              data-ad-format="auto" />
        );
    }
}

export default AdComponent;