import type { Metadata } from 'next';

export const metadata: Metadata ={
    title: 'SEO Title',
    description: 'SEO description',
    keywords: ['Pricing Page', 'Rolando', 'información', '...'],
};

export default function PricingPage() {
    return (
        <>
            <span className='text-7xl'>Pricing Page</span>
        </>
    )
}