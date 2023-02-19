import Link from "next/link";
import { useRouter } from "next/router";

export default function Home(){
  const router = useRouter();
  const clickHandler = () => {
    alert('Your order is placed and we moving to blogs');
    router.push('/blogs');
    console.log(router)
  }
  return(
    <>
      <h1>This is home page</h1>
      <Link href="/blogs">Blogs</Link><br />
      <Link href="/docs">Docs</Link>
      <button onClick={clickHandler}>Place Order</button>
    </>
  )
}
