import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Custom404() {
  const router = useRouter();

  useEffect(() => {
    const { locale } = router;
    router.push(`/${locale}`);
  }, [router]);

  return <div></div>;
}
