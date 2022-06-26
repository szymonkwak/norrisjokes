import { fromFetch } from 'rxjs/fetch';
import { switchMap, catchError } from 'rxjs';

export default function fetchUsingRxJS(url) {
  return fromFetch(url).pipe(
    switchMap((response) => {
      if (response.ok) {
        return response.json();
      } else {
        return [null];
      }
    }),
    catchError(() => {
      return [null];
    })
  );
}
