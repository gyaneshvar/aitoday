import { useEffect, useState } from 'react'

interface PowerSite {
  id: number
  name: string
  description: string
  url: string
  category: string
  features: string[]
}

function PowerSites() {
  const [sites, setSites] = useState<PowerSite[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/power-sites.json')
      .then(res => res.json())
      .then(data => {
        setSites(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">Loading power sites...</div>

  return (
    <div className="power-sites-section">
      <h2>🌐 Power Sites</h2>
      <p className="section-description">
        Curated collection of free AI websites and platforms
      </p>
      <div className="sites-grid">
        {sites.map(site => (
          <div key={site.id} className="site-card">
            <div className="card-header">
              <h3>{site.name}</h3>
              <span className="category-badge">{site.category}</span>
            </div>
            <p>{site.description}</p>
            <ul className="features-list">
              {site.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
            <a href={site.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
              Visit Site →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PowerSites
