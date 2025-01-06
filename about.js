```javascript
//pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href="/about">
        <a>Go to About page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js
function About() {
  return (
    <div>
      <h1>This is the About page.</h1>
    </div>
  );
}

export default About;
```