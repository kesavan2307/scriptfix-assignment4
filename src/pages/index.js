import { useState } from 'react';

export default function Home() {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  // Handle image upload preview
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
    setOutput('');
  };

  // Handle simulated conversion request
  const handleConvert = async () => {
    setLoading(true);

    const res = await fetch('/api/convert', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ text: 'Sample handwritten text from image (simulated)' }),
    });

    const data = await res.json();
    setOutput(data.result);
    setLoading(false);
  };

  return (
    <div
      style={{
        background: 'repeating-linear-gradient(#fefefe, #fefefe 35px, #e0f7fa 36px)',
        minHeight: '100vh',
        fontFamily: '"Comic Sans MS", cursive, sans-serif',
        padding: '40px',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '30px' }}>
        📝 ScriptFix – Handwriting Note Generator
      </h1>

      <div style={{ maxWidth: '600px', margin: 'auto', textAlign: 'center' }}>
        {/* Image upload input */}
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{
            background: '#fff',
            padding: '10px',
            borderRadius: '8px',
            marginBottom: '20px',
            cursor: 'pointer',
            fontFamily: 'inherit',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        />

        {/* Show uploaded image preview */}
        {image && (
          <div style={{ marginBottom: '20px' }}>
            <img
              src={image}
              alt="Uploaded"
              style={{
                width: '100%',
                maxWidth: '300px',
                border: '4px dashed #9575cd',
                borderRadius: '12px',
                padding: '6px',
                backgroundColor: '#f3e5f5',
              }}
            />
          </div>
        )}

        {/* Convert Button */}
        <button
          onClick={handleConvert}
          style={{
            background: 'linear-gradient(to right, #7b1fa2, #ba68c8)',
            color: '#fff',
            border: 'none',
            padding: '12px 24px',
            fontSize: '16px',
            borderRadius: '10px',
            cursor: 'pointer',
            fontWeight: 'bold',
            marginBottom: '30px',
          }}
        >
          ✨ Convert to Notes
        </button>

        {/* Output Box */}
        <div
          style={{
            backgroundColor: '#fff8e1',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            textAlign: 'left',
            whiteSpace: 'pre-wrap',
            fontFamily: '"Segoe Script", cursive',
            color: '#4e342e',
          }}
        >
          {loading ? '🕒 Converting image...' : output}
        </div>
      </div>
    </div>
  );
}
