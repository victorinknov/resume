import logo from '../assets/react.svg'

export default function Header () {
    return (
        <header className="bg-slate-900 text-slate-50 py-4">
            <div className="container mx-auto flex flex-row items-center justify-between select-none">
                <span className="font-bold underline decoration-bold decoration-sky-500/[.66] text-lg">victorinknov</span>
                <nav>
                    <ul className="flex flex-row items-center justify-center gap-4">
                        <li className="list-item font-semibold italic cursor-pointer">Resume</li>
                        <li className="list-item font-semibold italic cursor-pointer">Github</li>
                        <li className="list-item font-semibold italic cursor-pointer">LinkedIn</li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}