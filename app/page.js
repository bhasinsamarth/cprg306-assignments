import Link from 'next/link';

export default function Page() {
    return (
        <main>
            <h1>CPRG 306: Web Development 2 - Assignments</h1>
            <p>Click on the link to view the Week-2 assignment: <Link href="./week-2" style={{fontStyle: "italic"}}>Week 2</Link></p>
            <p>Click on the link to view the Week-3 assignment: <Link href="./week-3" style={{fontStyle: "italic"}}>Week 3</Link></p>
            <p>Click on the link to view the Week-4 assignment: <Link href="./week-4" style={{fontStyle: "italic"}}>Week 4</Link></p>
            <p>Click on the link to view the Week-5 assignment: <Link href="./week-5" style={{fontStyle: "italic"}}>Week 5</Link></p>
      
        </main>
    );
}