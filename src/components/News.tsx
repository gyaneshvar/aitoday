import { useEffect, useState } from 'react'

interface NewsItem {
  id: number
  title: string
  description: string
  url: string
  category: string
  date: string
}

function News() {
  const [newsItems, setNewsItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const today = new Date().toISOString().split('T')[0]
    fetch(`${import.meta.env.BASE_URL}news/${today}.json`)
      .then(res => {
        if (!res.ok) throw new Error('News not available for today')
        return res.json()
      })
      .then(data => {
        setNewsItems(data)
        setLoading(false)
      })
      .catch(err => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">Loading today's AI news...</div>
  if (error) return <div className="error">⚠️ {error}</div>

  return (
    <div className="news-section">
      <h2>📰 Today's AI News</h2>
      <div className="news-grid">
        {newsItems.map(item => (
          <article key={item.id} className="news-card">
            <span className="category-badge">{item.category}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <div className="news-meta">
              <span className="published-date">Published On: {item.date}</span>
            </div>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="read-more">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  )
}

export default News
