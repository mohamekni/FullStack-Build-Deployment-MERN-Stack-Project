import { useState } from "react"
import img1 from "../assets/img2.jpg";
import { Link } from "react-router-dom";
import {Loader2Icon, LockIcon, MailIcon, UserIcon } from "lucide-react";

const Login = () => {
    const [isLoginState, setIsLoginState] = useState(true)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e: React.SubmitEvent)=>{
            e.preventDefault()
            setLoading(true)
            setTimeout(()=> window.location.href = "/" , 1000)
    }


return (
    <div className="min-h-screen flex">

      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
        {/* Image de fond avec opacité */}
        <img 
          src={img1} 
          alt="" 
          className="absolute inset-0 object-cover h-full w-full bg-center opacity-50" 
        />
        
        <div className="relative text-center px-12 z-10">
          <h2 className="text-4xl font-semibold text-white mb-4">
            Welcome back to Instacart
          </h2>
          <p className="text-white/70 text-xl max-w-sm mx-auto">
            Fresh groceries and organic produce, delivered to your doorstep.
          </p>
        </div>
      </div>


      <div className="w-full lg:w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md">
            <div className="text-center mb-8">
                <Link to="/" className="inline-flex items-center gap-2 mb-6">
              
                <span className="text-2xl font-semibold text-app-green">Instacart</span>
                </Link>
                    <h1 className="text-2xl font-semibold text-app-green mb-2">
                      {isLoginState ? "Sign in to your account" : "Sign up for an account"}
                    </h1>
                    <p className="text-sm text-app-text-light">
                      {isLoginState ? "Don't have an account" : "Already have an account?"} 
                      <button onClick={()=> setIsLoginState(!isLoginState)} className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors" > {isLoginState ? "Create one" : "Sign in"} </button>
                    </p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLoginState && (
                <label htmlFor="" className="text-sm flex flex-col gap-1">
                  Name
                  <div className="relative">
                    <UserIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-app-text-light"/>
                    <input 
                    type="text" 
                    value={name} 
                    onChange={(e)=>setName(e.target.value)} 
                    required
                    placeholder="Your Name"
                    className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                    />

                  </div>
                </label>
              )}

              <label htmlFor="" className="text-sm flex flex-col gap-1">
                  Email Address
                  <div className="relative">
                    <MailIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-app-text-light"/>
                    <input 
                    type="email" 
                    value={email} 
                    onChange={(e)=>setEmail(e.target.value)} 
                    required
                    placeholder="you@example.com"
                    className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                    />

                  </div>
                </label>

                <label htmlFor="" className="text-sm flex flex-col gap-1">
                  Password
                  <div className="relative">
                    <LockIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-app-text-light"/>
                    <input 
                    type="password" 
                    value={password} 
                    onChange={(e)=>setPassword(e.target.value)} 
                    required
                    placeholder="........."
                    className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-xl border not-focus:border-app-border transition-all"
                    />

                  </div>
                </label>

                <button type="submit" disabled={loading} className="flex-center w-full py-3 bg-green-950 text-white font-semibold rounded-xl hover:bg-green-900 transition-colors disabled:opacity-50">
                  {loading ? <Loader2Icon className="animate-spin" /> : 
                  isLoginState ? "Sign In" : "Sign Up"}
                </button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Login
