import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
            <p>Click on the link to view the Week-2 assignment: <Link href="./week-2" style={{fontStyle: "italic"}}>Week 2</Link></p>
      
        </main>
    );
}