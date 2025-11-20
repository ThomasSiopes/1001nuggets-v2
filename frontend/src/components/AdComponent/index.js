import React from 'react';

import { Container } from 'react-bootstrap';

class AdComponent extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <Container>
                <ins className="adsbygoogle"
                    style={{display:"block"}}
                    data-ad-client="ca-pub-7531037282217434"
                    data-ad-slot="2448754308"
                    data-ad-format="rectangle, horizontal"
                    data-full-width-responsive="false"
                />
            </Container>
        );
    }
}

export default AdComponent;