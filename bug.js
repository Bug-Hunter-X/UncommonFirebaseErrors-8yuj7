The following code snippet demonstrates an uncommon Firebase error related to improper data handling within a transaction:

```javascript
firebase.firestore().runTransaction(transaction => {
  return transaction.get(someDocRef).then(doc => {
    if (!doc.exists) {
      throw new Error('Document does not exist!');
    }
    const newCount = doc.data().count + 1;
    transaction.update(someDocRef, { count: newCount });
    return newCount;
  });
}).then(result => {
  console.log('Transaction successful:', result);
}).catch(error => {
  console.error('Transaction failed:', error);
});
```

This code attempts to increment a counter in Firestore using a transaction. However, it fails to handle a potential race condition. If two clients execute this code simultaneously, both might read the same old value of `count` before the update, resulting in an incorrect final count. This is because the `get` and `update` operations in a transaction are not atomic.

Another uncommon error involves incorrect usage of Firestore's security rules, which might lead to unexpected behavior or data loss.  Incorrectly configured rules might allow unauthorized access or deny legitimate operations.