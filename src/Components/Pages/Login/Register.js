import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import Loading from '../../Sheared/Loading';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
      const [signInWithGoogle, gUser, gLoading] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const notify = () => toast("Succesfully Registerd!");
    const navigate = useNavigate()
    const onSubmit = data =>{
        console.log(data)
        createUserWithEmailAndPassword(data.email,data.password)
        if(loading || gLoading){
            return <Loading></Loading>
        }
        if(user || gUser){
            navigate('/')
            user.displayName = data.name
            notify()
           
        }
    };
    return (
        <div className='md:px-20  h-screen flex justify-center items-center mt-5'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h4 className='text-2xl font-bold text-center mb-5'>Register</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="input input-bordered w-full max-w-xs"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Name is Required'
                                    },
                                    pattern: {
                                        message: 'Provide a valid Name'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                {errors.name?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                            </label>
                        </div>
                        <div className="form-control w-full max-w-xs ">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        <div class="form-control w-full max-w-xs">
                            <label class="label">
                                <span class="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Password" class="input input-bordered w-full max-w-xs"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: "Password must be 6 length"
                                    }

                                })}
                            />
                            <label class="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                        <p>Already have an account? <Link to='/login' className='text-primary'>Login</Link></p>
                        {
                            error && <p className='text-[red]'>{error.message}</p>
                        }
                        <input className='btn w-full max-w-xs text-white mt-5' type="submit" value="Sign Up" />
                    </form>
                    <div class="divider">OR</div>
                    <button class="btn btn-outline" onClick={()=>signInWithGoogle()}>Sign In with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;