import { useRouter } from 'next/router'

export default function BlogDetail(){
  const router = useRouter();
  const blogId = router.query.blogId
  return(
    <>
      <h1>This is detail of blog {blogId}</h1>
    </>
  )
}
