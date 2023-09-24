
import AuthModal from "@/components/Navbar/Moadals/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { useRecoilValue } from "recoil";
import { authMoadalState } from "@/atoms/authModalAtoms";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
type AuthPageProps = {};
const AuthPage: React.FC<AuthPageProps>=()=>
{
	const authModal = useRecoilValue(authMoadalState);
	const[user,loading,error] = useAuthState(auth);
	const[pageLoading,setpageLoading] = useState(true);
	const router= useRouter();

	useEffect(()=>{
		if(user)
		{
			router.push('/');
		}
		if(!loading && !user)
		{
			setpageLoading(false);
		}
	},[user,router,loading])
	if(pageLoading)
	{
		return null;
	}
	return(
		<div className=" bg-gradient-to-b from-gray-600 to-black h-screen overflow-hidden relative">
			<div className= "max-w-7xl mx-auto">
			<Navbar/>
		<div className="flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none">
                 <img src ="/hero.png" alt="Hero img"/>
			</div>
			</div>
			{authModal.isOpen && <AuthModal/>}
		</div>
	)
}
export default AuthPage;