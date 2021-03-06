import * as React from "react";
import { graphql } from "gatsby";

import MainLayout from "../layouts/main";
import PostPreview from "../components/post-preview";

type PostProp = {
  frontmatter: {
    category: string;
    date: string;
    title: string;
    images: string[];
  };
  excerpt: string;
  slug: string;
};

type Props = {
  data: {
    allMdx: {
      nodes: PostProp[];
    };
  };
};

export const query = graphql`
  query PostsQuery {
    allMdx(sort: { order: DESC, fields: frontmatter___date }) {
      nodes {
        frontmatter {
          category
          date
          images
          title
        }
        slug
        excerpt(pruneLength: 200)
      }
    }
  }
`;

function ActivitiesPage({ data }: Props) {
  const posts = data.allMdx?.nodes;

  return (
    <MainLayout
      title="Unsere Aktionen"
      description="Erfahren Sie mehr über unsere zahlreichen Aktionen in Deutschland, Frankreich und der Schweiz."
    >
      <div>
        {posts.map((post) => (
          <PostPreview post={post} key={post.slug} />
        ))}
      </div>
    </MainLayout>
  );
}

export default ActivitiesPage;
