import { StudentInfo } from "./student-info"; 

export default function Page() {
    return (
      <main className='bg-black text-white w-screen h-screen pt-3'>
        <div className='bg-gray-800 w-max  h-auto p-5 rounded-md align-middle m-auto'>
          <h1 className='text-3xl font-bold underline text-center'>Shopping List</h1>
          <StudentInfo />
        </div>
      </main>
    );
  }