import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Form1() {
    const formArray = [1, 2, 3];
    const [formNo, setFormNo] = useState(formArray[0]);
    const [state, setState] = useState({
        name: '',
        dept: '',
        batch: '',
        varsity: '',
        session: '',
        address: '',
        district: '',
        thana: '',
        post: '',
    });

    const next = () => {
        if (validateForm()) {
            setFormNo(formNo + 1);
        }
    };

    const prev = () => {
        setFormNo(formNo - 1);
    };

    const validateForm = () => {
        if (formNo === 1) {
            if (!state.name || !state.dept || !state.batch) {
                toast.error('Please fill in all required fields');
                return false;
            }
        } else if (formNo === 2) {
            if (!state.varsity || !state.session || !state.address) {
                toast.error('Please fill in all required fields');
                return false;
            }
        } else if (formNo === 3) {
            if (!state.district || !state.thana || !state.post) {
                toast.error('Please fill in all required fields');
                return false;
            }
        }
        return true;
    };

    return (
        <div className='w-screen h-screen bg-slate-500 flex justify-center items-center'>
            <ToastContainer />
            <div className="card w-[400px] rounded-md shadow-md bg-white p-5">
                <div className='flex justify-center items-center'>
                    {
                        formArray.map((v, i) => <><div className={`w-[35px] my-3 text-white rounded-full ${formNo - 1 === i || formNo - 1 === i + 1 || formNo === formArray.length ? 'bg-blue-500' : 'bg-slate-400'} h-[35px] flex justify-center items-center`}>

                            {v}

                        </div > {
                                i !== formArray.length - 1 && (
                                    <div className={`w-[85px] h-[2px] ${formNo === i + 2 ? 'bg-blue-500' : 'bg-slate-400'}`}></div>
                                )

                            }</>)
                    }
                </div>
                {formNo === 1 && (
                    <div>
                        <div id="name" className='flex flex-col mb-2'>
                            <label htmlFor="name"> Name </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus:border-blue-500 rounded-md ${state.name === '' ? 'border-red-500' : ''
                                    }`}
                                type="text"
                                name='name'
                                placeholder='name'
                                value={state.name}
                                onChange={(e) => setState({ ...state, name: e.target.value })}
                            />
                        </div>
                        <div id='dept' className='flex flex-col mb-2'>
                            <label htmlFor="name"> Department </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus-border-blue-500 rounded-md ${state.dept === '' ? 'border-red-500' : ''
                                    }`}
                                type="text"
                                name='name'
                                placeholder='Department'
                                value={state.dept}
                                onChange={(e) => setState({ ...state, dept: e.target.value })}
                            />
                        </div>
                        <div id="batch" className='flex flex-col mb-2'>
                            <label htmlFor="name"> Batch </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus-border-blue-500 rounded-md ${state.batch === '' ? 'border-red-500' : ''
                                    }`}
                                type="number"
                                name='name'
                                placeholder='Age'
                                value={state.batch}
                                onChange={(e) => setState({ ...state, batch: e.target.value })}
                            />
                        </div>
                        <div className='tm-4 flex justify-center items-center '>
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {formNo === 2 && (
                    <div>
                        <div id="varsity" className='flex flex-col mb-2'>
                            <label htmlFor="name"> Varsity </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus-border-blue-500 rounded-md ${state.varsity === '' ? 'border-red-500' : ''
                                    }`}
                                type="text"
                                name='name'
                                placeholder='Varsity'
                                value={state.varsity}
                                onChange={(e) => setState({ ...state, varsity: e.target.value })}
                            />
                        </div>
                        <div id='session' className='flex flex-col mb-2'>
                            <label htmlFor="name"> Session </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus-border-blue-500 rounded-md ${state.session === '' ? 'border-red-500' : ''
                                    }`}
                                type="text"
                                name='name'
                                placeholder='Session'
                                value={state.session}
                                onChange={(e) => setState({ ...state, session: e.target.value })}
                            />
                        </div>
                        <div id="address" className='flex flex-col mb-2'>
                            <label htmlFor="name"> Address </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus-border-blue-500 rounded-md ${state.address === '' ? 'border-red-500' : ''
                                    }`}
                                type="text"
                                name='name'
                                placeholder='Address'
                                value={state.address}
                                onChange={(e) => setState({ ...state, address: e.target.value })}
                            />
                        </div>
                        <div className='tm-4 flex justify-center items-center gap-3 '>
                            <button onClick={prev} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>
                                Previous
                            </button>
                            <button onClick={next} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>
                                Next
                            </button>
                        </div>
                    </div>
                )}
                {formNo === 3 && (
                    <div>
                        <div id="district" className='flex flex-col mb-2'>
                            <label htmlFor="name"> District </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus-border-blue-500 rounded-md ${state.district === '' ? 'border-red-500' : ''
                                    }`}
                                type="text"
                                name='name'
                                placeholder='District'
                                value={state.district}
                                onChange={(e) => setState({ ...state, district: e.target.value })}
                            />
                        </div>
                        <div id='thana' className='flex flex-col mb-2'>
                            <label htmlFor="name"> Thana </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus-border-blue-500 rounded-md ${state.thana === '' ? 'border-red-500' : ''
                                    }`}
                                type="text"
                                name='name'
                                placeholder='Thana'
                                value={state.thana}
                                onChange={(e) => setState({ ...state, thana: e.target.value })}
                            />
                        </div>
                        <div id="post" className='flex flex-col mb-2'>
                            <label htmlFor="name"> Post </label>
                            <input
                                className={`p-2 border border-slate-400 mt-1 outline-0 focus-border-blue-500 rounded-md ${state.post === '' ? 'border-red-500' : ''
                                    }`}
                                type="text"
                                name='name'
                                placeholder='Post'
                                value={state.post}
                                onChange={(e) => setState({ ...state, post: e.target.value })}
                            />
                        </div>
                        <div className='tm-4 flex justify-center items-center gap-3 '>
                            <button onClick={prev} className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>
                                Previous
                            </button>
                            <button className='px-3 py-2 text-lg rounded-md w-full text-white bg-blue-500'>Submit</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Form1;
