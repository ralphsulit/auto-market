// ** Components
import Button from "@/components/Button/Button"

export default function Home() {
  return (
    <main className='container px-6 py-16 mx-auto text-center'>
      <div className="max-w-lg mx-auto flex flex-col items-center">
        <h1 className="text-3xl font-semibold lg:text-4xl">The Best Quality Cars</h1>
        <p className="mt-6 text-gray-500 dark:text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero similique obcaecati illum mollitia.
        </p>
        <Button />
      </div>
    </main>
  )
}
