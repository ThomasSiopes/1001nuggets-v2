import React from 'react';

class AdComponent extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <div>
                <ins className="adsbygoogle ad-responsive"
                    style={{display:"block"}}
                    data-ad-client="ca-pub-7531037282217434"
                    data-ad-slot="2448754308"
                    data-ad-format="horizontal"
                    data-full-width-responsive="true"
                />
            </div>
        );
    }
}

export default AdComponent;