

const Navbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-300 text-2xl">
        <div className="flex items-center ml-14">
            <h1 className="text-3xl font-bold">Placement <span className="text-amber-200">Portal</span></h1>
        </div>

        <div>
                <ul className="flex gap-5">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                </ul>
            </div>
           
            <div>
                SignIn/Login
            </div>
    </div>
  )
}

export default Navbar