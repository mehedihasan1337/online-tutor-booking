import React from 'react';

const UpdatedTutor = () => {
    return (
        <div className='hero-content justify-between flex-col mt-28 lg:flex-row-reverse mx-auto' >

       

        <div>
            <h2 className="text-3xl font-bold mt-10 text-center font-Oswald text-gray-800">Post A Tutor Information</h2>
            <form  className="card-body">

                {/* name */}
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Name</span>
                    </label>
                    <input defaultValue={user?.displayName} disabled={true} type="text" name='name' className="input text-black input-bordered" required />
                </div> */}
                {/* email */}
                {/* <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl">Email</span>
                    </label>
                    <input defaultValue={user?.email} disabled={true} type="email" name='email' placeholder="email" className="input input-bordered" required />
                </div> */}

                {/* Image */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl"> Image</span>
                    </label>
                    <input type="text" name='image' placeholder="image" className="input input-bordered" required />
                </div>




                {/* language category */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl">language</span>
                    </label>
                    <select defaultValue="Select a language" type="text" name='language' className="select select-ghost input input-bordered w-full">
                        <option disabled >Select a language</option>
                        <option >English </option>
                        <option>Spanish  </option>
                        <option> French </option>
                        <option> German </option>
                        <option> Italian </option>
                        <option> Chinese </option>
                        <option> Arabic </option>
                        <option> Japanese </option>
                        <option> Portuguese </option>

                    </select>
                </div>


                {/* price */}
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-end'>
                    <div className="form-control">
                        <label className="label">

                            <span className="label-text font-bold text-xl">price</span>
                        </label>
                        <input type="text" name='price' placeholder="price" className="input input-bordered" required />
                    </div>

                    <div className="form-control">

                        <select defaultValue="Currency" type="text" name='category' className="select select-ghost w-full input input-bordered ">
                            <option disabled >Currency</option>
                            <option>BDT</option>
                            <option>USD</option>
                            <option>INR</option>

                        </select>
                    </div>
                </div>
                {/*  description */}
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-xl"> description</span>
                    </label>

                    <textarea
                        type="text" name='description' placeholder="Job description"
                        className="textarea textarea-bordered textarea-xs w-full"></textarea>

                </div>



             


                {/* submit */}
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    </div>
    );
};

export default UpdatedTutor;