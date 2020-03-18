import Layout from "../components/Layout";
import Link from "next/link";
import Post from "./post";

const PostLink = ({ title, slug }) => (
  <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout title="My Blog">
    <ul>
      <PostLink slug="react-post" title="React" />
      <PostLink slug="angular-post" title="Angular" />
      <PostLink slug="vue-post" title="Vue" />
    </ul>
  </Layout>
);
