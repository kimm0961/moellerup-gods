import React from 'react'
import DKC from './DKC'
import Instagram from './Instagram'
import Nyhedsbrev from './Nyhedsbrev'


const Outro = () => {
    return ( 
        <div>
            <DKC />
            <div className="row">
            <div className="col-md-8">
            <Instagram />
            </div>
            <div className="col-md-4">
            <Nyhedsbrev />
            </div>
            </div>
        </div>
     );
}
 
export default Outro;