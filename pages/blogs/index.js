import Link from "next/link";

export default function Blogs(){
  return (
    <>
      <h1><Link href="blogs/1">Blog 1</Link></h1>
      <h1><Link href="blogs/2">Blog 2</Link></h1>
      <h1><Link href="blogs/3" replace>Blog 3</Link></h1>

    </>
  )
}