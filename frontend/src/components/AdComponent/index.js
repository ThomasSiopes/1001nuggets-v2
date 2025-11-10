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
                    <ins className="adsbygoogle"
                        style={{display:"block"}}
                        data-ad-client="ca-pub-7531037282217434"
                        data-ad-slot="9046894192"
                        data-ad-format="auto"
                        data-full-width-responsive="true"
                    />
                </Card.Body>
            </Card>
        );
    }
}

export default AdComponent;