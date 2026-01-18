import CashFlowCard from '@/components/CashFlow/CashFlowCard';
import Container from '@/components/shared/Container';
import React from 'react';

const cashFlow =async () => {

    const res = await fetch('http://localhost:3000/cash-flow.json')
    const info = await res.json()
console.log(info)

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