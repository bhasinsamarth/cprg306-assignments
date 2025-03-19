import Link from 'next/link';

export default function Page() {
    return (
        <main className='bg-black text-white w-screen h-screen pt-3'>
            <div className='bg-gray-800 w-max h-max p-5 rounded-md align-middle m-auto'>
                <h1 className='text-3xl font-bold underline text-center'>CPRG 306: Web Development 2 - Assignments</h1>
                <p>Links to the weekly progress:</p>
                <p>Week-2 assignment: <Link href="./week-2" className='italic hover:underline hover:text-blue-400'>Week 2</Link></p>
                <p>Week-3 assignment: <Link href="./week-3" className='italic hover:underline hover:text-blue-400'>Week 3</Link></p>
                <p>Week-4 assignment: <Link href="./week-4" className='italic hover:underline hover:text-blue-400'>Week 4</Link></p>
                <p>Week-5 assignment: <Link href="./week-5" className='italic hover:underline hover:text-blue-400'>Week 5</Link></p>
                <p>Week-6 assignment: <Link href="./week-6" className='italic hover:underline hover:text-blue-400'>Week 6</Link></p>
                <p>Week-7 assignment: <Link href="./week-7" className='italic hover:underline hover:text-blue-400'>Week 7</Link></p>
            </div>
        </main>
    );
}