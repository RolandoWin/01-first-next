import type { Metadata } from 'next';

export const metadata: Metadata ={
    title: 'SEO Title',
    description: 'SEO description',
    keywords: ['Contact Page', 'Rolando', 'información', '...'],
};

export default function ContactPage() {
    return (
        <>
            <span className='text-7xl'>Contact Page</span>
        </>
    )
}