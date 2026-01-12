import { useEffect, useState } from 'react'

interface PowerTool {
  id: number
  name: string
  description: string
  url: string
  category: string
  license: string
  features: string[]
}

function PowerTools() {
  const [tools, setTools] = useState<PowerTool[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/power-tools.json')
      .then(res => res.json())
      .then(data => {
        setTools(data)
        setLoading(false)
      })
  }, [])

  if (loading) return <div className="loading">Loading power tools...</div>

  return (
    <div className="power-tools-section">
      <h2>🛠️ Power Tools</h2>
      <p className="section-description">
        Free and open-source AI tools for developers
      </p>
      <div className="tools-grid">
        {tools.map(tool => (
          <div key={tool.id} className="tool-card">
            <div className="card-header">
              <h3>{tool.name}</h3>
              <span className="license-badge">{tool.license}</span>
            </div>
            <span className="category-badge">{tool.category}</span>
            <p>{tool.description}</p>
            <ul className="features-list">
              {tool.features.map((feature, idx) => (
                <li key={idx}>✓ {feature}</li>
              ))}
            </ul>
            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="visit-btn">
              Get Tool →
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PowerTools
