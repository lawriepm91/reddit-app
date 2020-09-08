import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { picsSelector, picSelector, commentsSelector } from 'selectors';

import { updatePics } from 'slices/pics';
import { updatePic } from 'slices/pic';
import { updateComments } from 'slices/comments';

import Api from 'api';


export function useTopPics() {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  const pics = useSelector(picsSelector);

  useEffect(() => {
    const fetch = async () => {
      try {
        const api = new Api();
        const data = await api.fetchAll('r/pics/top.json?t=all');
        dispatch(updatePics(data));
      } catch (e) {
        setError(e);
      }
      setIsLoading(false);
    }
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [isLoading, pics, error];
}

export function usePic() {
  let { picId } = useParams();
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
    }
    fetch();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [isLoading, pic, comments, error];
}
