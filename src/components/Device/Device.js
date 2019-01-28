import React, { Component } from 'react';
import { DeviceId } from './DeviceId';
import { Grid, Col, Row } from 'react-bootstrap';
import '../../style/Device.css'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { RingLoader } from 'react-spinners';
import deviceContext from '../ContextProvider/DeviceProvider';



export class Device extends Component {
    displayName = Device.name;
    constructor(props) {
        super(props)
        this.state = {
            loading: false
        }
 
    }

    render() {
        return(
            <deviceContext.Consumer>                    
            {(value) => (
            <Grid >
                <Row>
                    <ReactCSSTransitionGroup
                        transitionName="action"
                        transitionAppear={false}
                        
                        transitionEnter={true}
                        transitionEnterTimeout={800}
                        transitionLeave={true}
                        transitionLeaveTimeout={800}>  
                            <Col xs={12} >
                                {value.state.isLoading ? (
                                    <div className='sweet-loading'>
                                        <RingLoader
                                            
                                            sizeUnit={"px"}
                                            size={300}
                                            color={'#123abc'}
                                            loading={value.state.isLoading}
                                        />
                                    </div> 
                                ):(
                                    <DeviceId/>
                                )}
                            </Col>
                    </ReactCSSTransitionGroup>
                </Row>
                
            </Grid>
            )}
            </deviceContext.Consumer>
        )
    }
}


