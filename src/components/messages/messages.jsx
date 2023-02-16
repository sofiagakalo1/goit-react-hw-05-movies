import css from './messages.module.css';

export function noResultsMessage() {
  return (
    <div className={css.noResultsMessage_div}>
      <h3 className={css.noResultsMessage_h3}>There are no results :(</h3>
      <p className={css.noResultsMessage_p}>Try the other one :)</p>
    </div>
  );
}
export function noReviewsMessage() {
  return (
    <div className={css.noReviewsMessage_div}>
      <h3 className={css.noReviewsMessage_h3}>There are no reviews :(</h3>
    </div>
  );
}

export function noCastMessage() {
  return (
    <div className={css.noReviewsMessage_div}>
      <h3 className={css.noReviewsMessage_h3}>There is   no info about cast :(</h3>
    </div>
  );
}