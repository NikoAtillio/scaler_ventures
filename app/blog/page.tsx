export default async function BlogPage() {
  // Return empty array instead of querying database
  const posts = []
  
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {posts.length === 0 ? (
        <p className="text-lg">Blog coming soon. Check back later!</p>
      ) : (
        <div className="grid gap-6">
          {/* Blog posts would go here */}
        </div>
      )}
    </div>
  )
}

// Generate static params for dynamic routes
export async function generateStaticParams() {
  // Return empty array for now
  return []
}
