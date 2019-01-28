import React, { Component } from 'react';
import { Media } from 'react-bootstrap';

export class SiteIdBody extends Component {
    render() {
        const { ID, LABEL, FK_DEVICE, voiceText } = this.props;
        return(
            <Media.Body>                                  
                <Media.Heading className='Order'>
                    <div >
                        {ID}
                    </div>
                </Media.Heading>
                <Media.Heading className='Label'>
                    <div>
                        {LABEL}
                    </div>
                </Media.Heading>
                <div>{FK_DEVICE}</div>
                {voiceText}
            </Media.Body>
        )
    }
}
