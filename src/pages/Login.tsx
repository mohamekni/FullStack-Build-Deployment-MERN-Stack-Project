import { useState } from "react"
import img1 from "../assets/img2.jpg";
import { Link } from "react-router-dom";


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
          className="absolute inset-0 object-cover h-full w-full bg-center opacity-10" 
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
              
                <span className="text">Instacart</span>
                </Link>
                    <h1></h1>
                    <p></p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Login
