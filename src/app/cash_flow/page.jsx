import CashFlowCard from '@/components/CashFlow/CashFlowCard';
import Container from '@/components/shared/Container';
import React from 'react';

import info from '../../../public/cash-flow.json'

const cashFlow =async () => {


    // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/cash-flow.json`)
    // const info = await res.json()

    return (
        <div>
            <Container>
            
                <div className='my-10 px-2 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                    {
                        info.map(data=><CashFlowCard key={data._id} data={data} />)
                    }
                    
                </div>
            </Container>
        </div>
    );
};

export default cashFlow;