import React, { Component } from 'react';
import  SiteId  from './SiteId';
import { Grid, Col, Row } from 'react-bootstrap';
import '../../style/Site.css'
import { RingLoader } from 'react-spinners';
import myContext from '../ContextProvider/MyProvider';

export class Site extends Component {
    displayName = Site.name;
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }  
    }

    render() {
        return(
            <myContext.Consumer>                    
            {(value) => (
            <Grid >  
                <Row>
                    <Col xs={16} >
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
                            <SiteId />
                        )}
                    </Col>
                </Row>
            </Grid>
            )}
            </myContext.Consumer>
           
         
           
        )
    }
}
