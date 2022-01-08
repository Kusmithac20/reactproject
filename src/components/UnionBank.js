import React from 'react'
import AndraBank from './AndraBank'
import CorporateBank from './CorporateBank'

export default function UnionBank() {
    return (
        <div>
            <AndraBank location="kavali"/>
            <CorporateBank location="kakinada"/>
        </div>
    );
}
