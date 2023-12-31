import MaxWidthWrapper from "@/components/MaxWidthWraper"
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link"

export default function Home() {
  return( 
  <MaxWidthWrapper>
    <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">
        Selamat Datang Di Toko Oren {' '} 
        <span className="text-blue-900">
          Tempat Penjual dan Pembeli makan
        </span>
        .
      </h1>

      <p className="mt-6 text-lg max-w-prose text-muted-foreground"> Welcome to Laman Kita Digital apps</p>

      <div className="flex flex-col sm:flex-row gap-4 mt-6">
        <Link href='/products' className={buttonVariants()}>Produk Kami</Link>
      </div>
    </div>
  </MaxWidthWrapper>)
}
