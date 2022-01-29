import GUN from 'gun';

const db = GUN();

export type PostType = {
  text: string;
  author: string;
  date: number;
  id?: string;
}

export const createPost = async (post: PostType): Promise<void> => {
  return new Promise((resolve, reject) => {
    console.log('i go here', post);
    db.get('posts').set(post, ({ err }) => {
      if (err) {
        console.error(err);
        reject(err);
      }
        
      resolve();
    });
    resolve();
  });
};

export const loadPosts = async (): Promise<PostType[]> => {
  return new Promise((resolve) => {
    const postArray: PostType[] = [];
    db.get('posts').map().on((post, id) => {
      postArray.push({ id, ...post });
    });

    const sorted = postArray.sort((a, b) => {
      return b.date - a.date;
    });

    resolve(sorted);
  });
};