import React from 'react';

class AdComponentQuote extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <div>
                <ins className="adsbygoogle"
                    style={{display:"block"}}
                    data-ad-client="ca-pub-7531037282217434"
                    data-ad-slot="6873200576"
                    data-ad-layout="in-article"
                    data-ad-format="fluid"
                    data-full-width-responsive="true"
                />
            </div>
        );
    }
}

export default AdComponentQuote;