"use client"

import { useParams, useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import { Calendar, Clock, User, ArrowLeft, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getBlogPost, type BlogPost } from "@/lib/blog-data"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const id = parseInt(params.id as string)
    const blogPost = getBlogPost(id)
    if (blogPost) {
      setPost(blogPost)
    }
  }, [params.id])

  useEffect(() => {
    const handleScroll = () => {
      setActiveSection("")
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!post) {
    return (
      <main className="min-h-screen bg-background">
        <Navigation activeSection={activeSection} />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4 text-primary">Article Not Found</h1>
            <Button onClick={() => router.push("/#blog")}>Back to Blog</Button>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background blog-detail-page w-full overflow-x-hidden">
      <Navigation activeSection={activeSection} />
      
      {/* Article Header */}
      <article className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 blog-detail-article">
        <div className="max-w-4xl mx-auto blog-detail-container w-full">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => router.push("/#blog")}
            className="mb-6 sm:mb-8 text-foreground/70 hover:text-primary blog-back-button"
          >
            <ArrowLeft className="mr-2 blog-back-icon" />
            <span className="blog-back-text">Back to Blog</span>
          </Button>

          {/* Category Badge */}
          <div className="mb-4 sm:mb-6 blog-category-badge-wrapper">
            <span className="inline-flex items-center gap-1.5 sm:gap-2 blog-category-badge px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/10 text-primary font-semibold">
              <Tag className="blog-category-icon" />
              <span className="blog-category-text">{post.category}</span>
            </span>
          </div>

          {/* Title */}
          <h1 className="blog-detail-title font-bold mb-4 sm:mb-6 text-primary leading-tight">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-foreground/70 mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-border blog-meta-info">
            <div className="flex items-center gap-1.5 sm:gap-2 blog-meta-item">
              <User className="blog-meta-icon" />
              <span className="blog-meta-text font-medium">{post.author}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 blog-meta-item">
              <Calendar className="blog-meta-icon" />
              <span className="blog-meta-text">{post.date}</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 blog-meta-item">
              <Clock className="blog-meta-icon" />
              <span className="blog-meta-text">{post.readTime}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative w-full blog-featured-image-wrapper mb-8 sm:mb-10 md:mb-12 rounded-xl sm:rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover blog-featured-image"
            />
          </div>

          {/* Article Content */}
          <div
            className="article-content blog-article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* CTA Section */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-border blog-cta-section">
            <div className="bg-card/50 border border-border rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center blog-cta-card">
              <h3 className="blog-cta-title font-bold mb-3 sm:mb-4 text-primary">Need Help with Your Project?</h3>
              <p className="blog-cta-description text-foreground/70 mb-4 sm:mb-6 max-w-2xl mx-auto">
                Let's discuss how we can help bring your ideas to life with cutting-edge technology and expert development.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center blog-cta-buttons">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-5 sm:py-6 blog-cta-button w-full sm:w-auto"
                >
                  <a href="/#contact">Get in Touch</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="px-6 sm:px-8 py-5 sm:py-6 blog-cta-button-secondary w-full sm:w-auto"
                >
                  <a href="/#blog">View More Articles</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}

