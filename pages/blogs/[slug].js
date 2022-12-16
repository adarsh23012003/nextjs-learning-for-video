import { useRouter } from "next/router";

const DynamicRoute = () => {
  const router = useRouter();
  const { slug } = router.query;

  return <p>DynamicRoute: {slug}</p>;
};

export default DynamicRoute;
