import { Failure, Response, Success, WithError, WithReason } from './contact/Response';
import { sendMessage } from './contact/sendMessage';

function isErrorResponseWithReason(res: Response): res is Failure & WithReason {
  return !res.success && 'reason' in res;
}

function isErrorResponseWithError(res: Response): res is Failure & WithError {
  return !res.success && 'error' in res;
}

function isSuccess(res: Response): res is Success {
  return res.success;
}

export async function unionTypeUsage() {
  const res1 = await sendMessage({ type: 'landline', phone: '555-555-5555' }, { id: 'A' });
  if (res1.success) {
    console.log(res1.confirmation);
    console.log(res1.error);
    console.log(res1.reason);
  } else {
    console.log(res1.confirmation);
    console.log(res1.error);
    console.log(res1.reason);

    if ('error' in res1) {
      console.log(res1.confirmation);
      console.log(res1.error);
      console.log(res1.reason);
    } else if ('reason' in res1) {
      console.log(res1.confirmation);
      console.log(res1.error);
      console.log(res1.reason);
    }
  }

  const res2 = await sendMessage({ type: 'mobile', phone: '555-555-5555' }, { id: 'B' });
  if (isSuccess(res2)) {
    console.log(res2.confirmation);
    console.log(res2.error);
    console.log(res2.reason);
  } else if (isErrorResponseWithError(res2)) {
    console.log(res2.confirmation);
    console.log(res2.error);
    console.log(res2.reason);
  } else if (isErrorResponseWithReason(res2)) {
    console.log(res2.confirmation);
    console.log(res2.error);
    console.log(res2.reason);
  }

  const res3 = await sendMessage({ type: 'unknown' }, { id: 'C' });
}
