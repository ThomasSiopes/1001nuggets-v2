import React from 'react';

import { Card } from 'react-bootstrap';

class AdComponent extends React.Component {
    componentDidMount () {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }

    render () {
        return (
            <Card>
                <Card.Body className="rounded">
                    <ins className='adsbygoogle adresponsive'
                    style={{display: 'block'}}
                    data-ad-layout="in-article"
                    data-ad-client="ca-pub-7531037282217434"
                    data-ad-slot="6084252145"/>
                </Card.Body>
            </Card>
        );
    }
}

export default AdComponent;