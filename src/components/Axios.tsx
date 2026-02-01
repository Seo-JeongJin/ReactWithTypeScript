import { useEffect, useState } from 'react';
import { axiosInstance } from '../api/axios';

interface Posts {
  id: number;
  title: string;
  views: number;
}
export default function Axios() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  useEffect(() => {
    const controller = new AbortController();
    const axiosPosts = async () => {
      setIsLoading(true);
      setError('');
      try {
        // axiosInstance 객체에 기본 도메인이 설정되어 있기 때문에 도메인은 빼버릴 수 있음
        const { data } = await axiosInstance.get('/posts', {
          signal: controller.signal,
        });
        setPosts(data);
      } catch (e) {
        if (e instanceof Error && e.name !== 'CanceledError')
          setError(e.message);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    };

    axiosPosts();

    return () => controller.abort();
  }, []);

  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <h3>Axios</h3>
      <ul>
        {isLoading ? (
          <p>Loading... </p>
        ) : (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </>
  );
}
