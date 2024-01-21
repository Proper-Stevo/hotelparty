import Link from "next/link"
export default function signIn() {
    return (
        <>
            <div className="flex flex-col items-center pt-10">
                <div class="">
                    <img src="\signup\welcomeback.jpg" className=" h-96 w-96" />
                </div>

                <div class="">
                    <h2 className="text-3xl font-semibold mb-6">Sign In</h2>

                    <form>
                        <div className="mb-4">
                            <label for="username" className="block  text-sm font-medium mb-2">Username</label>
                            <input type="text" id="username" name="username" className="border w-3/4 p-2 rounded" />
                        </div>
                        <div className="mb-4">
                            <label for="email" className="block  text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="border w-3/4 p-2 rounded" />
                        </div>
                        <button  type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">
                            Log In
                        </button>
                        
                        <div className="">
                            If you don't have a log in click <Link href="/signup"><b className="text-blue-700">Here</b></Link>
                        </div>
                        
                    </form>
                </div>
            </div>
        </>
    )
}