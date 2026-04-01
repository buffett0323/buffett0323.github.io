import Image from 'next/image';

function Bft() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#fff',
      margin: 0,
      padding: 0,
    }}>
      <Image
        src="/bft.JPG"
        alt="bft"
        width={800}
        height={800}
        style={{ objectFit: 'contain', maxWidth: '100%', maxHeight: '100vh' }}
        priority
      />
    </div>
  );
}

Bft.noLayout = true;
export default Bft;
