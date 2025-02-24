// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import Header from '../components/Header'
// import Footer from '../components/Footer'

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "BlogSpace",
//   description: "Exploring New Horizons",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body className={inter.className}>
//         <Header/>
//         {children}
//         <Footer/>
//       </body>
//     </html>
//   );
// }

// import '@styles/globals.css';
import "./globals.css";
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
    title: "BlogSpace",
    description: "Exploring New Horizons",
};

const RootLayout = ({ children }) => {
  return(
   <html lang='en'>
       <body>
        <Header/>
         {children}
        <Footer/>
       </body>
   </html>
 )

}

export default RootLayout;