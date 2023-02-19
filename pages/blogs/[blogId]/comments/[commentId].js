import { useRouter } from "next/router"

export default function Comment(){
  const router = useRouter();
  const { blogId, commentId } = router.query;
  return(
    <>
      <h1>Comment {commentId} for blog {blogId}</h1>
    </>
  )
}