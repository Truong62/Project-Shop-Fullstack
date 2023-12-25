import React from 'react';


const ContentProductPage = () => {
    // const [tabPage, setTabPage] = useState("")
    return (
        <div className='max-w-[1280px] mb-0 mt-0 ml-auto mr-auto p-10'>
            <div className='flex justify-between'>
                <div className='action-page'>
                    <div className='flex'>
                        <h3 className='p-2 pl-0'>Women </h3>
                        <h3 className='p-2'> / Football </h3>
                        <h3 className='text-gray-500 p-2'> / Jerseys </h3>
                    </div>
                    <h1 className='text-3xl font-bold '>Women's Jerseys</h1>
                </div>
                <div className=' border-gray-400 border-2'>
                    <select name="">
                        <option value="Defaul Sorting">Defaul Sorting</option>
                        <option value="Decrease">Ascending</option>
                        <option value="Decrease">Decrease</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default ContentProductPage;