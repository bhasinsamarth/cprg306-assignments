import Link from 'next/link';
import React from 'react';

export function StudentInfo() {
    return (
        <div>
            <p>Name: Samarth Bhasin</p>
            <p>GitHub Repository Link: <Link href="https://github.com/bhasinsamarth/cprg306-assignments" className='italic hover:underline hover:text-blue-400'>"https://github.com/bhasinsamarth/cprg306-assignments"</Link></p>
        </div>
    );
}