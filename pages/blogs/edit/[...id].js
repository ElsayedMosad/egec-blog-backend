import Blog from "@/components/Blog";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";
import { BsPostcard } from "react-icons/bs";
import { router, useRouter } from "next/router";
import LoginLayout from "@/components/LoginLayout";

export default function EditProduct() {
  const router = useRouter();

  const { id } = router.query;
  const [productInfo, setProductInfo] = useState(null);

  useEffect(() => {
    if (!id) {
      return;
    } else {
      axios.get("/api/blogs?id=" + id).then((response) => {
        setProductInfo(response.data);
      });
    }
  }, [id]);

  return <></>;
}
