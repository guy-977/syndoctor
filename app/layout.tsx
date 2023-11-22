import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Syndoctor',
  description: 'Software that uses Medical image processing Algorithem and Segmentation and also modeling Techniques to reconstruct 3D models and Digital Twin from CT and MRI Medical Scans . We use Several Dataset and deploy on the segmintation model on Them Using Slicer Medical Viewer, Project MONAI then connect it to Omniverse which can convert 3D and VR to meshes with .usd extention for experiance an immarseve experiance so any doctor can Diagnosis and prepare for the operation and collaborate with other doctors from several places also import to other 3D software for Simulation of any Medical Process ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
