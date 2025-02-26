import { EnvelopeIcon } from "@heroicons/react/16/solid";
import { GithubIcon, LinkedInIcon } from "./social-icons";



export default function Footer() {
    return(
        <footer className="bg-gray-900 border-t border-gray800">
         <div className="max-w-7xl mx-auto px-4 sm:px-6
         lg:px-8 py-12">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div>
                    <h3 id="contact" className="text-lg font-semibold text-white mb-4">Contact</h3>
                    <ul className="space-y-2">
                        <li className="text-gray-400">
                         Phone: 908-202-4119</li>
                         <li className="text-gray-400">
                         Email: harnisht@kean.edu</li>
                         <li className="text-gray-400">
                         Linkedin: www.linkedin.com/in/tyler-harnish-0744012b1</li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
                    <ul className="space-y-2">
                        <li><a href="#privacy" className="text-gray-400
                         hover:text-white transition-colors">Privacy</a></li>
                         <li><a href="#terms" className="text-gray-400
                         hover:text-white transition-colors">Terms</a></li>
                         
                    </ul>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
         <p className="text-gray-400">
           &copy; {new Date().getFullYear()} Tyler Harnish. All rights reserved
         </p>
         </div>
            </div>

         </div>
        
        </footer>
    )
}