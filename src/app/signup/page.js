import Link from "next/link";
export default function Signup() {
    return (
        <>
            <div className="flex">
                <div class="w-1/2 hidden sm:block">
                    <img src="\signup\welcome.jpg" alt="Your Photo" className="object-cover w-full h-screen" />
                </div>

                <div class="w-full sm:w-1/2 p-8">
                    <h2 className="text-3xl font-semibold mb-6">Sign Up</h2>

                    <form>
                        <div className="mb-4">
                            <label for="username" className="block  text-sm font-medium mb-2">Username</label>
                            <input type="text" id="username" name="username" className="border w-3/4 p-2 rounded" />
                        </div>

                        <div className="mb-4">
                            <label for="name" className="block  text-sm font-medium mb-2">Full Name</label>
                            <input type="name" id="name" name="name" className="border w-3/4 p-2 rounded" />
                        </div>
                        <div className="mb-4">
                            <label for="birthday" className="block  text-sm font-medium mb-2">Birthday:</label>
                            <input type="date" id="birthday" name="birthday" className="border w-1/6 p-2 rounded text-black" />
                        </div>
                        <div className="mb-4">
                            <label for="destination" className="block  text-sm font-medium mb-2">Dream Destination</label>
                            <input type="destination" id="destination" name="destination" className="border w-3/4 p-2 rounded" />
                        </div>

                        <div className="mb-4">
                            <label for="email" className="block  text-sm font-medium mb-2">Email</label>
                            <input type="email" id="email" name="email" className="border w-3/4 p-2 rounded" />
                        </div>


                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">Sign Up</button>
                        <div className="mt-10">
                            <p>If you already have a log in...</p>
                            <Link href="/signin">
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-2">Click Here!
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
