"use client"

import React, { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import "../assets/scss/pages/blogs.scss"

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const blogPosts = [
    {
      id: 1,
      title: "Google Analytics vs. Google Tag Manager: Key Differences Explained for Marketers",
      excerpt:
        "Discover the fundamental differences between Google Analytics and Google Tag Manager, two essential tools in digital marketing. Learn how they work, their unique roles, and why combining them can enhance your website's performance.",
      image: "http://hucpl.com/img/blogv1.png",
      date: "21 Nov",
      category: "Digital Marketing",
    },
    {
      id: 2,
      title: "WhatsApp Business API (For Medium to Large Businesses)",
      excerpt:
        "The WhatsApp Business API is designed for medium and large businesses and is the main tool for sending bulk messages. It allows businesses to scale their communication while maintaining compliance with WhatsApp's policies.",
      image: "https://www.hucpl.com/img/buss.png",
      date: "20 Nov",
      category: "Business Communication",
    },
    {
      id: 3,
      title: "Tips to increase your business's revenue through digital marketing",
      excerpt:
        "Today, businesses are using digital marketing solutions to ensure their future. Digital marketing drives visitors, buyers, and fans to your website and offerings.",
      image: "https://www.hucpl.com/img/dmt.png",
      date: "7 August",
      category: "Digital Marketing",
    },
    {
      id: 4,
      title: "Best digital marketing services in Noida: Get top strategies to elevate your online presence",
      excerpt:
        "Digital marketing has transformed the way businesses reach and engage with their audience. A comprehensive digital marketing strategy is one of the most important aspects of modern business.",
      image: "https://www.hucpl.com/img/blog/best_d.jpg",
      date: "17 July",
      category: "Digital Marketing",
    },
    {
      id: 5,
      title: "Navigating the Marketing Horizon: Is Programmatic Advertising the Future?",
      excerpt:
        "One concept within the ever-evolving domain of advanced promoting is making waves and reshaping the scene – programmatic advertising.",
      image: "https://www.hucpl.com/img/blog/best_d.jpg",
      date: "30 June",
      category: "Advertising",
    },
    {
      id: 6,
      title: "UI/UX Plan Privileged Insights",
      excerpt:
        "In the ever-evolving advanced scene, the victory of an online site pivots on more than its substance. User Interface (UI) and User Experience (UX) are essential in making an enduring impression on guests.",
      image: "https://www.hucpl.com/img/blog/best_d.jpg",
      date: "14 June",
      category: "Design",
    },
    {
      id: 7,
      title: "Best Digital Marketing Agency",
      excerpt:
        "The Best Digital Marketing Agency in Delhi has experienced exponential expansion, turning into a vital component of successful businesses. We explore the dynamic landscape in this piece, highlighting.",
      image: "https://www.hucpl.com/img/blog/best_d.jpg",
      date: "24 Jan",
      category: "Agency Services",
    },
  ]

  const totalPages = Math.ceil(blogPosts.length / 6)
  const startIndex = (currentPage - 1) * 6
  const currentPosts = blogPosts.slice(startIndex, startIndex + 6)

  const handleReadMore = (postId) => {
    alert(`Navigate to blog detail page for post ID: ${postId}`)
  }

  return (
    <div className="blogs-page">
      <div className="blogs-hero-section">
        <Container>
          <Row>
            <Col>
              <h1 className="blogs-hero-title">Blogs</h1>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="blogs-content-section">
        <Container>
          <Row>
            <Col>
              <h2 className="blogs-main-title">Our Latest Blogs</h2>
            </Col>
          </Row>

          <Row className="blogs-grid">
            {currentPosts.map((post) => (
              <Col lg={4} md={6} sm={12} key={post.id} className="blogs-card-col">
                <div className="blogs-card">
                  <div className="blogs-card-image-wrapper">
                    <img src={post.image || "/placeholder.svg"} alt={post.title} className="blogs-card-image" />
                    <div className="blogs-card-date">
                      <span className="blogs-card-date-text">{post.date}</span>
                    </div>
                  </div>
                  <div className="blogs-card-content">
                    <h3 className="blogs-card-title">
                      <button onClick={() => handleReadMore(post.id)} className="blogs-card-title-link">
                        {post.title}
                      </button>
                    </h3>
                    <p className="blogs-card-excerpt">{post.excerpt}</p>
                    <button onClick={() => handleReadMore(post.id)} className="blogs-card-read-more">
                      Read more →
                    </button>
                  </div>
                </div>
              </Col>
            ))}
          </Row>

          <Row>
            <Col>
              <div className="blogs-pagination">
                <button
                  className="blogs-pagination-prev"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                >
                  ‹
                </button>

                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    className={`blogs-pagination-number ${currentPage === index + 1 ? "blogs-pagination-active" : ""}`}
                    onClick={() => setCurrentPage(index + 1)}
                  >
                    {index + 1}
                  </button>
                ))}

                <button
                  className="blogs-pagination-next"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                >
                  ›
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  )
}

export default Blogs
