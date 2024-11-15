import Link from 'next/link';

const Home = () => {
  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <h1>Welcome to My Website</h1>
      <p>Hi, I'm Buffettsss! Welcome to my portfolio.</p>
      <Link href="/about">About Me</Link>
    </div>
  );
};

export default Home;
