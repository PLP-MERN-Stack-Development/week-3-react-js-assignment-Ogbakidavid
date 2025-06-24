import { useState, useEffect } from 'react';
import Card from '../components/Card';
import { fetchPosts } from '../api/posts';

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then(setPosts)
      .catch(err => setError(err.message));
  }, []);

  const filtered = posts.filter(p => p.title.includes(query));

  return (
    <div>
      <input
        placeholder="Search posts..."
        value={query}
        onChange={e => setQuery(e.target.value)}
        className="mb-4 border p-2 w-full"
      />
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map(post => (
            <Card key={post.id} title={post.title}>
              <p>{post.body}</p>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
