export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-6">Blog Post: {params.slug}</h1>
      <p className="text-lg">Blog feature coming soon...</p>
    </div>
  )
}

export async function generateStaticParams() {
  // Return empty array for now
  return []
}
