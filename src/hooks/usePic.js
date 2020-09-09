import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { picSelector, commentsSelector } from 'selectors';

import { updatePic } from 'slices/pic';
import { updateComments } from 'slices/comments';

import Api from 'api';

export default function usePic() {
  const { picId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const pic = useSelector(picSelector);
  const comments = useSelector(commentsSelector);

  useEffect(() => {
    const fetch = async () => {
      try {
        const api = new Api();
        const [originalPic, picComments] = await api.fetchOne(`r/pics/comments/${picId}.json`);
        dispatch(updatePic(originalPic));
        dispatch(updateComments(picComments));
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    };
    fetch();
  }, []);

  return [isLoading, pic, comments, error];
}
