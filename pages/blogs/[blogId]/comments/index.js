import { useRouter } from "next/router";

export default function Comment(){
  const router = useRouter();
  const { blogId } = router.query;
  return(
    <>
      <h1>Blog {blogId} all comments</h1>
    </>
  )
}