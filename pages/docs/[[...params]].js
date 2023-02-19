import { useRouter } from "next/router";

export default function Doc() {
  const router = useRouter();
  const { params = []} = router.query;

  console.log(params)
  return(
    <>
      <h1>Docs home page</h1>
    </>
  )
}