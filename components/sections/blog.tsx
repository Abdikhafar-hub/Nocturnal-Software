"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { getSortedBlogPosts } from "@/lib/blog-data"

export default function Blog() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0")
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="blog" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-card/30 blog-section w-full overflow-x-hidden">
      <div ref={ref} className="max-w-7xl mx-auto opacity-0 translate-y-10 transition-all duration-700 blog-container w-full">
        <div className="text-center mb-8 sm:mb-12 md:mb-16 blog-header">
          <h2 className="blog-title font-bold mb-3 sm:mb-4 text-primary">Blog & Insights</h2>
          <p className="blog-subtitle text-foreground/70 max-w-2xl mx-auto">
            Stay updated with the latest trends, insights, and best practices in software development, technology, and business innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 blog-grid">
          {getSortedBlogPosts().slice(0, 6).map((post) => (
            <article
              key={post.id}
              className="group bg-card border border-border rounded-xl sm:rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 blog-card"
            >
              {/* Image */}
              <Link href={`/blog/${post.id}`}>
                <div className="relative blog-image-wrapper overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 cursor-pointer">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 blog-image"
                  />
                  <div className="absolute top-2 sm:top-4 left-2 sm:left-4 blog-category-wrapper">
                    <span className="blog-category px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-primary/90 text-primary-foreground font-semibold backdrop-blur-sm">
                      {post.category}
                    </span>
                  </div>
                </div>
              </Link>

              {/* Content */}
              <div className="p-3 sm:p-4 md:p-6 blog-content">
                <Link href={`/blog/${post.id}`}>
                  <h3 className="blog-card-title font-bold mb-2 sm:mb-3 text-primary group-hover:text-primary/80 transition-colors line-clamp-2 cursor-pointer">
                    {post.title}
                  </h3>
                </Link>
                <p className="blog-card-excerpt text-foreground/70 mb-3 sm:mb-4 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>

                {/* Meta info */}
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 blog-meta text-foreground/60 mb-3 sm:mb-4">
                  <div className="flex items-center gap-1 sm:gap-2 blog-meta-item">
                    <User className="blog-meta-icon" />
                    <span className="blog-meta-text">{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 blog-meta-item">
                    <Calendar className="blog-meta-icon" />
                    <span className="blog-meta-text">{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1 sm:gap-2 blog-meta-item">
                    <Clock className="blog-meta-icon" />
                    <span className="blog-meta-text">{post.readTime}</span>
                  </div>
                </div>

                {/* Read more */}
                <Link href={`/blog/${post.id}`}>
                  <Button
                    variant="ghost"
                    className="w-full justify-between group-hover:text-primary transition-colors blog-read-more text-xs sm:text-sm py-4 sm:py-5"
                  >
                    Read More
                    <ArrowRight className="blog-read-more-icon group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* View all posts button */}
        <div className="text-center mt-8 sm:mt-10 md:mt-12 blog-view-all">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 sm:px-8 py-4 sm:py-6 blog-view-all-btn"
          >
            <Link href="/blogs">
              View All Articles
              <ArrowRight className="ml-2 blog-view-all-icon" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

