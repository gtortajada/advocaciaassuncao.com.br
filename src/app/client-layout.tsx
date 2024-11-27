'use client'
import { Providers } from './providers'

export function ClientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            {children}
        </div>
    )
}

// 'use client'

// import { Providers } from './providers'
// import Navbar from '../components/NavBar'
// import Footer from '../components/Footer'

// export function ClientLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <Providers>
//             <Navbar />
//             {children}
//             <Footer />
//         </Providers>
//     )
// }