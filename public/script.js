import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function ImageClassifier() {
  const [file, setFile] = useState(null)
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  const handleFileChange = (event) => {
    const selectedFile = event.target.files?.[0]
    if (selectedFile) {
      if (selectedFile.type.startsWith('image/')) {
        setFile(selectedFile)
        setError(null)
      } else {
        setFile(null)
        setError('Invalid file type. Please upload an image.')
      }
    }
  }

  const classifyImage = () => {
    if (file) {
      const fileName = file.name.toLowerCase()
      if (fileName.includes('cat')) {
        setResult('🐱 Cat')
      } else if (fileName.includes('dog')) {
        setResult('🐶 Dog')
      } else {
        setResult('❌ Invalid')
      }
    }
  }

  return (
    <div className="card">
      <h2>📷 Image Classifier</h2>
      <p>Upload an image and classify it as a cat, dog, or invalid.</p>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {file && <p>Selected file: {file.name}</p>}
      {file && <button onClick={classifyImage}>Classify Image</button>}
      {result && <h3>{result}</h3>}
    </div>
  )
}

const root = createRoot(document.getElementById('root'))
root.render(<ImageClassifier />)
